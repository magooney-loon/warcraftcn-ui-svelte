<script lang="ts">
	import type { Snippet } from 'svelte';

	const variantMap: Record<string, string> = {
		default: 'bg-center px-5 py-4 bg-cover bg-no-repeat text-white hover:brightness-110',
		frame: 'bg-center bg-cover bg-no-repeat text-white hover:brightness-110'
	};

	interface ButtonProps {
		variant?: 'default' | 'frame';
		class?: string;
		style?: string;
		children?: Snippet;
		[key: string]: unknown;
	}

	let {
		variant = 'default',
		class: className = '',
		style = '',
		children,
		...rest
	}: ButtonProps = $props();
</script>

<button
	{...rest}
	class={[
		'fantasy inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all duration-100 outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 active:scale-95 active:shadow-inner active:brightness-75 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=size-])]:size-4',
		variantMap[variant],
		'border-5 border-solid [border-image-repeat:stretch] [border-image-slice:16_fill]',
		variant === 'frame' ? 'wc-btn-border-frame' : 'wc-btn-border',
		className
	]}
	{style}
	data-slot="button"
>
	{@render children?.()}
</button>
