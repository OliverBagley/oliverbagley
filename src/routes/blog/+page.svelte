<script lang="ts">
	import { blogHero, posts } from '$lib/data/blog';

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

		const rect = node.getBoundingClientRect();
		if (rect.top < window.innerHeight && rect.bottom > 0) {
			setTimeout(() => {
				node.style.opacity = '1';
				node.style.transform = 'translateY(0)';
			}, options.delay);
		}

		return { destroy() { observer.disconnect(); } };
	}
</script>

<svelte:head>
	<title>Blog — Oliver Bagley</title>
	<meta name="description" content="Notes on digital commerce, systems integration, and eCommerce platform strategy from Oliver Bagley." />
</svelte:head>

<!-- Hero -->
<section class="hero-section relative pt-32 md:pt-40 pb-16 md:pb-24 px-6 overflow-hidden" style="background: var(--charcoal);">
	<div class="max-w-7xl mx-auto">
		<div class="max-w-3xl">
			<p class="text-sm font-semibold uppercase tracking-widest mb-4" style="color: var(--terracotta);">
				<a href="/" class="hover:opacity-80 transition-opacity">Home</a>
				<span class="mx-2">/</span>
				<span>Blog</span>
			</p>
			<h1 class="text-5xl lg:text-7xl heading-serif mb-6 text-white">{blogHero.heading}</h1>
			<p class="text-xl lg:text-2xl text-gray-300 leading-relaxed">{blogHero.subheading}</p>
		</div>
	</div>
</section>

<!-- Posts -->
<section class="py-20 px-6 bg-white">
	<div class="max-w-4xl mx-auto">
		{#if posts.length === 0}
			<p class="text-gray-500 text-center py-12">Posts coming soon.</p>
		{:else}
			<div class="space-y-12">
				{#each posts as post, i}
					<article class="group" use:reveal={{ delay: i * 100 }}>
						<a href="/blog/posts/{post.slug}" class="block">
							{#if post.coverImage}
								<div class="overflow-hidden rounded-2xl mb-6 aspect-video">
									<img
										src={post.coverImage}
										alt={post.title}
										class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
									/>
								</div>
							{/if}
							<div class="flex items-center gap-3 text-sm text-gray-400 mb-3">
								<span class="font-semibold px-3 py-1 rounded-full text-xs" style="background: var(--cream); color: var(--terracotta);">{post.category}</span>
								<span>{post.date}</span>
								<span>·</span>
								<span>{post.readTime}</span>
							</div>
							<h2 class="text-3xl lg:text-4xl heading-serif mb-4 group-hover:opacity-75 transition-opacity">{post.title}</h2>
							<p class="text-lg text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>
							<span class="text-sm font-semibold inline-flex items-center gap-1" style="color: var(--terracotta);">
								Read post
								<svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
								</svg>
							</span>
						</a>
					</article>
					{#if i < posts.length - 1}
						<hr class="border-gray-100" />
					{/if}
				{/each}
			</div>
		{/if}
	</div>
</section>

<!-- CTA -->
<section class="py-24 px-6 bg-cream border-t border-gray-200">
	<div class="max-w-3xl mx-auto text-center" use:reveal>
		<h2 class="text-4xl heading-serif mb-6">Have a question or project in mind?</h2>
		<p class="text-lg text-gray-600 mb-8">I'm always happy to talk through a challenge — even if you're not sure whether it's something I can help with.</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a href="/services" class="cta-button py-3 px-8">
				<span>View Services</span>
			</a>
			<a href="/about" class="cta-button-outline py-3 px-8">
				<span>About Me</span>
			</a>
		</div>
	</div>
</section>
