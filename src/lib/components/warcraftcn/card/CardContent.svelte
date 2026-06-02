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
	data-slot="card-content"
	class={['px-4 group-data-[size=sm]/card:px-3', className]}
	{...restProps}
>
	{@render children?.()}
</div>
