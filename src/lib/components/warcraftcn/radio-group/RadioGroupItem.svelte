<script lang="ts">
	import { getRadioGroupCtx } from './radio-group-context.js';

	interface RadioGroupItemProps {
		value: string;
		disabled?: boolean;
		class?: string;
		[key: string]: unknown;
	}

	let { value, disabled = false, class: className, ...rest }: RadioGroupItemProps = $props();

	const ctx = getRadioGroupCtx();
	let isSelected = $derived(ctx.value === value);
	let isDisabled = $derived(disabled || ctx.disabled);
</script>

<button
	type="button"
	role="radio"
	aria-checked={isSelected}
	data-state={isSelected ? 'checked' : 'unchecked'}
	data-disabled={isDisabled || undefined}
	disabled={isDisabled}
	class={['wc-radio-socket', className]}
	{...rest}
	onclick={() => {
		if (!isDisabled) ctx.setValue(value);
	}}
>
	{#if isSelected}
		<span class="wc-radio-gem" aria-hidden="true"></span>
	{/if}
</button>
