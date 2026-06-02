<script lang="ts">
	import type { Snippet } from 'svelte';

	const factionClasses: Record<string, string> = {
		default: 'text-yellow-800 dark:text-yellow-100',
		orc: 'text-red-700 dark:text-red-100',
		elf: 'text-green-700 dark:text-green-100',
		human: 'text-blue-700 dark:text-blue-100',
		undead: 'text-purple-700 dark:text-purple-100'
	};

	interface CheckboxProps {
		checked?: boolean;
		faction?: 'default' | 'orc' | 'elf' | 'human' | 'undead';
		disabled?: boolean;
		class?: string;
		id?: string;
		children?: Snippet;
		[key: string]: unknown;
	}

	let {
		checked = $bindable(false),
		faction = 'default',
		disabled = false,
		class: className,
		id,
		children,
		...rest
	}: CheckboxProps = $props();

	function toggle() {
		if (!disabled) {
			checked = !checked;
		}
	}
</script>

<label
	for={id}
	data-slot="checkbox-wrapper"
	class={[
		'inline-flex items-center gap-3 cursor-pointer select-none fantasy font-bold mb-2',
		factionClasses[faction],
		disabled && 'opacity-50 cursor-not-allowed'
	]}
>
	<button
		type="button"
		role="checkbox"
		aria-checked={checked}
		data-state={checked ? 'checked' : 'unchecked'}
		data-disabled={disabled || undefined}
		id={id}
		disabled={disabled}
		class={['wc-checkbox', `wc-checkbox-${faction}`, className]}
		{...rest}
		onclick={toggle}
	></button>
	{#if children}
		{@render children()}
	{/if}
</label>
