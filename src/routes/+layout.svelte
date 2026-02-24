<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { slide, fade } from 'svelte/transition';
	import { navigating } from '$app/stores';
	import { onMount } from 'svelte';
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

<nav class="fixed top-0 left-0 right-0 z-50 bg-cream/90 nav-glass border-b border-black/5">
	<div class="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
		<a href="/" class="text-3xl font-bold heading-serif" on:click={closeMobileMenu}>OB</a>

		<!-- Desktop Navigation -->
		<div class="hidden md:flex gap-8 items-center uppercase">
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
									<a href={child.href} class="block px-4 py-2.5 text-sm font-medium text-charcoal hover:bg-cream transition-colors normal-case tracking-normal">
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
			<a href={siteNav.cta.href} class="cta-button py-2 px-6 text-sm title-uppercase">
				<span>{siteNav.cta.label}</span>
			</a>
		</div>

		<!-- Mobile Menu Button -->
		<button
			on:click={toggleMobileMenu}
			class="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-warm-gray/10 transition-colors"
			aria-label="Toggle menu"
		>
			{#if mobileMenuOpen}
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
				</svg>
			{:else}
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			{/if}
		</button>
	</div>

	<!-- Mobile Menu -->
	{#if mobileMenuOpen}
		<div class="md:hidden border-t border-warm-gray/10 bg-gray-50 shadow-lg" transition:slide={{ duration: 200 }}>
			<div class="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-2">
				{#each siteNav.links as link}
					{#if link.label === 'Services'}
						<button
							on:click={() => (servicesExpanded = !servicesExpanded)}
							class="nav-link text-base font-medium py-3 px-4 rounded-lg hover:bg-warm-gray/10 transition-colors flex items-center justify-between w-full text-left"
						>
							<span>{link.label}</span>
							<svg class="w-4 h-4 transition-transform duration-200 {servicesExpanded ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
							</svg>
						</button>
						{#if servicesExpanded}
							<div class="pl-4 flex flex-col gap-1" transition:slide={{ duration: 150 }}>
								{#each serviceNavLinks as child}
									<a
										href={child.href}
										class="nav-link text-sm font-medium py-2.5 px-4 rounded-lg hover:bg-warm-gray/10 transition-colors"
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
							class="nav-link text-base font-medium py-3 px-4 rounded-lg hover:bg-warm-gray/10 transition-colors"
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

{#key $page.url.pathname}
	<div in:fade={{ duration: 200, delay: 200 }} out:fade={{ duration: 150 }}>
		<slot />
	</div>
{/key}

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
