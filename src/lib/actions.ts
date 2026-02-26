/**
 * Scroll-reveal Svelte action — single system for all elements.
 *
 * Uses the Web Animations API (WAAPI) so the browser owns the animation
 * entirely. No CSS class swapping, no transition race conditions.
 *
 * - Elements already in the viewport animate in immediately on mount.
 * - Elements below the fold animate in when they enter the viewport.
 * - Works correctly after SvelteKit SSR hydration and View Transitions.
 */
export function reveal(node: HTMLElement, { delay = 0 }: { delay?: number } = {}) {
	// Hide immediately. WAAPI `fill: 'both'` keeps the element at opacity 0
	// during any delay period, then holds at opacity 1 when done.
	node.style.opacity = '0';

	function animate() {
		node.animate(
			[{ opacity: 0 }, { opacity: 1 }],
			{ duration: 500, delay, easing: 'ease', fill: 'both' }
		);
	}

	const rect = node.getBoundingClientRect();

	if (rect.top < window.innerHeight && rect.bottom > 0) {
		// Already in viewport — animate in directly via WAAPI.
		// WAAPI is async by nature so opacity:0 is painted before playback starts.
		animate();
		return { destroy() {} };
	}

	// Below the fold — observe and animate when scrolled into view.
	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					animate();
					observer.unobserve(node);
				}
			}
		},
		{ threshold: 0.08 }
	);

	// rAF defers observation by one frame, ensuring opacity:0 is committed
	// to the browser's style before the observer first checks the element.
	requestAnimationFrame(() => observer.observe(node));

	return { destroy() { observer.disconnect(); } };
}
