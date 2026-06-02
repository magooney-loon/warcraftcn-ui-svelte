<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		isActive?: boolean;
		disabled?: boolean;
		class?: string;
		children?: Snippet;
		[key: string]: unknown;
	}

	let {
		isActive = false,
		disabled = false,
		class: className,
		children,
		...restProps
	}: Props = $props();
</script>

<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
<a
	data-slot="pagination-link"
	aria-current={isActive ? 'page' : undefined}
	aria-disabled={disabled || undefined}
	tabindex={disabled ? -1 : 0}
	class={[
		'fantasy wc-btn-border-frame inline-flex h-10 w-10 items-center justify-center border-5 border-solid bg-cover bg-center bg-no-repeat px-0 font-bold text-white no-underline transition-all duration-200 [border-image-repeat:stretch] [border-image-slice:16_fill] sm:h-12 sm:w-12',
		isActive
			? 'text-amber-200 shadow-[inset_0_0_10px_rgba(0,0,0,0.8)] brightness-110 [text-shadow:0_0_8px_rgba(251,191,36,0.6)]'
			: 'text-amber-100/70 hover:text-amber-100 hover:brightness-110',
		disabled ? 'pointer-events-none cursor-not-allowed opacity-50' : '',
		className
	]}
	{...restProps}
>
	{@render children?.()}
</a>
