<script lang="ts">
	import EmailLink from '$lib/components/EmailLink.svelte';
</script>

<svelte:head>
	<title>Integrations & Systems — Oliver Bagley</title>
	<meta name="description" content="API integrations, automation workflows, and systems architecture that connect your tools and eliminate manual work across your commerce stack." />
</svelte:head>

<!-- Hero -->
<section class="hero-section relative pt-32 md:pt-40 pb-16 md:pb-24 px-6 overflow-hidden">
	<div class="absolute inset-0 z-0">
		<div class="absolute inset-0" style="background: linear-gradient(135deg, #1a2035 0%, var(--charcoal) 100%);"></div>
	</div>
	<div class="max-w-7xl mx-auto relative z-10">
		<div class="max-w-3xl">
			<p class="text-sm font-semibold uppercase tracking-widest mb-4" style="color: var(--terracotta);">
				<a href="/" class="hover:opacity-80 transition-opacity">Home</a>
				<span class="mx-2">/</span>
				<a href="/services" class="hover:opacity-80 transition-opacity">Services</a>
				<span class="mx-2">/</span>
				<span>Integrations & Systems</span>
			</p>
			<h1 class="text-5xl lg:text-7xl font-bold text-white mb-6 heading-serif">Integrations & Systems</h1>
			<p class="text-xl lg:text-2xl text-gray-300 mb-8">Connect your tools, automate your workflows, and build a commerce stack that scales without the manual overhead.</p>
			<EmailLink class="cta-button py-3 px-8 inline-flex">
				<span>Discuss Your Stack</span>
			</EmailLink>
		</div>
	</div>
</section>

<!-- What I Do -->
<section class="py-20 px-6 bg-white">
	<div class="max-w-4xl mx-auto">
		<p class="text-sm font-semibold uppercase tracking-widest mb-4" style="color: var(--terracotta);">What I deliver</p>
		<h2 class="text-4xl lg:text-5xl heading-serif mb-6">Systems that work together</h2>
		<p class="text-xl text-gray-600 leading-relaxed mb-16">Most growing businesses are held back not by their front-end, but by the messy back-end glue holding things together. I design and build integrations that eliminate friction, reduce errors, and give your team time back.</p>

		<div class="grid md:grid-cols-2 gap-8">
			{#each [
				{ title: 'ERP & OMS Integrations', description: 'Connect Shopify to NetSuite, SAP, Brightpearl, or bespoke ERPs — syncing orders, inventory, customers, and fulfilment in real time.' },
				{ title: 'API Development', description: 'Custom REST and GraphQL APIs that bridge gaps between your platforms, expose data to partners, or power internal tooling.' },
				{ title: 'Shopify Flow & Automation', description: 'Workflow automation using Shopify Flow, webhooks, and custom apps to handle tagging, routing, notifications, and more without code.' },
				{ title: 'Third-Party App Integration', description: 'Deep integration of Klaviyo, Gorgias, Recharge, Loyalty Lion, Yotpo, and other ecosystem tools into your Shopify stack.' },
				{ title: 'Data Pipelines', description: 'ETL pipelines and data syncs that keep your analytics, reporting, and operational tools fed with accurate, timely information.' },
				{ title: 'Custom Shopify Apps', description: 'Private and public Shopify apps built with Node.js or Remix — extending Shopify admin, Checkout, or customer accounts for your specific needs.' }
			] as item}
				<div class="p-6 bg-cream rounded-xl">
					<h3 class="text-xl font-bold mb-2">{item.title}</h3>
					<p class="text-gray-600">{item.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Tech Stack -->
<section class="py-20 px-6" style="background: var(--charcoal);">
	<div class="max-w-4xl mx-auto text-center">
		<p class="text-sm font-semibold uppercase tracking-widest mb-4" style="color: var(--terracotta);">Tools & platforms</p>
		<h2 class="text-4xl heading-serif text-white mb-12">What I build with</h2>
		<div class="flex flex-wrap gap-3 justify-center">
			{#each ['Shopify Admin API', 'Shopify Storefront API', 'GraphQL', 'REST', 'Node.js', 'TypeScript', 'Remix', 'Klaviyo API', 'NetSuite', 'Brightpearl', 'Zapier', 'Make (Integromat)', 'Webhooks', 'AWS Lambda'] as tag}
				<span class="skill-tag">{tag}</span>
			{/each}
		</div>
	</div>
</section>

<!-- CTA -->
<section class="py-24 px-6 bg-cream border-t border-gray-200">
	<div class="max-w-3xl mx-auto text-center">
		<h2 class="text-4xl lg:text-5xl heading-serif mb-6">Got a messy stack to untangle?</h2>
		<p class="text-xl text-gray-600 mb-10">Tell me what's breaking and we'll map out a cleaner, more connected solution.</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<EmailLink class="cta-button py-3 px-8">
				<span>Get in Touch</span>
			</EmailLink>
			<a href="/work" class="cta-button border-2 border-charcoal bg-transparent text-charcoal hover:bg-charcoal hover:text-white py-3 px-8">
				<span>See My Work</span>
			</a>
		</div>
	</div>
</section>
