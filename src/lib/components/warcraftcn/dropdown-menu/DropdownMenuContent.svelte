<script lang="ts">
	import type { Snippet } from 'svelte';
	import { fade } from 'svelte/transition';
	import { getDropdownMenuCtx } from './dropdown-menu-context.js';
	import { clickOutside } from '$lib/actions/clickOutside.js';

	interface Props {
		class?: string;
		children?: Snippet;
		[key: string]: unknown;
	}

	let { class: className = '', children, ...rest }: Props = $props();
	const ctx = getDropdownMenuCtx();
</script>

{#if ctx.open}
	<div
		{...rest}
		use:clickOutside={ctx.close}
		transition:fade={{ duration: 150 }}
		class={[
			'fantasy wc-dropdown-border absolute top-full left-0 z-50 min-w-40 overflow-hidden border-12 border-solid pb-4 text-amber-100 [border-image-repeat:stretch] [border-image-slice:12_fill]',
			className
		]}
		data-slot="dropdown-menu-content"
	>
		{@render children?.()}
	</div>
{/if}
