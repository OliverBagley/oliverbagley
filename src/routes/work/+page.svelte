<script lang="ts">
	import { projects } from '$lib/data/projects';

	// Svelte action for scroll reveal animations
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
		
		// Set initial state
		node.style.opacity = '0';
		node.style.transform = 'translateY(30px)';
		node.style.transition = 'all 1s cubic-bezier(0.2, 0.65, 0.3, 0.9)';
		
		observer.observe(node);
		
		// Check if already in viewport
		const rect = node.getBoundingClientRect();
		const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
		if (isInViewport) {
			setTimeout(() => {
				node.style.opacity = '1';
				node.style.transform = 'translateY(0)';
			}, options.delay);
		}
		
		return {
			destroy() {
				observer.unobserve(node);
			}
		};
	}
</script>

<svelte:head>
	<title>Work — Oliver Bagley</title>
	<meta name="description" content="Selected projects showcasing strategic thinking, technical execution, and measurable business impact across digital commerce and product development." />
	<meta name="referrer" content="no-referrer" />
</svelte:head>


<!-- Hero Section -->
<section class="hero-section relative pt-32 md:pt-40 pb-16 md:pb-24 px-6 overflow-hidden">
	<!-- Background Image -->
	<div class="absolute inset-0 z-0">
		<img 
			src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop" 
			alt="Mountain landscape" 
			class="w-full h-full object-cover"
		/>
		<!-- Dark overlay for text readability -->
		<div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
	</div>
	
	<div class="max-w-7xl mx-auto relative z-10">
		<div class="max-w-3xl">
            <!-- Breadcrumb -->
			<p class="text-sm font-semibold uppercase tracking-widest mb-4" style="color: var(--terracotta);">
				<a href="/" class="hover:opacity-80 transition-opacity">Home</a>
				<span class="mx-2">/</span>
				<span>Work</span>
			</p>
			<h1 class="text-5xl lg:text-7xl font-bold text-white mb-6 heading-serif">Work that drives results</h1>
			<p class="text-xl lg:text-2xl text-gray-300 mb-8">
				From concept to launch, these projects showcase strategic thinking, technical execution, and measurable business impact across eCommerce, brand development, and digital product design.
			</p>
		</div>
		
		<!-- Stats -->
		<div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl">
			<div class="text-white" use:reveal={{ delay: 100 }}>
				<div class="text-4xl md:text-5xl font-bold heading-serif mb-2" style="color: var(--amber);">$50M+</div>
				<p class="text-gray-400 text-sm">Revenue Generated</p>
			</div>
			<div class="text-white" use:reveal={{ delay: 200 }}>
				<div class="text-4xl md:text-5xl font-bold heading-serif mb-2" style="color: var(--amber);">100+</div>
				<p class="text-gray-400 text-sm">Projects Delivered</p>
			</div>
			<div class="text-white" use:reveal={{ delay: 300 }}>
				<div class="text-4xl md:text-5xl font-bold heading-serif mb-2" style="color: var(--amber);">35%</div>
				<p class="text-gray-400 text-sm">Avg. Conversion Lift</p>
			</div>
			<div class="text-white" use:reveal={{ delay: 400 }}>
				<div class="text-4xl md:text-5xl font-bold heading-serif mb-2" style="color: var(--amber);">10+</div>
				<p class="text-gray-400 text-sm">Years Experience</p>
			</div>
		</div>
	</div>
</section>

