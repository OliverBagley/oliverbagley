<script lang="ts">
	import { projects } from '$lib/data/projects';
	import { workHero, workProjectsSection, workCta } from '$lib/data/work';
	import EmailLink from '$lib/components/EmailLink.svelte';
	import { reveal } from '$lib/actions';
</script>

<svelte:head>
	<title>Work — Oliver Bagley</title>
	<meta name="description" content="Real projects from Oliver Bagley — eCommerce platform work, systems integration, brand development, and full-stack digital products." />
	<meta property="og:title" content="Work — Oliver Bagley" />
	<meta property="og:description" content="Real projects from Oliver Bagley — eCommerce platform work, systems integration, brand development, and full-stack digital products." />
	<meta name="twitter:title" content="Work — Oliver Bagley" />
	<meta name="twitter:description" content="Real projects from Oliver Bagley — eCommerce platform work, systems integration, brand development, and full-stack digital products." />
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
			<h1 class="text-5xl lg:text-7xl font-bold text-white mb-6 heading-serif" use:reveal={{ delay: 100 }}>{workHero.heading}</h1>
			<p class="text-xl lg:text-2xl text-gray-300 mb-8" use:reveal={{ delay: 300 }}>{workHero.subheading}</p>
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

<!-- Projects Grid -->
<section class="py-24" style="background: var(--charcoal);">
	<div class="max-w-7xl mx-auto">
		<div class="mb-16 text-center px-6" use:reveal>
			<p class="text-sm font-semibold uppercase tracking-widest mb-4" style="color: var(--terracotta);">{workProjectsSection.eyebrow}</p>
			<h2 class="text-4xl lg:text-5xl font-bold text-white mb-4 heading-serif">{workProjectsSection.heading}</h2>
			<p class="text-xl text-gray-400 max-w-3xl mx-auto">{workProjectsSection.subheading}</p>
		</div>

		<!-- Alternating Layout Projects -->
		<div class="max-w-7xl mx-auto px-6 space-y-24">
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

<!-- CTA Section -->
<section class="py-24 px-6 bg-cream border-t border-gray-200">
	<div class="max-w-7xl mx-auto text-center" use:reveal>
		<h2 class="text-4xl lg:text-5xl heading-serif mb-6">{workCta.heading}</h2>
		<p class="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">{workCta.subheading}</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<EmailLink class="cta-button">
				<span>{workCta.primaryCta.label}</span>
			</EmailLink>
			<a href={workCta.secondaryCta.href} class="cta-button-outline">
				<span>{workCta.secondaryCta.label}</span>
			</a>
		</div>
	</div>
</section>
