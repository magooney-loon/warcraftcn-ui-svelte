<script lang="ts">
	import type { Snippet } from 'svelte';
	import { setModalCtx } from './modal-context.js';

	interface Props {
		open?: boolean;
		class?: string;
		children?: Snippet;
	}

	let { open = $bindable(false), class: className = '', children }: Props = $props();

	function toggle() {
		open = !open;
	}

	function close() {
		open = false;
	}

	setModalCtx({
		get open() {
			return open;
		},
		toggle,
		close
	});
</script>

<div class={['relative inline-flex', className]} data-slot="modal">
	{@render children?.()}
</div>
