<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { slide, fade } from 'svelte/transition';
	import { navigating } from '$app/stores';
	import { onMount } from 'svelte';
	
	let mobileMenuOpen = false;
	
	// Scroll to top on navigation
	$: if ($navigating) {
		mobileMenuOpen = false;
	}
	
	onMount(() => {
		const unsubscribe = page.subscribe(() => {
			window.scrollTo({ top: 0, behavior: 'instant' });
		});
		return unsubscribe;
	});
	
	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
	
	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
</script>

<nav class="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-warm-gray/10">
	<div class="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
		<a href="/" class="text-2xl font-bold heading-serif" on:click={closeMobileMenu}>OB</a>
		
		<!-- Desktop Navigation -->
		<div class="hidden md:flex gap-8 items-center">
			<a href="/#work" class="nav-link text-sm font-medium">Work</a>
			<a href="/about" class="nav-link text-sm font-medium">About</a>
			<a href="/services" class="nav-link text-sm font-medium">Services</a>
			<a href="/#contact" class="cta-button py-2 px-6 text-sm"><span>Let's Talk</span></a>
		</div>
		
		<!-- Mobile Menu Button -->
		<button 
			on:click={toggleMobileMenu}
			class="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-warm-gray/10 transition-colors"
			aria-label="Toggle menu"
		>
			{#if mobileMenuOpen}
				<!-- Close Icon -->
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
				</svg>
			{:else}
				<!-- Hamburger Icon -->
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
				</svg>
			{/if}
		</button>
	</div>
	
	<!-- Mobile Menu -->
	{#if mobileMenuOpen}
		<div class="md:hidden border-t border-warm-gray/10 bg-gray-50 shadow-lg" transition:slide={{ duration: 200 }}>
			<div class="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-2">
				<a 
					href="/#work" 
					class="nav-link text-base font-medium py-3 px-4 rounded-lg hover:bg-warm-gray/10 transition-colors"
					on:click={closeMobileMenu}
				>
					Work
				</a>
				<a 
					href="/about" 
					class="nav-link text-base font-medium py-3 px-4 rounded-lg hover:bg-warm-gray/10 transition-colors"
					on:click={closeMobileMenu}
				>
					About
				</a>
				<a 
					href="/services" 
					class="nav-link text-base font-medium py-3 px-4 rounded-lg hover:bg-warm-gray/10 transition-colors"
					on:click={closeMobileMenu}
				>
					Services
				</a>
				<a 
					href="/#contact" 
					class="cta-button py-3 text-center mt-2"
					on:click={closeMobileMenu}
				>
					<span>Let's Talk</span>
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

<footer class="py-12 px-6 border-t border-gray-200 bg-cream">
	<div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
		<div class="flex flex-col md:flex-row items-center gap-4 md:gap-6">
			<p class="text-gray-600 text-sm">© 2026 Oliver Bagley. All rights reserved.</p>
			<div class="h-4 w-px bg-gray-300 hidden md:block"></div>
			<img src="/media/shopify/ShopifyPlus_Secondary.png" alt="Shopify Partner" class="h-6 opacity-60 hover:opacity-100 transition-opacity">
		</div>
		<div class="flex gap-6">
			<a href="https://www.linkedin.com/in/olivergbagley/" target="_blank" class="text-gray-600 hover:text-charcoal transition-colors">LinkedIn</a>
			<a href="mailto:hello@oliverbagley.com" class="text-gray-600 hover:text-charcoal transition-colors">Email</a>
			<a href="/privacy" class="text-gray-600 hover:text-charcoal transition-colors">Privacy</a>
			<a href="/terms" class="text-gray-600 hover:text-charcoal transition-colors">Terms</a>
		</div>
	</div>
</footer>
