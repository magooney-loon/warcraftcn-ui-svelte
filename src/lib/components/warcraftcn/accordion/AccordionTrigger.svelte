<script lang="ts">
	import type { Snippet } from 'svelte';
	import { getAccordionCtx } from './accordion-context.js';

	const iconClasses: Record<string, string> = {
		sword: 'wc-accordion-medieval-icon--sword',
		shield: 'wc-accordion-medieval-icon--shield',
		'rune-stone': 'wc-accordion-medieval-icon--rune-stone'
	};

	let {
		value,
		icon = 'sword',
		class: className,
		children
	}: {
		value: string;
		icon?: 'sword' | 'shield' | 'rune-stone';
		class?: string;
		children?: Snippet;
	} = $props();

	const ctx = getAccordionCtx();
	let isOpen = $derived(ctx.isOpen(value));
</script>

<h3
	class={[
		'wc-accordion-header-border m-0 mt-0 mb-0 flex min-h-14 border-6 border-solid bg-cover bg-center bg-no-repeat [border-image-repeat:stretch] [border-image-slice:16_fill]'
	]}
>
	<button
		type="button"
		class={[
			'group/accordion-trigger relative flex w-full items-center overflow-hidden px-5 py-3 text-center text-sm text-white transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-60 data-[state=open]:shadow-[0_0_0_1px_rgba(255,215,120,0.4),0_0_12px_rgba(255,200,100,0.35),0_0_40px_rgba(255,180,80,0.25),0_20px_40px_rgba(0,0,0,0.45)]',
			className
		]}
		data-state={isOpen ? 'open' : 'closed'}
		onclick={() => ctx.toggle(value)}
	>
		{@render children?.()}
		<span
			class={[
				'pointer-events-none absolute right-4 inline-block size-4 shrink-0 bg-contain bg-center bg-no-repeat transition-transform duration-300',
				iconClasses[icon],
				isOpen && 'rotate-180'
			]}
		></span>
	</button>
</h3>
