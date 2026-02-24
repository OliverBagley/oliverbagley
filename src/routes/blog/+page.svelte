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

<!-- Page Header — clean editorial, cream background -->
<div class="pt-32 md:pt-40 pb-0 bg-cream">
	<div class="max-w-4xl mx-auto px-6">
		<!-- Breadcrumb -->
		<p class="text-sm font-semibold uppercase tracking-widest mb-10" style="color: var(--terracotta);">
			<a href="/" class="hover:opacity-70 transition-opacity">Home</a>
			<span class="mx-2 opacity-40">/</span>
			<span class="opacity-60">Blog</span>
		</p>
		<h1 class="text-5xl lg:text-7xl heading-serif mb-5">{blogHero.heading}</h1>
		<p class="text-xl text-gray-600 max-w-2xl leading-relaxed">{blogHero.subheading}</p>
	</div>
</div>

<!-- Posts -->
<section class="py-16 px-6 bg-cream">
	<div class="max-w-4xl mx-auto">
		{#if posts.length === 0}
			<p class="text-gray-400 py-12 border-t border-gray-200">Posts coming soon.</p>
		{:else}
			<div class="space-y-0">
				{#each posts as post, i}
					<article class="group border-t border-gray-200 py-14" use:reveal={{ delay: i * 80 }}>
						<a href="/blog/posts/{post.slug}" class="block">
							<div class="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">

								<!-- Text -->
								<div class="lg:col-span-3 order-2 lg:order-1">
									<div class="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-5">
										<span class="text-xs font-semibold px-3 py-1 rounded-full" style="background: rgba(215,122,72,0.1); color: var(--terracotta);">{post.category}</span>
										<span class="opacity-40">·</span>
										<span>{post.date}</span>
										<span class="opacity-40">·</span>
										<span>{post.readTime}</span>
									</div>
									<h2 class="text-3xl lg:text-4xl heading-serif mb-4 leading-tight group-hover:opacity-75 transition-opacity duration-300">{post.title}</h2>
									<p class="text-gray-600 leading-relaxed mb-6">{post.excerpt}</p>
									<span class="text-sm font-semibold inline-flex items-center gap-2 transition-all duration-300 group-hover:gap-3" style="color: var(--terracotta);">
										Read post
										<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
										</svg>
									</span>
								</div>

								<!-- Image -->
								{#if post.coverImage}
									<div class="lg:col-span-2 order-1 lg:order-2">
										<div class="overflow-hidden rounded-xl aspect-video lg:aspect-[4/3]">
											<img
												src={post.coverImage}
												alt={post.title}
												class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
											/>
										</div>
									</div>
								{/if}

							</div>
						</a>
					</article>
				{/each}
			</div>

			<!-- More posts note — honest, no over-promise -->
			<p class="text-sm text-gray-400 pt-8 border-t border-gray-100 font-code">More posts in progress.</p>
		{/if}
	</div>
</section>

<!-- CTA -->
<section class="py-24 px-6 bg-white border-t border-gray-200">
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
