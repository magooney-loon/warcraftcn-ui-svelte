<script lang="ts">
	import type { Snippet } from 'svelte';
	import { getDropdownMenuCtx } from './dropdown-menu-context.js';

	interface Props {
		class?: string;
		children?: Snippet;
		[key: string]: unknown;
	}

	let { class: className = '', children, ...rest }: Props = $props();
	const ctx = getDropdownMenuCtx();
</script>

<button
	{...rest}
	class={['inline-flex items-center justify-center outline-none', className]}
	data-slot="dropdown-menu-trigger"
	onclick={ctx.toggle}
>
	{@render children?.()}
</button>
