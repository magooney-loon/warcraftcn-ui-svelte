<script lang="ts">
	import type { Snippet } from 'svelte';

	const factionMap: Record<string, string> = {
		default: 'wc-avatar-default',
		orc: 'wc-avatar-orc',
		elf: 'wc-avatar-elf',
		human: 'wc-avatar-human',
		undead: 'wc-avatar-undead'
	};

	const sizeMap: Record<string, string> = {
		sm: 'w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-36 xl:h-36',
		md: 'w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56',
		lg: 'w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 xl:w-[30rem] xl:h-[30rem]'
	};

	interface AvatarProps {
		src?: string;
		alt?: string;
		fallback?: Snippet;
		faction?: 'default' | 'orc' | 'elf' | 'human' | 'undead';
		size?: 'sm' | 'md' | 'lg';
		class?: string;
		[key: string]: unknown;
	}

	let {
		src = '',
		alt = '',
		fallback,
		faction = 'default',
		size = 'md',
		class: className = '',
		...rest
	}: AvatarProps = $props();
</script>

<div {...rest} class={['fantasy relative', factionMap[faction], sizeMap[size], className]}>
	<div class="absolute inset-[20%] overflow-hidden">
		{#if src}
			<img {src} {alt} class="mt-0 mb-0 h-full w-full object-cover" draggable={false} />
		{:else if fallback}
			<div class="flex h-full w-full items-center justify-center text-2xl select-none">
				{@render fallback()}
			</div>
		{/if}
	</div>

	<div class="wc-avatar-frame pointer-events-none absolute inset-0 scale-[1.05]"></div>
</div>
