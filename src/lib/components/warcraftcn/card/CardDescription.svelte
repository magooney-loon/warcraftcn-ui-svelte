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
	class={['text-sm text-muted-foreground', className]}
	{...restProps}
>
	{@render children?.()}
</div>