<!-- Approach Section -->
<section class="py-20 px-6 bg-cream">
	<div class="max-w-4xl mx-auto text-center" use:reveal>
		<p class="text-sm font-semibold uppercase tracking-widest mb-4" style="color: var(--terracotta);">My Approach</p>
		<h2 class="text-4xl lg:text-5xl heading-serif mb-6">Strategy meets execution</h2>
		<p class="text-xl text-gray-600 leading-relaxed">
			Every project begins with understanding your business goals, not just your design preferences. I combine strategic thinking with hands-on technical execution to deliver solutions that look great, perform brilliantly, and scale with your business.
		</p>
	</div>
	
	<div class="max-w-7xl mx-auto mt-16 grid md:grid-cols-3 gap-8">
		<div class="text-center" use:reveal={{ delay: 100 }}>
			<div class="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style="background: linear-gradient(115deg, var(--amber) 0%, var(--terracotta) 100%);">
				<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
				</svg>
			</div>
			<h3 class="text-xl font-bold mb-2">Migration & System Integration</h3>
			<p class="text-gray-600">Seamless platform migrations and integrations that maximize efficiency and allow you to leverage the latest digital platforms.</p>
		</div>
		
		<div class="text-center" use:reveal={{ delay: 200 }}>
			<div class="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style="background: linear-gradient(135deg, var(--amber) 12%, var(--terracotta) 100%);">
				<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
				</svg>
			</div>
			<h3 class="text-xl font-bold mb-2">Systems Data, API & ERP</h3>
			<p class="text-gray-600">Integration of data systems, APIs, and ERP solutions to streamline operations and enhance data flow.</p>
		</div>
		
		<div class="text-center" use:reveal={{ delay: 300 }}>
			<div class="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style="background: linear-gradient(155deg, var(--amber) 25%, var(--terracotta) 100%);">
				<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
				</svg>
			</div>
			<h3 class="text-xl font-bold mb-2">Development & Implementation</h3>
			<p class="text-gray-600">Hands-on development and implementation of digital commerce solutions, ensuring robust performance and scalability.</p>
		</div>
	</div>
</section>

