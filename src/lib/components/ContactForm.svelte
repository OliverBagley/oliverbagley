<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fade, scale } from 'svelte/transition';
	
	export let isOpen = false;
	
	const dispatch = createEventDispatcher();
	
	let name = '';
	let email = '';
	let message = '';
	let isSubmitting = false;
	let submitStatus: 'idle' | 'success' | 'error' = 'idle';
	let errorMessage = '';
	
	function close() {
		dispatch('close');
	}
	
	function handleBackdropClick(e: MouseEvent) {
		if (e.target === e.currentTarget) {
			close();
		}
	}
	
	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			close();
		}
	}
	
	async function handleSubmit(e: Event) {
		e.preventDefault();
		isSubmitting = true;
		submitStatus = 'idle';
		errorMessage = '';
		
		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ name, email, message })
			});
			
			if (!response.ok) {
				const data = await response.json();
				throw new Error(data.error || 'Failed to send message');
			}
			
			submitStatus = 'success';
			name = '';
			email = '';
			message = '';
			
			setTimeout(() => {
				close();
				submitStatus = 'idle';
			}, 2000);
		} catch (error) {
			submitStatus = 'error';
			errorMessage = error instanceof Error ? error.message : 'Something went wrong';
		} finally {
			isSubmitting = false;
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

{#if isOpen}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div 
		class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
		on:click={handleBackdropClick}
		tabindex="-1"
		transition:fade={{ duration: 200 }}
	>
		<div 
			class="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 relative"
			role="dialog"
			aria-modal="true"
			aria-labelledby="contact-form-title"
			transition:scale={{ duration: 200, start: 0.95 }}
		>
			<button
				on:click={close}
				class="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
				aria-label="Close dialog"
			>
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
				</svg>
			</button>
			
			<div class="mb-6">
				<h2 id="contact-form-title" class="text-3xl heading-serif mb-2">Get in touch</h2>
				<p class="text-gray-600">I'll get back to you within 24 hours.</p>
			</div>
			
			<form on:submit={handleSubmit} class="space-y-4">
				<div>
					<label for="name" class="block text-sm font-semibold mb-2">Name</label>
					<input
						id="name"
						type="text"
						bind:value={name}
						required
						disabled={isSubmitting}
						class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
						placeholder="Your name"
					/>
				</div>
				
				<div>
					<label for="email" class="block text-sm font-semibold mb-2">Email</label>
					<input
						id="email"
						type="email"
						bind:value={email}
						required
						disabled={isSubmitting}
						class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
						placeholder="your@email.com"
					/>
				</div>
				
				<div>
					<label for="message" class="block text-sm font-semibold mb-2">Message</label>
					<textarea
						id="message"
						bind:value={message}
						required
						disabled={isSubmitting}
						rows="4"
						class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-transparent transition-all resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
						placeholder="Tell me about your project..."
					></textarea>
				</div>
				
				{#if submitStatus === 'success'}
					<div class="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
						✓ Message sent successfully! I'll be in touch soon.
					</div>
				{/if}
				
				{#if submitStatus === 'error'}
					<div class="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
						✗ {errorMessage}
					</div>
				{/if}
				
				<button
					type="submit"
					disabled={isSubmitting}
					class="w-full py-3 px-6 bg-charcoal text-cream font-semibold rounded-lg hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
				>
					{isSubmitting ? 'Sending...' : 'Send Message'}
				</button>
			</form>
		</div>
	</div>
{/if}
