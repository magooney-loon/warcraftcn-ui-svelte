<script lang="ts">
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

	let { class: className = '' }: { class?: string } = $props();
</script>

<aside class={['w-64 shrink-0 border-r p-4', className]}>
	<h2 class="fantasy mb-4 text-sm font-semibold tracking-wider text-amber-400/80 uppercase">
		Components
	</h2>
	<nav class="flex flex-col gap-1">
		{#each components as comp (comp.href)}
			<a
				href={comp.href}
				class="rounded px-3 py-1.5 text-sm text-amber-100/70 transition-colors hover:bg-amber-900/30 hover:text-amber-100"
			>
				{comp.name}
			</a>
		{/each}
	</nav>
</aside>
