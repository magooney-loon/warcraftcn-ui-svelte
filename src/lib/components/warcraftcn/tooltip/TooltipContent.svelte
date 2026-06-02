<script lang="ts">
	import type { Snippet } from 'svelte';
	import { fade } from 'svelte/transition';
	import { getTooltipCtx } from './tooltip-context.js';

	const variantClasses: Record<string, string> = {
		default: 'wc-tooltip',
		uncommon: 'wc-tooltip-uncommon',
		rare: 'wc-tooltip-rare',
		epic: 'wc-tooltip-epic',
		legendary: 'wc-tooltip-legendary'
	};

	interface Props {
		class?: string;
		children?: Snippet;
	}

	let { class: className, children }: Props = $props();

	const ctx = getTooltipCtx();
</script>

{#if ctx.visible}
	<div
		data-slot="tooltip-content"
		transition:fade={{ duration: 150 }}
		style="position: fixed; left: {ctx.position.x}px; top: {ctx.position.y +
			ctx.sideOffset}px; z-index: 50;"
		class={[
			'fantasy wc-tooltip-base w-fit max-w-xs rounded px-4 py-3 text-sm text-amber-100',
			variantClasses[ctx.variant] ?? variantClasses.default,
			className
		]}
		role="tooltip"
	>
		{@render children?.()}
	</div>
{/if}
