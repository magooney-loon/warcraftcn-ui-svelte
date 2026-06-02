<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		children?: Snippet;
		[key: string]: unknown;
	}

	let { class: className, children, ...restProps }: Props = $props();
</script>

<p data-slot="tooltip-body" class={['mt-1 text-xs text-amber-100/80', className]} {...restProps}>
	{@render children?.()}
</p>
