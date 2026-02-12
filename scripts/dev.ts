import { extname, join, normalize } from "path";

const projectRoot = process.cwd();

const preferredPortRaw = Bun.env.PORT ?? "3000";
const preferredPort = Number.parseInt(preferredPortRaw, 10);
if (!Number.isFinite(preferredPort) || preferredPort <= 0) {
  throw new Error(`Invalid PORT: ${preferredPortRaw}`);
}

const tailwind = Bun.spawn(
  [
    "bunx",
    "tailwindcss",
    "-i",
    "./src/input.css",
    "-o",
    "./css/main.css",
    "--watch",
  ],
  {
    cwd: projectRoot,
    env: {
      ...Bun.env,
      BROWSERSLIST_IGNORE_OLD_DATA: "1",
    },
    stdin: "inherit",
    stdout: "inherit",
    stderr: "inherit",
  },
);

function shutdown(signal: string) {
  try {
    tailwind.kill(signal);
  } catch {
    // ignore
  }
  process.exit(0);
}

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));

const mimeTypes: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
};

function safeResolvePath(urlPathname: string): string | null {
  const decoded = decodeURIComponent(urlPathname);
  if (decoded.includes("\0")) return null;

  const withoutLeadingSlash = decoded.replace(/^\/+/, "");
  const normalized = normalize(withoutLeadingSlash);
  if (normalized.startsWith("..") || normalized.includes("../")) return null;

  const resolved = join(projectRoot, normalized);
  if (!resolved.startsWith(projectRoot)) return null;
  return resolved;
}

let serverPort = preferredPort;
for (let attempt = 0; attempt < 10; attempt++) {
  try {
    Bun.serve({
      port: serverPort,
      async fetch(req) {
    const url = new URL(req.url);
    let pathname = url.pathname;
    if (pathname === "/") pathname = "/index.html";

    const filePath = safeResolvePath(pathname);
    if (!filePath) {
      return new Response("Bad Request", { status: 400 });
    }

    const file = Bun.file(filePath);
    if (!(await file.exists())) {
      return new Response("Not Found", { status: 404 });
    }

    const ext = extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] ?? "application/octet-stream";

    return new Response(file, {
      headers: {
        "content-type": contentType,
        "cache-control": "no-store",
      },
    });
      },
    });
    break;
  } catch (err: any) {
    if (err?.code === "EADDRINUSE") {
      serverPort += 1;
      continue;
    }
    throw err;
  }
}

// eslint-disable-next-line no-console
console.log(`Dev server running at http://localhost:${serverPort}`);
