<script lang="ts">
	import type { Snippet } from 'svelte';

	const factionMap: Record<string, string> = {
		default: '',
		orc: 'wc-orc-cursor',
		elf: 'wc-elf-cursor',
		human: 'wc-human-cursor',
		undead: 'wc-undead-cursor'
	};

	interface CursorProps {
		faction?: 'default' | 'orc' | 'elf' | 'human' | 'undead';
		class?: string;
		children?: Snippet;
		[key: string]: unknown;
	}

	let { faction = 'default', class: className = '', children, ...rest }: CursorProps = $props();
</script>

<div {...rest} class={['wc-cursor', factionMap[faction], className]}>
	{@render children?.()}
</div>
