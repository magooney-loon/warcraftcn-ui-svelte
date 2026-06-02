<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		children?: Snippet;
		[key: string]: unknown;
	}

	let { class: className, children, ...restProps }: Props = $props();
</script>

<nav
	data-slot="pagination"
	aria-label="pagination"
	class={['mx-auto flex w-full justify-center', className]}
	{...restProps}
>
	{@render children?.()}
</nav>
