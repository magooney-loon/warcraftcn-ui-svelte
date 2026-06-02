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
	data-slot="card-description"
	class={['text-muted-foreground text-sm', className]}
	{...restProps}
>
	{@render children?.()}
</div>
