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

<!-- Breadcrumb -->
<div class="pt-32 pb-8 px-6 bg-cream">
    <div class="max-w-7xl mx-auto breadcrumb">
        <a href="/">Home</a>
        <span>/</span>
        <span>Services</span>
    </div>
</div>

<!-- Hero -->
<section class="py-20 px-6 bg-cream">
    <div class="max-w-4xl mx-auto">
		{#if mounted}
        <h1 class="text-6xl lg:text-7xl heading-serif mb-8" in:fade={{ duration: 800, delay: 100 }}>Strategic consultancy for growing brands</h1>
        <p class="text-2xl text-gray-600 leading-relaxed" in:fade={{ duration: 800, delay: 300 }}>
            I help eCommerce and DTC brands scale through strategic guidance, hands-on development, and conversion-focused design.
        </p>
		{:else}
        <h1 class="text-6xl lg:text-7xl heading-serif mb-8">Strategic consultancy for growing brands</h1>
        <p class="text-2xl text-gray-600 leading-relaxed">
            I help eCommerce and DTC brands scale through strategic guidance, hands-on development, and conversion-focused design.
        </p>
		{/if}
    </div>
</section>

<!-- Services Overview -->
<section class="py-20 px-6 bg-white">
    <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-3 gap-8 mb-20" use:reveal>
            <div class="p-8 bg-cream">
                <div class="text-6xl heading-serif mb-4" style="color: var(--terracotta);">01</div>
                <h2 class="text-2xl font-bold mb-4 heading-serif">eCommerce Strategy & Growth</h2>
                <p class="text-gray-600 mb-6 leading-relaxed">
                    Strategic planning and execution for DTC brands looking to scale their digital commerce operations.
                </p>
                <ul class="space-y-3 text-gray-600">
                    <li class="flex items-start gap-2">
                        <svg class="w-5 h-5 mt-0.5 flex-shrink-0" style="color: var(--terracotta);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                        </svg>
                        <span>Platform selection & migration</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <svg class="w-5 h-5 mt-0.5 flex-shrink-0" style="color: var(--terracotta);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                        </svg>
                        <span>Technical roadmap development</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <svg class="w-5 h-5 mt-0.5 flex-shrink-0" style="color: var(--terracotta);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                        </svg>
                        <span>Conversion rate optimization</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <svg class="w-5 h-5 mt-0.5 flex-shrink-0" style="color: var(--terracotta);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                        </svg>
                        <span>Analytics & performance tracking</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <svg class="w-5 h-5 mt-0.5 flex-shrink-0" style="color: var(--terracotta);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                        </svg>
                        <span>Growth strategy & execution</span>
                    </li>
                </ul>
            </div>

            <div class="p-8 bg-cream">
                <div class="text-6xl heading-serif mb-4" style="color: var(--amber);">02</div>
                <h2 class="text-2xl font-bold mb-4 heading-serif">Product & UX Design</h2>
                <p class="text-gray-600 mb-6 leading-relaxed">
                    User-centered design that balances aesthetics with conversion goals and technical feasibility.
                </p>
                <ul class="space-y-3 text-gray-600">
                    <li class="flex items-start gap-2">
                        <svg class="w-5 h-5 mt-0.5 flex-shrink-0" style="color: var(--amber);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                        </svg>
                        <span>User research & testing</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <svg class="w-5 h-5 mt-0.5 flex-shrink-0" style="color: var(--amber);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                        </svg>
                        <span>UX/UI design for web & mobile</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <svg class="w-5 h-5 mt-0.5 flex-shrink-0" style="color: var(--amber);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                        </svg>
                        <span>Design systems & style guides</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <svg class="w-5 h-5 mt-0.5 flex-shrink-0" style="color: var(--amber);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                        </svg>
                        <span>Prototyping & wireframing</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <svg class="w-5 h-5 mt-0.5 flex-shrink-0" style="color: var(--amber);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                        </svg>
                        <span>Brand identity development</span>
                    </li>
                </ul>
            </div>

            <div class="p-8 bg-cream">
                <div class="text-6xl heading-serif mb-4" style="color: var(--terracotta);">03</div>
                <h2 class="text-2xl font-bold mb-4 heading-serif">Development & Implementation</h2>
                <p class="text-gray-600 mb-6 leading-relaxed">
                    Full-stack development for Shopify stores, custom web apps, and digital experiences.
                </p>
                <ul class="space-y-3 text-gray-600">
                    <li class="flex items-start gap-2">
                        <svg class="w-5 h-5 mt-0.5 flex-shrink-0" style="color: var(--terracotta);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                        </svg>
                        <span>Shopify/Shopify Plus development</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <svg class="w-5 h-5 mt-0.5 flex-shrink-0" style="color: var(--terracotta);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                        </svg>
                        <span>Custom web application development</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <svg class="w-5 h-5 mt-0.5 flex-shrink-0" style="color: var(--terracotta);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                        </svg>
                        <span>API integrations & automation</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <svg class="w-5 h-5 mt-0.5 flex-shrink-0" style="color: var(--terracotta);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                        </svg>
                        <span>Performance optimization</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <svg class="w-5 h-5 mt-0.5 flex-shrink-0" style="color: var(--terracotta);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                        </svg>
                        <span>Technical SEO implementation</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>

<!-- Process -->
<section class="py-20 px-6" style="background: var(--charcoal);">
    <div class="max-w-4xl mx-auto" use:reveal>
        <h2 class="text-4xl heading-serif text-white mb-12">How I Work</h2>
        
        <div class="space-y-8">
            <div class="flex gap-6 items-start">
                <div class="text-5xl heading-serif text-white opacity-30">01</div>
                <div>
                    <h3 class="text-2xl font-bold text-white mb-2">Discovery</h3>
                    <p class="text-gray-400">Deep dive into your business goals, target audience, technical requirements, and competitive landscape. I ask the hard questions to ensure we're solving the right problems.</p>
                </div>
            </div>

            <div class="flex gap-6 items-start">
                <div class="text-5xl heading-serif text-white opacity-30">02</div>
                <div>
                    <h3 class="text-2xl font-bold text-white mb-2">Strategy</h3>
                    <p class="text-gray-400">Develop a clear roadmap with prioritized initiatives, success metrics, and realistic timelines. No fluff—just actionable plans that drive measurable results.</p>
                </div>
            </div>

            <div class="flex gap-6 items-start">
                <div class="text-5xl heading-serif text-white opacity-30">03</div>
                <div>
                    <h3 class="text-2xl font-bold text-white mb-2">Execution</h3>
                    <p class="text-gray-400">Roll up my sleeves and build. Whether it's designing interfaces, writing code, or setting up analytics—I handle the technical execution so you don't have to manage multiple vendors.</p>
                </div>
            </div>

            <div class="flex gap-6 items-start">
                <div class="text-5xl heading-serif text-white opacity-30">04</div>
                <div>
                    <h3 class="text-2xl font-bold text-white mb-2">Optimization</h3>
                    <p class="text-gray-400">Launch is just the beginning. I monitor performance, gather user feedback, and continuously optimize to improve conversion rates and user experience.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Engagement Models -->
<section class="py-20 px-6 bg-white">
    <div class="max-w-7xl mx-auto" use:reveal>
        <h2 class="text-4xl heading-serif mb-12">Engagement Options</h2>
        
        <div class="grid md:grid-cols-2 gap-8">
            <div class="p-8 border-2 border-gray-200">
                <h3 class="text-2xl font-bold mb-4">Full-Time Role</h3>
                <p class="text-gray-600 mb-6">I'm open to full-time positions where I can make a long-term impact on digital commerce operations.</p>
                <ul class="space-y-3 text-gray-600">
                    <li>• eCommerce Manager/Director roles</li>
                    <li>• Head of Digital Product</li>
                    <li>• VP of eCommerce for growing brands</li>
                    <li>• Lead roles at DTC startups</li>
                </ul>
            </div>

            <div class="p-8 border-2 border-gray-200">
                <h3 class="text-2xl font-bold mb-4">Consultancy Projects</h3>
                <p class="text-gray-600 mb-6">Strategic guidance and hands-on execution for select clients with defined project scopes.</p>
                <ul class="space-y-3 text-gray-600">
                    <li>• 3-6 month project engagements</li>
                    <li>• Platform audits & optimization</li>
                    <li>• Strategic advisory retainers</li>
                    <li>• Specific development projects</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<!-- Ideal Clients -->
<section class="py-20 px-6 bg-cream">
    <div class="max-w-4xl mx-auto" use:reveal>
        <h2 class="text-4xl heading-serif mb-8">Who I Work Best With</h2>
        <p class="text-xl text-gray-600 mb-12 leading-relaxed">
            I'm most effective partnering with brands that value both strategic thinking and hands-on execution. My ideal clients:
        </p>
        
        <div class="grid md:grid-cols-2 gap-8">
            <div>
                <h3 class="text-xl font-bold mb-4" style="color: var(--terracotta);">Growing DTC Brands</h3>
                <p class="text-gray-600">£1M-£20M revenue, ready to scale their digital operations with strategic infrastructure.</p>
            </div>
            <div>
                <h3 class="text-xl font-bold mb-4" style="color: var(--amber);">Established Businesses</h3>
                <p class="text-gray-600">Traditional brands launching or expanding DTC channels who need eCommerce expertise.</p>
            </div>
            <div>
                <h3 class="text-xl font-bold mb-4" style="color: var(--terracotta);">Early-Stage Startups</h3>
                <p class="text-gray-600">Product-first companies needing strategic guidance on go-to-market and digital infrastructure.</p>
            </div>
            <div>
                <h3 class="text-xl font-bold mb-4" style="color: var(--amber);">Agencies & Studios</h3>
                <p class="text-gray-600">Partner with agencies needing specialist eCommerce or Shopify development expertise.</p>
            </div>
        </div>
    </div>
</section>

<!-- CTA -->
<section class="py-32 px-6" style="background: var(--charcoal);">
    <div class="max-w-4xl mx-auto text-center" use:reveal>
        <h2 class="text-5xl heading-serif text-white mb-8">Let's discuss your project</h2>
        <p class="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Whether you're looking for strategic guidance or hands-on execution, I'd love to learn about your goals and explore how I can help.
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
