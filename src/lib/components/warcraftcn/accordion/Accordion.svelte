<script lang="ts">
	import type { Snippet } from 'svelte';
	import { setAccordionCtx } from './accordion-context.js';

	let {
		type = 'multiple',
		class: className,
		children
	}: {
		type?: 'single' | 'multiple';
		class?: string;
		children?: Snippet;
	} = $props();

	let openValues = $state<string[]>([]);

	function toggle(value: string) {
		if (type === 'single') {
			openValues = openValues.includes(value) ? [] : [value];
		} else {
			if (openValues.includes(value)) {
				openValues = openValues.filter((v) => v !== value);
			} else {
				openValues = [...openValues, value];
			}
		}
	}

	function isOpen(value: string): boolean {
		return openValues.includes(value);
	}

	setAccordionCtx({ toggle, isOpen });
</script>

<div
	class={[
		'fantasy relative flex w-full flex-col gap-2 rounded-xl bg-transparent px-[0.7rem] py-[0.6rem] text-[hsl(0_0%_95%)] shadow-none',
		className
	]}
	data-slot="accordion"
>
	{@render children?.()}
</div>
