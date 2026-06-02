<script lang="ts">
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';
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
		{ name: 'Modal', href: '/docs/components/modal' },
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

<!-- Sidebar + Content wrapper -->
<div class="flex min-h-screen">
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
					class="rounded px-3 py-1.5 text-sm font-medium transition-colors hover:bg-amber-900/30 hover:text-amber-100 {$page
						.url.pathname === sec.href
						? 'border-l-2 border-amber-400 bg-amber-900/40 text-amber-100'
						: 'text-amber-100/70'}"
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
					class="rounded px-3 py-1.5 text-sm transition-colors hover:bg-amber-900/30 hover:text-amber-100 {$page
						.url.pathname === comp.href
						? 'border-l-2 border-amber-400 bg-amber-900/40 text-amber-100'
						: 'text-amber-100/70'}"
				>
					{comp.name}
				</a>
			{/each}
		</nav>

		<div class="mt-8 border-t border-amber-900/20 pt-4">
			<a
				href="/llms.txt"
				target="_blank"
				class="flex items-center gap-2 rounded px-3 py-1.5 text-xs text-amber-100/40 transition-colors hover:text-amber-100/70"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="14"
					height="14"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
					<polyline points="14 2 14 8 20 8" />
					<line x1="16" y1="13" x2="8" y2="13" />
					<line x1="16" y1="17" x2="8" y2="17" />
					<line x1="10" y1="9" x2="8" y2="9" />
				</svg>
				LLMS.txt
			</a>
		</div>
	</aside>

	<!-- Content -->
	<main class="min-h-screen flex-1 overflow-x-hidden p-6 md:p-10">
		{@render children?.()}
	</main>
</div>
