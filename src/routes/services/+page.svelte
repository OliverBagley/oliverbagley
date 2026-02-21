<script lang="ts">
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import {
		servicesHero,
		servicesPillars,
		servicesApproach,
		servicesTech,
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
	<meta name="description" content="Digital commerce strategy, eCommerce development, and product design services for growing brands.">
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
	</div>
</section>

<!-- Core Services -->
<section class="py-20 px-6 bg-white">
	<div class="max-w-7xl mx-auto">
		<div class="text-center mb-16" use:reveal>
			<p class="text-sm font-semibold uppercase tracking-widest mb-4" style="color: var(--terracotta);">{servicesPillars.eyebrow}</p>
			<h2 class="text-4xl lg:text-5xl heading-serif mb-4">{servicesPillars.heading}</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto">{servicesPillars.subheading}</p>
		</div>

		<div class="grid md:grid-cols-3 gap-8 mb-12" use:reveal>
			{#each servicesPillars.pillars as pillar}
				<div class="bg-cream p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
					<div class="w-12 h-12 rounded-full flex items-center justify-center mb-6" style="background: linear-gradient(135deg, var(--terracotta) 0%, var(--amber) 50%);">
						{#if pillar.icon === 'cart'}
							<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
							</svg>
						{:else if pillar.icon === 'database'}
							<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/>
							</svg>
						{:else if pillar.icon === 'pos'}
							<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
							</svg>
						{/if}
					</div>
					<h3 class="text-2xl font-bold mb-4 heading-serif">{pillar.title}</h3>
					<p class="text-gray-600 mb-4 leading-relaxed">{pillar.description}</p>
					<ul class="space-y-2 text-sm text-gray-600">
						{#each pillar.bullets as bullet}
							<li class="flex items-start gap-2">
								<svg class="w-5 h-5 mt-0.5 flex-shrink-0" style="color: var(--terracotta);" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
								</svg>
								<span>{bullet}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Approach -->
<section class="py-20 px-6 bg-cream">
	<div class="max-w-7xl mx-auto">
		<div class="text-center mb-16" use:reveal>
			<p class="text-sm font-semibold uppercase tracking-widest mb-4" style="color: var(--terracotta);">{servicesApproach.eyebrow}</p>
			<h2 class="text-4xl lg:text-5xl heading-serif mb-6">{servicesApproach.heading}</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto">{servicesApproach.subheading}</p>
		</div>

		<div class="grid md:grid-cols-3 gap-8 mb-16">
			{#each servicesApproach.pillars as pillar, i}
				<div class="text-center" use:reveal={{ delay: (i + 1) * 100 }}>
					<div class="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style="background: linear-gradient(115deg, var(--amber) 0%, var(--terracotta) 100%);">
						{#if pillar.icon === 'lightbulb'}
							<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
							</svg>
						{:else if pillar.icon === 'database'}
							<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/>
							</svg>
						{:else if pillar.icon === 'code'}
							<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
							</svg>
						{/if}
					</div>
					<h3 class="text-xl font-bold mb-2">{pillar.title}</h3>
					<p class="text-gray-600">{pillar.description}</p>
				</div>
			{/each}
		</div>

		<div class="bg-white p-10 rounded-2xl shadow-sm max-w-5xl mx-auto" use:reveal={{ delay: 400 }}>
			<div class="grid md:grid-cols-2 gap-8 items-center">
				<div>
					<h3 class="text-3xl font-bold mb-4 heading-serif">{servicesApproach.systemsFirst.heading}</h3>
					{#each servicesApproach.systemsFirst.paragraphs as paragraph}
						<p class="text-gray-600 leading-relaxed mb-4">{paragraph}</p>
					{/each}
				</div>
				<div class="space-y-4">
					{#each servicesApproach.systemsFirst.features as feature}
						<div class="flex items-start gap-4">
							<div class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style="background: var(--light-gray);">
								{#if feature.icon === 'check'}
									<svg class="w-5 h-5" style="color: var(--terracotta);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
									</svg>
								{:else if feature.icon === 'bolt'}
									<svg class="w-5 h-5" style="color: var(--terracotta);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
									</svg>
								{:else if feature.icon === 'chart'}
									<svg class="w-5 h-5" style="color: var(--terracotta);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/>
									</svg>
								{/if}
							</div>
							<div>
								<h4 class="font-bold mb-1">{feature.title}</h4>
								<p class="text-sm text-gray-600">{feature.description}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Technical Capabilities -->
<section class="py-20 px-6 bg-white">
	<div class="max-w-7xl mx-auto">
		<div class="text-center mb-16" use:reveal>
			<p class="text-sm font-semibold uppercase tracking-widest mb-4" style="color: var(--terracotta);">{servicesTech.eyebrow}</p>
			<h2 class="text-4xl lg:text-5xl heading-serif mb-4">{servicesTech.heading}</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto">{servicesTech.subheading}</p>
		</div>

		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each servicesTech.categories as category, i}
				<div class="p-6 bg-cream rounded-lg" use:reveal={{ delay: (i % 3 + 1) * 50 }}>
					<h3 class="font-bold text-lg mb-3 flex items-center gap-2">
						<div class="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style="background: var(--light-gray);">
							{#if category.icon === 'shop'}
								<svg class="w-6 h-6" style="color: var(--terracotta);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
								</svg>
							{:else if category.icon === 'people'}
								<svg class="w-6 h-6" style="color: var(--terracotta);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
								</svg>
							{:else if category.icon === 'link'}
								<svg class="w-6 h-6" style="color: var(--terracotta);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
								</svg>
							{:else if category.icon === 'code'}
								<svg class="w-6 h-6" style="color: var(--terracotta);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
								</svg>
							{:else if category.icon === 'pen'}
								<svg class="w-6 h-6" style="color: var(--terracotta);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
								</svg>
							{:else if category.icon === 'chart'}
								<svg class="w-6 h-6" style="color: var(--terracotta);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
								</svg>
							{/if}
						</div>
						{category.title}
					</h3>
					<div class="flex flex-wrap gap-2">
						{#each category.tags as tag}
							<span class="skill-tag">{tag}</span>
						{/each}
					</div>
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
					<div class="p-8 bg-white/5 border border-white/10 rounded-lg hover:border-terracotta transition-colors">
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
<section class="py-32 px-6 bg-cream">
	<div class="max-w-4xl mx-auto text-center" use:reveal>
		<h2 class="text-5xl heading-serif mb-8">{servicesCta.heading}</h2>
		<p class="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">{servicesCta.subheading}</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<EmailLink class="cta-button py-3 px-8" showAddress />
			<a href={servicesCta.secondaryCta.href} target="_blank" class="cta-button border-2 border-charcoal bg-transparent text-charcoal hover:bg-charcoal hover:text-white py-3 px-8">
				<span>{servicesCta.secondaryCta.label}</span>
			</a>
		</div>
	</div>
</section>
