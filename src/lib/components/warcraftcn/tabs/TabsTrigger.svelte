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
		'wc-tab-trigger relative flex w-full min-w-0 items-center justify-center px-2 text-xs font-semibold tracking-wide whitespace-nowrap transition-transform duration-200 select-none',
		'h-9.5 sm:h-10 sm:min-w-24 sm:px-2 sm:text-sm md:h-11 md:min-w-30 md:px-3 md:text-base lg:h-12 lg:min-w-35 lg:px-6 lg:text-lg',
		ctx.orientation === 'vertical'
			? 'wc-tab-trigger-vertical mb-0.5 h-9.5 min-h-9.5 max-w-full justify-start rounded-l-lg border-l-4 border-solid border-transparent px-2 text-left md:px-4 lg:px-6'
			: '',
		disabled ? 'cursor-not-allowed bg-gray-700/50 text-gray-400 opacity-60' : 'cursor-pointer',
		className
	]}
	data-orientation={ctx.orientation}
	data-state={isActive ? 'active' : 'inactive'}
	aria-selected={isActive}
	{disabled}
	onclick={() => !disabled && ctx.setActive(value)}
>
	<span
		class={[
			'tab-label tab-label-base relative truncate',
			ctx.orientation === 'vertical' && 'tab-label-vertical'
		]}
	>
		{@render children?.()}
	</span>
	<span class="tab-burst"></span>
</button>
