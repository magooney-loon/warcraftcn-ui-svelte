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
	data-slot="card-action"
	class={['col-start-2 row-span-2 row-start-1 self-start justify-self-end', className]}
	{...restProps}
>
	{@render children?.()}
</div>
