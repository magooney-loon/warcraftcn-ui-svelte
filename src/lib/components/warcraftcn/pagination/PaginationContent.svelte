<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		children?: Snippet;
		[key: string]: unknown;
	}

	let { class: className, children, ...restProps }: Props = $props();
</script>

<ul
	data-slot="pagination-content"
	class={['flex list-none flex-row items-center gap-1', className]}
	{...restProps}
>
	{@render children?.()}
</ul>
