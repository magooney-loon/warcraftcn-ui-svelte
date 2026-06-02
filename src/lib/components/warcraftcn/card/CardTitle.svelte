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
	data-slot="card-title"
	class={['text-base leading-snug font-medium group-data-[size=sm]/card:text-sm', className]}
	{...restProps}
>
	{@render children?.()}
</div>
