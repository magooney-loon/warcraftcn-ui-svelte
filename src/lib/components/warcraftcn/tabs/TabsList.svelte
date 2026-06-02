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
		'fantasy wc-tab-list relative no-scrollbar bg-transparent flex w-full gap-1 px-1 overflow-x-auto no-scrollbar sm:gap-2 sm:h-[40px] sm:px-0 mb-1',
		className
	]}
	role="tablist"
>
	{@render children?.()}
</div>
