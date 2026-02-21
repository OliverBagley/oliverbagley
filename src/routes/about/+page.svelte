<script lang="ts">
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { aboutHero, aboutStory, aboutExperience, aboutApproach, aboutSkills, aboutCta } from '$lib/data/about';
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
	<title>About — Oliver Bagley</title>
	<meta name="description" content="Learn about Oliver Bagley's approach to digital commerce, UX design, and product leadership.">
</svelte:head>

<!-- Hero Section -->
<section class="hero-section relative pt-32 md:pt-40 pb-16 md:pb-24 px-6 overflow-hidden">
	<div class="absolute inset-0 z-0">
		<img src={aboutHero.backgroundImage} alt={aboutHero.backgroundAlt} class="w-full h-full object-cover" />
		<div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
	</div>
	<div class="max-w-7xl mx-auto relative z-10">
		<div class="max-w-4xl">
			<p class="text-sm font-semibold uppercase tracking-widest mb-4" style="color: var(--terracotta);">
				<a href="/" class="hover:opacity-80 transition-opacity">Home</a>
				<span class="mx-2">/</span>
				<span>About</span>
			</p>
			{#if mounted}
				<h1 class="text-5xl lg:text-7xl heading-serif mb-6 text-white" in:fade={{ duration: 800, delay: 100 }}>{aboutHero.heading}</h1>
				<p class="text-xl lg:text-2xl text-gray-300 leading-relaxed" in:fade={{ duration: 800, delay: 300 }}>{aboutHero.subheading}</p>
			{:else}
				<h1 class="text-5xl lg:text-7xl heading-serif mb-6 text-white">{aboutHero.heading}</h1>
				<p class="text-xl lg:text-2xl text-gray-300 leading-relaxed">{aboutHero.subheading}</p>
			{/if}
		</div>
	</div>
</section>

<!-- Story -->
<section class="py-20 px-6 bg-white">
	<div class="max-w-4xl mx-auto">
		<div class="grid md:grid-cols-3 gap-12 mb-16" use:reveal>
			<div class="md:col-span-1">
				<div class="flex justify-center mb-8">
					<div class="relative w-full max-w-[280px]">
						<div class="absolute -top-4 -right-4 w-full h-full">
							<div class="hero-bg-blob w-full h-full opacity-20 animate-float-slow" style="background: linear-gradient(135deg, var(--terracotta) 0%, var(--amber) 100%);"></div>
						</div>
						<div class="relative z-10">
							<div class="hero-image-container overflow-hidden shadow-2xl animate-float-medium transition-all duration-300">
								<img src={aboutStory.image.src} alt={aboutStory.image.alt} class="hero-image w-full h-auto object-cover">
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="md:col-span-2 space-y-6 text-lg leading-relaxed">
				<div class="text-5xl heading-serif mb-4" style="color: var(--terracotta);">{aboutStory.eyebrow}</div>
				{#each aboutStory.paragraphs as paragraph}
					<p>{paragraph}</p>
				{/each}
			</div>
		</div>

		<!-- Experience Highlights -->
		<div class="grid md:grid-cols-2 gap-8 py-16 border-t border-gray-200" use:reveal={{ delay: 200 }}>
			{#each [aboutExperience.current, aboutExperience.previous] as role, i}
				<div>
					<div class="text-4xl heading-serif mb-4" style="color: var(--{i === 0 ? 'terracotta' : 'amber'});">{role.period}</div>
					<h3 class="text-2xl font-bold mb-2">{role.title}</h3>
					<p class="text-gray-600 mb-4">{role.company}</p>
					<ul class="space-y-2 text-gray-600">
						{#each role.bullets as bullet}
							<li>• {bullet}</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Approach -->
<section class="py-20 px-6 bg-cream">
	<div class="max-w-4xl mx-auto" use:reveal>
		<h2 class="text-4xl heading-serif mb-12">{aboutApproach.heading}</h2>
		<div class="space-y-12">
			{#each aboutApproach.steps as step, i}
				<div class="flex items-start gap-6">
					<div class="text-4xl heading-serif" style="color: var(--{i % 2 === 0 ? 'terracotta' : 'amber'});">{step.number}</div>
					<div>
						<h3 class="text-2xl font-bold mb-3">{step.title}</h3>
						<p class="text-gray-600 leading-relaxed">{step.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Skills -->
<section class="py-20 px-6 bg-white">
	<div class="max-w-4xl mx-auto" use:reveal>
		<h2 class="text-4xl heading-serif mb-12">{aboutSkills.heading}</h2>
		<div class="grid md:grid-cols-3 gap-8">
			{#each aboutSkills.categories as category}
				<div>
					<h3 class="text-xl font-bold mb-4" style="color: var(--{category.color});">{category.title}</h3>
					<ul class="space-y-2 text-gray-600">
						{#each category.items as item}
							<li>• {item}</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>

		<div class="mt-12 pt-12 border-t border-gray-200">
			<h3 class="text-4xl heading-serif mb-6">{aboutSkills.toolsHeading}</h3>
			<div class="flex flex-wrap gap-3">
				{#each aboutSkills.tools as tool}
					<span class="skill-tag">{tool}</span>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- CTA -->
<section class="py-32 px-6" style="background: var(--charcoal);">
	<div class="max-w-4xl mx-auto text-center" use:reveal>
		<h2 class="text-5xl heading-serif text-white mb-8">{aboutCta.heading}</h2>
		<p class="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">{aboutCta.subheading}</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<EmailLink class="cta-button bg-white text-charcoal hover:bg-cream">
				<span>{aboutCta.primaryCta.label}</span>
			</EmailLink>
			<a href={aboutCta.secondaryCta.href} class="cta-button border-2 border-white bg-transparent text-white hover:bg-white hover:text-charcoal">
				<span>{aboutCta.secondaryCta.label}</span>
			</a>
		</div>
	</div>
</section>
