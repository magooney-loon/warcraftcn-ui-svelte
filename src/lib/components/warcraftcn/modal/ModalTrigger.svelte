<script lang="ts">
	import type { Snippet } from 'svelte';
	import { getModalCtx } from './modal-context.js';

	interface Props {
		class?: string;
		children?: Snippet;
		[key: string]: unknown;
	}

	let { class: className = '', children, ...rest }: Props = $props();
	const ctx = getModalCtx();
</script>

<button
	{...rest}
	class={['inline-flex cursor-pointer items-center justify-center outline-none', className]}
	data-slot="modal-trigger"
	onclick={ctx.toggle}
>
	{@render children?.()}
</button>
