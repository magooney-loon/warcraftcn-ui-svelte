<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		children?: Snippet;
		[key: string]: unknown;
	}

	let { class: className, children, ...restProps }: Props = $props();
</script>

<div
	data-slot="card-header"
	class={[
		'group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-4 pt-4 group-data-[size=sm]/card:px-3 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto]',
		className
	]}
	{...restProps}
>
	{@render children?.()}
</div>
