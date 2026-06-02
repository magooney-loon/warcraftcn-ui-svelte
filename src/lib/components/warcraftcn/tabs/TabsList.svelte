<script lang="ts">
	import type { Snippet } from 'svelte';
	import { getTabsCtx } from './tabs-context.js';

	let {
		class: className,
		children
	}: {
		class?: string;
		children?: Snippet;
	} = $props();

	const ctx = getTabsCtx();
</script>

<div
	class={[
		'fantasy wc-tab-list no-scrollbar relative mb-1 flex w-full gap-1 bg-transparent px-1 sm:h-10 sm:gap-2 sm:px-0',
		ctx.orientation === 'horizontal'
			? 'overflow-x-auto overflow-y-hidden'
			: 'h-auto w-auto max-w-60 min-w-25 flex-col overflow-x-hidden overflow-y-auto',
		className
	]}
	style="height:100%"
	role="tablist"
	data-orientation={ctx.orientation}
>
	{@render children?.()}
</div>
