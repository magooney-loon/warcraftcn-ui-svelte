<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		size?: 'default' | 'sm';
		children?: Snippet;
		[key: string]: unknown;
	}

	let { class: className, size, children, ...restProps }: Props = $props();
</script>

<div
	data-slot="card"
	data-size={size === 'sm' ? 'sm' : undefined}
	class={[
		'fantasy group/card wc-card-border flex flex-col gap-4 overflow-hidden rounded-xl border-solid text-sm text-card-foreground [border-image-repeat:stretch] has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl',
		'border-24 px-6 [border-image-slice:24_fill]',
		'data-[size=sm]:border-16 data-[size=sm]:p-4 data-[size=sm]:py-3 data-[size=sm]:[border-image-slice:16_fill]',
		className
	]}
	{...restProps}
>
	{@render children?.()}
</div>
