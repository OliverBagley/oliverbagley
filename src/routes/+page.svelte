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
				observer.disconnect();
			}
		};
	}
</script>

<svelte:head>
	<title>Oliver Bagley — Digital Commerce Strategist & Product Leader</title>
	<meta name="description" content="Digital commerce strategist specializing in eCommerce platforms, UX/UI design, and full-stack digital experiences." />
	<meta name="referrer" content="no-referrer" />
</svelte:head>

<!-- Hero Section -->
<section class="flex items-center pt-40 md:pt-40 pb-16 md:pb-40 px-6 bg-noise">
	<div class="max-w-7xl mx-auto w-full">
		<div class="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
			<div>
				<p class="text-sm font-semibold uppercase tracking-widest mb-6 fade-in-up" style="color: var(--terracotta); animation-delay: 0.1s;">Digital Operations & eCommerce Systems Expert</p>
				<h1 class="text-6xl lg:text-7xl heading-serif mb-8 fade-in-up" style="animation-delay: 0.25s;">
					Building digital experiences that <span class="gradient-text">drive growth</span>
				</h1>
				<p class="text-xl text-gray-600 mb-8 leading-relaxed fade-in-up" style="animation-delay: 0.4s;">
					I architect eCommerce platforms, design seamless user experiences, and lead digital product teams from strategy through execution. Currently scaling DTC operations at <a href="https://www.frogbikes.com" target="_blank" rel="noopener noreferrer">Frog Bikes</a>.
				</p>
				<div class="flex gap-4 fade-in-up" style="animation-delay: 0.55s;">
					<a href="#work" class="cta-button-secondary hover:bg-charcoal hover:text-cream"><span>View Projects</span></a>
					<a href="https://www.linkedin.com/in/olivergbagley/" target="_blank" class="cta-button bg-transparent text-charcoal hover:bg-charcoal hover:text-cream" style="border-color: var(--charcoal);"><span>LinkedIn →</span></a>
				</div>
			</div>
			<div class="flex justify-center lg:justify-end w-full">
				<div class="relative w-full max-w-[280px] md:max-w-md">
					<!-- Background Blob -->
					<div class="absolute -top-4 -right-4 w-full h-full fade-in-up" style="animation-delay: 0.3s;">
						<div class="hero-bg-blob w-full h-full opacity-20 animate-float-slow" style="background: linear-gradient(135deg, var(--terracotta) 0%, var(--amber) 100%);"></div>
					</div>
					
					<!-- Main Image -->
					<div class="relative z-10 fade-in-up" style="animation-delay: 0.45s;">
						<div class="hero-image-container overflow-hidden shadow-2xl animate-float-medium transition-all duration-300">
							<img src="/media/images/images/oliver.jpg" alt="Oliver Bagley" class="hero-image w-full h-auto object-cover">
						</div>
					</div>

					<!-- Floating Stat Card -->
					<div class="absolute bottom-8 -left-8 z-20 hidden md:block max-w-[16rem] fade-in-up" style="animation-delay: 0.6s;">
						<div class="bg-white p-6 shadow-xl animate-float-medium" style="border-radius: 1rem;">
							<div class="space-y-4">
								<div>
									<div class="text-4xl font-bold heading-serif mb-1" style="color: var(--terracotta);">8+</div>
									<p class="text-xs text-gray-600 uppercase tracking-wider font-semibold">Years Experience</p>
								</div>
								<div class="border-t border-gray-100"></div>
								<div>
									<div class="text-4xl font-bold heading-serif mb-1" style="color: var(--amber);">£10M+</div>
									<p class="text-xs text-gray-600 uppercase tracking-wider font-semibold">Revenue Generated</p>
								</div>
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
			<p class="text-sm font-semibold uppercase tracking-widest mb-4" style="color: var(--terracotta);">Selected Projects</p>
			<h2 class="text-5xl lg:text-6xl font-bold text-white mb-6" style="font-family: 'Instrument Serif', serif;">Work that drives results</h2>
			<p class="text-xl text-gray-400 max-w-2xl">From concept to launch, these projects showcase strategic thinking, technical execution, and measurable business impact.</p>
		</div>

		<!-- Project List -->
		<div class="projects-grid">
			{#each projects as project, i}
				<a href="/work/{project.slug}" class="project-item group" use:reveal={{ delay: 100 + (i % 3) * 100 }}>
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
						<span class="project-link">
							View Case Study
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
							</svg>
						</span>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- Full-Stack Solutions Section -->
<section class="py-24 px-6 bg-cream">
	<div class="max-w-7xl mx-auto">
		<div class="text-center mb-16" use:reveal>
			<p class="text-sm font-semibold uppercase tracking-widest mb-6" style="color: var(--terracotta);">Full-Stack Solutions</p>
			<h2 class="text-4xl lg:text-5xl heading-serif mb-6">Complete digital commerce ecosystem</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto">
				From online storefronts to in-store experiences, I architect and deliver end-to-end commerce solutions that unify your entire sales operation.
			</p>
		</div>

		<div class="grid md:grid-cols-3 gap-8 mb-12">
			<!-- Online Commerce -->
			<div class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow" use:reveal={{ delay: 100 }}>
				<div class="w-12 h-12 rounded-full flex items-center justify-center mb-6" style="background: linear-gradient(135deg, var(--terracotta) 0%, var(--amber) 50%);">
					<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
					</svg>
				</div>
				<h3 class="text-2xl font-bold mb-4 heading-serif">eCommerce Platforms & Presence</h3>
				<p class="text-gray-600 mb-4 leading-relaxed">
					Comprehensive coverage from Shopify to Magento, delivering frictionless online shopping experiences, and optimized user journeys that convert browsers into buyers.
				</p>
				<ul class="space-y-2 text-sm text-gray-600">
					<li class="flex items-start gap-2">
						<svg class="w-5 h-5 mt-0.5 flex-shrink-0" style="color: var(--terracotta);" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
						</svg>
						<span>Migration, Integration and disaster recovery</span>
					</li>
					<li class="flex items-start gap-2">
						<svg class="w-5 h-5 mt-0.5 flex-shrink-0" style="color: var(--terracotta);" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
						</svg>
						<span>Payment gateway integration</span>
					</li>
					<li class="flex items-start gap-2">
						<svg class="w-5 h-5 mt-0.5 flex-shrink-0" style="color: var(--terracotta);" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
						</svg>
						<span>Conversion rate optimization</span>
					</li>
				</ul>
			</div>

			<!-- Systems & Integration -->
			<div class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow" use:reveal={{ delay: 200 }}>
				<div class="w-12 h-12 rounded-full flex items-center justify-center mb-6" style="background: linear-gradient(135deg, var(--terracotta) 0%, var(--amber) 50%);">
					<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/>
					</svg>
				</div>
				<h3 class="text-2xl font-bold mb-4 heading-serif">Systems & Integration</h3>
				<p class="text-gray-600 mb-4 leading-relaxed">
					Backend systems, APIs, and third-party integrations that connect your commerce stack to ERPs, CRMs, and business intelligence tools.
				</p>
				<ul class="space-y-2 text-sm text-gray-600">
					<li class="flex items-start gap-2">
						<svg class="w-5 h-5 mt-0.5 flex-shrink-0" style="color: var(--terracotta);" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
						</svg>
						<span>API & systems development</span>
					</li>
					<li class="flex items-start gap-2">
						<svg class="w-5 h-5 mt-0.5 flex-shrink-0" style="color: var(--terracotta);" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
						</svg>
						<span>ERP & CRM integration expertise</span>
					</li>
					<li class="flex items-start gap-2">
						<svg class="w-5 h-5 mt-0.5 flex-shrink-0" style="color: var(--terracotta);" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
						</svg>
						<span>Data migration & automation</span>
					</li>
				</ul>
			</div>

			<!-- In-Store & POS -->
			<div class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow" use:reveal={{ delay: 300 }}>
				<div class="w-12 h-12 rounded-full flex items-center justify-center mb-6" style="background: linear-gradient(135deg, var(--amber) 0%, var(--terracotta) 100%);">
					<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
					</svg>
				</div>
				<h3 class="text-2xl font-bold mb-4 heading-serif">In-Store & POS</h3>
				<p class="text-gray-600 mb-4 leading-relaxed">
					Unified retail experiences with Shopify POS, inventory sync, and omnichannel customer journeys across digital and physical touchpoints.
				</p>
				<ul class="space-y-2 text-sm text-gray-600">
					<li class="flex items-start gap-2">
						<svg class="w-5 h-5 mt-0.5 flex-shrink-0" style="color: var(--terracotta);" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
						</svg>
						<span>Shopify POS implementation</span>
					</li>
					<li class="flex items-start gap-2">
						<svg class="w-5 h-5 mt-0.5 flex-shrink-0" style="color: var(--terracotta);" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
						</svg>
						<span>Real-time inventory management</span>
					</li>
					<li class="flex items-start gap-2">
						<svg class="w-5 h-5 mt-0.5 flex-shrink-0" style="color: var(--terracotta);" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
						</svg>
						<span>Omnichannel customer data</span>
					</li>
				</ul>
			</div>
		</div>

		<div class="bg-white p-10 rounded-2xl shadow-sm" use:reveal={{ delay: 400 }}>
			<div class="grid md:grid-cols-2 gap-8 items-center">
				<div>
					<h3 class="text-3xl font-bold mb-4 heading-serif">One partner, end-to-end</h3>
					<p class="text-gray-600 leading-relaxed mb-4">
						Working with multiple agencies for web, mobile, and in-store creates complexity and misalignment. I provide a unified approach to digital commerce, ensuring your online storefront, physical retail experiences, and backend systems work together seamlessly.
					</p>
					<p class="text-gray-600 leading-relaxed">
						Whether you're launching a new brand, scaling DTC operations, or modernizing legacy systems, I bring the strategic vision and technical execution to build commerce solutions that grow with your business.
					</p>
				</div>
				<div class="space-y-4">
					<div class="flex items-start gap-4">
						<div class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style="background: var(--light-gray);">
							<svg class="w-5 h-5" style="color: var(--terracotta);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
							</svg>
						</div>
						<div>
							<h4 class="font-bold mb-1">Systems-First Approach</h4>
							<p class="text-sm text-gray-600">Comprehensive operations and system based approach ensure every technical decision aligned with your business goals and customer needs.</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style="background: var(--light-gray);">
							<svg class="w-5 h-5" style="color: var(--terracotta);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
							</svg>
						</div>
						<div>
							<h4 class="font-bold mb-1">Rapid Development & Implementation</h4>
							<p class="text-sm text-gray-600">Agile development process that delivers results quickly without sacrificing quality.</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style="background: var(--light-gray);">
							<svg class="w-5 h-5" style="color: var(--terracotta);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/>
							</svg>
						</div>
						<div>
							<h4 class="font-bold mb-1">Scale with pace</h4>
							<p class="text-sm text-gray-600">Comprehensive development built for business that want to scale quickly, built to handle growth, from startup launch to enterprise-level traffic and complexity.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Platform Expertise -->
<section class="py-16 px-6 bg-gray-50">
	<div class="max-w-7xl mx-auto">
		<div class="text-center mb-12" use:reveal>
			<p class="text-sm font-semibold uppercase tracking-widest mb-4" style="color: var(--terracotta);">Platform Expertise</p>
			<h3 class="text-2xl font-bold text-gray-800">Trusted eCommerce Platforms</h3>
		</div>
		
		<!-- Simple horizontal scroll -->
		<div class="overflow-hidden relative">
			<div class="flex gap-8 w-max animate-infinite-scroll">
				<div class="flex gap-8 shrink-0">
					<div class="flex items-center justify-center px-8 py-4 bg-white rounded-lg shadow-sm min-w-[180px]">
						<span class="text-2xl font-bold text-gray-700">Shopify</span>
					</div>
					<div class="flex items-center justify-center px-8 py-4 bg-white rounded-lg shadow-sm min-w-[180px]">
						<span class="text-2xl font-bold text-gray-700">Magento</span>
					</div>
					<div class="flex items-center justify-center px-8 py-4 bg-white rounded-lg shadow-sm min-w-[180px]">
						<span class="text-2xl font-bold text-gray-700">NetSuite</span>
					</div>
					<div class="flex items-center justify-center px-8 py-4 bg-white rounded-lg shadow-sm min-w-[180px]">
						<span class="text-2xl font-bold text-gray-700">Alumio</span>
					</div>
					<div class="flex items-center justify-center px-8 py-4 bg-white rounded-lg shadow-sm min-w-[180px]">
						<span class="text-2xl font-bold text-gray-700">WooCommerce</span>
					</div>
					<div class="flex items-center justify-center px-8 py-4 bg-white rounded-lg shadow-sm min-w-[180px]">
						<span class="text-2xl font-bold text-gray-700">BigCommerce</span>
					</div>
				</div>
				<div class="flex gap-8 shrink-0" aria-hidden="true">
					<div class="flex items-center justify-center px-8 py-4 bg-white rounded-lg shadow-sm min-w-[180px]">
						<span class="text-2xl font-bold text-gray-700">Shopify</span>
					</div>
					<div class="flex items-center justify-center px-8 py-4 bg-white rounded-lg shadow-sm min-w-[180px]">
						<span class="text-2xl font-bold text-gray-700">Magento</span>
					</div>
					<div class="flex items-center justify-center px-8 py-4 bg-white rounded-lg shadow-sm min-w-[180px]">
						<span class="text-2xl font-bold text-gray-700">NetSuite</span>
					</div>
					<div class="flex items-center justify-center px-8 py-4 bg-white rounded-lg shadow-sm min-w-[180px]">
						<span class="text-2xl font-bold text-gray-700">Alumio</span>
					</div>
					<div class="flex items-center justify-center px-8 py-4 bg-white rounded-lg shadow-sm min-w-[180px]">
						<span class="text-2xl font-bold text-gray-700">WooCommerce</span>
					</div>
					<div class="flex items-center justify-center px-8 py-4 bg-white rounded-lg shadow-sm min-w-[180px]">
						<span class="text-2xl font-bold text-gray-700">BigCommerce</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Shopify Partner Section -->
<section class="py-24 px-6 bg-white">
	<div class="max-w-7xl mx-auto">
		<div class="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center">
			<div use:reveal>
				<p class="text-sm font-semibold uppercase tracking-widest mb-6" style="color: var(--terracotta);">Official Partner</p>
				<h2 class="text-4xl lg:text-5xl heading-serif mb-6">Expertise you can trust</h2>
				<p class="text-gray-600 mb-6 leading-relaxed">
					Shopify is the leading all-in-one commerce platform for start-ups to high-growth businesses. Powering millions of businesses worldwide, Shopify gives independent brands the tools to sell online, in person, and everywhere in between.
				</p>
				<p class="text-gray-600 mb-8 leading-relaxed">
					As a certified Shopify Partner, I act as your strategic guide to the platform. I help ambitious brands leverage Shopify's robust ecosystem to build custom, high-converting storefronts that are easy to manage and ready to scale.
				</p>
				<a href="/services" class="inline-flex items-center font-semibold gap-2 group" style="color: var(--terracotta);">
					Explore Shopify Services
					<svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
					</svg>
				</a>
			</div>
			<div class="flex justify-center" use:reveal={{ delay: 200 }}>
				<img src="/media/shopify/shopify-partner-logo.svg" alt="Shopify Partner" class="w-64 md:w-80 opacity-90">
			</div>
		</div>
	</div>
</section>

<!-- Contact Section -->
<section id="contact" class="py-24 px-6" style="background: var(--charcoal);">
	<div class="max-w-4xl mx-auto text-center" use:reveal>
		<p class="text-sm font-semibold uppercase tracking-widest mb-6" style="color: var(--terracotta);">Get In Touch</p>
		<h2 class="text-5xl lg:text-6xl heading-serif text-white mb-8">Let's build something together</h2>
		<p class="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
			Whether you're looking for strategic guidance, hands-on execution, or a full-time addition to your team, I'd love to hear about your project.
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a href="mailto:hello@oliverbagley.com" class="cta-button bg-white text-charcoal hover:bg-cream">
				<span>hello@oliverbagley.com</span>
			</a>
			<a href="https://www.linkedin.com/in/olivergbagley/" target="_blank" class="cta-button border-2 border-white bg-transparent text-white hover:bg-white hover:text-charcoal">
				<span>Connect on LinkedIn</span>
			</a>
		</div>
	</div>
</section>
