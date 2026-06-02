<script lang="ts">
	import type { Snippet } from 'svelte';

	const variantMap: Record<string, string> = {
		default: 'text-amber-200 [text-shadow:0_0_6px_rgba(251,191,36,0.25)]',
		muted: 'text-amber-200/60'
	};

	interface LabelProps {
		variant?: 'default' | 'muted';
		required?: boolean;
		disabled?: boolean;
		class?: string;
		children?: Snippet;
		[key: string]: unknown;
	}

	let {
		variant = 'default',
		required = false,
		disabled = false,
		class: className = '',
		children,
		...rest
	}: LabelProps = $props();
</script>

<label
	{...rest}
	data-slot="label"
	data-disabled={disabled || undefined}
	class={[
		'fantasy text-sm leading-none font-medium select-none',
		variantMap[variant],
		disabled && 'cursor-not-allowed opacity-50',
		className
	]}
>
	{@render children?.()}
	{#if required}
		<span aria-hidden="true" class="ml-1 text-red-500 [text-shadow:0_0_6px_rgba(239,68,68,0.4)]"
			>✦</span
		>
		<span class="sr-only">(required)</span>
	{/if}
</label>
