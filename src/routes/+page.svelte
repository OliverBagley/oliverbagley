<script lang="ts">
	import { projects } from "$lib/data/projects";
	import {
		homeHero,
		homeSolutions,
		homePlatforms,
		homeShopify,
		homeContact,
	} from "$lib/data/home";
	import EmailLink from "$lib/components/EmailLink.svelte";
	import { reveal } from "$lib/actions";
</script>

<svelte:head>
	<title>Oliver Bagley — Digital Commerce Systems Lead</title>
	<meta name="description" content="Digital commerce specialist with 8+ years building full commerce stacks — Adobe Commerce, Shopify, NetSuite integration, automation, and custom tooling for DTC and retail brands." />
	<meta property="og:title" content="Oliver Bagley — Digital Commerce Systems Lead" />
	<meta property="og:description" content="Digital commerce specialist with 8+ years building full commerce stacks — Adobe Commerce, Shopify, NetSuite integration, automation, and custom tooling for DTC and retail brands." />
	<meta name="twitter:title" content="Oliver Bagley — Digital Commerce Systems Lead" />
	<meta name="twitter:description" content="Digital commerce specialist with 8+ years building full commerce stacks — Adobe Commerce, Shopify, NetSuite integration, automation, and custom tooling for DTC and retail brands." />
	<meta name="referrer" content="no-referrer" />
</svelte:head>

