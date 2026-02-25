/**
 * Scroll-reveal Svelte action.
 *
 * Uses CSS classes only — never touches inline opacity/transform,
 * so SSR-rendered content is always visible before JS runs.
 *
 * Elements already in the viewport on mount are left untouched (no animation).
 * Elements below the fold get the `.reveal-hidden` class, then `.reveal-shown`
 * when they scroll into view.
 */
export function reveal(node: HTMLElement, { delay = 0 }: { delay?: number } = {}) {
	// If element is already in the viewport, do nothing — never hide visible content
	const rect = node.getBoundingClientRect();
	if (rect.top < window.innerHeight && rect.bottom > 0) {
		return { destroy() {} };
	}

	node.classList.add('reveal-hidden');

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					node.style.transitionDelay = delay ? `${delay}ms` : '';
					node.classList.remove('reveal-hidden');
					node.classList.add('reveal-shown');
					observer.unobserve(node);
				}
			});
		},
		{
			threshold: 0.05,
			rootMargin: '0px 0px -60px 0px'
		}
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
