<script lang="ts">
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	if (browser) goto('/services#integrations', { replaceState: true });
</script>

<svelte:head>
	<title>Integrations & Systems — Oliver Bagley</title>
	<meta http-equiv="refresh" content="0;url=/services#integrations" />
</svelte:head>

<section class="pt-40 pb-20 px-6 text-center">
	<p class="text-gray-500">Redirecting… <a href="/services#integrations" class="underline">Click here</a> if you are not redirected.</p>
</section>