<!-- Hero Section -->
<section class="flex items-center pt-40 md:pt-40 pb-16 md:pb-40 px-6 bg-noise">
	<div class="max-w-7xl mx-auto w-full">
		<div
			class="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center"
		>
			<div>
				<p
					class="text-sm font-semibold uppercase tracking-widest mb-6" style="color: var(--terracotta);" use:reveal={{ delay: 100 }}
				>
					{homeHero.eyebrow}
				</p>
				<h1
					class="text-6xl lg:text-7xl heading-serif mb-8" use:reveal={{ delay: 250 }}
				>
					{homeHero.heading.text}<span class="gradient-text"
						>{homeHero.heading.highlight}</span
					>
				</h1>
				<p
					class="text-xl text-gray-600 mb-8 leading-relaxed" use:reveal={{ delay: 400 }}
				>
					{homeHero.tagline}
					{#if homeHero.currentRole.href}
						<a
							href={homeHero.currentRole.href}
							target="_blank"
							rel="noopener noreferrer"
							>{homeHero.currentRole.name}</a
						>.
					{:else}
						{homeHero.currentRole.name}.
					{/if}
				</p>
				<div
					class="flex gap-4" use:reveal={{ delay: 550 }}
				>
					<a href={homeHero.primaryCta.href} class="cta-button">
						<span>{homeHero.primaryCta.label}</span>
					</a>
					<a
						href={homeHero.secondaryCta.href}
						target="_blank"
						class="cta-button-outline"
					>
						<span>{homeHero.secondaryCta.label}</span>
					</a>
				</div>
			</div>
			<div class="flex justify-center lg:justify-end w-full">
				<div class="relative w-full max-w-[280px] md:max-w-md">
					<div
						class="absolute -top-4 -right-4 w-full h-full" use:reveal={{ delay: 300 }}
					>
						<div
							class="hero-bg-blob w-full h-full opacity-20 animate-float-slow"
							style="background: linear-gradient(135deg, var(--terracotta) 0%, var(--amber) 100%);"
						></div>
					</div>
					<div
						class="relative z-10" use:reveal={{ delay: 450 }}
					>
						<div
							class="hero-image-container overflow-hidden shadow-2xl animate-float-medium transition-all duration-300"
						>
							<img
								src="/media/images/oliver.jpg"
								alt="Oliver Bagley"
								class="hero-image w-full h-auto object-cover"
							/>
						</div>
					</div>
					<!-- Floating Stat Card -->
					<div
						class="absolute bottom-8 -left-8 z-20 hidden md:block max-w-[16rem]" use:reveal={{ delay: 600 }}
					>
						<div
							class="glass-card p-6 animate-float-medium"
							style="border-radius: 1rem;"
						>
							<div class="space-y-4">
								{#each homeHero.stats as stat, i}
									{#if i > 0}<div
											class="border-t border-gray-100"
										></div>{/if}
									<div>
										<div
											class="text-4xl font-bold heading-serif mb-1"
											style="color: var(--{stat.color});"
										>
											{stat.value}
										</div>
										<p
											class="text-xs text-gray-600 uppercase tracking-wider font-semibold"
										>
											{stat.label}
										</p>
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
			<p
				class="text-sm font-semibold uppercase tracking-widest mb-4"
				style="color: var(--terracotta);"
			>
				Selected Work
			</p>
			<h2
				class="text-5xl lg:text-6xl font-bold text-white mb-6"
				style="font-family: 'Instrument Serif', serif;"
			>
				Commerce systems, end to end
			</h2>
			<p class="text-xl text-gray-400 max-w-2xl">
				Platform builds, systems integrations, brand development, and
				full-stack digital products — each one a real problem that
				needed solving.
			</p>
		</div>

		<div class="projects-grid">
			{#each projects.slice(0, 5) as project, i}
				<div
					class="project-item group"
					use:reveal={{ delay: 100 + (i % 3) * 100 }}
				>
					<div class="project-image">
						<img src={project.image} alt={project.title} />
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

		{#if projects.length > 5}
			<div class="mt-10 text-center" use:reveal>
				<a
					class="inline-flex items-center font-semibold gap-2 group"
					style="color: var(--light-gray);"
					href="/work"
				>
					Browse more of my past work
					<svg
						class="w-4 h-4 group-hover:translate-x-1 transition-transform"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 5l7 7-7 7"
						></path>
					</svg>
				</a>
			</div>
		{/if}
	</div>
</section>

<!-- Full-Stack Solutions Section -->
<section class="py-24 px-6 bg-cream">
	<div class="max-w-7xl mx-auto">
		<div class="text-center mb-16" use:reveal>
			<p
				class="text-sm font-semibold uppercase tracking-widest mb-6"
				style="color: var(--terracotta);"
			>
				{homeSolutions.eyebrow}
			</p>
			<h2 class="text-4xl lg:text-5xl heading-serif mb-6">
				{homeSolutions.heading}
			</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto">
				{homeSolutions.subheading}
			</p>
		</div>

		<div class="grid md:grid-cols-3 gap-8 mb-12">
			{#each homeSolutions.pillars as pillar, i}
				<div
					class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
					use:reveal={{ delay: (i + 1) * 100 }}
				>
					<div
						class="w-12 h-12 rounded-full flex items-center justify-center mb-6"
						style="background: linear-gradient(135deg, var(--terracotta) 0%, var(--amber) 50%);"
					>
						{#if pillar.icon === "cart"}
							<svg
								class="w-6 h-6 text-white"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
								/>
							</svg>
						{:else if pillar.icon === "database"}
							<svg
								class="w-6 h-6 text-white"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
								/>
							</svg>
						{:else if pillar.icon === "pos"}
							<svg
								class="w-6 h-6 text-white"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
								/>
							</svg>
						{:else if pillar.icon === "chart"}
							<svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
								<path d="M3 12h4v9H3v-9zm7-5h4v14h-4V7zm7-4h4v18h-4V3z"/>
							</svg>
						{/if}
					</div>
					<h3 class="text-2xl font-bold mb-4 heading-serif">
						{pillar.title}
					</h3>
					<p class="text-gray-600 mb-4 leading-relaxed">
						{pillar.description}
					</p>
					<ul class="space-y-2 text-sm text-gray-600">
						{#each pillar.bullets as bullet}
							<li class="flex items-start gap-2">
								<svg
									class="w-5 h-5 mt-0.5 flex-shrink-0"
									style="color: var(--terracotta);"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path
										fill-rule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clip-rule="evenodd"
									/>
								</svg>
								<span>{bullet}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>

		<div
			class="bg-white p-10 rounded-2xl shadow-sm"
			use:reveal={{ delay: 400 }}
		>
			<div
				class="flex flex-col md:flex-row items-center gap-10 md:gap-14"
			>
				<!-- SVG illustration: commerce stack hub diagram -->
				<div
					class="flex-shrink-0 w-40 md:w-48 opacity-90"
					aria-hidden="true"
				>
					<svg
						viewBox="0 0 200 200"
						xmlns="http://www.w3.org/2000/svg"
						class="w-full h-full"
					>
						<!-- Outer ring -->
						<circle
							cx="100"
							cy="100"
							r="88"
							fill="none"
							stroke="rgba(215,122,72,0.1)"
							stroke-width="1.5"
							stroke-dasharray="3 4"
						/>
						<!-- Spoke lines -->
						<line
							x1="100"
							y1="100"
							x2="100"
							y2="24"
							stroke="rgba(215,122,72,0.25)"
							stroke-width="1.5"
							stroke-linecap="round"
						/>
						<line
							x1="100"
							y1="100"
							x2="167"
							y2="141"
							stroke="rgba(244,162,97,0.25)"
							stroke-width="1.5"
							stroke-linecap="round"
						/>
						<line
							x1="100"
							y1="100"
							x2="33"
							y2="141"
							stroke="rgba(215,122,72,0.25)"
							stroke-width="1.5"
							stroke-linecap="round"
						/>
						<line
							x1="100"
							y1="100"
							x2="167"
							y2="59"
							stroke="rgba(244,162,97,0.25)"
							stroke-width="1.5"
							stroke-linecap="round"
						/>
						<line
							x1="100"
							y1="100"
							x2="33"
							y2="59"
							stroke="rgba(215,122,72,0.25)"
							stroke-width="1.5"
							stroke-linecap="round"
						/>
						<!-- Central hub -->
						<circle
							cx="100"
							cy="100"
							r="24"
							fill="rgba(215,122,72,0.1)"
							stroke="rgb(215,122,72)"
							stroke-width="1.5"
						/>
						<!-- Person icon -->
						<circle cx="100" cy="93" r="7" fill="rgb(215,122,72)" />
						<path
							d="M84 113 Q84 103 100 103 Q116 103 116 113"
							fill="rgb(215,122,72)"
						/>
						<!-- Top node: Storefront -->
						<circle
							cx="100"
							cy="24"
							r="15"
							fill="rgba(215,122,72,0.1)"
							stroke="rgb(215,122,72)"
							stroke-width="1.5"
						/>
						<path
							d="M93 20 L96 26 L104 26 L107 20"
							fill="none"
							stroke="rgb(215,122,72)"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<circle
							cx="96.5"
							cy="28.5"
							r="1.5"
							fill="rgb(215,122,72)"
						/>
						<circle
							cx="103.5"
							cy="28.5"
							r="1.5"
							fill="rgb(215,122,72)"
						/>
						<!-- Bottom-right node: ERP / Database -->
						<circle
							cx="167"
							cy="141"
							r="15"
							fill="rgba(244,162,97,0.1)"
							stroke="rgb(244,162,97)"
							stroke-width="1.5"
						/>
						<ellipse
							cx="167"
							cy="135"
							rx="7"
							ry="3"
							fill="none"
							stroke="rgb(244,162,97)"
							stroke-width="1.5"
						/>
						<line
							x1="160"
							y1="135"
							x2="160"
							y2="147"
							stroke="rgb(244,162,97)"
							stroke-width="1.5"
						/>
						<line
							x1="174"
							y1="135"
							x2="174"
							y2="147"
							stroke="rgb(244,162,97)"
							stroke-width="1.5"
						/>
						<ellipse
							cx="167"
							cy="147"
							rx="7"
							ry="3"
							fill="none"
							stroke="rgb(244,162,97)"
							stroke-width="1.5"
						/>
						<!-- Bottom-left node: Email / CRM -->
						<circle
							cx="33"
							cy="141"
							r="15"
							fill="rgba(215,122,72,0.1)"
							stroke="rgb(215,122,72)"
							stroke-width="1.5"
						/>
						<rect
							x="26"
							y="136"
							width="14"
							height="10"
							rx="1.5"
							fill="none"
							stroke="rgb(215,122,72)"
							stroke-width="1.5"
						/>
						<polyline
							points="26,136 33,142 40,136"
							fill="none"
							stroke="rgb(215,122,72)"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<!-- Top-right node: Analytics -->
						<circle
							cx="167"
							cy="59"
							r="15"
							fill="rgba(244,162,97,0.1)"
							stroke="rgb(244,162,97)"
							stroke-width="1.5"
						/>
						<polyline
							points="160,65 164,58 168,62 174,53"
							fill="none"
							stroke="rgb(244,162,97)"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<!-- Top-left node: Automation / Cog -->
						<circle
							cx="33"
							cy="59"
							r="15"
							fill="rgba(215,122,72,0.1)"
							stroke="rgb(215,122,72)"
							stroke-width="1.5"
						/>
						<circle
							cx="33"
							cy="59"
							r="6.5"
							fill="none"
							stroke="rgb(215,122,72)"
							stroke-width="1.5"
						/>
						<circle
							cx="33"
							cy="59"
							r="2.5"
							fill="rgb(215,122,72)"
						/>
						<line
							x1="33"
							y1="50.5"
							x2="33"
							y2="52.5"
							stroke="rgb(215,122,72)"
							stroke-width="2"
							stroke-linecap="round"
						/>
						<line
							x1="33"
							y1="65.5"
							x2="33"
							y2="67.5"
							stroke="rgb(215,122,72)"
							stroke-width="2"
							stroke-linecap="round"
						/>
						<line
							x1="24.5"
							y1="59"
							x2="26.5"
							y2="59"
							stroke="rgb(215,122,72)"
							stroke-width="2"
							stroke-linecap="round"
						/>
						<line
							x1="39.5"
							y1="59"
							x2="41.5"
							y2="59"
							stroke="rgb(215,122,72)"
							stroke-width="2"
							stroke-linecap="round"
						/>
					</svg>
				</div>
				<!-- Text -->
				<div>
					<h3 class="text-3xl font-bold mb-4 heading-serif">
						{homeSolutions.unified.heading}
					</h3>
					{#each homeSolutions.unified.paragraphs as paragraph}
						<p class="text-gray-600 leading-relaxed text-lg">
							{paragraph}
						</p>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Platform Expertise -->
<section class="py-16 px-6 bg-gray-50">
	<div class="max-w-7xl mx-auto">
		<div class="text-center mb-12" use:reveal>
			<p
				class="text-sm font-semibold uppercase tracking-widest mb-4"
				style="color: var(--terracotta);"
			>
				{homePlatforms.eyebrow}
			</p>
			<h3 class="text-2xl font-bold text-gray-800 mb-4">
				{homePlatforms.heading}
			</h3>
			<p class="text-gray-500 max-w-2xl mx-auto leading-relaxed">
				{homePlatforms.description}
			</p>
		</div>

		<div class="overflow-hidden relative">
			<div class="flex gap-8 w-max animate-infinite-scroll">
				{#each [homePlatforms.logos, homePlatforms.logos] as logoSet, setIndex}
					<div
						class="flex gap-8 shrink-0"
						aria-hidden={setIndex === 1 ? true : undefined}
					>
						{#each logoSet as logo}
							<div
								class="flex items-center justify-center px-8 py-4 bg-white rounded-lg shadow-sm min-w-[180px] h-24"
							>
								<picture>
									<source
										srcset={logo.src}
										type="image/avif"
									/>
									<img
										src={logo.src}
										alt={logo.name}
										class="logo-scroll h-16 w-auto object-contain"
									/>
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
		<div
			class="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center"
		>
			<div use:reveal>
				<p
					class="text-sm font-semibold uppercase tracking-widest mb-6"
					style="color: var(--terracotta);"
				>
					{homeShopify.eyebrow}
				</p>
				<h2 class="text-4xl lg:text-5xl heading-serif mb-6">
					{homeShopify.heading}
				</h2>
				{#each homeShopify.paragraphs as paragraph}
					<p class="text-gray-600 mb-6 leading-relaxed">
						{paragraph}
					</p>
				{/each}
				<a
					href={homeShopify.cta.href}
					class="inline-flex items-center font-semibold gap-2 group"
					style="color: var(--terracotta);"
				>
					{homeShopify.cta.label}
					<svg
						class="w-4 h-4 group-hover:translate-x-1 transition-transform"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</a>
			</div>
			<div class="flex justify-center" use:reveal={{ delay: 200 }}>
				<img
					src={homeShopify.logoSrc}
					alt="Shopify Partner"
					class="w-64 md:w-80 opacity-90"
				/>
			</div>
		</div>
	</div>
</section>

<!-- Contact Section -->
<section id="contact" class="py-24 px-6" style="background: var(--charcoal);">
	<div class="max-w-4xl mx-auto text-center" use:reveal>
		<p
			class="text-sm font-semibold uppercase tracking-widest mb-6"
			style="color: var(--terracotta);"
		>
			{homeContact.eyebrow}
		</p>
		<h2 class="text-5xl lg:text-6xl heading-serif text-white mb-8">
			{homeContact.heading}
		</h2>
		<p class="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
			{homeContact.subheading}
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<EmailLink class="cta-button-light">Drop me an email</EmailLink>
			<a
				href={homeContact.secondaryCta.href}
				target="_blank"
				class="cta-button-outline-light"
			>
				<span>{homeContact.secondaryCta.label}</span>
			</a>
		</div>
	</div>
</section>
