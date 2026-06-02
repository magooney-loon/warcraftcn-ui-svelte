<script lang="ts">
	import type { Snippet } from 'svelte';
	import { getDropdownMenuCtx } from './dropdown-menu-context.js';

	interface Props {
		class?: string;
		disabled?: boolean;
		children?: Snippet;
		[key: string]: unknown;
	}

	let { class: className = '', disabled = false, children, ...rest }: Props = $props();
	const ctx = getDropdownMenuCtx();

	function handleClick() {
		if (!disabled) {
			ctx.close();
		}
	}
</script>

<div
	{...rest}
	role="menuitem"
	tabindex={disabled ? -1 : 0}
	class={[
		'fantasy relative flex cursor-pointer items-center gap-2 px-5 py-2 text-sm text-amber-100 transition-all outline-none select-none hover:bg-amber-900/30 focus:bg-amber-900/30',
		disabled && 'pointer-events-none opacity-50',
		className
	]}
	data-slot="dropdown-menu-item"
	onclick={handleClick}
	onkeydown={(e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			handleClick();
		}
	}}
>
	{@render children?.()}
</div>
