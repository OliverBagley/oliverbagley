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
	<title>Fox Smart Finance — Case Study</title>
	<meta name="description" content="End-to-end product development: brand identity, UX design, and full-stack development of finance tracking webapp." />
</svelte:head>

<!-- Case Study Hero -->
<section class="case-study-hero pt-32" style="background: linear-gradient(rgba(26, 26, 26, 0.85), rgba(26, 26, 26, 0.85)), url('/media/images/images/foxfinance/Web-Showcase-Project-Presentation.png'); background-size: cover; background-position: center;">
	<div class="max-w-4xl mx-auto px-6 py-20">
		<div class="breadcrumb mb-8">
			<a href="/">Home</a>
			<span>/</span>
			<a href="/#work">Work</a>
			<span>/</span>
			<span class="text-white">Fox Smart Finance</span>
		</div>
		
		<div class="flex gap-3 mb-6">
			<span class="text-xs px-3 py-1 rounded-full" style="background: var(--terracotta); color: white;">Brand</span>
			<span class="text-xs px-3 py-1 rounded-full" style="background: var(--amber); color: white;">Product</span>
			<span class="text-xs px-3 py-1 rounded-full" style="background: var(--terracotta); color: white;">Full-Stack</span>
		</div>
		
		<h1 class="text-5xl lg:text-6xl heading-serif mb-6">Fox Smart Finance</h1>
		<p class="text-2xl text-gray-300">Complete product development from concept to launch: brand identity, UX design, and full-stack development of an intelligent finance tracking webapp.</p>
	</div>
</section>

