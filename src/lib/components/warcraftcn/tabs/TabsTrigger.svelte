<script lang="ts">
	import type { Snippet } from 'svelte';
	import { getTabsCtx } from './tabs-context.js';

	let {
		value,
		disabled = false,
		class: className,
		children
	}: {
		value: string;
		disabled?: boolean;
		class?: string;
		children?: Snippet;
	} = $props();

	const ctx = getTabsCtx();
	let isActive = $derived(ctx.activeTab === value);
</script>

<button
	type="button"
	role="tab"
	class={[
		'wc-tab-trigger relative flex h-[38px] w-full min-w-0 items-center justify-center px-2 text-xs font-semibold tracking-wide whitespace-nowrap transition-transform duration-200 select-none sm:h-[40px] sm:min-w-[96px] sm:px-2 sm:text-sm md:h-[44px] md:min-w-[120px] md:px-3 md:text-base lg:h-[48px] lg:min-w-[140px] lg:px-6 lg:text-lg',
		disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer',
		className
	]}
	data-state={isActive ? 'active' : 'inactive'}
	data-orientation={ctx.orientation}
	{disabled}
	onclick={() => ctx.setActive(value)}
>
	<span class="tab-label tab-label-base relative truncate">
		{@render children?.()}
	</span>
</button>
