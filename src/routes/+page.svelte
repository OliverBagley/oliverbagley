<script lang="ts">
	import { projects } from '$lib/data/projects';
	import { homeHero, homeSolutions, homePlatforms, homeShopify, homeContact } from '$lib/data/home';
	import EmailLink from '$lib/components/EmailLink.svelte';

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
	<title>Oliver Bagley — Digital Commerce Systems Lead</title>
	<meta name="description" content="Digital commerce specialist with 8+ years building full commerce stacks — Adobe Commerce, Shopify, NetSuite integration, automation, and custom tooling for DTC and retail brands." />
	<meta name="referrer" content="no-referrer" />
</svelte:head>

<!-- Hero Section -->
<section class="flex items-center pt-40 md:pt-40 pb-16 md:pb-40 px-6 bg-noise">
	<div class="max-w-7xl mx-auto w-full">
		<div class="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
			<div>
				<p class="text-sm font-semibold uppercase tracking-widest mb-6 fade-in-up" style="color: var(--terracotta); animation-delay: 0.1s;">
					{homeHero.eyebrow}
				</p>
				<h1 class="text-6xl lg:text-7xl heading-serif mb-8 fade-in-up" style="animation-delay: 0.25s;">
					{homeHero.heading.text}<span class="gradient-text">{homeHero.heading.highlight}</span>
				</h1>
				<p class="text-xl text-gray-600 mb-8 leading-relaxed fade-in-up" style="animation-delay: 0.4s;">
					{homeHero.tagline}
					{#if homeHero.currentRole.href}
						<a href={homeHero.currentRole.href} target="_blank" rel="noopener noreferrer">{homeHero.currentRole.name}</a>.
					{:else}
						{homeHero.currentRole.name}.
					{/if}
				</p>
				<div class="flex gap-4 fade-in-up" style="animation-delay: 0.55s;">
					<a href={homeHero.primaryCta.href} class="cta-button">
						<span>{homeHero.primaryCta.label}</span>
					</a>
					<a href={homeHero.secondaryCta.href} target="_blank" class="cta-button-outline">
						<span>{homeHero.secondaryCta.label}</span>
					</a>
				</div>
			</div>
			<div class="flex justify-center lg:justify-end w-full">
				<div class="relative w-full max-w-[280px] md:max-w-md">
					<div class="absolute -top-4 -right-4 w-full h-full fade-in-up" style="animation-delay: 0.3s;">
						<div class="hero-bg-blob w-full h-full opacity-20 animate-float-slow" style="background: linear-gradient(135deg, var(--terracotta) 0%, var(--amber) 100%);"></div>
					</div>
					<div class="relative z-10 fade-in-up" style="animation-delay: 0.45s;">
						<div class="hero-image-container overflow-hidden shadow-2xl animate-float-medium transition-all duration-300">
							<img src="/media/images/oliver.jpg" alt="Oliver Bagley" class="hero-image w-full h-auto object-cover">
						</div>
					</div>
					<!-- Floating Stat Card -->
					<div class="absolute bottom-8 -left-8 z-20 hidden md:block max-w-[16rem] fade-in-up" style="animation-delay: 0.6s;">
						<div class="glass-card p-6 animate-float-medium" style="border-radius: 1rem;">
							<div class="space-y-4">
								{#each homeHero.stats as stat, i}
									{#if i > 0}<div class="border-t border-gray-100"></div>{/if}
									<div>
										<div class="text-4xl font-bold heading-serif mb-1" style="color: var(--{stat.color});">{stat.value}</div>
										<p class="text-xs text-gray-600 uppercase tracking-wider font-semibold">{stat.label}</p>
									</div>
								{/each}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Work Section -->
<section id="work" class="py-24" style="background: var(--charcoal);">
	<div class="max-w-7xl mx-auto px-6 md:px-12">
		<div class="relative mb-16" use:reveal>
			<p class="text-sm font-semibold uppercase tracking-widest mb-4" style="color: var(--terracotta);">Selected Work</p>
			<h2 class="text-5xl lg:text-6xl font-bold text-white mb-6" style="font-family: 'Instrument Serif', serif;">A cross-section of the work</h2>
			<p class="text-xl text-gray-400 max-w-2xl">Platform builds, systems integrations, brand development, and full-stack digital products — each one a real problem that needed solving.</p>
		</div>

		<div class="projects-grid">
			{#each projects as project, i}
				<div class="project-item group" use:reveal={{ delay: 100 + (i % 3) * 100 }}>
					<div class="project-image">
						<img src={project.image} alt={project.title}>
					</div>
					<div class="project-content">
						<div class="flex gap-2 mb-2 flex-wrap">
							{#each project.tags as tag}
								<span class="project-tag">{tag}</span>
							{/each}
						</div>
						<h3 class="project-title">{project.title}</h3>
						<p class="project-description">{project.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Full-Stack Solutions Section -->
<section class="py-24 px-6 bg-cream">
	<div class="max-w-7xl mx-auto">
		<div class="text-center mb-16" use:reveal>
			<p class="text-sm font-semibold uppercase tracking-widest mb-6" style="color: var(--terracotta);">{homeSolutions.eyebrow}</p>
			<h2 class="text-4xl lg:text-5xl heading-serif mb-6">{homeSolutions.heading}</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto">{homeSolutions.subheading}</p>
		</div>

		<div class="grid md:grid-cols-3 gap-8 mb-12">
			{#each homeSolutions.pillars as pillar, i}
				<div class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow" use:reveal={{ delay: (i + 1) * 100 }}>
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
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
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

		<div class="bg-white p-10 rounded-2xl shadow-sm" use:reveal={{ delay: 400 }}>
			<div class="max-w-3xl">
				<h3 class="text-3xl font-bold mb-4 heading-serif">{homeSolutions.unified.heading}</h3>
				{#each homeSolutions.unified.paragraphs as paragraph}
					<p class="text-gray-600 leading-relaxed text-lg">{paragraph}</p>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Platform Expertise -->
<section class="py-16 px-6 bg-gray-50">
	<div class="max-w-7xl mx-auto">
		<div class="text-center mb-12" use:reveal>
			<p class="text-sm font-semibold uppercase tracking-widest mb-4" style="color: var(--terracotta);">{homePlatforms.eyebrow}</p>
			<h3 class="text-2xl font-bold text-gray-800">{homePlatforms.heading}</h3>
		</div>

		<div class="overflow-hidden relative">
			<div class="flex gap-8 w-max animate-infinite-scroll">
				{#each [homePlatforms.logos, homePlatforms.logos] as logoSet, setIndex}
					<div class="flex gap-8 shrink-0" aria-hidden={setIndex === 1 ? true : undefined}>
						{#each logoSet as logo}
							<div class="flex items-center justify-center px-8 py-4 bg-white rounded-lg shadow-sm min-w-[180px] h-24">
								<picture>
									<source srcset={logo.src} type="image/avif">
									<img src={logo.src} alt={logo.name} class="logo-scroll h-16 w-auto object-contain">
								</picture>
							</div>
						{/each}
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Shopify Partner Section -->
<section class="py-24 px-6 bg-white">
	<div class="max-w-7xl mx-auto">
		<div class="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center">
			<div use:reveal>
				<p class="text-sm font-semibold uppercase tracking-widest mb-6" style="color: var(--terracotta);">{homeShopify.eyebrow}</p>
				<h2 class="text-4xl lg:text-5xl heading-serif mb-6">{homeShopify.heading}</h2>
				{#each homeShopify.paragraphs as paragraph}
					<p class="text-gray-600 mb-6 leading-relaxed">{paragraph}</p>
				{/each}
				<a href={homeShopify.cta.href} class="inline-flex items-center font-semibold gap-2 group" style="color: var(--terracotta);">
					{homeShopify.cta.label}
					<svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
					</svg>
				</a>
			</div>
			<div class="flex justify-center" use:reveal={{ delay: 200 }}>
				<img src={homeShopify.logoSrc} alt="Shopify Partner" class="w-64 md:w-80 opacity-90">
			</div>
		</div>
	</div>
</section>

<!-- Contact Section -->
<section id="contact" class="py-24 px-6" style="background: var(--charcoal);">
	<div class="max-w-4xl mx-auto text-center" use:reveal>
		<p class="text-sm font-semibold uppercase tracking-widest mb-6" style="color: var(--terracotta);">{homeContact.eyebrow}</p>
		<h2 class="text-5xl lg:text-6xl heading-serif text-white mb-8">{homeContact.heading}</h2>
		<p class="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">{homeContact.subheading}</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<EmailLink class="cta-button-light" showAddress />
			<a href={homeContact.secondaryCta.href} target="_blank" class="cta-button-outline-light">
				<span>{homeContact.secondaryCta.label}</span>
			</a>
		</div>
	</div>
</section>
