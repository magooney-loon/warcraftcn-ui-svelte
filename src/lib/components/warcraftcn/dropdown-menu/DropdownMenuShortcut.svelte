<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		children?: Snippet;
	}

	let { class: className = '', children }: Props = $props();
</script>

<span
	class={['fantasy ml-auto text-xs tracking-widest text-amber-500/70', className]}
	data-slot="dropdown-menu-shortcut"
>
	{@render children?.()}
</span>
