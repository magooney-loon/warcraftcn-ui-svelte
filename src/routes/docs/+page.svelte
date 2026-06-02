<script lang="ts">
	const components = [
		{ name: 'Accordion', desc: 'Warcraft styled accordion', href: '/docs/components/accordion' },
		{ name: 'Avatar', desc: 'Hero portrait component', href: '/docs/components/avatar' },
		{ name: 'Badge', desc: 'Fantasy badge', href: '/docs/components/badge' },
		{ name: 'Button', desc: 'Warcraft button', href: '/docs/components/button' },
		{ name: 'Card', desc: 'Parchment card', href: '/docs/components/card' },
		{ name: 'Checkbox', desc: 'Faction-themed checkbox', href: '/docs/components/checkbox' },
		{ name: 'Cursor', desc: 'Custom cursors', href: '/docs/components/cursor' },
		{
			name: 'Dropdown Menu',
			desc: 'Fantasy dropdown',
			href: '/docs/components/dropdown-menu'
		},
		{ name: 'Input', desc: 'Styled input', href: '/docs/components/input' },
		{ name: 'Label', desc: 'Form label', href: '/docs/components/label' },
		{ name: 'Pagination', desc: 'Page navigation', href: '/docs/components/pagination' },
		{ name: 'Radio Group', desc: 'Gem socket radios', href: '/docs/components/radio-group' },
		{ name: 'Skeleton', desc: 'Loading placeholder', href: '/docs/components/skeleton' },
		{ name: 'Spinner', desc: 'Loading spinner', href: '/docs/components/spinner' },
		{ name: 'Tabs', desc: 'Tabbed navigation', href: '/docs/components/tabs' },
		{ name: 'Textarea', desc: 'Styled textarea', href: '/docs/components/textarea' },
		{ name: 'Toast', desc: 'Toast notification', href: '/docs/components/toast' },
		{ name: 'Tooltip', desc: 'Rarity tooltip', href: '/docs/components/tooltip' }
	];
</script>

<svelte:head>
	<title>Documentation — warcraftcn/ui</title>
</svelte:head>

<div class="mx-auto max-w-4xl">
	<h1 class="fantasy text-3xl font-bold text-amber-200">Documentation</h1>
	<p class="mt-2 text-amber-100/70">
		Browse all UI components inspired by classic Warcraft III aesthetics.
	</p>
	<div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each components as item (item.href)}
			<a
				href={item.href}
				class="block rounded-lg border border-amber-900/30 bg-black/20 p-4 transition-colors hover:border-amber-700/50 hover:bg-amber-900/20"
			>
				<h3 class="fantasy font-bold text-amber-200">{item.name}</h3>
				<p class="mt-1 text-xs text-amber-100/50">{item.desc}</p>
			</a>
		{/each}
	</div>
</div>
