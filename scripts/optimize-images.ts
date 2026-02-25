#!/usr/bin/env bun
/**
 * Image optimisation script — runs before `vite build`.
 *
 * For every JPG / PNG found under static/:
 *   • Re-encodes in-place if the result is smaller (mozjpeg / oxipng-style).
 *   • Writes a .webp sidecar alongside the original (skipped if one already exists).
 *
 * Safe to re-run — already-optimal files are left untouched and existing .webp
 * sidecars are never overwritten.
 */

import { readdir, stat, writeFile } from "fs/promises";
import { join, extname, relative } from "path";
import sharp from "sharp";

// ─── Config ──────────────────────────────────────────────────────────────────

const STATIC_DIR = join(import.meta.dir, "../static");

const JPEG_QUALITY = 82; // mozjpeg-compatible progressive JPEG
const PNG_COMPRESSION = 9; // zlib level 0-9
const PNG_QUALITY = 80; // palette quantisation quality
const WEBP_QUALITY = 82;

const SKIP_DIRS = new Set(["_headers", "_redirects"]); // non-image static assets

// ─── Helpers ─────────────────────────────────────────────────────────────────

async function collectImages(dir: string): Promise<string[]> {
  const results: string[] = [];

  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return results;
  }

  for (const entry of entries) {
    if (entry.name.startsWith(".") || SKIP_DIRS.has(entry.name)) continue;

    const fullPath = join(dir, entry.name);

    if (entry.isDirectory()) {
      results.push(...(await collectImages(fullPath)));
    } else {
      const ext = extname(entry.name).toLowerCase();
      if (ext === ".jpg" || ext === ".jpeg" || ext === ".png") {
        results.push(fullPath);
      }
    }
  }

  return results;
}

function formatBytes(bytes: number): string {
  return bytes >= 1024
    ? `${(bytes / 1024).toFixed(1)} KB`
    : `${bytes} B`;
}

// ─── Core ─────────────────────────────────────────────────────────────────────

async function optimise(filePath: string): Promise<void> {
  const ext = extname(filePath).toLowerCase();
  const rel = relative(STATIC_DIR, filePath);
  const originalSize = (await stat(filePath)).size;

  // 1. Compress original in-place
  let pipeline = sharp(filePath);

  if (ext === ".jpg" || ext === ".jpeg") {
    pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true, progressive: true });
  } else {
    pipeline = pipeline.png({ compressionLevel: PNG_COMPRESSION, quality: PNG_QUALITY });
  }

  const compressed = await pipeline.toBuffer();

  if (compressed.byteLength < originalSize) {
    await writeFile(filePath, compressed);
    const saved = originalSize - compressed.byteLength;
    const pct = ((saved / originalSize) * 100).toFixed(1);
    console.log(`  ✓  ${rel} — ${formatBytes(saved)} saved (${pct}%)`);
  } else {
    console.log(`  –  ${rel} — already optimal`);
  }

  // 2. Generate .webp sidecar (skip if already exists)
  const webpPath = filePath.replace(/\.(jpe?g|png)$/i, ".webp");
  try {
    await stat(webpPath);
    // exists — skip
  } catch {
    const webpBuf = await sharp(filePath).webp({ quality: WEBP_QUALITY }).toBuffer();
    await writeFile(webpPath, webpBuf);
    console.log(`     + webp → ${relative(STATIC_DIR, webpPath)} (${formatBytes(webpBuf.byteLength)})`);
  }
}

// ─── Entry ────────────────────────────────────────────────────────────────────

async function main() {
  console.log("\n🖼   Image optimisation\n");

  const images = await collectImages(STATIC_DIR);

  if (images.length === 0) {
    console.log("  No JPG / PNG images found — nothing to do.\n");
    return;
  }

  // Process concurrently (sharp handles its own thread pool)
  await Promise.all(images.map(optimise));

  console.log(`\n  ✅  Done — ${images.length} image(s) processed.\n`);
}

main().catch((err) => {
  console.error("Image optimisation failed:", err);
  process.exit(1);
});
