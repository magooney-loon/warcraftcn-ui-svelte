<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		children?: Snippet;
	}

	let { class: className = '', children }: Props = $props();
</script>

<div
	class={['fantasy px-5 pb-2 pt-5 text-xs font-semibold uppercase tracking-wider text-amber-400/80', className]}
	data-slot="dropdown-menu-label"
>
	{@render children?.()}
</div>
