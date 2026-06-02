<script lang="ts">
	import type { Snippet } from 'svelte';
	import { setRadioGroupCtx } from './radio-group-context.js';

	interface RadioGroupProps {
		value?: string;
		orientation?: 'vertical' | 'horizontal';
		disabled?: boolean;
		name?: string;
		class?: string;
		children?: Snippet;
		[key: string]: unknown;
	}

	let {
		value = $bindable(''),
		orientation = 'vertical',
		disabled = false,
		name = '',
		class: className,
		children,
		...rest
	}: RadioGroupProps = $props();

	function setValue(v: string) {
		value = v;
	}

	setRadioGroupCtx({
		get value() {
			return value;
		},
		setValue,
		get name() {
			return name;
		},
		get disabled() {
			return disabled;
		}
	});
</script>

<div
	role="radiogroup"
	data-slot="radio-group"
	data-orientation={orientation}
	class={[
		'fantasy flex gap-3',
		orientation === 'horizontal' ? 'flex-row flex-wrap' : 'flex-col',
		className
	]}
	{...rest}
>
	{#if children}
		{@render children()}
	{/if}
</div>
