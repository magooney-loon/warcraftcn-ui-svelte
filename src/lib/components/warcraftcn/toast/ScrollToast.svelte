<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { Toast } from './toast-state.svelte.js';

	interface Props {
		toast: Toast;
	}

	let { toast }: Props = $props();

	const SCROLL_THEMES: Record<string, { handleClass: string; centerBgClass: string }> = {
		default: { handleClass: 'scroll-handle-default', centerBgClass: 'scroll-center-default' },
		human: { handleClass: 'scroll-handle-human', centerBgClass: 'scroll-center-human' },
		undead: { handleClass: 'scroll-handle-undead', centerBgClass: 'scroll-center-undead' },
		orc: { handleClass: 'scroll-handle-orc', centerBgClass: 'scroll-center-orc' },
		elf: { handleClass: 'scroll-handle-elf', centerBgClass: 'scroll-center-elf' }
	};

	const variantTextColors: Record<string, string> = {
		default: 'text-[#211306]',
		success: 'text-green-900',
		error: 'text-red-900',
		warning: 'text-yellow-950',
		info: 'text-blue-950'
	};

	const theme = $derived(SCROLL_THEMES[toast.faction] ?? SCROLL_THEMES.default);
	const textColor = $derived(variantTextColors[toast.variant] ?? variantTextColors.default);
</script>

<div
	class="w-[300px] h-28 relative mx-auto pointer-events-auto flex justify-center"
	data-slot="scroll-toast"
	transition:fade={{ duration: 300 }}
>
	<!-- Left scroll handle -->
	<div class="w-16 {theme.handleClass} shrink-0"></div>

	<!-- Center content -->
	<div
		class="flex-1 flex items-center justify-center px-3 {theme.centerBgClass}"
	>
		<p class="text-sm font-semibold text-center {textColor}">
			{toast.message}
		</p>
	</div>

	<!-- Right scroll handle (mirrored) -->
	<div class="w-16 {theme.handleClass} shrink-0" style="transform: scaleX(-1)"></div>
</div>
