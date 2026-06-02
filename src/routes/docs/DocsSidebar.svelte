<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { Snippet } from 'svelte';

	const sections = [{ name: 'Get Started', href: '/docs' }];

	const components = [
		{ name: 'Accordion', href: '/docs/components/accordion' },
		{ name: 'Avatar', href: '/docs/components/avatar' },
		{ name: 'Badge', href: '/docs/components/badge' },
		{ name: 'Button', href: '/docs/components/button' },
		{ name: 'Card', href: '/docs/components/card' },
		{ name: 'Checkbox', href: '/docs/components/checkbox' },
		{ name: 'Cursor', href: '/docs/components/cursor' },
		{ name: 'Dropdown Menu', href: '/docs/components/dropdown-menu' },
		{ name: 'Input', href: '/docs/components/input' },
		{ name: 'Label', href: '/docs/components/label' },
		{ name: 'Pagination', href: '/docs/components/pagination' },
		{ name: 'Radio Group', href: '/docs/components/radio-group' },
		{ name: 'Skeleton', href: '/docs/components/skeleton' },
		{ name: 'Spinner', href: '/docs/components/spinner' },
		{ name: 'Tabs', href: '/docs/components/tabs' },
		{ name: 'Textarea', href: '/docs/components/textarea' },
		{ name: 'Toast', href: '/docs/components/toast' },
		{ name: 'Tooltip', href: '/docs/components/tooltip' }
	];

	let sidebarOpen = $state(false);
	let { children }: { children: Snippet } = $props();
</script>

<!-- Mobile top bar -->
<div
	class="sticky top-0 z-30 flex items-center border-b border-amber-900/20 bg-black/80 px-3 py-2.5 backdrop-blur-sm md:hidden"
>
	<button
		onclick={() => (sidebarOpen = !sidebarOpen)}
		class="rounded p-1.5 text-amber-200 hover:bg-amber-900/30"
		aria-label="Toggle sidebar"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="22"
			height="22"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			{#if sidebarOpen}
				<path d="M18 6 6 18" />
				<path d="m6 6 12 12" />
			{:else}
				<path d="M4 8h16" />
				<path d="M4 16h16" />
			{/if}
		</svg>
	</button>
	<div class="ml-3 flex items-center gap-2">
		<img src="/warcraftcn-logo.png" alt="warcraftcn" class="h-6 w-6" />
		<span class="fantasy text-sm font-bold text-amber-200">warcraftcn/ui</span>
	</div>
</div>

<!-- Mobile overlay -->
{#if sidebarOpen}
	<div
		transition:fade={{ duration: 150 }}
		class="fixed inset-0 z-40 bg-black/60 md:hidden"
		role="presentation"
		onclick={() => (sidebarOpen = false)}
	></div>
{/if}

<!-- Sidebar -->
<aside
	class="fixed top-0 left-0 z-50 h-screen w-64 border-r border-amber-900/20 bg-black/95 p-4 transition-transform duration-200 md:sticky md:z-auto md:shrink-0 md:translate-x-0 md:bg-black/40"
	class:translate-x-0={sidebarOpen}
	class:-translate-x-full={!sidebarOpen}
>
	<div class="mb-6 flex items-center gap-2">
		<img src="/warcraftcn-logo.png" alt="warcraftcn" class="h-7 w-7" />
		<span class="fantasy text-sm font-bold text-amber-200">warcraftcn/ui</span>
	</div>

	<nav class="flex flex-col gap-1">
		{#each sections as sec (sec.href)}
			<a
				href={sec.href}
				onclick={() => (sidebarOpen = false)}
				class="rounded px-3 py-1.5 text-sm font-medium text-amber-100 transition-colors hover:bg-amber-900/30 hover:text-amber-100"
			>
				{sec.name}
			</a>
		{/each}
	</nav>

	<h2 class="fantasy mt-6 mb-3 text-xs font-semibold tracking-wider text-amber-400/60 uppercase">
		Components
	</h2>
	<nav class="flex flex-col gap-1">
		{#each components as comp (comp.href)}
			<a
				href={comp.href}
				onclick={() => (sidebarOpen = false)}
				class="rounded px-3 py-1.5 text-sm text-amber-100/70 transition-colors hover:bg-amber-900/30 hover:text-amber-100"
			>
				{comp.name}
			</a>
		{/each}
	</nav>

	<div class="mt-8 border-t border-amber-900/20 pt-4">
		<a
			href="https://github.com/magooney-loon/warcraftcn-ui-svelte"
			target="_blank"
			class="flex items-center gap-2 rounded px-3 py-1.5 text-xs text-amber-100/40 transition-colors hover:text-amber-100/70"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="14"
				height="14"
				viewBox="0 0 24 24"
				fill="currentColor"
			>
				<path
					d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
				/>
			</svg>
			GitHub
		</a>
	</div>
</aside>

<!-- Content -->
<main class="flex-1 overflow-x-hidden p-6 md:p-10">
	{@render children?.()}
</main>
