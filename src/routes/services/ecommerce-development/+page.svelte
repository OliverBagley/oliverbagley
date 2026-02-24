<script lang="ts">
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	if (browser) goto('/services#platform', { replaceState: true });
</script>

<svelte:head>
	<title>Platform Development — Oliver Bagley</title>
	<meta http-equiv="refresh" content="0;url=/services#platform" />
</svelte:head>

<section class="pt-40 pb-20 px-6 text-center">
	<p class="text-gray-500">Redirecting… <a href="/services#platform" class="underline">Click here</a> if you are not redirected.</p>
</section>
