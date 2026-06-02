<svelte:head>
	<title>Get Started — warcraftcn/ui</title>
</svelte:head>

<div class="mx-auto max-w-3xl space-y-10">
	<div>
		<h1 class="fantasy text-3xl font-bold text-amber-200">warcraftcn/ui</h1>
		<p class="mt-2 text-amber-100/70">
			A Svelte 5 UI component library styled after the classic Warcraft III RTS aesthetics — fantasy
			borders, scroll textures, faction-based color themes, and gold/amber color palettes.
		</p>
	</div>

	<!-- Installation -->
	<section class="space-y-3">
		<h2 class="fantasy text-xl text-amber-300">Installation</h2>
		<p class="text-sm text-amber-100/70">Install the package via npm:</p>
		<pre
			class="overflow-x-auto rounded-lg border border-amber-900/30 bg-black/40 p-4 text-sm text-amber-100/80">{@html `<code class="language-html">npm install warcraftcn-ui-svelte</code>`}</pre>
	</section>

	<!-- Quick Setup -->
	<section class="space-y-3">
		<h2 class="fantasy text-xl text-amber-300">Quick Setup</h2>
		<p class="text-sm text-amber-100/70">
			Add the <code class="text-amber-300">&lt;Toaster /&gt;</code> to your root layout for toast notifications:
		</p>
		<pre
			class="overflow-x-auto rounded-lg border border-amber-900/30 bg-black/40 p-4 text-sm text-amber-100/80">{@html `<code class="language-html">&lt;script&gt;
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
			class="overflow-x-auto rounded-lg border border-amber-900/30 bg-black/40 p-4 text-sm text-amber-100/80">{@html `<code class="language-html">&lt;script&gt;
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
			<span
				class="rounded border border-amber-900/30 bg-amber-900/20 px-3 py-1 text-xs text-amber-300"
				>Default</span
			>
			<span class="rounded border border-red-900/30 bg-red-900/20 px-3 py-1 text-xs text-red-300"
				>Orc</span
			>
			<span class="rounded border border-blue-900/30 bg-blue-900/20 px-3 py-1 text-xs text-blue-300"
				>Human</span
			>
			<span
				class="rounded border border-green-900/30 bg-green-900/20 px-3 py-1 text-xs text-green-300"
				>Elf</span
			>
			<span
				class="rounded border border-purple-900/30 bg-purple-900/20 px-3 py-1 text-xs text-purple-300"
				>Undead</span
			>
		</div>
	</section>

	<!-- Components -->
	<section class="space-y-3">
		<h2 class="fantasy text-xl text-amber-300">Components</h2>
		<p class="text-sm text-amber-100/70">All 19 components available:</p>
		<div class="grid grid-cols-2 gap-2 sm:grid-cols-3">
			{#each ['Accordion', 'Avatar', 'Badge', 'Button', 'Card', 'Checkbox', 'Cursor', 'DropdownMenu', 'Input', 'Label', 'Modal', 'Pagination', 'RadioGroup', 'Skeleton', 'Spinner', 'Tabs', 'Textarea', 'Toast', 'Tooltip'] as name (name)}
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
					class="inline-flex items-center gap-2 text-amber-400 underline underline-offset-2 hover:text-amber-300"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="currentColor"
						><path
							d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
						/></svg
					>
					Svelte Port Repository
				</a>
			</li>
			<li>
				<a
					href="https://github.com/TheOrcDev/warcraftcn-ui"
					target="_blank"
					class="inline-flex items-center gap-2 text-amber-400 underline underline-offset-2 hover:text-amber-300"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="currentColor"
						><path
							d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
						/></svg
					>
					Original Repository (TheOrcDev)
				</a>
			</li>
			<li>
				<a
					href="https://warcraftcn.com"
					target="_blank"
					class="inline-flex items-center gap-2 text-amber-400 underline underline-offset-2 hover:text-amber-300"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path
							d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
						/></svg
					>
					warcraftcn.com
				</a>
			</li>
		</ul>
	</section>
</div>
