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
	data-slot="card-footer"
	class={['flex items-center rounded-b-xl p-4 group-data-[size=sm]/card:p-3', className]}
	{...restProps}
>
	{@render children?.()}
</div>
