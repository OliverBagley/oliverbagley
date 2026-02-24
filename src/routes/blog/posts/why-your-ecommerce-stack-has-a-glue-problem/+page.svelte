<script lang="ts">
	import EmailLink from '$lib/components/EmailLink.svelte';

	const post = {
		title: "Why your eCommerce stack has a glue problem",
		date: 'February 2026',
		readTime: '6 min read',
		category: 'Systems Integration',
		coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop'
	};
</script>

<svelte:head>
	<title>{post.title} — Oliver Bagley</title>
	<meta name="description" content="Most eCommerce problems aren't platform problems. They're integration problems — the messy, invisible layer between your storefront, ERP, and everything in between." />
	<meta name="referrer" content="no-referrer" />
</svelte:head>

<!-- Hero -->
<section class="relative pt-32 md:pt-40 pb-0 overflow-hidden" style="background: var(--charcoal);">
	<div class="max-w-4xl mx-auto px-6 pb-12">
		<p class="text-sm font-semibold uppercase tracking-widest mb-6" style="color: var(--terracotta);">
			<a href="/" class="hover:opacity-80 transition-opacity">Home</a>
			<span class="mx-2">/</span>
			<a href="/blog" class="hover:opacity-80 transition-opacity">Blog</a>
			<span class="mx-2">/</span>
			<span>{post.category}</span>
		</p>
		<div class="flex items-center gap-3 text-sm text-gray-400 mb-6">
			<span class="font-semibold px-3 py-1 rounded-full text-xs" style="background: rgba(255,255,255,0.1); color: var(--terracotta);">{post.category}</span>
			<span>{post.date}</span>
			<span>·</span>
			<span>{post.readTime}</span>
		</div>
		<h1 class="text-4xl lg:text-6xl heading-serif text-white mb-6 leading-tight">{post.title}</h1>
		<p class="text-xl text-gray-300 leading-relaxed">Most commerce problems aren't platform problems. They're integration problems — the messy, invisible layer between your storefront, your ERP, and everything in between.</p>
	</div>
	{#if post.coverImage}
		<div class="max-w-5xl mx-auto px-6">
			<div class="overflow-hidden rounded-t-2xl aspect-video">
				<img src={post.coverImage} alt={post.title} class="w-full h-full object-cover" />
			</div>
		</div>
	{/if}
</section>

<!-- Article Body -->
<section class="py-16 px-6 bg-white">
	<div class="max-w-3xl mx-auto">
		<div class="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">

			<p>
				When a brand's eCommerce operation starts to break down, the instinct is almost always to blame the platform. "We need to move off Magento." "Shopify can't do what we need." "Our checkout is outdated."
			</p>

			<p>
				Sometimes that's true. But more often, the platform is fine — what's broken is everything around it.
			</p>

			<h2 class="text-3xl heading-serif mt-12 mb-4">The invisible layer nobody talks about</h2>

			<p>
				Every commerce operation has a stack — the storefront, the ERP, the email platform, the warehouse management system, the returns portal, the analytics tool. Most teams spend a lot of time thinking about each of these in isolation: is Shopify the right choice? Should we implement NetSuite? Which email platform has the best deliverability?
			</p>

			<p>
				What gets far less attention is the glue between them. How does an order placed on your storefront get into your ERP? How does inventory update flow back to the product catalogue? When a customer contacts support, do they see the same view of that customer's history that your warehouse team sees?
			</p>

			<p>
				This is the glue problem. And it compounds.
			</p>

			<h2 class="text-3xl heading-serif mt-12 mb-4">How integration debt accumulates</h2>

			<p>
				In the early stages of most eCommerce businesses, integrations are handled one of three ways:
			</p>

			<ul class="space-y-3 pl-4">
				<li class="flex items-start gap-3">
					<span class="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style="background: var(--terracotta);"></span>
					<span><strong>Manually.</strong> Someone exports a CSV from the platform and imports it into the ERP every morning. Works until it doesn't, and then you've got a data integrity problem.</span>
				</li>
				<li class="flex items-start gap-3">
					<span class="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style="background: var(--terracotta);"></span>
					<span><strong>Through a third-party app.</strong> There's an off-the-shelf connector between Platform A and System B. It almost does what you need, and the "almost" creates workarounds that eventually become critical dependencies nobody understands.</span>
				</li>
				<li class="flex items-start gap-3">
					<span class="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style="background: var(--terracotta);"></span>
					<span><strong>Through bespoke code nobody remembers writing.</strong> A developer at a previous agency built a custom integration five years ago. It lives on a server somewhere. Nobody has touched it since because the last time someone did, orders went missing.</span>
				</li>
			</ul>

			<p class="mt-6">
				Each of these approaches works — until the business grows, the requirements change, or something breaks at 2am on a Saturday.
			</p>

			<h2 class="text-3xl heading-serif mt-12 mb-4">What a proper integration layer looks like</h2>

			<p>
				The goal isn't to replace everything with a perfect, future-proof system (that doesn't exist). The goal is to build an integration layer that is:
			</p>

			<div class="grid md:grid-cols-2 gap-4 my-8 not-prose">
				{#each [
					{ title: 'Visible', description: 'You can see what\'s flowing between systems, what\'s failed, and what\'s backed up — without having to dig into server logs.' },
					{ title: 'Resilient', description: 'When something upstream fails, messages queue rather than disappear. You can replay them once the issue is resolved.' },
					{ title: 'Observable', description: 'Errors are surfaced proactively, not discovered when a customer calls to ask where their order is.' },
					{ title: 'Maintainable', description: 'Someone who didn\'t build it can understand it, debug it, and extend it — ideally without touching the core platforms on either end.' }
				] as item}
					<div class="p-5 bg-cream rounded-xl">
						<h3 class="font-bold mb-2">{item.title}</h3>
						<p class="text-sm text-gray-600">{item.description}</p>
					</div>
				{/each}
			</div>

			<p>
				For most mid-market brands, this means adopting a middleware layer — something like Alumio, which provides a visual interface for building and monitoring data flows, with built-in logging, error handling, and retry logic. It sits between your platforms and handles the translation of data between them.
			</p>

			<p>
				The alternative — point-to-point integrations between every system — quickly becomes a web of dependencies that's impossible to reason about. Every new platform you add means new integrations with every existing system. A middleware layer gives you one place to route everything through.
			</p>

			<h2 class="text-3xl heading-serif mt-12 mb-4">The practical takeaway</h2>

			<p>
				Before you decide to replatform, change ERP, or onboard a new marketing tool, audit your integration layer. Ask yourself:
			</p>

			<ul class="space-y-2 pl-4 my-4">
				<li class="flex items-start gap-3">
					<span style="color: var(--terracotta);" class="font-bold mt-0.5">—</span>
					<span>If one integration fails, how would you know?</span>
				</li>
				<li class="flex items-start gap-3">
					<span style="color: var(--terracotta);" class="font-bold mt-0.5">—</span>
					<span>How long does it take for an order placed online to appear accurately in your ERP?</span>
				</li>
				<li class="flex items-start gap-3">
					<span style="color: var(--terracotta);" class="font-bold mt-0.5">—</span>
					<span>When was the last time you had a data discrepancy between systems that took hours (or days) to diagnose?</span>
				</li>
				<li class="flex items-start gap-3">
					<span style="color: var(--terracotta);" class="font-bold mt-0.5">—</span>
					<span>Is there any part of your integration layer that only one person understands?</span>
				</li>
			</ul>

			<p>
				If any of those land uncomfortably, you probably don't have a platform problem. You have a glue problem.
			</p>

			<p class="text-gray-500 italic border-l-4 pl-4 my-8" style="border-color: var(--terracotta);">
				The good news is that glue problems are very fixable — and fixing them usually unlocks far more value than a platform migration would.
			</p>

		</div>

		<!-- Author / CTA -->
		<div class="mt-16 pt-12 border-t border-gray-100">
			<div class="flex items-center gap-4 mb-8">
				<div class="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
					<img src="/media/images/oliver.jpg" alt="Oliver Bagley" class="w-full h-full object-cover" />
				</div>
				<div>
					<p class="font-bold">Oliver Bagley</p>
					<p class="text-sm text-gray-500">Digital Commerce Systems Lead</p>
				</div>
			</div>

			<div class="bg-cream rounded-2xl p-8">
				<h3 class="text-2xl heading-serif mb-3">Got a glue problem?</h3>
				<p class="text-gray-600 mb-6">I help growing eCommerce brands design and build integration layers that hold together under real-world pressure — from ERP connectors to full middleware architecture.</p>
				<div class="flex flex-col sm:flex-row gap-3">
					<EmailLink class="cta-button py-2.5 px-6 text-sm">
						<span>Get in Touch</span>
					</EmailLink>
					<a href="/services#integrations" class="cta-button-outline py-2.5 px-6 text-sm">
						<span>Integrations Services</span>
					</a>
				</div>
			</div>
		</div>

		<!-- Back link -->
		<div class="mt-10">
			<a href="/blog" class="text-sm font-semibold inline-flex items-center gap-1 hover:opacity-70 transition-opacity" style="color: var(--terracotta);">
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
				</svg>
				Back to Blog
			</a>
		</div>
	</div>
</section>
