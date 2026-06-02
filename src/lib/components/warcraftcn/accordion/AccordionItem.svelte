<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		value,
		class: className,
		children
	}: {
		value: string;
		class?: string;
		children?: Snippet;
	} = $props();
</script>

<div
	class={['relative', className]}
	data-slot="accordion-item"
	data-accordion-value={value}
	id={`accordion-item-${value}`}
>
	{@render children?.()}
</div>
