<script lang="ts">
	import type { Snippet } from 'svelte';
	import { setTooltipCtx } from './tooltip-context.js';

	interface Props {
		variant?: 'default' | 'uncommon' | 'rare' | 'epic' | 'legendary';
		sideOffset?: number;
		class?: string;
		children?: Snippet;
		[key: string]: unknown;
	}

	let {
		variant = 'default',
		sideOffset = 8,
		class: className,
		children,
		...restProps
	}: Props = $props();

	let visible = $state(false);
	let position = $state({ x: 0, y: 0 });

	function open() {
		visible = true;
	}

	function close() {
		visible = false;
	}

	function handleMouseEnter(e: MouseEvent) {
		const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
		position = { x: rect.left, y: rect.bottom };
		visible = true;
	}

	function handleMouseLeave() {
		visible = false;
	}

	setTooltipCtx({
		get visible() {
			return visible;
		},
		get position() {
			return position;
		},
		get variant() {
			return variant;
		},
		get sideOffset() {
			return sideOffset;
		},
		open,
		close
	});
</script>

<div
	data-slot="tooltip"
	class={['relative inline-flex', className]}
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
	{...restProps}
>
	{@render children?.()}
</div>
