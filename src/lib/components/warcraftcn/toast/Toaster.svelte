<script lang="ts">
	import { getToasts } from './toast-state.svelte.js';
	import ScrollToast from './ScrollToast.svelte';

	interface Props {
		class?: string;
	}

	let { class: className = '' }: Props = $props();
</script>

<div
	class={['pointer-events-none fixed right-4 bottom-4 z-100 flex flex-col gap-2', className]}
	data-slot="toaster"
>
	{#each getToasts() as toast (toast.id)}
		<ScrollToast {toast} />
	{/each}
</div>
