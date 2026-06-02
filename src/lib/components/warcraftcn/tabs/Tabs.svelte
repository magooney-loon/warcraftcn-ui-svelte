<script lang="ts">
	import type { Snippet } from 'svelte';
	import { setTabsCtx } from './tabs-context.js';

	const factionClasses: Record<string, string> = {
		default: 'wc-tabs-default text-white',
		orc: 'wc-tabs-orc',
		elf: 'wc-tabs-elf',
		human: 'wc-tabs-human',
		undead: 'wc-tabs-undead'
	};

	let {
		value = $bindable(''),
		faction = 'default',
		orientation = 'horizontal',
		class: className,
		children
	}: {
		value?: string;
		faction?: 'default' | 'orc' | 'elf' | 'human' | 'undead';
		orientation?: 'horizontal' | 'vertical';
		class?: string;
		children?: Snippet;
	} = $props();

	function setActive(v: string) {
		value = v;
	}

	setTabsCtx({
		get activeTab() {
			return value;
		},
		setActive,
		get orientation() {
			return orientation;
		}
	});
</script>

<div
	class={['wc-tabs-root flex w-full max-w-full flex-col', factionClasses[faction], className]}
	data-orientation={orientation}
>
	{@render children?.()}
</div>
