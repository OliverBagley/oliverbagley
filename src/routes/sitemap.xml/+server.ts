import type { RequestHandler } from './$types';

// Prerender so Cloudflare Pages serves it as a static asset at build time.
export const prerender = true;

const SITE = 'https://oliverbagley.com';

interface UrlEntry {
	path: string;
	priority: string;
	changefreq: string;
	lastmod?: string;
}

// ─── Add new routes / blog posts here ────────────────────────────────────────
const urls: UrlEntry[] = [
	{ path: '/',       priority: '1.0', changefreq: 'weekly',  lastmod: '2026-02-25' },
	{ path: '/about',  priority: '0.8', changefreq: 'monthly', lastmod: '2026-02-25' },
	{ path: '/work',   priority: '0.9', changefreq: 'monthly', lastmod: '2026-02-25' },
	{ path: '/services',                      priority: '0.9', changefreq: 'monthly', lastmod: '2026-02-25' },
	{ path: '/services/ecommerce-development', priority: '0.8', changefreq: 'monthly', lastmod: '2026-02-25' },
	{ path: '/services/integrations-systems',  priority: '0.8', changefreq: 'monthly', lastmod: '2026-02-25' },
	{ path: '/services/consultancy',           priority: '0.8', changefreq: 'monthly', lastmod: '2026-02-25' },
	{ path: '/blog',   priority: '0.8', changefreq: 'weekly',  lastmod: '2026-02-25' },
	{
		path: '/blog/posts/why-your-ecommerce-stack-has-a-glue-problem',
		priority: '0.7',
		changefreq: 'yearly',
		lastmod: '2026-02-01'
	}
];

function buildSitemap(entries: UrlEntry[]): string {
	const items = entries
		.map(({ path, priority, changefreq, lastmod }) => {
			const lastmodTag = lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : '';
			return `  <url>
    <loc>${SITE}${path}</loc>${lastmodTag}
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
		})
		.join('\n');

	return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items}
</urlset>`;
}

export const GET: RequestHandler = () => {
	return new Response(buildSitemap(urls), {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'public, max-age=3600, s-maxage=86400'
		}
	});
};
