<script lang="ts">
	import type { Snippet } from 'svelte';
	import { slide } from 'svelte/transition';
	import { getAccordionCtx } from './accordion-context.js';

	let {
		value,
		class: className,
		children
	}: {
		value: string;
		class?: string;
		children?: Snippet;
	} = $props();

	const ctx = getAccordionCtx();
	let isOpen = $derived(ctx.isOpen(value));
</script>

{#if isOpen}
	<div
		class={[
			'wc-accordion-scroll-content wc-accordion-content-border overflow-hidden border-0 border-solid bg-cover bg-center bg-no-repeat text-sm transition-[filter] duration-300 ease-out will-change-[height,opacity,filter] [border-image-repeat:stretch] [border-image-slice:16_fill]',
			className
		]}
		transition:slide={{ duration: 250 }}
	>
		<div
			class={[
				'px-5 pt-2 pb-4 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4'
			]}
		>
			<div class="relative my-6">
				<div class="h-px bg-gradient-to-r from-transparent via-[#9a6f2f] to-transparent"></div>
				<div class="absolute inset-0 -top-4 flex justify-center">
					<span class="px-3 text-[#b98a3a] drop-shadow-[0_0_4px_rgba(120,78,24,0.45)]">✦</span>
				</div>
			</div>
			{@render children?.()}
		</div>
	</div>
{/if}
