<script lang="ts">
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	
	let mounted = false;
	
	onMount(() => {
		setTimeout(() => {
			mounted = true;
		}, 150);
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
    <title>Services — Oliver Bagley</title>
    <meta name="description" content="Digital commerce strategy, eCommerce development, and product design services for growing brands.">
</svelte:head>

<!-- Hero Section -->
<section class="hero-section relative pt-32 md:pt-40 pb-16 md:pb-24 px-6 overflow-hidden">
	<div class="absolute inset-0 z-0">
		<img 
			src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2076&auto=format&fit=crop" 
			alt="Mountain terrain" 
			class="w-full h-full object-cover"
		/>
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
			<h1 class="text-5xl lg:text-7xl heading-serif mb-6 text-white" in:fade={{ duration: 800, delay: 100 }}>
				Complete digital commerce ecosystem
			</h1>
			<p class="text-xl lg:text-2xl text-gray-300 leading-relaxed" in:fade={{ duration: 800, delay: 300 }}>
				From online storefronts to in-store experiences, I architect and deliver end-to-end commerce solutions that unify your entire sales operation.
			</p>
			{:else}
			<h1 class="text-5xl lg:text-7xl heading-serif mb-6 text-white">
				Complete digital commerce ecosystem
			</h1>
			<p class="text-xl lg:text-2xl text-gray-300 leading-relaxed">
				From online storefronts to in-store experiences, I architect and deliver end-to-end commerce solutions that unify your entire sales operation.
			</p>
			{/if}
		</div>
	</div>
</section>

<!-- Core Services -->
<section class="py-20 px-6 bg-white">
    <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16" use:reveal>
            <p class="text-sm font-semibold uppercase tracking-widest mb-4" style="color: var(--terracotta);">Full-Stack Solutions</p>
            <h2 class="text-4xl lg:text-5xl heading-serif mb-4">Three pillars of digital commerce</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive coverage from Shopify platforms to backend systems, delivering frictionless experiences that convert browsers into buyers.
            </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 mb-12" use:reveal>
            <!-- Online Commerce -->
            <div class="bg-cream p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                <div class="w-12 h-12 rounded-full flex items-center justify-center mb-6" style="background: linear-gradient(135deg, var(--terracotta) 0%, var(--amber) 50%);">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                </div>
                <h3 class="text-2xl font-bold mb-4 heading-serif">eCommerce Platforms</h3>
                <p class="text-gray-600 mb-4 leading-relaxed">
                    Shopify to Magento expertise, delivering frictionless online shopping experiences and optimized user journeys that convert.
                </p>
                <ul class="space-y-2 text-sm text-gray-600">
                    <li class="flex items-start gap-2">
                        <svg class="w-5 h-5 mt-0.5 flex-shrink-0" style="color: var(--terracotta);" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                        <span>Migration, integration & disaster recovery</span>
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
            <div class="bg-cream p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                <div class="w-12 h-12 rounded-full flex items-center justify-center mb-6" style="background: linear-gradient(135deg, var(--terracotta) 0%, var(--amber) 50%);">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/>
                    </svg>
                </div>
                <h3 class="text-2xl font-bold mb-4 heading-serif">Systems & Integration</h3>
                <p class="text-gray-600 mb-4 leading-relaxed">
                    Backend systems, APIs, and integrations connecting your commerce stack to ERPs, CRMs, and business intelligence tools.
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
                        <span>ERP & CRM integration (NetSuite, Salesforce)</span>
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
            <div class="bg-cream p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                <div class="w-12 h-12 rounded-full flex items-center justify-center mb-6" style="background: linear-gradient(135deg, var(--amber) 0%, var(--terracotta) 100%);">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
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
    </div>
</section>

<!-- Approach -->
<section class="py-20 px-6 bg-cream">
	<div class="max-w-7xl mx-auto">
		<div class="text-center mb-16" use:reveal>
			<p class="text-sm font-semibold uppercase tracking-widest mb-4" style="color: var(--terracotta);">My Approach</p>
			<h2 class="text-4xl lg:text-5xl heading-serif mb-6">One partner, end-to-end</h2>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto">
				Working with multiple agencies creates complexity and misalignment. I provide a unified approach ensuring your online storefront, physical retail, and backend systems work seamlessly together.
			</p>
		</div>
		
		<div class="grid md:grid-cols-3 gap-8 mb-16">
			<div class="text-center" use:reveal={{ delay: 100 }}>
				<div class="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style="background: linear-gradient(115deg, var(--amber) 0%, var(--terracotta) 100%);">
					<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
					</svg>
				</div>
				<h3 class="text-xl font-bold mb-2">Migration & System Integration</h3>
				<p class="text-gray-600">Seamless platform migrations and integrations that maximize efficiency and leverage the latest digital platforms.</p>
			</div>
			
			<div class="text-center" use:reveal={{ delay: 200 }}>
				<div class="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style="background: linear-gradient(135deg, var(--amber) 12%, var(--terracotta) 100%);">
					<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/>
					</svg>
				</div>
				<h3 class="text-xl font-bold mb-2">Data, API & ERP Systems</h3>
				<p class="text-gray-600">Integration of data systems, APIs, and ERP solutions to streamline operations and enhance data flow.</p>
			</div>
			
			<div class="text-center" use:reveal={{ delay: 300 }}>
				<div class="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style="background: linear-gradient(155deg, var(--amber) 25%, var(--terracotta) 100%);">
					<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
					</svg>
				</div>
				<h3 class="text-xl font-bold mb-2">Development & Implementation</h3>
				<p class="text-gray-600">Full-stack development and implementation of digital commerce solutions, ensuring robust performance and scalability.</p>
			</div>
		</div>

		<div class="bg-white p-10 rounded-2xl shadow-sm max-w-5xl mx-auto" use:reveal={{ delay: 400 }}>
			<div class="grid md:grid-cols-2 gap-8 items-center">
				<div>
					<h3 class="text-3xl font-bold mb-4 heading-serif">Systems-first thinking</h3>
					<p class="text-gray-600 leading-relaxed mb-4">
						Whether you're launching a new brand, scaling DTC operations, or modernizing legacy systems, I bring the strategic vision and technical execution to build commerce solutions that grow with your business.
					</p>
					<p class="text-gray-600 leading-relaxed">
						Every technical decision is aligned with your business goals and customer needs, ensuring comprehensive operations from day one.
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
							<h4 class="font-bold mb-1">Strategic Foundation</h4>
							<p class="text-sm text-gray-600">Comprehensive operations and systems approach ensuring long-term scalability and growth.</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style="background: var(--light-gray);">
							<svg class="w-5 h-5" style="color: var(--terracotta);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
							</svg>
						</div>
						<div>
							<h4 class="font-bold mb-1">Rapid Implementation</h4>
							<p class="text-sm text-gray-600">Agile development delivers results quickly without sacrificing quality or long-term viability.</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style="background: var(--light-gray);">
							<svg class="w-5 h-5" style="color: var(--terracotta);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/>
							</svg>
						</div>
						<div>
							<h4 class="font-bold mb-1">Built to Scale</h4>
							<p class="text-sm text-gray-600">Architecture designed to handle growth from startup launch to enterprise-level traffic and complexity.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Technical Capabilities -->
<section class="py-20 px-6 bg-white">
    <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16" use:reveal>
            <p class="text-sm font-semibold uppercase tracking-widest mb-4" style="color: var(--terracotta);">Technical Capabilities</p>
            <h2 class="text-4xl lg:text-5xl heading-serif mb-4">Full-stack expertise</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technical skills across platforms, frameworks, and tools for modern digital commerce.
            </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="p-6 bg-cream rounded-lg" use:reveal={{ delay: 50 }}>
                <h3 class="font-bold text-lg mb-3 flex items-center gap-2">
                    <div class="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style="background: var(--light-gray);">
                        <svg class="w-6 h-6" style="color: var(--terracotta);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                        </svg>
                    </div>
                    eCommerce Platforms
                </h3>
                <div class="flex flex-wrap gap-2">
                    <span class="skill-tag">Shopify</span>
                    <span class="skill-tag">Shopify Plus</span>
                    <span class="skill-tag">Magento</span>
                    <span class="skill-tag">Shopify Headless</span>
                </div>
            </div>

            <div class="p-6 bg-cream rounded-lg" use:reveal={{ delay: 100 }}>
                <h3 class="font-bold text-lg mb-3 flex items-center gap-2">
                    <div class="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style="background: var(--light-gray);">
                        <svg class="w-6 h-6" style="color: var(--terracotta);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                    </div>
                    Customer Experience
                </h3>
                <div class="flex flex-wrap gap-2">
                    <span class="skill-tag">UX Journey</span>
                    <span class="skill-tag">Customer Profiling</span>
                    <span class="skill-tag">Klaviyo</span>
                    <span class="skill-tag">Re-engagement</span>
                </div>
            </div>

            <div class="p-6 bg-cream rounded-lg" use:reveal={{ delay: 150 }}>
                <h3 class="font-bold text-lg mb-3 flex items-center gap-2">
                    <div class="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style="background: var(--light-gray);">
                        <svg class="w-6 h-6" style="color: var(--terracotta);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
                        </svg>
                    </div>
                    ERP & Integrations
                </h3>
                <div class="flex flex-wrap gap-2">
                    <span class="skill-tag">NetSuite</span>
                    <span class="skill-tag">Alumio</span>
                    <span class="skill-tag">REST APIs</span>
                    <span class="skill-tag">Activepieces</span>
                    <span class="skill-tag">n8n</span>
                </div>
            </div>

            <div class="p-6 bg-cream rounded-lg" use:reveal={{ delay: 50 }}>
                <h3 class="font-bold text-lg mb-3 flex items-center gap-2">
                    <div class="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style="background: var(--light-gray);">
                        <svg class="w-6 h-6" style="color: var(--terracotta);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                        </svg>
                    </div>
                    Front-End Development
                </h3>
                <div class="flex flex-wrap gap-2">
                    <span class="skill-tag">Bun JS</span>
                    <span class="skill-tag">SvelteKit</span>
                    <span class="skill-tag">Next.js</span>
                    <span class="skill-tag">Liquid</span>
                    <span class="skill-tag">Tailwind CSS</span>
                </div>
            </div>

            <div class="p-6 bg-cream rounded-lg" use:reveal={{ delay: 100 }}>
                <h3 class="font-bold text-lg mb-3 flex items-center gap-2">
                    <div class="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style="background: var(--light-gray);">
                        <svg class="w-6 h-6" style="color: var(--terracotta);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
                        </svg>
                    </div>
                    Design & Research
                </h3>
                <div class="flex flex-wrap gap-2">
                    <span class="skill-tag">Figma</span>
                    <span class="skill-tag">Adobe XD</span>
                    <span class="skill-tag">Photoshop</span>
                    <span class="skill-tag">Hotjar</span>
                    <span class="skill-tag">Maze</span>
                </div>
            </div>

            <div class="p-6 bg-cream rounded-lg" use:reveal={{ delay: 150 }}>
                <h3 class="font-bold text-lg mb-3 flex items-center gap-2">
                    <div class="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style="background: var(--light-gray);">
                        <svg class="w-6 h-6" style="color: var(--terracotta);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                        </svg>
                    </div>
                    Marketing & Analytics
                </h3>
                <div class="flex flex-wrap gap-2">
                    <span class="skill-tag">Google Analytics 4</span>
                    <span class="skill-tag">GTM</span>
                    <span class="skill-tag">Meta Ads</span>
                    <span class="skill-tag">Google Ads</span>
                    <span class="skill-tag">Looker Studio</span>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Process & Engagement -->
<section class="py-20 px-6" style="background: var(--charcoal);">
    <div class="max-w-7xl mx-auto">
        <!-- Process -->
        <div class="max-w-4xl mx-auto mb-20" use:reveal>
            <div class="text-center mb-12">
                <p class="text-sm font-semibold uppercase tracking-widest mb-4" style="color: var(--terracotta);">My Process</p>
                <h2 class="text-4xl heading-serif text-white">How I Work</h2>
            </div>
            
            <div class="grid md:grid-cols-2 gap-8">
                <div class="flex gap-4 items-start">
                    <div class="text-3xl heading-serif text-white opacity-30 flex-shrink-0">01</div>
                    <div>
                        <h3 class="text-xl font-bold text-white mb-2">Discovery & Strategy</h3>
                        <p class="text-gray-400">Understand your business goals, technical requirements, and competitive landscape to develop a clear roadmap.</p>
                    </div>
                </div>

                <div class="flex gap-4 items-start">
                    <div class="text-3xl heading-serif text-white opacity-30 flex-shrink-0">02</div>
                    <div>
                        <h3 class="text-xl font-bold text-white mb-2">Design & Planning</h3>
                        <p class="text-gray-400">Create user-centered designs, technical specifications, and project timelines with clear success metrics.</p>
                    </div>
                </div>

                <div class="flex gap-4 items-start">
                    <div class="text-3xl heading-serif text-white opacity-30 flex-shrink-0">03</div>
                    <div>
                        <h3 class="text-xl font-bold text-white mb-2">Development & Launch</h3>
                        <p class="text-gray-400">Build, test, and deploy with agile methodology—delivering working solutions in iterative sprints.</p>
                    </div>
                </div>

                <div class="flex gap-4 items-start">
                    <div class="text-3xl heading-serif text-white opacity-30 flex-shrink-0">04</div>
                    <div>
                        <h3 class="text-xl font-bold text-white mb-2">Optimization & Growth</h3>
                        <p class="text-gray-400">Monitor performance, gather insights, and continuously improve conversion rates and user experience.</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Engagement Options -->
        <div class="border-t border-white/10 pt-20" use:reveal>
            <div class="text-center mb-12">
                <p class="text-sm font-semibold uppercase tracking-widest mb-4" style="color: var(--terracotta);">Work With Me</p>
                <h2 class="text-4xl heading-serif text-white mb-4">Engagement Options</h2>
                <p class="text-xl text-gray-400 max-w-3xl mx-auto">
                    Flexible working arrangements to match your project needs and organizational structure.
                </p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <div class="p-8 bg-white/5 border border-white/10 rounded-lg hover:border-terracotta transition-colors">
                    <div class="text-4xl mb-4">💼</div>
                    <h3 class="text-2xl font-bold text-white mb-3">Full-Time</h3>
                    <p class="text-gray-400 mb-4">Join your team as eCommerce Manager, Director of Digital Product, or VP of eCommerce for long-term impact.</p>
                    <p class="text-sm font-semibold" style="color: var(--terracotta);">Strategic leadership</p>
                </div>

                <div class="p-8 bg-white/5 border border-white/10 rounded-lg hover:border-amber transition-colors">
                    <div class="text-4xl mb-4">🚀</div>
                    <h3 class="text-2xl font-bold text-white mb-3">Project-Based</h3>
                    <p class="text-gray-400 mb-4">3-6 month engagements for platform migrations, redesigns, or specific development initiatives.</p>
                    <p class="text-sm font-semibold" style="color: var(--amber);">Defined deliverables</p>
                </div>

                <div class="p-8 bg-white/5 border border-white/10 rounded-lg hover:border-terracotta transition-colors">
                    <div class="text-4xl mb-4">💡</div>
                    <h3 class="text-2xl font-bold text-white mb-3">Advisory</h3>
                    <p class="text-gray-400 mb-4">Strategic guidance and ongoing consultation for brands needing expert direction and technical oversight.</p>
                    <p class="text-sm font-semibold" style="color: var(--terracotta);">Flexible support</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- CTA -->
<section class="py-32 px-6 bg-cream">
    <div class="max-w-4xl mx-auto text-center" use:reveal>
        <h2 class="text-5xl heading-serif mb-8">Let's discuss your project</h2>
        <p class="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Whether you need strategic guidance, hands-on development, or a full-time team member—I'd love to learn about your goals and explore how I can help.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:hello@oliverbagley.com" class="cta-button py-3 px-8">
                <span>hello@oliverbagley.com</span>
            </a>
            <a href="https://www.linkedin.com/in/olivergbagley/" target="_blank" class="cta-button border-2 border-charcoal bg-transparent text-charcoal hover:bg-charcoal hover:text-white py-3 px-8">
                <span>Connect on LinkedIn</span>
            </a>
        </div>
    </div>
</section>
