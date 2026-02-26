<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.status} — Oliver Bagley</title>
	<meta name="description" content={$page.status === 404 ? 'Page not found.' : 'Something went wrong.'} />
	<meta name="robots" content="noindex" />
</svelte:head>

<!-- Hero -->
<section class="relative pt-32 md:pt-40 pb-20 px-6 overflow-hidden min-h-[60vh] flex items-center">
	<div class="absolute inset-0 z-0">
		<img
			src="/media/images/hero/photo-1433838552652-f9a46b332c40.avif"
			alt="Mountain landscape"
			class="w-full h-full object-cover"
		/>
		<div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
	</div>

	<div class="max-w-7xl mx-auto w-full relative z-10">
		<!-- Breadcrumb -->
		<p class="text-sm font-semibold uppercase tracking-widest mb-4" style="color: var(--terracotta);">
			<a href="/" class="hover:opacity-80 transition-opacity">Home</a>
			<span class="mx-2">/</span>
			<span>{$page.status}</span>
		</p>

		<h1 class="text-8xl lg:text-9xl heading-serif mb-4 text-white leading-none">
			{$page.status}
		</h1>

		<p class="text-2xl lg:text-3xl text-gray-300 mb-8 max-w-xl leading-relaxed">
			{#if $page.status === 404}
				This page doesn't exist — it may have moved or been removed.
			{:else}
				Something went wrong on our end. Try refreshing, or head back home.
			{/if}
		</p>

		<div class="flex flex-wrap gap-4">
			<a
				href="/"
				class="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-200 hover:opacity-80"
				style="background: var(--terracotta);"
			>
				← Back to home
			</a>
			<a
				href="/work"
				class="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border border-white/30 text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-200"
			>
				View my work
			</a>
		</div>
	</div>
</section>

<!-- Quick links -->
<section class="py-16 px-6 bg-cream">
	<div class="max-w-7xl mx-auto">
		<p class="text-sm font-semibold uppercase tracking-widest mb-8 text-gray-500">You might be looking for</p>
		<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
			{#each [
				{ href: '/about',    label: 'About'    },
				{ href: '/work',     label: 'Work'     },
				{ href: '/services', label: 'Services' },
				{ href: '/blog',     label: 'Blog'     }
			] as link}
				<a
					href={link.href}
					class="group flex items-center justify-between p-5 rounded-2xl border border-gray-200 bg-white hover:border-[color:var(--terracotta)] hover:shadow-md transition-all duration-200"
				>
					<span class="font-semibold text-gray-800 group-hover:text-[color:var(--terracotta)] transition-colors">{link.label}</span>
					<span class="text-gray-400 group-hover:text-[color:var(--terracotta)] transition-colors">→</span>
				</a>
			{/each}
		</div>
	</div>
</section>
