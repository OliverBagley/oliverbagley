<script lang="ts">
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import {
		servicesHero,
		servicesPillars,
		servicesDetails,
		servicesProcess,
		servicesEngagement,
		servicesCta
	} from '$lib/data/services';
	import EmailLink from '$lib/components/EmailLink.svelte';

	let mounted = false;

	onMount(() => {
		setTimeout(() => { mounted = true; }, 150);
	});

	function reveal(node: HTMLElement, options = { delay: 0 }) {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setTimeout(() => {
							node.style.opacity = '1';
							node.style.transform = 'translateY(0)';
						}, options.delay);
						observer.unobserve(node);
					}
				});
			},
			{ threshold: 0.1 }
		);

		node.style.opacity = '0';
		node.style.transform = 'translateY(30px)';
		node.style.transition = 'all 1s cubic-bezier(0.2, 0.65, 0.3, 0.9)';
		observer.observe(node);

		const rect = node.getBoundingClientRect();
		if (rect.top < window.innerHeight && rect.bottom > 0) {
			setTimeout(() => {
				node.style.opacity = '1';
				node.style.transform = 'translateY(0)';
			}, options.delay);
		}

		return { destroy() { observer.disconnect(); } };
	}
</script>

<svelte:head>
	<title>Services — Oliver Bagley</title>
	<meta name="description" content="Digital commerce services from Oliver Bagley — Adobe Commerce, Shopify, systems integration, ERP connectivity, and strategic consultancy for DTC and retail brands." />
</svelte:head>

