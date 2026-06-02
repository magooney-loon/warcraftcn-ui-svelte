<script lang="ts">
	import type { Snippet } from 'svelte';
	import { setTooltipCtx } from './tooltip-context.js';

	type Side = 'top' | 'bottom' | 'left' | 'right';

	interface Props {
		variant?: 'default' | 'uncommon' | 'rare' | 'epic' | 'legendary';
		side?: Side;
		sideOffset?: number;
		class?: string;
		children?: Snippet;
		[key: string]: unknown;
	}

	let {
		variant = 'default',
		side = 'bottom',
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

		if (side === 'bottom') {
			position = { x: rect.left + rect.width / 2, y: rect.bottom };
		} else if (side === 'top') {
			position = { x: rect.left + rect.width / 2, y: rect.top };
		} else if (side === 'left') {
			position = { x: rect.left, y: rect.top + rect.height / 2 };
		} else {
			position = { x: rect.right, y: rect.top + rect.height / 2 };
		}

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
		get side() {
			return side;
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
