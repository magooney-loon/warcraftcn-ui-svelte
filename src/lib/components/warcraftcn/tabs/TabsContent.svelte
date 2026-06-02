<script lang="ts">
	import type { Snippet } from 'svelte';
	import { getTabsCtx } from './tabs-context.js';

	let {
		value,
		class: className,
		children
	}: {
		value: string;
		class?: string;
		children?: Snippet;
	} = $props();

	const ctx = getTabsCtx();
	let isActive = $derived(ctx.activeTab === value);
</script>

{#if isActive}
	<div
		class={[
			'wc-tab-content relative min-h-35 flex-1 overflow-x-auto bg-cover bg-center bg-no-repeat p-2 text-[#f3e7c4] sm:min-h-45 sm:p-4 md:min-h-55 md:w-full md:p-6 lg:min-h-90 lg:p-20',
			className
		]}
		role="tabpanel"
	>
		{@render children?.()}
	</div>
{/if}
