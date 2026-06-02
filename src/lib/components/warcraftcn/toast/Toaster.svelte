<script lang="ts">
	import { getToasts, type ToastPosition } from './toast-state.svelte.js';
	import ScrollToast from './ScrollToast.svelte';

	interface Props {
		position?: ToastPosition;
		class?: string;
	}

	let { position, class: className = '' }: Props = $props();

	const positionClasses: Record<ToastPosition, string> = {
		'top-left': 'top-4 left-4 flex-col',
		'top-center': 'top-4 left-1/2 -translate-x-1/2 flex-col',
		'top-right': 'top-4 right-4 flex-col',
		'bottom-left': 'bottom-4 left-4 flex-col-reverse',
		'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2 flex-col-reverse',
		'bottom-right': 'bottom-4 right-4 flex-col-reverse'
	};

	// If a position prop is provided, filter toasts to that position only (with fallback default)
	// If no position prop, render all toasts grouped by position
	const filteredToasts = $derived(
		position
			? getToasts().filter(
					(t) => t.position === position || (!t.position && position === 'bottom-right')
				)
			: getToasts()
	);

	const toastsByPosition = $derived(
		filteredToasts.reduce(
			(acc, toast) => {
				const pos = toast.position || 'bottom-right';
				if (!acc[pos]) acc[pos] = [];
				acc[pos].push(toast);
				return acc;
			},
			{} as Record<string, typeof filteredToasts>
		)
	);
</script>

{#each Object.entries(toastsByPosition) as [pos, toasts] (pos)}
	<div
		class={[
			'pointer-events-none fixed z-100 flex gap-2',
			positionClasses[pos as ToastPosition] ?? positionClasses['bottom-right'],
			className
		]}
		data-slot="toaster"
	>
		{#each toasts as toast (toast.id)}
			<ScrollToast {toast} />
		{/each}
	</div>
{/each}
