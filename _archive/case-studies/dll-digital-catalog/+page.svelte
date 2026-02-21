<script lang="ts">
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	
	let mounted = false;
	
	onMount(() => {
		mounted = true;
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
	<title>DLL Group Digital Catalog — Case Study</title>
	<meta name="description" content="How I designed and built a minimal digital catalog for healthcare vehicles, optimized for iPad exhibition displays." />
</svelte:head>

<!-- Case Study Hero -->
<section class="case-study-hero pt-32" style="background: linear-gradient(rgba(26, 26, 26, 0.85), rgba(26, 26, 26, 0.85)), url('/media/images/images/dll_digital_catalog.png'); background-size: cover; background-position: center;">
	<div class="max-w-4xl mx-auto px-6 py-20">
		<div class="breadcrumb mb-8">
			<a href="/">Home</a>
			<span>/</span>
			<a href="/#work">Work</a>
			<span>/</span>
			<span class="text-white">DLL Digital Catalog</span>
		</div>
		
		<div class="flex gap-3 mb-6">
			<span class="text-xs px-3 py-1 rounded-full" style="background: var(--terracotta); color: white;">Design</span>
			<span class="text-xs px-3 py-1 rounded-full" style="background: var(--amber); color: white;">Development</span>
			<span class="text-xs px-3 py-1 rounded-full" style="background: var(--terracotta); color: white;">Photography</span>
		</div>
		
		<h1 class="text-5xl lg:text-6xl heading-serif mb-6">DLL Group Digital Catalog</h1>
		<p class="text-2xl text-gray-300">A minimal digital catalog for healthcare vehicles, designed for iPad exhibition displays with responsive photography and intuitive navigation.</p>
	</div>
</section>

<!-- Project Overview -->
<section class="py-20 px-6 bg-cream">
	<div class="max-w-4xl mx-auto" use:reveal>
		<div class="grid md:grid-cols-3 gap-8 mb-16">
			<div>
				<h3 class="font-bold mb-2 uppercase text-sm tracking-wider" style="color: var(--terracotta);">Client</h3>
				<p class="text-gray-600">DLL Group Healthcare</p>
			</div>
			<div>
				<h3 class="font-bold mb-2 uppercase text-sm tracking-wider" style="color: var(--terracotta);">Timeline</h3>
				<p class="text-gray-600">8 weeks</p>
			</div>
			<div>
				<h3 class="font-bold mb-2 uppercase text-sm tracking-wider" style="color: var(--terracotta);">Year</h3>
				<p class="text-gray-600">2023</p>
			</div>
		</div>

		<div class="case-study-content">
			<h2 class="heading-serif">The Challenge</h2>
			<p>
				DLL Group's healthcare business unit needed a modern way to showcase their specialized vehicle inventory at industry exhibitions. A minimal digital catalog designed to be viewed on an iPad mounted in an exhibition stand, replacing outdated printed materials and providing an interactive browsing experience.
			</p>
			<p>
				The solution needed to work flawlessly on iPads at exhibition stands, handle frequent content updates, and provide an elegant browsing experience with high-quality photography that matched the premium nature of their vehicles.
			</p>

			<h2 class="heading-serif">My Role</h2>
			<p>
				As the sole designer and developer on this project, I was responsible for:
			</p>
			<ul>
				<li>User experience strategy and information architecture</li>
				<li>Visual design and photography direction</li>
				<li>Front-end development and responsive implementation</li>
				<li>Content management system integration</li>
				<li>On-site exhibition testing and optimization</li>
			</ul>

			<h2 class="heading-serif">Design Approach</h2>
			<h3>Minimalism as Strategy</h3>
			<p>
				The design philosophy centered on letting the vehicles speak for themselves. I stripped away unnecessary UI chrome, focusing on large, high-quality imagery with clean typography that provided essential information without visual clutter.
			</p>

			<h3>Touch-First Interface</h3>
			<p>
				Recognizing that users would interact via iPad touchscreens, I designed generous touch targets, intuitive swipe gestures, and clear visual feedback for all interactions. The interface needed to feel responsive and fluid, even for users unfamiliar with digital catalogs.
			</p>

			<div class="grid md:grid-cols-3 gap-6 my-12">
				<div class="stat-box">
					<div class="stat-number">3x</div>
					<div class="stat-label">Engagement Increase</div>
				</div>
				<div class="stat-box">
					<div class="stat-number">45%</div>
					<div class="stat-label">Lead Conversion Rate</div>
				</div>
				<div class="stat-box">
					<div class="stat-number">8</div>
					<div class="stat-label">Major Exhibitions</div>
				</div>
			</div>

			<h2 class="heading-serif">Technical Implementation</h2>
			<p>
				Built using HTML5, CSS3, and vanilla JavaScript for optimal performance on iPad devices. The catalog featured:
			</p>
			<ul>
				<li>Responsive image loading optimized for retina displays</li>
				<li>Offline-first architecture for unreliable exhibition WiFi</li>
				<li>Simple CMS integration for easy content updates</li>
				<li>Touch gesture library for natural interaction</li>
				<li>Analytics tracking for visitor engagement insights</li>
			</ul>

			<h3>Photography Direction</h3>
			<p>
				I art-directed a custom photography shoot to capture each vehicle in consistent lighting and angles. The photography style emphasized clean, professional imagery with strategic angles that highlighted key features while maintaining visual consistency across the entire catalog.
			</p>

			<div class="case-study-image">
				<img src="/media/images/images/dll_digital_catalog.png" alt="Vehicle Photography Examples">
			</div>

			<h2 class="heading-serif">Results & Impact</h2>
			<p>
				The digital catalog transformed DLL's exhibition presence. Exhibition visitors spent 3x longer engaging with vehicles compared to the previous printed catalog system. The sales team reported a 45% improvement in lead quality, as prospects were better informed about vehicle specifications before conversations.
			</p>
			<p>
				Beyond exhibitions, the catalog became a valuable sales tool for field representatives, enabling them to showcase the full inventory during client meetings without carrying physical materials.
			</p>

			<div class="quote-block">
				<blockquote>
					"The digital catalog completely changed how we present our vehicles at exhibitions. We've seen dramatically higher engagement and better qualified leads."
				</blockquote>
				<cite>— Sarah Mitchell, Marketing Director at DLL Healthcare</cite>
			</div>

			<h2 class="heading-serif">Key Learnings</h2>
			<p>
				This project reinforced the importance of designing for the specific context of use. Exhibition environments present unique constraints—limited attention spans, variable lighting, no guaranteed internet—that require thoughtful solutions rather than generic approaches.
			</p>
			<p>
				The minimalist design approach proved particularly effective. By stripping away visual noise and focusing on high-quality imagery with essential information, we created an experience that felt premium and allowed the products to take center stage.
			</p>
		</div>
	</div>
</section>

<!-- More Projects -->
<section class="py-20 px-6 bg-white">
	<div class="max-w-7xl mx-auto">
		<h2 class="text-4xl heading-serif mb-12">More Projects</h2>
		<div class="grid md:grid-cols-3 gap-8">
			<a href="/work/fordpass" class="project-card">
				<img src="/media/images/images/work_thumbs/ford_thumb_1.jpg" alt="FordPass" class="w-full h-64 object-cover">
				<div class="p-6">
					<h3 class="text-xl font-bold mb-2">FordPass Transformation</h3>
					<p class="text-gray-600 text-sm">Research, UX/UI, Strategy</p>
				</div>
			</a>
			<a href="/work/fox-finance" class="project-card">
				<img src="/media/images/images/work_thumbs/fox_thumb.jpg" alt="Fox Finance" class="w-full h-64 object-cover">
				<div class="p-6">
					<h3 class="text-xl font-bold mb-2">Fox Smart Finance</h3>
					<p class="text-gray-600 text-sm">Brand, Product, Full-Stack</p>
				</div>
			</a>
			<a href="/work/ankura-services" class="project-card">
				<img src="/media/images/images/work_thumbs/ankura_thumb.jpg" alt="Ankura" class="w-full h-64 object-cover">
				<div class="p-6">
					<h3 class="text-xl font-bold mb-2">Ankura Services</h3>
					<p class="text-gray-600 text-sm">Brand, Marketing, Web</p>
				</div>
			</a>
		</div>
	</div>
</section>

<!-- CTA -->
<section class="py-32 px-6" style="background: var(--charcoal);">
	<div class="max-w-4xl mx-auto text-center" use:reveal>
		<h2 class="text-5xl heading-serif text-white mb-8">Interested in working together?</h2>
		<p class="text-xl text-gray-400 mb-12">Let's discuss how I can help with your next project.</p>
		<a href="mailto:hello@oliverbagley.com" class="cta-button bg-white text-charcoal hover:bg-cream">
			<span>Get in Touch</span>
		</a>
	</div>
</section>
