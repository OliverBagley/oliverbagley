<script lang="ts">
	import EmailLink from '$lib/components/EmailLink.svelte';
</script>

<svelte:head>
	<title>eCommerce Development — Oliver Bagley</title>
	<meta name="description" content="End-to-end eCommerce development on Shopify and Shopify Plus — from custom storefronts to complex migrations and performance optimisations." />
</svelte:head>

<!-- Hero -->
<section class="hero-section relative pt-32 md:pt-40 pb-16 md:pb-24 px-6 overflow-hidden">
	<div class="absolute inset-0 z-0">
		<div class="absolute inset-0" style="background: linear-gradient(135deg, var(--charcoal) 0%, #2a1f1a 100%);"></div>
	</div>
	<div class="max-w-7xl mx-auto relative z-10">
		<div class="max-w-3xl">
			<p class="text-sm font-semibold uppercase tracking-widest mb-4" style="color: var(--terracotta);">
				<a href="/" class="hover:opacity-80 transition-opacity">Home</a>
				<span class="mx-2">/</span>
				<a href="/services" class="hover:opacity-80 transition-opacity">Services</a>
				<span class="mx-2">/</span>
				<span>eCommerce Development</span>
			</p>
			<h1 class="text-5xl lg:text-7xl font-bold text-white mb-6 heading-serif">eCommerce Development</h1>
			<p class="text-xl lg:text-2xl text-gray-300 mb-8">Custom Shopify and Shopify Plus builds that convert browsers into buyers — built for performance, scale, and growth.</p>
			<EmailLink class="cta-button py-3 px-8 inline-flex">
				<span>Start a Project</span>
			</EmailLink>
		</div>
	</div>
</section>

<!-- What I Do -->
<section class="py-20 px-6 bg-white">
	<div class="max-w-4xl mx-auto">
		<p class="text-sm font-semibold uppercase tracking-widest mb-4" style="color: var(--terracotta);">What I deliver</p>
		<h2 class="text-4xl lg:text-5xl heading-serif mb-6">From concept to conversion</h2>
		<p class="text-xl text-gray-600 leading-relaxed mb-16">Whether you're launching a new store, migrating from another platform, or scaling an existing Shopify presence, I handle the full development lifecycle — strategy, build, and launch.</p>

		<div class="grid md:grid-cols-2 gap-8">
			{#each [
				{ title: 'Custom Theme Development', description: 'Bespoke Shopify themes built in Liquid and modern JavaScript — pixel-perfect, fast, and conversion-focused.' },
				{ title: 'Shopify Plus Builds', description: 'Enterprise-grade stores with custom checkout, B2B functionality, multi-store setups, and advanced automation via Shopify Flow.' },
				{ title: 'Platform Migrations', description: 'Seamless migrations from WooCommerce, Magento, BigCommerce, or custom platforms — with full data integrity and zero downtime.' },
				{ title: 'Performance Optimisation', description: 'Core Web Vitals improvements, image pipeline optimisation, lazy loading, and Lighthouse score enhancements that lift conversion rates.' },
				{ title: 'Headless & Hydrogen', description: 'Composable storefronts using Shopify Hydrogen and Remix for teams that need maximum flexibility and front-end control.' },
				{ title: 'Ongoing Maintenance', description: 'Retainer-based support for feature development, A/B testing, bug fixes, and platform updates as your business evolves.' }
			] as item}
				<div class="p-6 bg-cream rounded-xl">
					<h3 class="text-xl font-bold mb-2">{item.title}</h3>
					<p class="text-gray-600">{item.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Tech Stack -->
<section class="py-20 px-6" style="background: var(--charcoal);">
	<div class="max-w-4xl mx-auto text-center">
		<p class="text-sm font-semibold uppercase tracking-widest mb-4" style="color: var(--terracotta);">Tools & platforms</p>
		<h2 class="text-4xl heading-serif text-white mb-12">What I build with</h2>
		<div class="flex flex-wrap gap-3 justify-center">
			{#each ['Shopify', 'Shopify Plus', 'Liquid', 'Hydrogen', 'Remix', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Klaviyo', 'Recharge', 'Judge.me', 'Gorgias'] as tag}
				<span class="skill-tag">{tag}</span>
			{/each}
		</div>
	</div>
</section>

<!-- CTA -->
<section class="py-24 px-6 bg-cream border-t border-gray-200">
	<div class="max-w-3xl mx-auto text-center">
		<h2 class="text-4xl lg:text-5xl heading-serif mb-6">Ready to build something great?</h2>
		<p class="text-xl text-gray-600 mb-10">Tell me about your project and we'll figure out the best path forward together.</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<EmailLink class="cta-button py-3 px-8">
				<span>Get in Touch</span>
			</EmailLink>
			<a href="/work" class="cta-button border-2 border-charcoal bg-transparent text-charcoal hover:bg-charcoal hover:text-white py-3 px-8">
				<span>See My Work</span>
			</a>
		</div>
	</div>
</section>
