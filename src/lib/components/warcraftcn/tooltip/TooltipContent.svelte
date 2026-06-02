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

	// Compute the fixed position style based on side
	const positionStyle = $derived.by(() => {
		const { position, side, sideOffset } = ctx;
		if (side === 'bottom') {
			return `position:fixed; left:${position.x}px; top:${position.y + sideOffset}px; transform:translateX(-50%); z-index:50;`;
		} else if (side === 'top') {
			return `position:fixed; left:${position.x}px; top:${position.y - sideOffset}px; transform:translate(-50%,-100%); z-index:50;`;
		} else if (side === 'left') {
			return `position:fixed; left:${position.x - sideOffset}px; top:${position.y}px; transform:translate(-100%,-50%); z-index:50;`;
		} else {
			return `position:fixed; left:${position.x + sideOffset}px; top:${position.y}px; transform:translateY(-50%); z-index:50;`;
		}
	});
</script>

{#if ctx.visible}
	<div
		data-slot="tooltip-content"
		transition:fade={{ duration: 150 }}
		style={positionStyle}
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
