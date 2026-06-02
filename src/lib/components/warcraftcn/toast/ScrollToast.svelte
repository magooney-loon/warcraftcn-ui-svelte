<script lang="ts">
	import { onMount } from 'svelte';
	import { Tween } from 'svelte/motion';
	import { cubicInOut } from 'svelte/easing';
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

	const variantIcons: Record<string, string> = {
		success: '✓',
		error: '✗',
		warning: '⚠',
		info: 'ℹ'
	};

	const theme = $derived(SCROLL_THEMES[toast.faction] ?? SCROLL_THEMES.default);
	const textColor = $derived(variantTextColors[toast.variant] ?? variantTextColors.default);
	const icon = $derived(variantIcons[toast.variant] ?? null);

	const CENTER_WIDTH = 264;
	const ENTER_MS = 800;

	const centerWidth = new Tween(0, { duration: ENTER_MS, easing: cubicInOut });
	let textVisible = $state(false);

	onMount(() => {
		centerWidth.target = CENTER_WIDTH;

		// Watch for the tween to reach its target
		const enterCheck = setTimeout(() => {
			textVisible = true;
		}, ENTER_MS + 50);

		const exitMs = Math.max(ENTER_MS + 200, toast.durationMs - 1000);
		const exitTimer = setTimeout(() => {
			textVisible = false;
			setTimeout(() => (centerWidth.target = 0), 150);
		}, exitMs);

		return () => {
			clearTimeout(enterCheck);
			clearTimeout(exitTimer);
		};
	});
</script>

<div
	class="pointer-events-auto relative mx-auto flex h-28 w-75 items-center justify-center"
	data-slot="scroll-toast"
>
	<!-- Left scroll handle -->
	<div class="z-20 h-full w-5 shrink-0 {theme.handleClass}"></div>

	<!-- Center content (animated width) -->
	<div
		class="relative z-10 -mx-2 h-25 shrink-0 overflow-hidden {theme.centerBgClass}"
		style="width: {centerWidth.current}px;"
	>
		<div
			class="flex h-full w-full flex-col items-center justify-center px-2 py-2 text-center font-serif transition-all duration-500"
			style="opacity: {textVisible ? 1 : 0}; filter: blur({textVisible
				? 0
				: 4}px); transform: scale({textVisible ? 1 : 0.95});"
		>
			<div class="flex w-full flex-row items-center justify-center gap-1">
				{#if icon}
					<span class="inline shrink-0 align-middle text-sm {textColor}">{icon}</span>
				{/if}
				<span class="fantasy truncate align-middle text-xs leading-snug {textColor}">
					{toast.message}
				</span>
			</div>
		</div>
	</div>

	<!-- Right scroll handle (flipped) -->
	<div class="z-20 h-full w-5 shrink-0 {theme.handleClass}" style="transform: scaleX(-1);"></div>
</div>
