<script lang="ts">
	let className = '';
	export { className as class };

	/** Optional inline style forwarded to the <a> element */
	export let style = '';

	/** Pass showAddress to render the email address itself as the link text */
	export let showAddress = false;

	// Split to prevent assembly in SSR — bots crawl HTML, not client-side JS
	const u = 'iam';
	const d = 'oliverbagley.com';

	let toastEl: HTMLElement | null = null;
	let toastTimer: ReturnType<typeof setTimeout>;

	// Everything is handled inside the action using native DOM APIs.
	// This completely bypasses Svelte 5's event system and reactivity —
	// the safest approach given legacy-mode quirks with on:click + use: interplay.
	// Actions are NEVER called during SSR, so the email address never leaks into
	// server-rendered HTML (bot protection maintained).
	function emailSetup(node: HTMLAnchorElement) {
		const addr = `${u}@${d}`;
		node.href = `mailto:${addr}`;
		if (showAddress) {
			node.textContent = addr;
		}

		function handleClick(e: MouseEvent) {
			e.preventDefault();
			showEmailToast(addr);
		}

		node.addEventListener('click', handleClick);

		return {
			destroy() {
				node.removeEventListener('click', handleClick);
				// Don't remove the toast here — it lives on document.body and manages
				// its own lifecycle via the auto-dismiss timer. Removing it in destroy()
				// causes it to vanish immediately if the {#key} block re-renders on click.
			}
		};
	}

	function showEmailToast(addr: string) {
		document.querySelector('.ob-email-toast')?.remove();
		clearTimeout(toastTimer);

		toastEl = document.createElement('div');
		toastEl.className = 'ob-email-toast';

		const icon = document.createElement('span');
		icon.className = 'ob-email-toast__icon';
		icon.textContent = '✉️';

		const addrSpan = document.createElement('span');
		addrSpan.className = 'ob-email-toast__addr';
		addrSpan.textContent = addr;

		// Button group
		const actions = document.createElement('div');
		actions.className = 'ob-email-toast__actions';

		const copyBtn = document.createElement('button');
		copyBtn.className = 'ob-email-toast__copy';
		copyBtn.textContent = 'Copy';
		copyBtn.addEventListener('click', async (e) => {
			e.preventDefault();
			try {
				await navigator.clipboard.writeText(addr);
				copyBtn.textContent = 'Copied!';
			} catch {
				// clipboard unavailable — address is visible to copy manually
			}
		});

		const openMailClientBtn = document.createElement('a');
		openMailClientBtn.className = 'ob-email-toast__copy';
		openMailClientBtn.textContent = 'Mail Client';
		openMailClientBtn.href = `mailto:${addr}`;
		openMailClientBtn.target = '_blank';

		actions.appendChild(copyBtn);
		actions.appendChild(openMailClientBtn);

		toastEl.appendChild(icon);
		toastEl.appendChild(addrSpan);
		toastEl.appendChild(actions);
		document.body.appendChild(toastEl);

		requestAnimationFrame(() => toastEl?.classList.add('ob-email-toast--visible'));

		function dismiss() {
			if (!toastEl) return;
			clearTimeout(toastTimer);
			window.removeEventListener('scroll', handleScroll, { capture: true });
			toastEl.classList.remove('ob-email-toast--visible');
			toastEl.addEventListener('transitionend', () => toastEl?.remove(), { once: true });
		}

		function startDismissTimer() {
			clearTimeout(toastTimer);
			toastTimer = setTimeout(dismiss, 4000);
		}

		// Scroll-up detection — dismiss if user scrolls up ≥20% of viewport from position at open
		const scrollThreshold = window.innerHeight * 0.20;
		const openedAtScrollY = window.scrollY;

		function handleScroll() {
			const delta = openedAtScrollY - window.scrollY; // positive = scrolled up from open position
			if (delta >= scrollThreshold) {
				dismiss();
			}
		}

		window.addEventListener('scroll', handleScroll, { passive: true, capture: true });

		toastEl.addEventListener('mouseenter', () => clearTimeout(toastTimer));
		toastEl.addEventListener('mouseleave', () => startDismissTimer());

		startDismissTimer();
	}
</script>

<!-- svelte-ignore a11y_missing_attribute -->
<a use:emailSetup href="#" class={className} style={style || undefined}>
	{#if showAddress}
		Get in Touch
	{:else}
		<slot />
	{/if}
</a>
