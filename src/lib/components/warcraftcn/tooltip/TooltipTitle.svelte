<script lang="ts">
	import type { Snippet } from 'svelte';
	import { getTooltipCtx } from './tooltip-context.js';

	const titleColors: Record<string, string> = {
		default: 'text-amber-400',
		uncommon: 'text-green-400',
		rare: 'text-blue-400',
		epic: 'text-purple-400',
		legendary: 'text-orange-400'
	};

	interface Props {
		class?: string;
		children?: Snippet;
		[key: string]: unknown;
	}

	let { class: className, children, ...restProps }: Props = $props();

	const ctx = getTooltipCtx();
</script>

<div
	data-slot="tooltip-title"
	class={['font-bold', titleColors[ctx.variant] ?? titleColors.default, className]}
	{...restProps}
>
	{@render children?.()}
</div>
