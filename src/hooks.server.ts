import type { Handle, HandleServerError } from '@sveltejs/kit';

// ---------------------------------------------------------------------------
// Security headers
// ---------------------------------------------------------------------------
// These mirror the static/_headers file so they apply in dev mode and for
// any runtime (non-static) routes, regardless of deployment target.
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// Content Security Policy
// ---------------------------------------------------------------------------
// Covers GTM (googletagmanager.com), Google Analytics (GA4), Google Fonts,
// and CookieChimp. Inline scripts/styles are allowed via 'unsafe-inline'
// because GTM injects inline script tags — this is the standard GTM tradeoff.
// ---------------------------------------------------------------------------
const csp = [
	"default-src 'none'",
	// Scripts: self + GTM + GA + CookieChimp
	"script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://ssl.google-analytics.com https://cookiechimp.com",
	// Styles: self + Google Fonts CSS + inline (Tailwind/Svelte)
	"style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
	// Fonts: self + Google Fonts files
	"font-src 'self' https://fonts.gstatic.com",
	// Images: self + data URIs + any https (covers Unsplash, OG images, GA beacon)
	"img-src 'self' data: https: blob:",
	// GTM noscript iframe
	"frame-src https://www.googletagmanager.com",
	// XHR/fetch: self + GA4 endpoints + CookieChimp
	"connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://region1.google-analytics.com https://region1.analytics.google.com https://cookiechimp.com",
	// Block plugins (Flash etc.)
	"object-src 'none'",
	// Block <base> tag hijacking
	"base-uri 'self'",
	// Only allow forms to post to same origin
	"form-action 'self'",
	// Modern replacement for X-Frame-Options
	"frame-ancestors 'self'",
	// Upgrade any stray http:// requests
	'upgrade-insecure-requests'
].join('; ');

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);

	// Content Security Policy
	response.headers.set('Content-Security-Policy', csp);
	// Prevent framing (clickjacking) — belt-and-suspenders with frame-ancestors CSP
	response.headers.set('X-Frame-Options', 'SAMEORIGIN');
	// Prevent MIME-type sniffing
	response.headers.set('X-Content-Type-Options', 'nosniff');
	// Limit referrer info sent to third parties
	response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
	// Disable browser features that aren't needed
	response.headers.set(
		'Permissions-Policy',
		'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()'
	);

	// HSTS in production only — 1 year, include subdomains
	if (event.url.hostname !== 'localhost' && event.url.hostname !== '127.0.0.1') {
		response.headers.set(
			'Strict-Transport-Security',
			'max-age=31536000; includeSubDomains; preload'
		);
	}

	return response;
};

// ---------------------------------------------------------------------------
// Error logging
// ---------------------------------------------------------------------------
// handleServerError fires when an unexpected error is thrown during a server
// request. Return a safe object; never expose internal details to the client.
// ---------------------------------------------------------------------------
export const handleError: HandleServerError = ({ error, event, status }) => {
	// Log to your observability platform here (e.g. Sentry, Logtail).
	if (status !== 404) {
		console.error(`[${status}] ${event.url.pathname}`, error);
	}

	return {
		message: status === 404 ? 'Page not found.' : 'An unexpected error occurred.',
		status
	};
};
