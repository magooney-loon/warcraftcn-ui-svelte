<script lang="ts">
	import type { Snippet } from 'svelte';
	import { getModalCtx } from './modal-context.js';

	interface Props {
		class?: string;
		children?: Snippet;
	}

	let { class: className = '', children }: Props = $props();
	const ctx = getModalCtx();
</script>

<div
	class={['inline-flex cursor-pointer', className]}
	data-slot="modal-trigger"
	onclick={ctx.toggle}
	role="button"
	tabindex="0"
	onkeydown={(e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			ctx.toggle();
		}
	}}
>
	{@render children?.()}
</div>
