<script lang="ts">
	import type { Snippet } from 'svelte';
	import { setDropdownMenuCtx } from './dropdown-menu-context.js';

	interface Props {
		class?: string;
		children?: Snippet;
	}

	let { class: className = '', children }: Props = $props();
	let open = $state(false);

	function toggle() {
		open = !open;
	}

	function close() {
		open = false;
	}

	setDropdownMenuCtx({ get open() { return open; }, toggle, close });
</script>

<div class={['relative inline-flex', className]} data-slot="dropdown-menu">
	{@render children?.()}
</div>