<!-- Project Overview -->
<section class="py-20 px-6 bg-cream">
	<div class="max-w-4xl mx-auto" use:reveal>
		<div class="grid md:grid-cols-3 gap-8 mb-16">
			<div>
				<h3 class="font-bold mb-2 uppercase text-sm tracking-wider" style="color: var(--terracotta);">Client</h3>
				<p class="text-gray-600">Fox Finance (Startup)</p>
			</div>
			<div>
				<h3 class="font-bold mb-2 uppercase text-sm tracking-wider" style="color: var(--terracotta);">Timeline</h3>
				<p class="text-gray-600">12 weeks</p>
			</div>
			<div>
				<h3 class="font-bold mb-2 uppercase text-sm tracking-wider" style="color: var(--terracotta);">Year</h3>
				<p class="text-gray-600">2024</p>
			</div>
		</div>

		<div class="case-study-content">
			<h2 class="heading-serif">The Challenge</h2>
			<p>
				Fox Finance approached me with a vision for a smart personal finance tracker but no brand identity, design system, or technical infrastructure. They needed someone who could take them from concept to functioning product—handling everything from brand strategy to full-stack development.
			</p>
			<p>
				The challenge was to create a product that stood out in a crowded fintech market while remaining accessible to users overwhelmed by complex financial management tools.
			</p>

			<h2 class="heading-serif">Brand Development</h2>
			<p>
				I started by developing a distinctive brand identity that communicated trust and intelligence without feeling corporate or intimidating. The fox mascot became central to the brand—clever, agile, and friendly—perfectly embodying the "smart" positioning.
			</p>
			<ul>
				<li>Logo design and brand mark development</li>
				<li>Color palette selection focused on warmth and accessibility</li>
				<li>Typography system balancing professional and approachable</li>
				<li>Illustration style for onboarding and feature explanations</li>
				<li>Tone of voice guidelines for all communications</li>
			</ul>

			<div class="case-study-image">
				<img src="/media/images/images/foxfinance/fox_brand_development.png" alt="Fox Finance Brand Identity">
			</div>

			<h2 class="heading-serif">Product Strategy & UX</h2>
			<h3>Understanding the User</h3>
			<p>
				Through user interviews and competitive analysis, I identified that most finance apps overwhelm users with data but fail to provide actionable insights. Fox Finance needed to be different—less spreadsheet, more intelligent advisor.
			</p>

			<h3>Smart Simplicity</h3>
			<p>
				The UX strategy centered on progressive disclosure: show simple, actionable insights upfront with the option to dive deeper when needed. Key features included:
			</p>
			<ul>
				<li>Automated transaction categorization with machine learning</li>
				<li>Personalized spending insights and trend analysis</li>
				<li>Goal setting with realistic achievement tracking</li>
				<li>Smart alerts for unusual spending or bill reminders</li>
				<li>Beautiful data visualization that told a story</li>
			</ul>

			<div class="grid md:grid-cols-3 gap-6 my-12">
				<div class="stat-box">
					<div class="stat-number">1,200+</div>
					<div class="stat-label">Beta Users in First Month</div>
				</div>
				<div class="stat-box">
					<div class="stat-number">4.6/5</div>
					<div class="stat-label">App Store Rating</div>
				</div>
				<div class="stat-box">
					<div class="stat-number">85%</div>
					<div class="stat-label">Weekly Active Users</div>
				</div>
			</div>

			<h2 class="heading-serif">Technical Implementation</h2>
			<p>
				I architected and built the entire technical stack from scratch:
			</p>

			<h3>Frontend</h3>
			<ul>
				<li>React with TypeScript for type safety</li>
				<li>Responsive design system with Tailwind CSS</li>
				<li>D3.js for dynamic data visualizations</li>
				<li>Progressive Web App for mobile experience</li>
			</ul>

			<h3>Backend</h3>
			<ul>
				<li>Node.js/Express API architecture</li>
				<li>PostgreSQL database with optimized queries</li>
				<li>Integration with Plaid for bank connections</li>
				<li>ML categorization engine for transactions</li>
				<li>JWT authentication with security best practices</li>
			</ul>

			<div class="case-study-image">
				<img src="/media/images/images/foxfinance/Home - Desktop.png" alt="Fox Finance App Interface">
			</div>

			<h2 class="heading-serif">Design System</h2>
			<p>
				Created a comprehensive design system to ensure consistency and enable rapid feature development:
			</p>
			<ul>
				<li>Component library with 40+ reusable elements</li>
				<li>Spacing and layout grid system</li>
				<li>Responsive breakpoint guidelines</li>
				<li>Accessibility standards (WCAG 2.1 AA compliant)</li>
				<li>Animation principles for micro-interactions</li>
			</ul>

			<h2 class="heading-serif">Results & Impact</h2>
			<p>
				Fox Finance launched successfully with 1,200+ beta users signing up in the first month. The app achieved a 4.6/5 rating on app stores, with users particularly praising the intuitive interface and actionable insights.
			</p>
			<p>
				The product maintained an impressive 85% weekly active user rate, significantly higher than the fintech industry average of 35-40%. Users reported feeling more in control of their finances and achieving savings goals 3x faster than with previous methods.
			</p>

			<div class="quote-block">
				<blockquote>
					"Oliver took us from just an idea to a fully functional product. His ability to handle brand, design, and development meant we could move incredibly fast without compromising quality."
				</blockquote>
				<cite>— Emma Patterson, Co-Founder at Fox Finance</cite>
			</div>

			<h2 class="heading-serif">Key Learnings</h2>
			<p>
				Building a product end-to-end reinforced how important it is to maintain consistency between brand, design, and technical decisions. Being involved at every level allowed me to make cohesive choices that served the overall vision.
			</p>
			<p>
				The project demonstrated that "smart" doesn't mean complicated. The ML-powered insights worked precisely because they simplified rather than added complexity—providing clear, actionable recommendations instead of raw data dumps.
			</p>
		</div>
	</div>
</section>

<!-- More Projects -->
<section class="py-20 px-6 bg-white">
	<div class="max-w-7xl mx-auto">
		<h2 class="text-4xl heading-serif mb-12">More Projects</h2>
		<div class="grid md:grid-cols-3 gap-8">
			<a href="/work/dll-digital-catalog" class="project-card">
				<img src="/media/images/images/work_thumbs/dll_digital_catalog_thumb.jpg" alt="DLL" class="w-full h-64 object-cover">
				<div class="p-6">
					<h3 class="text-xl font-bold mb-2">DLL Digital Catalog</h3>
					<p class="text-gray-600 text-sm">Design, Development, Photography</p>
				</div>
			</a>
			<a href="/work/fordpass" class="project-card">
				<img src="/media/images/images/work_thumbs/ford_thumb_1.jpg" alt="FordPass" class="w-full h-64 object-cover">
				<div class="p-6">
					<h3 class="text-xl font-bold mb-2">FordPass Transformation</h3>
					<p class="text-gray-600 text-sm">Research, UX/UI, Strategy</p>
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
