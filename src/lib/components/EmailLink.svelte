<script lang="ts">
	import { onMount } from 'svelte';

	let className = '';
	export { className as class };

	/** Pass showAddress to render the email address itself as the link text */
	export let showAddress = false;

	// Split to prevent assembly in SSR — bots crawl HTML, not client-side JS
	const u = 'hello';
	const d = 'oliverbagley.com';

	let href = '#';
	let address = '';

	onMount(() => {
		address = `${u}@${d}`;
		href = `mailto:${address}`;
	});
</script>

<a {href} class={className}>
	{#if showAddress}
		{address || 'Email'}
	{:else}
		<slot />
	{/if}
</a>
