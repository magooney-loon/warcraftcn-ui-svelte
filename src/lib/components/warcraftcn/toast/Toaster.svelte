<script lang="ts">
	import { getToasts } from './toast-state.svelte.js';
	import ScrollToast from './ScrollToast.svelte';

	interface Props {
		class?: string;
	}

	let { class: className = '' }: Props = $props();
</script>

<div
	class={['fixed bottom-4 right-4 z-[100] flex flex-col gap-2 pointer-events-none', className]}
	data-slot="toaster"
>
	{#each getToasts() as toast (toast.id)}
		<ScrollToast {toast} />
	{/each}
</div>