<!-- Projects Grid -->
<section class="py-24" style="background: var(--charcoal);">
	<div class="max-w-7xl mx-auto">
		<div class="mb-16 text-center px-6" use:reveal>
			<p class="text-sm font-semibold uppercase tracking-widest mb-4" style="color: var(--terracotta);">Featured Case Studies</p>
			<h2 class="text-4xl lg:text-5xl font-bold text-white mb-4 heading-serif">Selected projects</h2>
			<p class="text-xl text-gray-400 max-w-3xl mx-auto">
				A curated selection of work spanning eCommerce transformation, brand development, and full-stack product design.
			</p>
		</div>
		
		<!-- Alternating Layout Projects -->
		<div class="max-w-6xl mx-auto px-6 space-y-24">
			{#each projects as project, i}
				<a href="/work/{project.slug}" class="group block" use:reveal={{ delay: 100 }}>
					{#if i % 2 === 0}
						<!-- Image Left -->
						<div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
							<div class="overflow-hidden rounded-2xl shadow-2xl">
								<img src={project.image} alt={project.title} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
							</div>
							<div class="space-y-4">
								<div class="flex gap-2 flex-wrap">
									{#each project.tags as tag}
										<span class="project-tag">{tag}</span>
									{/each}
								</div>
								<h3 class="text-3xl lg:text-4xl font-bold text-white heading-serif group-hover:opacity-80 transition-opacity">{project.title}</h3>
								<p class="text-lg text-gray-300 leading-relaxed">{project.description}</p>
								<span class="inline-flex items-center gap-2 text-amber font-semibold group-hover:gap-4 transition-all">
									View Case Study
									<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
									</svg>
								</span>
							</div>
						</div>
					{:else}
						<!-- Image Right -->
						<div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
							<div class="space-y-4 lg:order-1">
								<div class="flex gap-2 flex-wrap">
									{#each project.tags as tag}
										<span class="project-tag">{tag}</span>
									{/each}
								</div>
								<h3 class="text-3xl lg:text-4xl font-bold text-white heading-serif group-hover:opacity-80 transition-opacity">{project.title}</h3>
								<p class="text-lg text-gray-300 leading-relaxed">{project.description}</p>
								<span class="inline-flex items-center gap-2 text-amber font-semibold group-hover:gap-4 transition-all">
									View Case Study
									<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
									</svg>
								</span>
							</div>
							<div class="overflow-hidden rounded-2xl shadow-2xl lg:order-2">
								<img src={project.image} alt={project.title} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
							</div>
						</div>
					{/if}
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- Capabilities Section -->
<section class="py-20 px-6 bg-white">
	<div class="max-w-7xl mx-auto">
		<div class="text-center mb-16" use:reveal>
			<p class="text-sm font-semibold uppercase tracking-widest mb-4" style="color: var(--terracotta);">Core Capabilities</p>
			<h2 class="text-4xl lg:text-5xl heading-serif mb-4">What I bring to your project</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto">
				Full-stack expertise across strategy, design, and development for digital commerce experiences.
			</p>
		</div>
		
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
			<div class="p-6 bg-cream rounded-lg" use:reveal={{ delay: 50 }}>
				<h3 class="font-bold text-lg mb-2">eCommerce Platforms</h3>
				<p class="text-gray-600 text-sm mb-3">Platform selection, implementation, and optimization</p>
				<div class="flex flex-wrap gap-2">
					<span class="skill-tag">Shopify</span>
					<span class="skill-tag">Magento</span>
					<span class="skill-tag">Shopify Headless</span>
				</div>
			</div>
			
			<div class="p-6 bg-cream rounded-lg" use:reveal={{ delay: 100 }}>
				<h3 class="font-bold text-lg mb-2">Frictonless eCommerce</h3>
				<p class="text-gray-600 text-sm mb-3">Improve ROI and CLV through optimised customer journeys</p>
				<div class="flex flex-wrap gap-2">
					<span class="skill-tag">UX Journey</span>
					<span class="skill-tag">Customer Profiling</span>
					<span class="skill-tag">Klaviyo</span>
					<span class="skill-tag">Re-engagement</span>
				</div>
			</div>
						
			<div class="p-6 bg-cream rounded-lg" use:reveal={{ delay: 50 }}>
				<h3 class="font-bold text-lg mb-2">ERP & Systems Integrations</h3>
				<p class="text-gray-600 text-sm mb-3">API & Middleware integration</p>
				<div class="flex flex-wrap gap-2">
					<span class="skill-tag">REST</span>
					<span class="skill-tag">Alumio</span>
					<span class="skill-tag">Netsuite Connector</span>
					<span class="skill-tag">Activepieces</span>
					<span class="skill-tag">Netsuite Connector</span>
					<span class="skill-tag">n8n</span>
				</div>
			</div>
			
			<div class="p-6 bg-cream rounded-lg" use:reveal={{ delay: 150 }}>
				<h3 class="font-bold text-lg mb-2">Front-End Development</h3>
				<p class="text-gray-600 text-sm mb-3">Modern frameworks and performant experiences</p>
				<div class="flex flex-wrap gap-2">
					<span class="skill-tag">Bun JS</span>
					<span class="skill-tag">Svelte Kit</span>
					<span class="skill-tag">Next.js</span>
				</div>
			</div>
			
			<div class="p-6 bg-cream rounded-lg" use:reveal={{ delay: 150 }}>
				<h3 class="font-bold text-lg mb-2">Digital Strategy</h3>
				<p class="text-gray-600 text-sm mb-3">Market research and growth planning</p>
				<div class="flex flex-wrap gap-2">
					<span class="skill-tag">Analytics</span>
					<span class="skill-tag">CRO</span>
					<span class="skill-tag">SEO</span>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-24 px-6 bg-cream border-t border-gray-200">
	<div class="max-w-4xl mx-auto text-center" use:reveal>
		<h2 class="text-4xl lg:text-5xl heading-serif mb-6">Ready to start your project?</h2>
		<p class="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
			Let's discuss how we can create something impactful together. Whether you need strategic guidance, hands-on development, or end-to-end execution.
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a href="mailto:hello@oliverbagley.com" class="cta-button py-3 px-8">
				<span>Get In Touch</span>
			</a>
			<a href="/about" class="cta-button border-2 border-charcoal bg-transparent text-charcoal hover:bg-charcoal hover:text-white py-3 px-8">
				<span>Learn More About Me</span>
			</a>
		</div>
	</div>
</section>
