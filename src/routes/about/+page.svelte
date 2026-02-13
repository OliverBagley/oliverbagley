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
    <title>About — Oliver Bagley</title>
    <meta name="description" content="Learn about Oliver Bagley's approach to digital commerce, UX design, and product leadership.">
</svelte:head>

<!-- Breadcrumb -->
<div class="pt-32 pb-8 px-6 bg-cream">
    <div class="max-w-7xl mx-auto breadcrumb">
        <a href="/">Home</a>
        <span>/</span>
        <span>About</span>
    </div>
</div>

<!-- Hero -->
<section class="py-20 px-6 bg-cream">
    <div class="max-w-4xl mx-auto">
		{#if mounted}
        <h1 class="text-6xl lg:text-7xl heading-serif mb-8" in:fade={{ duration: 800, delay: 100 }}>Strategy meets execution</h1>
        <p class="text-2xl text-gray-600 leading-relaxed" in:fade={{ duration: 800, delay: 300 }}>
            I bridge the gap between business vision and technical reality, building digital commerce experiences that deliver measurable results.
        </p>
		{:else}
        <h1 class="text-6xl lg:text-7xl heading-serif mb-8">Strategy meets execution</h1>
        <p class="text-2xl text-gray-600 leading-relaxed">
            I bridge the gap between business vision and technical reality, building digital commerce experiences that deliver measurable results.
        </p>
		{/if}
    </div>
</section>

<!-- Story -->
<section class="py-20 px-6 bg-white">
    <div class="max-w-4xl mx-auto">
        <div class="grid md:grid-cols-3 gap-12 mb-16" use:reveal>
            <div class="md:col-span-1">
                <h2 class="text-3xl heading-serif mb-4">My Story</h2>
            </div>
            <div class="md:col-span-2 space-y-6 text-lg leading-relaxed">
                <p>
                    I started my career at the intersection of design and technology, quickly realizing that the most successful digital products come from understanding both the creative vision and the technical constraints.
                </p>
                <p>
                    Over the past 8+ years, I've led digital commerce initiatives for automotive brands like Ford, healthcare companies like DLL Group, and direct-to-consumer startups. Currently, I'm the eCommerce Manager at Frog Bikes, where I've built our entire DTC platform from the ground up.
                </p>
                <p>
                    What sets me apart is my ability to move seamlessly between strategic planning and hands-on execution. I don't just design solutions—I build them. From Shopify development to conversion optimization, brand strategy to data analytics, I work across the full stack to deliver results.
                </p>
            </div>
        </div>

        <!-- Experience Highlights -->
        <div class="grid md:grid-cols-2 gap-8 py-16 border-t border-gray-200" use:reveal={{ delay: 200 }}>
            <div>
                <div class="text-5xl heading-serif mb-4" style="color: var(--terracotta);">Current</div>
                <h3 class="text-2xl font-bold mb-2">eCommerce Manager</h3>
                <p class="text-gray-600 mb-4">Frog Bikes</p>
                <ul class="space-y-2 text-gray-600">
                    <li>• Built DTC eCommerce platform from scratch</li>
                    <li>• Increased online revenue by 180% year-over-year</li>
                    <li>• Led Shopify Plus migration and custom development</li>
                    <li>• Implemented data-driven conversion optimization</li>
                </ul>
            </div>
            <div>
                <div class="text-5xl heading-serif mb-4" style="color: var(--amber);">Previous</div>
                <h3 class="text-2xl font-bold mb-2">Digital Product Lead</h3>
                <p class="text-gray-600 mb-4">Various Agencies & Clients</p>
                <ul class="space-y-2 text-gray-600">
                    <li>• Led digital transformation for Ford dealerships</li>
                    <li>• Designed and built custom web applications</li>
                    <li>• Managed cross-functional product teams</li>
                    <li>• Delivered £10M+ in client revenue growth</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<!-- Approach -->
<section class="py-20 px-6 bg-cream">
    <div class="max-w-4xl mx-auto" use:reveal>
        <h2 class="text-4xl heading-serif mb-12">My Approach</h2>
        
        <div class="space-y-12">
            <div>
                <div class="flex items-start gap-6">
                    <div class="text-4xl heading-serif" style="color: var(--terracotta);">01</div>
                    <div>
                        <h3 class="text-2xl font-bold mb-3">Strategy First</h3>
                        <p class="text-gray-600 leading-relaxed">
                            Every project starts with understanding the business goals, user needs, and technical constraints. I don't believe in cookie-cutter solutions—each challenge requires a tailored approach.
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <div class="flex items-start gap-6">
                    <div class="text-4xl heading-serif" style="color: var(--amber);">02</div>
                    <div>
                        <h3 class="text-2xl font-bold mb-3">User-Centered Design</h3>
                        <p class="text-gray-600 leading-relaxed">
                            Beautiful interfaces mean nothing if users can't accomplish their goals. I prioritize usability, accessibility, and conversion optimization in every design decision.
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <div class="flex items-start gap-6">
                    <div class="text-4xl heading-serif" style="color: var(--terracotta);">03</div>
                    <div>
                        <h3 class="text-2xl font-bold mb-3">Hands-On Execution</h3>
                        <p class="text-gray-600 leading-relaxed">
                            I don't just create documentation and hand it off. I roll up my sleeves and build, whether that's writing code, setting up analytics, or optimizing conversion funnels.
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <div class="flex items-start gap-6">
                    <div class="text-4xl heading-serif" style="color: var(--amber);">04</div>
                    <div>
                        <h3 class="text-2xl font-bold mb-3">Data-Driven Iteration</h3>
                        <p class="text-gray-600 leading-relaxed">
                            Launch is just the beginning. I use analytics, user feedback, and A/B testing to continuously improve performance and drive measurable business results.
                        </p>
                    </div>
                </div>
            </div> 
        </div>
    </div>
</section>

<!-- Skills -->
<section class="py-20 px-6 bg-white">
    <div class="max-w-4xl mx-auto" use:reveal>
        <h2 class="text-4xl heading-serif mb-12">Core Capabilities</h2>
        
        <div class="grid md:grid-cols-3 gap-8">
            <div>
                <h3 class="text-xl font-bold mb-4" style="color: var(--terracotta);">Strategy & Leadership</h3>
                <ul class="space-y-2 text-gray-600">
                    <li>• Digital commerce strategy</li>
                    <li>• Product roadmapping</li>
                    <li>• Team leadership</li>
                    <li>• Stakeholder management</li>
                    <li>• Budget planning</li>
                </ul>
            </div>
            <div>
                <h3 class="text-xl font-bold mb-4" style="color: var(--amber);">Design & Research</h3>
                <ul class="space-y-2 text-gray-600">
                    <li>• UX/UI design</li>
                    <li>• User research</li>
                    <li>• Brand development</li>
                    <li>• Prototyping</li>
                    <li>• Design systems</li>
                </ul>
            </div>
            <div>
                <h3 class="text-xl font-bold mb-4" style="color: var(--terracotta);">Development & Tech</h3>
                <ul class="space-y-2 text-gray-600">
                    <li>• Shopify/Shopify Plus</li>
                    <li>• HTML/CSS/JavaScript</li>
                    <li>• API integrations</li>
                    <li>• Google Analytics & GTM</li>
                    <li>• SEO optimization</li>
                </ul>
            </div>
        </div>

        <div class="mt-12 pt-12 border-t border-gray-200">
            <h3 class="text-4xl heading-serif mb-6">Tools & Platforms</h3>
            <div class="flex flex-wrap gap-3">
                <span class="skill-tag">Shopify Plus</span>
                <span class="skill-tag">Figma</span>
                <span class="skill-tag">Google Analytics</span>
                <span class="skill-tag">Klaviyo</span>
                <span class="skill-tag">Git/GitHub</span>
                <span class="skill-tag">Hotjar</span>
                <span class="skill-tag">Meta Ads</span>
                <span class="skill-tag">Google Ads</span>
                <span class="skill-tag">Asana</span>
                <span class="skill-tag">Slack</span>
            </div>
        </div>
    </div>
</section>

<!-- CTA -->
<section class="py-32 px-6" style="background: var(--charcoal);">
    <div class="max-w-4xl mx-auto text-center" use:reveal>
        <h2 class="text-5xl heading-serif text-white mb-8">Let's work together</h2>
        <p class="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            I'm currently open to full-time opportunities and select consultancy projects.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:hello@oliverbagley.com" class="cta-button bg-white text-charcoal hover:bg-cream">
                <span>Get in Touch</span>
            </a>
            <a href="/services" class="cta-button border-2 border-white bg-transparent text-white hover:bg-white hover:text-charcoal">
                <span>View Services</span>
            </a>
        </div>
    </div>
</section>
