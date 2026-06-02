<svelte:head>
	<title>Get Started — warcraftcn/ui</title>
</svelte:head>

<div class="mx-auto max-w-3xl space-y-10">
	<div>
		<h1 class="fantasy text-3xl font-bold text-amber-200">warcraftcn/ui</h1>
		<p class="mt-2 text-amber-100/70">
			A Svelte 5 UI component library styled after the classic Warcraft III RTS aesthetics —
			fantasy borders, scroll textures, faction-based color themes, and gold/amber color palettes.
		</p>
	</div>

	<!-- Installation -->
	<section class="space-y-3">
		<h2 class="fantasy text-xl text-amber-300">Installation</h2>
		<p class="text-sm text-amber-100/70">
			Install the package via npm:
		</p>
		<pre
			class="overflow-x-auto rounded-lg border border-amber-900/30 bg-black/40 p-4 text-sm text-amber-100/80">{@html `<code>npm install warcraftcn-ui-svelte</code>`}</pre>
	</section>

	<!-- Quick Setup -->
	<section class="space-y-3">
		<h2 class="fantasy text-xl text-amber-300">Quick Setup</h2>
		<p class="text-sm text-amber-100/70">
			Add the <code class="text-amber-300">&lt;Toaster /&gt;</code> to your root layout for toast
			notifications:
		</p>
		<pre
			class="overflow-x-auto rounded-lg border border-amber-900/30 bg-black/40 p-4 text-sm text-amber-100/80">{@html `<code>&lt;script&gt;
  import { Toaster } from 'warcraftcn-ui-svelte';
&lt;/script&gt;

&lt;slot /&gt;
&lt;Toaster /&gt;</code>`}</pre>
	</section>

	<!-- Usage -->
	<section class="space-y-3">
		<h2 class="fantasy text-xl text-amber-300">Usage</h2>
		<p class="text-sm text-amber-100/70">Import any component from the package:</p>
		<pre
			class="overflow-x-auto rounded-lg border border-amber-900/30 bg-black/40 p-4 text-sm text-amber-100/80">{@html `<code>&lt;script&gt;
  import { Button, Card, CardHeader, CardTitle } from 'warcraftcn-ui-svelte';
&lt;/script&gt;

&lt;Card&gt;
  &lt;CardHeader&gt;
    &lt;CardTitle&gt;Welcome, Hero&lt;/CardTitle&gt;
  &lt;/CardHeader&gt;
  &lt;Button variant="frame"&gt;Accept Quest&lt;/Button&gt;
&lt;/Card&gt;</code>`}</pre>
	</section>

	<!-- Factions -->
	<section class="space-y-3">
		<h2 class="fantasy text-xl text-amber-300">Factions</h2>
		<p class="text-sm text-amber-100/70">
			Many components accept a <code class="text-amber-300">faction</code> prop with unique styling:
		</p>
		<div class="flex flex-wrap gap-3">
			<span class="rounded border border-amber-900/30 bg-amber-900/20 px-3 py-1 text-xs text-amber-300">Default</span>
			<span class="rounded border border-red-900/30 bg-red-900/20 px-3 py-1 text-xs text-red-300">Orc</span>
			<span class="rounded border border-blue-900/30 bg-blue-900/20 px-3 py-1 text-xs text-blue-300">Human</span>
			<span class="rounded border border-green-900/30 bg-green-900/20 px-3 py-1 text-xs text-green-300">Elf</span>
			<span class="rounded border border-purple-900/30 bg-purple-900/20 px-3 py-1 text-xs text-purple-300">Undead</span>
		</div>
	</section>

	<!-- Components -->
	<section class="space-y-3">
		<h2 class="fantasy text-xl text-amber-300">Components</h2>
		<p class="text-sm text-amber-100/70">All 18 components available:</p>
		<div class="grid grid-cols-2 gap-2 sm:grid-cols-3">
			{#each ['Accordion', 'Avatar', 'Badge', 'Button', 'Card', 'Checkbox', 'Cursor', 'DropdownMenu', 'Input', 'Label', 'Pagination', 'RadioGroup', 'Skeleton', 'Spinner', 'Tabs', 'Textarea', 'Toast', 'Tooltip'] as name (name)}
				<a
					href="/docs/components/{name.toLowerCase().replace(' ', '-')}"
					class="rounded border border-amber-900/20 bg-black/20 px-3 py-1 text-xs text-amber-100/60 transition-colors hover:border-amber-700/40 hover:text-amber-200"
				>
					{name}
				</a>
			{/each}
		</div>
	</section>

	<!-- Links -->
	<section class="space-y-3">
		<h2 class="fantasy text-xl text-amber-300">Links</h2>
		<ul class="space-y-2 text-sm text-amber-100/70">
			<li>
				<a
					href="https://github.com/magooney-loon/warcraftcn-ui-svelte"
					target="_blank"
					class="text-amber-400 underline underline-offset-2 hover:text-amber-300"
				>
					GitHub Repository
				</a>
			</li>
			<li>
				<a
					href="https://warcraftcn.com"
					target="_blank"
					class="text-amber-400 underline underline-offset-2 hover:text-amber-300"
				>
					Original React Site (warcraftcn.com)
				</a>
			</li>
		</ul>
	</section>
</div>
