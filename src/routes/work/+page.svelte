<script lang="ts">
	import { projects } from '$lib/data/projects';
	import { workHero, workApproach, workProjectsSection, workCapabilities, workCta } from '$lib/data/work';
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

		return { destroy() { observer.unobserve(node); } };
	}
</script>

<svelte:head>
	<title>Work — Oliver Bagley</title>
	<meta name="description" content="Selected projects showcasing strategic thinking, technical execution, and measurable business impact across digital commerce and product development." />
	<meta name="referrer" content="no-referrer" />
</svelte:head>

<!-- Hero Section -->
<section class="hero-section relative pt-32 md:pt-40 pb-16 md:pb-24 px-6 overflow-hidden">
	<div class="absolute inset-0 z-0">
		<img src={workHero.backgroundImage} alt={workHero.backgroundAlt} class="w-full h-full object-cover" />
		<div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
	</div>
	<div class="max-w-7xl mx-auto relative z-10">
		<div class="max-w-3xl">
			<p class="text-sm font-semibold uppercase tracking-widest mb-4" style="color: var(--terracotta);">
				<a href="/" class="hover:opacity-80 transition-opacity">Home</a>
				<span class="mx-2">/</span>
				<span>Work</span>
			</p>
			<h1 class="text-5xl lg:text-7xl font-bold text-white mb-6 heading-serif">{workHero.heading}</h1>
			<p class="text-xl lg:text-2xl text-gray-300 mb-8">{workHero.subheading}</p>
		</div>

		<!-- Stats -->
		<div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl">
			{#each workHero.stats as stat, i}
				<div class="text-white" use:reveal={{ delay: (i + 1) * 100 }}>
					<div class="text-4xl md:text-5xl font-bold heading-serif mb-2" style="color: var(--amber);">{stat.value}</div>
					<p class="text-gray-400 text-sm">{stat.label}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Approach Section -->
<section class="py-20 px-6 bg-cream">
	<div class="max-w-4xl mx-auto text-center" use:reveal>
		<p class="text-sm font-semibold uppercase tracking-widest mb-4" style="color: var(--terracotta);">{workApproach.eyebrow}</p>
		<h2 class="text-4xl lg:text-5xl heading-serif mb-6">{workApproach.heading}</h2>
		<p class="text-xl text-gray-600 leading-relaxed">{workApproach.subheading}</p>
	</div>

	<div class="max-w-7xl mx-auto mt-16 grid md:grid-cols-3 gap-8">
		{#each workApproach.pillars as pillar, i}
			<div class="text-center" use:reveal={{ delay: (i + 1) * 100 }}>
				<div class="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style="background: linear-gradient(115deg, var(--amber) 0%, var(--terracotta) 100%);">
					{#if pillar.icon === 'lightbulb'}
						<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
						</svg>
					{:else if pillar.icon === 'pen'}
						<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
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
</section>

<!-- Projects Grid -->
<section class="py-24" style="background: var(--charcoal);">
	<div class="max-w-7xl mx-auto">
		<div class="mb-16 text-center px-6" use:reveal>
			<p class="text-sm font-semibold uppercase tracking-widest mb-4" style="color: var(--terracotta);">{workProjectsSection.eyebrow}</p>
			<h2 class="text-4xl lg:text-5xl font-bold text-white mb-4 heading-serif">{workProjectsSection.heading}</h2>
			<p class="text-xl text-gray-400 max-w-3xl mx-auto">{workProjectsSection.subheading}</p>
		</div>

		<!-- Alternating Layout Projects -->
		<div class="max-w-6xl mx-auto px-6 space-y-24">
			{#each projects as project, i}
				<div class="group block" use:reveal={{ delay: 100 }}>
					{#if i % 2 === 0}
						<div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
							<div class="overflow-hidden rounded-2xl shadow-2xl">
								<img src={project.image} alt={project.title} class="w-full h-full object-cover">
							</div>
							<div class="space-y-4">
								<div class="flex gap-2 flex-wrap">
									{#each project.tags as tag}
										<span class="project-tag">{tag}</span>
									{/each}
								</div>
								<h3 class="text-3xl lg:text-4xl font-bold text-white heading-serif">{project.title}</h3>
								<p class="text-lg text-gray-300 leading-relaxed">{project.description}</p>
							</div>
						</div>
					{:else}
						<div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
							<div class="space-y-4 lg:order-1">
								<div class="flex gap-2 flex-wrap">
									{#each project.tags as tag}
										<span class="project-tag">{tag}</span>
									{/each}
								</div>
								<h3 class="text-3xl lg:text-4xl font-bold text-white heading-serif">{project.title}</h3>
								<p class="text-lg text-gray-300 leading-relaxed">{project.description}</p>
							</div>
							<div class="overflow-hidden rounded-2xl shadow-2xl lg:order-2">
								<img src={project.image} alt={project.title} class="w-full h-full object-cover">
							</div>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Capabilities Section -->
<section class="py-20 px-6 bg-white">
	<div class="max-w-7xl mx-auto">
		<div class="text-center mb-16" use:reveal>
			<p class="text-sm font-semibold uppercase tracking-widest mb-4" style="color: var(--terracotta);">{workCapabilities.eyebrow}</p>
			<h2 class="text-4xl lg:text-5xl heading-serif mb-4">{workCapabilities.heading}</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto">{workCapabilities.subheading}</p>
		</div>

		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each workCapabilities.categories as category, i}
				<div class="p-6 bg-cream rounded-lg" use:reveal={{ delay: (i % 3 + 1) * 50 }}>
					<h3 class="font-bold text-lg mb-2">{category.title}</h3>
					<p class="text-gray-600 text-sm mb-3">{category.description}</p>
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

<!-- CTA Section -->
<section class="py-24 px-6 bg-cream border-t border-gray-200">
	<div class="max-w-4xl mx-auto text-center" use:reveal>
		<h2 class="text-4xl lg:text-5xl heading-serif mb-6">{workCta.heading}</h2>
		<p class="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">{workCta.subheading}</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<EmailLink class="cta-button py-3 px-8">
				<span>{workCta.primaryCta.label}</span>
			</EmailLink>
			<a href={workCta.secondaryCta.href} class="cta-button border-2 border-charcoal bg-transparent text-charcoal hover:bg-charcoal hover:text-white py-3 px-8">
				<span>{workCta.secondaryCta.label}</span>
			</a>
		</div>
	</div>
</section>
