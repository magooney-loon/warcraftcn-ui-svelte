<script lang="ts">
	import type { Snippet } from 'svelte';
	import { fade, scale } from 'svelte/transition';
	import { getModalCtx } from './modal-context.js';
	import { Card } from '../card/index.js';

	interface Props {
		size?: 'default' | 'sm';
		class?: string;
		children?: Snippet;
	}

	let { size = 'default', class: className = '', children }: Props = $props();
	const ctx = getModalCtx();

	function handleBackdrop() {
		ctx.close();
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') ctx.close();
	}
</script>

{#if ctx.open}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="fixed inset-0 z-50 flex items-center justify-center p-4"
		data-slot="modal-overlay"
		onkeydown={handleKeydown}
	>
		<!-- Backdrop -->
		<div
			class="absolute inset-0 bg-black/70 backdrop-blur-sm"
			transition:fade={{ duration: 150 }}
			onclick={handleBackdrop}
			role="presentation"
		></div>

		<!-- Modal Card -->
		<div
			class="relative z-10 w-full max-w-lg"
			transition:scale={{ duration: 200, start: 0.95 }}
			role="dialog"
			aria-modal="true"
		>
			<Card {size} class={className}>
				{@render children?.()}
			</Card>
		</div>
	</div>
{/if}
