<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		class: className,
		children
	}: {
		class?: string;
		children?: Snippet;
	} = $props();
</script>

<div
	class={[
		'fantasy wc-tab-list no-scrollbar no-scrollbar relative mb-1 flex w-full gap-1 overflow-x-auto bg-transparent px-1 sm:h-10 sm:gap-2 sm:px-0',
		className
	]}
	role="tablist"
>
	{@render children?.()}
</div>
