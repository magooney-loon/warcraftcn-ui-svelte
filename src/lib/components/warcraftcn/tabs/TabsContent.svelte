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
			'wc-tab-content relative min-h-[140px] flex-1 overflow-x-auto bg-cover bg-center bg-no-repeat p-2 text-[#f3e7c4] sm:min-h-[180px] sm:p-4 md:min-h-[220px] md:w-full md:p-6 lg:min-h-[360px] lg:p-20',
			className
		]}
		role="tabpanel"
	>
		{@render children?.()}
	</div>
{/if}
