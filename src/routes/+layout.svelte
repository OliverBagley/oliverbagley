<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { slide } from 'svelte/transition';
	import { navigating } from '$app/stores';
	import { onMount } from 'svelte';
	import { onNavigate } from '$app/navigation';

	// View Transitions API — smooth cross-fade between pages without destroying
	// shared elements like the nav. Falls back gracefully in unsupported browsers.
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
	import { siteNav, siteFooter, serviceNavLinks } from '$lib/data/site';
	import EmailLink from '$lib/components/EmailLink.svelte';

	let mobileMenuOpen = false;
	let servicesExpanded = false;

	$: if ($navigating) {
		mobileMenuOpen = false;
		servicesExpanded = false;
	}

	onMount(() => {
		const unsubscribe = page.subscribe(() => {
			window.scrollTo({ top: 0, behavior: 'instant' });
		});
		return () => unsubscribe();
	});

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
		servicesExpanded = false;
	}
</script>

<svelte:head>
	<!-- Canonical URL — prevents duplicate content issues -->
	<link rel="canonical" href="https://oliverbagley.com{$page.url.pathname}" />
	<!-- Default Open Graph (individual pages override title/description) -->
	<meta property="og:site_name" content="Oliver Bagley" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://oliverbagley.com{$page.url.pathname}" />
	<meta property="og:image" content="https://oliverbagley.com/media/images/oliver.jpg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://oliverbagley.com/media/images/oliver.jpg" />

	<!-- JSON-LD: Person schema — helps Google associate all pages with Oliver Bagley -->
	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "Person",
		"name": "Oliver Bagley",
		"jobTitle": "Digital Commerce Systems Lead",
		"url": "https://oliverbagley.com",
		"image": "https://oliverbagley.com/media/images/oliver.jpg",
		"sameAs": ["https://www.linkedin.com/in/olivergbagley/"]
	})}<\/script>`}
</svelte:head>

<!-- Floating pill nav — two separate glass pills on desktop, one connected pill on mobile -->
<nav class="fixed top-0 left-0 right-0 z-50 pointer-events-none">
	<div class="max-w-7xl mx-auto px-5 pt-4 flex justify-between items-center">

		<!-- Desktop-only: Logo pill — square 1:1 -->
		<a
			href="/"
			class="hidden md:flex nav-pill pointer-events-auto w-14 h-14 items-center justify-center rounded-2xl text-3xl font-bold heading-serif leading-none hover:opacity-80 transition-opacity"
			on:click={closeMobileMenu}
		>OB</a>

		<!-- Mobile-only: single connected pill spanning logo + hamburger -->
		<div class="md:hidden nav-pill pointer-events-auto flex w-full items-center justify-between px-4 h-14 rounded-2xl">
			<a
				href="/"
				class="text-3xl font-bold heading-serif leading-none hover:opacity-80 transition-opacity"
				on:click={closeMobileMenu}
			>OB</a>
			<button
				on:click={toggleMobileMenu}
				class="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-black/5 transition-colors"
				aria-label="Toggle menu"
			>
				{#if mobileMenuOpen}
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				{:else}
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				{/if}
			</button>
		</div>

		<!-- Desktop Navigation pill -->
		<div class="hidden md:flex nav-pill pointer-events-auto gap-5 items-center uppercase pl-5 pr-2 py-2.5 rounded-2xl">
			{#each siteNav.links as link}
				{#if link.label === 'Services'}
					<div class="relative group/services">
						<a href={link.href} class="nav-link text-sm font-medium flex items-center gap-1">
							{link.label}
							<svg class="w-3 h-3 transition-transform duration-200 group-hover/services:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
							</svg>
						</a>
						<!-- Dropdown -->
						<div class="absolute top-full left-1/2 -translate-x-1/2 invisible opacity-0 pointer-events-none group-hover/services:visible group-hover/services:opacity-100 group-hover/services:pointer-events-auto transition-all duration-150 z-[60] pt-2">
							<div class="bg-white rounded-xl shadow-xl border border-gray-100 py-1 w-56">
								{#each serviceNavLinks as child}
									<a href={child.href} class="block px-4 py-2.5 text-sm font-medium hover:bg-cream transition-colors normal-case tracking-normal" style="color: var(--charcoal);">
										{child.label}
									</a>
								{/each}
							</div>
						</div>
					</div>
				{:else}
					<a href={link.href} class="nav-link text-sm font-medium">{link.label}</a>
				{/if}
			{/each}
			<a href={siteNav.cta.href} class="cta-button text-xs uppercase tracking-widest" style="padding: 0.7rem 1.1rem;">
				<span>{siteNav.cta.label}</span>
			</a>
		</div>
	</div>

	<!-- Mobile dropdown — floating pill below the header row -->
	{#if mobileMenuOpen}
		<div
			class="md:hidden mx-5 mt-2 nav-pill rounded-2xl pointer-events-auto"
			transition:slide={{ duration: 200 }}
		>
			<div class="px-5 py-4 flex flex-col gap-1">
				{#each siteNav.links as link}
					{#if link.label === 'Services'}
						<button
							on:click={() => (servicesExpanded = !servicesExpanded)}
							class="nav-link text-base font-medium py-2.5 px-3 rounded-lg hover:bg-black/5 transition-colors flex items-center justify-between w-full text-left uppercase tracking-wide"
						>
							<span>{link.label}</span>
							<svg class="w-4 h-4 transition-transform duration-200 {servicesExpanded ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
							</svg>
						</button>
						{#if servicesExpanded}
							<div class="pl-3 flex flex-col gap-1" transition:slide={{ duration: 150 }}>
								{#each serviceNavLinks as child}
									<a
										href={child.href}
										class="nav-link text-sm font-medium py-2 px-3 rounded-lg hover:bg-black/5 transition-colors"
										on:click={closeMobileMenu}
									>
										{child.label}
									</a>
								{/each}
							</div>
						{/if}
					{:else}
						<a
							href={link.href}
							class="nav-link text-base font-medium py-2.5 px-3 rounded-lg hover:bg-black/5 transition-colors uppercase tracking-wide"
							on:click={closeMobileMenu}
						>
							{link.label}
						</a>
					{/if}
				{/each}
				<a href={siteNav.cta.href} class="cta-button py-3 text-center mt-2" on:click={closeMobileMenu}>
					<span>{siteNav.cta.label}</span>
				</a>
			</div>
		</div>
	{/if}
</nav>

<slot />

<footer class="py-12 px-6 border-t border-gray-200 bg-cream font-code">
	<div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
		<div class="flex flex-col md:flex-row items-center gap-4 md:gap-6">
			<p class="text-gray-500">{siteFooter.copyright}</p>
			<div class="h-4 w-px bg-gray-300 hidden md:block"></div>
			<img
				src={siteFooter.shopifyPartnerLogo}
				alt="Shopify Partner"
				class="h-6 opacity-60 hover:opacity-100 transition-opacity"
			/>
		</div>
		<div class="flex gap-6">
			{#each siteFooter.socialLinks as link}
				<a href={link.href} target={link.external ? '_blank' : undefined} class="text-gray-500 hover:text-charcoal transition-colors">
					{link.label}
				</a>
			{/each}
			<EmailLink class="text-gray-500 hover:text-charcoal transition-colors">Email</EmailLink>
			{#each siteFooter.legalLinks as link}
				<a href={link.href} class="text-gray-500 hover:text-charcoal transition-colors">
					{link.label}
				</a>
			{/each}
		</div>
	</div>
</footer>
