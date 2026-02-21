<script lang="ts">
	import EmailLink from '$lib/components/EmailLink.svelte';
</script>

<svelte:head>
	<title>Consultancy — Oliver Bagley</title>
	<meta name="description" content="Strategic eCommerce and digital product consultancy — audits, roadmaps, team coaching, and fractional leadership for brands ready to grow." />
</svelte:head>

<!-- Hero -->
<section class="hero-section relative pt-32 md:pt-40 pb-16 md:pb-24 px-6 overflow-hidden">
	<div class="absolute inset-0 z-0">
		<div class="absolute inset-0" style="background: linear-gradient(135deg, #1f1a10 0%, var(--charcoal) 100%);"></div>
	</div>
	<div class="max-w-7xl mx-auto relative z-10">
		<div class="max-w-3xl">
			<p class="text-sm font-semibold uppercase tracking-widest mb-4" style="color: var(--terracotta);">
				<a href="/" class="hover:opacity-80 transition-opacity">Home</a>
				<span class="mx-2">/</span>
				<a href="/services" class="hover:opacity-80 transition-opacity">Services</a>
				<span class="mx-2">/</span>
				<span>Consultancy</span>
			</p>
			<h1 class="text-5xl lg:text-7xl font-bold text-white mb-6 heading-serif">Consultancy</h1>
			<p class="text-xl lg:text-2xl text-gray-300 mb-8">Strategic guidance for eCommerce brands — whether you need a clear roadmap, an outside perspective, or a fractional technical lead.</p>
			<EmailLink class="cta-button py-3 px-8 inline-flex">
				<span>Book a Call</span>
			</EmailLink>
		</div>
	</div>
</section>

<!-- What I Do -->
<section class="py-20 px-6 bg-white">
	<div class="max-w-4xl mx-auto">
		<p class="text-sm font-semibold uppercase tracking-widest mb-4" style="color: var(--terracotta);">What I deliver</p>
		<h2 class="text-4xl lg:text-5xl heading-serif mb-6">Clarity that drives action</h2>
		<p class="text-xl text-gray-600 leading-relaxed mb-16">Sometimes you don't need more hands — you need the right perspective. I work with founders, product teams, and agencies as a trusted advisor to unblock decisions, define priorities, and ensure your investment goes in the right direction.</p>

		<div class="grid md:grid-cols-2 gap-8">
			{#each [
				{ title: 'eCommerce Audits', description: 'A thorough review of your store — UX, performance, conversion funnel, tech stack, and integrations — with a prioritised action plan.' },
				{ title: 'Platform Selection', description: 'Impartial advice on whether Shopify, Shopify Plus, Hydrogen, or a composable approach is the right fit for your business model and growth ambitions.' },
				{ title: 'Roadmap & Prioritisation', description: 'Cut through the backlog noise. I help you identify what to build next and in what order — based on business impact, not squeaky wheels.' },
				{ title: 'Fractional CTO / Tech Lead', description: 'Ongoing strategic and technical leadership on a part-time basis — ideal for growing brands that need senior guidance without a full-time hire.' },
				{ title: 'Agency & Dev Team Review', description: 'Second-opinion reviews of agency proposals, scoping documents, or existing work — so you know exactly what you\'re getting before committing.' },
				{ title: 'Team Coaching', description: 'Upskill your in-house team on Shopify, modern front-end practices, or product thinking through workshops and structured mentorship.' }
			] as item}
				<div class="p-6 bg-cream rounded-xl">
					<h3 class="text-xl font-bold mb-2">{item.title}</h3>
					<p class="text-gray-600">{item.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Engagement Models -->
<section class="py-20 px-6" style="background: var(--charcoal);">
	<div class="max-w-4xl mx-auto">
		<div class="text-center mb-16">
			<p class="text-sm font-semibold uppercase tracking-widest mb-4" style="color: var(--terracotta);">How we work together</p>
			<h2 class="text-4xl heading-serif text-white mb-4">Flexible engagements</h2>
			<p class="text-xl text-gray-400">I work in a way that fits your stage and budget — no bloated retainers, no unnecessary overhead.</p>
		</div>
		<div class="grid md:grid-cols-3 gap-6">
			{#each [
				{ name: 'One-off Advisory', description: 'A focused session or short engagement to answer a specific question, review work in progress, or map out a plan.' },
				{ name: 'Project Consultancy', description: 'Embedded support during a key project — working alongside your team or agency to ensure the right decisions get made at the right time.' },
				{ name: 'Fractional Leadership', description: 'Ongoing monthly engagement as your part-time technical or product lead — available for calls, reviews, and async support.' }
			] as model}
				<div class="bg-white/5 border border-white/10 rounded-xl p-6">
					<h3 class="text-xl font-bold text-white mb-3">{model.name}</h3>
					<p class="text-gray-400">{model.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- CTA -->
<section class="py-24 px-6 bg-cream border-t border-gray-200">
	<div class="max-w-3xl mx-auto text-center">
		<h2 class="text-4xl lg:text-5xl heading-serif mb-6">Not sure where to start?</h2>
		<p class="text-xl text-gray-600 mb-10">Drop me a message with where you're at and what's keeping you up at night. We'll take it from there.</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<EmailLink class="cta-button py-3 px-8">
				<span>Get in Touch</span>
			</EmailLink>
			<a href="/about" class="cta-button border-2 border-charcoal bg-transparent text-charcoal hover:bg-charcoal hover:text-white py-3 px-8">
				<span>About Me</span>
			</a>
		</div>
	</div>
</section>