<!-- Hero Section -->
<section class="hero-section relative pt-32 md:pt-40 pb-16 md:pb-24 px-6 overflow-hidden">
	<div class="absolute inset-0 z-0">
		<img src={servicesHero.backgroundImage} alt={servicesHero.backgroundAlt} class="w-full h-full object-cover" />
		<div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
	</div>
	<div class="max-w-7xl mx-auto relative z-10">
		<div class="max-w-4xl">
			<p class="text-sm font-semibold uppercase tracking-widest mb-4" style="color: var(--terracotta);">
				<a href="/" class="hover:opacity-80 transition-opacity">Home</a>
				<span class="mx-2">/</span>
				<span>Services</span>
			</p>
			{#if mounted}
				<h1 class="text-5xl lg:text-7xl heading-serif mb-6 text-white" in:fade={{ duration: 800, delay: 100 }}>{servicesHero.heading}</h1>
				<p class="text-xl lg:text-2xl text-gray-300 leading-relaxed" in:fade={{ duration: 800, delay: 300 }}>{servicesHero.subheading}</p>
			{:else}
				<h1 class="text-5xl lg:text-7xl heading-serif mb-6 text-white">{servicesHero.heading}</h1>
				<p class="text-xl lg:text-2xl text-gray-300 leading-relaxed">{servicesHero.subheading}</p>
			{/if}
		</div>

		<!-- Jump links -->
		<div class="flex flex-wrap gap-4 mt-12" use:reveal={{ delay: 500 }}>
			{#each [
				{ label: 'Platform Development', href: '#platform' },
				{ label: 'Integration & Automation', href: '#integrations' },
				{ label: 'Consultancy', href: '#consultancy' }
			] as link}
				<a href={link.href} class="text-sm font-semibold px-4 py-2 rounded-full border border-white/30 text-white hover:border-white hover:bg-white/10 transition-all">
					{link.label}
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- Service Pillars Overview -->
<section class="py-20 px-6 bg-white">
	<div class="max-w-7xl mx-auto">
		<div class="text-center mb-16" use:reveal>
			<p class="text-sm font-semibold uppercase tracking-widest mb-4" style="color: var(--terracotta);">{servicesPillars.eyebrow}</p>
			<h2 class="text-4xl lg:text-5xl heading-serif mb-4">{servicesPillars.heading}</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto">{servicesPillars.subheading}</p>
		</div>

		<div class="grid md:grid-cols-3 gap-8">
			{#each servicesPillars.pillars as pillar, i}
				<a href="#{['platform','integrations','consultancy'][i]}" class="group bg-cream p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all block" use:reveal={{ delay: (i + 1) * 100 }}>
					<div class="w-12 h-12 rounded-full flex items-center justify-center mb-6" style="background: linear-gradient(135deg, var(--terracotta) 0%, var(--amber) 100%);">
						{#if pillar.icon === 'cart'}
							<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
							</svg>
						{:else if pillar.icon === 'database'}
							<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/>
							</svg>
						{:else if pillar.icon === 'chart'}
							<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
							</svg>
						{/if}
					</div>
					<h3 class="text-2xl font-bold mb-3 heading-serif">{pillar.title}</h3>
					<p class="text-gray-600 mb-4 leading-relaxed">{pillar.description}</p>
					<ul class="space-y-1 text-sm text-gray-500">
						{#each pillar.bullets as bullet}
							<li class="flex items-center gap-2">
								<span style="color: var(--terracotta);">—</span>
								{bullet}
							</li>
						{/each}
					</ul>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- Platform Architecture & Development -->
<section id="platform" class="py-24 px-6 bg-cream">
	<div class="max-w-7xl mx-auto">
		<div class="max-w-4xl mb-16" use:reveal>
			<p class="text-sm font-semibold uppercase tracking-widest mb-4" style="color: var(--terracotta);">{servicesDetails.platform.eyebrow}</p>
			<h2 class="text-4xl lg:text-5xl heading-serif mb-6">{servicesDetails.platform.heading}</h2>
			<p class="text-xl text-gray-600 leading-relaxed">{servicesDetails.platform.subheading}</p>
		</div>

		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each servicesDetails.platform.items as item, i}
				<div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow" use:reveal={{ delay: (i % 3) * 80 }}>
					<h3 class="text-xl font-bold mb-3">{item.title}</h3>
					<p class="text-gray-600 leading-relaxed text-sm">{item.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Systems Integration & Automation -->
<section id="integrations" class="py-24 px-6" style="background: var(--charcoal);">
	<div class="max-w-7xl mx-auto">
		<div class="max-w-4xl mb-16" use:reveal>
			<p class="text-sm font-semibold uppercase tracking-widest mb-4" style="color: var(--terracotta);">{servicesDetails.integrations.eyebrow}</p>
			<h2 class="text-4xl lg:text-5xl heading-serif text-white mb-6">{servicesDetails.integrations.heading}</h2>
			<p class="text-xl text-gray-400 leading-relaxed">{servicesDetails.integrations.subheading}</p>
		</div>

		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each servicesDetails.integrations.items as item, i}
				<div class="glass-dark p-6 rounded-xl hover:bg-white/10 transition-colors" use:reveal={{ delay: (i % 3) * 80 }}>
					<h3 class="text-xl font-bold text-white mb-3">{item.title}</h3>
					<p class="text-gray-400 leading-relaxed text-sm">{item.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Consultancy & Advisory -->
<section id="consultancy" class="py-24 px-6 bg-white">
	<div class="max-w-7xl mx-auto">
		<div class="max-w-4xl mb-16" use:reveal>
			<p class="text-sm font-semibold uppercase tracking-widest mb-4" style="color: var(--terracotta);">{servicesDetails.consultancy.eyebrow}</p>
			<h2 class="text-4xl lg:text-5xl heading-serif mb-6">{servicesDetails.consultancy.heading}</h2>
			<p class="text-xl text-gray-600 leading-relaxed">{servicesDetails.consultancy.subheading}</p>
		</div>

		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each servicesDetails.consultancy.items as item, i}
				<div class="p-6 bg-cream rounded-xl hover:shadow-md transition-shadow" use:reveal={{ delay: (i % 3) * 80 }}>
					<h3 class="text-xl font-bold mb-3">{item.title}</h3>
					<p class="text-gray-600 leading-relaxed text-sm">{item.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Process & Engagement -->
<section class="py-20 px-6" style="background: var(--charcoal);">
	<div class="max-w-7xl mx-auto">
		<!-- Process -->
		<div class="max-w-4xl mx-auto mb-20" use:reveal>
			<div class="text-center mb-12">
				<p class="text-sm font-semibold uppercase tracking-widest mb-4" style="color: var(--terracotta);">{servicesProcess.eyebrow}</p>
				<h2 class="text-4xl heading-serif text-white">{servicesProcess.heading}</h2>
			</div>
			<div class="grid md:grid-cols-2 gap-8">
				{#each servicesProcess.steps as step}
					<div class="flex gap-4 items-start">
						<div class="text-3xl heading-serif text-white opacity-30 flex-shrink-0">{step.number}</div>
						<div>
							<h3 class="text-xl font-bold text-white mb-2">{step.title}</h3>
							<p class="text-gray-400">{step.description}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Engagement Options -->
		<div class="border-t border-white/10 pt-20" use:reveal>
			<div class="text-center mb-12">
				<p class="text-sm font-semibold uppercase tracking-widest mb-4" style="color: var(--terracotta);">{servicesEngagement.eyebrow}</p>
				<h2 class="text-4xl heading-serif text-white mb-4">{servicesEngagement.heading}</h2>
				<p class="text-xl text-gray-400 max-w-3xl mx-auto">{servicesEngagement.subheading}</p>
			</div>
			<div class="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
				{#each servicesEngagement.options as option, i}
					<div class="glass-dark p-8 rounded-xl hover:bg-white/10 transition-colors">
						<div class="text-4xl mb-4">{option.emoji}</div>
						<h3 class="text-2xl font-bold text-white mb-3">{option.title}</h3>
						<p class="text-gray-400 mb-4">{option.description}</p>
						<p class="text-sm font-semibold" style="color: var(--{i === 1 ? 'amber' : 'terracotta'});">{option.callout}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- CTA -->
<section class="py-32 px-6 bg-cream border-t border-gray-200">
	<div class="max-w-4xl mx-auto text-center" use:reveal>
		<h2 class="text-5xl heading-serif mb-8">{servicesCta.heading}</h2>
		<p class="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">{servicesCta.subheading}</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<EmailLink class="cta-button">
				<span>{servicesCta.primaryCta.label}</span>
			</EmailLink>
			<a href={servicesCta.secondaryCta.href} target="_blank" class="cta-button-outline">
				<span>{servicesCta.secondaryCta.label}</span>
			</a>
		</div>
	</div>
</section>
