<script lang="ts">
	import { aboutHero, aboutStory, aboutExperience, aboutSkills, aboutCta } from '$lib/data/about';
	import EmailLink from '$lib/components/EmailLink.svelte';
	import { reveal } from '$lib/actions';
</script>

<svelte:head>
	<title>About — Oliver Bagley</title>
	<meta name="description" content="Oliver Bagley — Digital Commerce Systems Lead. 8+ years building full commerce stacks across Adobe Commerce, NetSuite, Klaviyo, and Alumio." />
	<meta property="og:title" content="About — Oliver Bagley" />
	<meta property="og:description" content="Oliver Bagley — Digital Commerce Systems Lead. 8+ years building full commerce stacks across Adobe Commerce, NetSuite, Klaviyo, and Alumio." />
	<meta name="twitter:title" content="About — Oliver Bagley" />
	<meta name="twitter:description" content="Oliver Bagley — Digital Commerce Systems Lead. 8+ years building full commerce stacks across Adobe Commerce, NetSuite, Klaviyo, and Alumio." />
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
			<h1 class="text-5xl lg:text-7xl heading-serif mb-6 text-white fade-in-up" style="animation-delay: 0.1s;">{aboutHero.heading}</h1>
			<p class="text-xl lg:text-2xl text-gray-300 leading-relaxed fade-in-up" style="animation-delay: 0.3s;">{aboutHero.subheading}</p>
		</div>
	</div>
</section>

<!-- Story -->
<section class="py-20 px-6 bg-white">
	<div class="max-w-7xl mx-auto">
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

<!-- What I work with -->
<section class="py-20 px-6 bg-cream">
	<div class="max-w-7xl mx-auto" use:reveal>
		<h2 class="text-4xl heading-serif mb-12">{aboutSkills.heading}</h2>
		<div class="space-y-6">
			{#each aboutSkills.categories as category}
				<div class="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-8 pb-6 border-b border-gray-200 last:border-0 last:pb-0">
					<div class="sm:w-44 flex-shrink-0 pt-1">
						<span class="text-xs font-semibold uppercase tracking-widest" style="color: var(--{category.color});">{category.title}</span>
					</div>
					<div class="flex flex-wrap gap-2">
						{#each category.items as item}
							<span class="skill-tag">{item}</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- CTA -->
<section class="py-32 px-6" style="background: var(--charcoal);">
	<div class="max-w-7xl mx-auto text-center" use:reveal>
		<h2 class="text-5xl heading-serif text-white mb-8">{aboutCta.heading}</h2>
		<p class="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">{aboutCta.subheading}</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<EmailLink class="cta-button-light">
				<span>{aboutCta.primaryCta.label}</span>
			</EmailLink>
			<a href={aboutCta.secondaryCta.href} class="cta-button-outline-light">
				<span>{aboutCta.secondaryCta.label}</span>
			</a>
		</div>
	</div>
</section>
