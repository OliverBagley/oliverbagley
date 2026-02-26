import type { LayoutServerLoad } from './$types';

// ---------------------------------------------------------------------------
// Root layout server load
// ---------------------------------------------------------------------------
// Runs on every server-side request. Use this for:
//   · Setting HTML-level cache-control headers (complements static/_headers)
//   · Passing request-level data (e.g. flags, feature toggles) to all layouts
// ---------------------------------------------------------------------------
export const load: LayoutServerLoad = async ({ setHeaders, url }) => {
	// Cache HTML documents for 10 minutes; allow CDN to reuse for 1 hour.
	// Static assets get longer TTLs via static/_headers.
	setHeaders({
		'Cache-Control': 'public, max-age=600, s-maxage=3600, stale-while-revalidate=86400'
	});

	return {
		// Expose the canonical pathname so layouts/pages can use it
		// without importing $app/stores (useful in server-side contexts).
		pathname: url.pathname
	};
};
