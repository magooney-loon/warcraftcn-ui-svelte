<svelte:head>
	<title>Get Started — warcraftcn/ui</title>
</svelte:head>

<div class="mx-auto max-w-3xl space-y-10">
	<div>
		<h1 class="fantasy text-3xl font-bold text-amber-200">warcraftcn/ui</h1>
		<p class="mt-2 text-amber-100/70">
			An open-source UI component library styled after the classic Warcraft III RTS aesthetics —
			fantasy borders, scroll textures, faction-based color themes, and gold/amber color palettes.
		</p>
	</div>

	<!-- About -->
	<section class="space-y-3">
		<h2 class="fantasy text-xl text-amber-300">About the Original Project</h2>
		<p class="text-sm leading-relaxed text-amber-100/70">
			<a
				href="https://warcraftcn.com"
				target="_blank"
				class="text-amber-400 underline underline-offset-2 hover:text-amber-300">warcraftcn.com</a
			>
			is a React/Next.js component library built by
			<a
				href="https://orcdev.com"
				target="_blank"
				class="text-amber-400 underline underline-offset-2 hover:text-amber-300">OrcDev</a
			>. It provides 18+ themed components using Radix UI primitives, CVA for variants, Tailwind CSS
			v4, and a custom CSS layer (`warcraft.css`) for the signature border-image frames, scroll
			animations, and faction theming.
		</p>
		<p class="text-sm leading-relaxed text-amber-100/70">
			Components support five factions — <strong class="text-amber-200">Default</strong>,
			<strong class="text-red-300">Orc</strong>,
			<strong class="text-blue-300">Human</strong>,
			<strong class="text-green-300">Elf</strong>, and
			<strong class="text-purple-300">Undead</strong> — each with unique border frames, background images,
			and color schemes.
		</p>
	</section>

	<!-- Svelte Port -->
	<section class="space-y-3">
		<h2 class="fantasy text-xl text-amber-300">The Svelte 5 Port</h2>
		<p class="text-sm leading-relaxed text-amber-100/70">
			This project is a full port to <strong class="text-amber-200">SvelteKit + Svelte 5</strong>,
			built from scratch using runes mode (`$state`, `$derived`, `$props`, `$bindable`, `$effect`).
			No Radix, no CVA, no clsx — just native Svelte primitives and Tailwind CSS.
		</p>
		<div class="rounded-lg border border-amber-900/30 bg-black/30 p-4">
			<h3 class="fantasy mb-3 text-sm font-semibold text-amber-300">Tech Stack</h3>
			<table class="w-full text-sm text-amber-100/70">
				<tbody>
					<tr class="border-b border-amber-900/10">
						<td class="py-1.5 pr-4 font-medium text-amber-200">Framework</td>
						<td>SvelteKit (Svelte 5, runes mode)</td>
					</tr>
					<tr class="border-b border-amber-900/10">
						<td class="py-1.5 pr-4 font-medium text-amber-200">Language</td>
						<td>TypeScript (strict)</td>
					</tr>
					<tr class="border-b border-amber-900/10">
						<td class="py-1.5 pr-4 font-medium text-amber-200">Styling</td>
						<td>Tailwind CSS v4 + warcraft.css (unchanged)</td>
					</tr>
					<tr class="border-b border-amber-900/10">
						<td class="py-1.5 pr-4 font-medium text-amber-200">Transitions</td>
						<td>svelte/transition (fade, slide, fly)</td>
					</tr>
					<tr class="border-b border-amber-900/10">
						<td class="py-1.5 pr-4 font-medium text-amber-200">Context</td>
						<td>setContext / getContext (Svelte 5)</td>
					</tr>
					<tr class="border-b border-amber-900/10">
						<td class="py-1.5 pr-4 font-medium text-amber-200">Packaging</td>
						<td>@sveltejs/package (svelte-package)</td>
					</tr>
					<tr>
						<td class="py-1.5 pr-4 font-medium text-amber-200">Theme</td>
						<td>Dark only</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>

	<!-- Components Ported -->
	<section class="space-y-3">
		<h2 class="fantasy text-xl text-amber-300">Components</h2>
		<p class="text-sm text-amber-100/70">All 18 components have been ported:</p>
		<div class="grid grid-cols-2 gap-2 sm:grid-cols-3">
			{#each ['Accordion', 'Avatar', 'Badge', 'Button', 'Card', 'Checkbox', 'Cursor', 'DropdownMenu', 'Input', 'Label', 'Pagination', 'RadioGroup', 'Skeleton', 'Spinner', 'Tabs', 'Textarea', 'Toast', 'Tooltip'] as name (name)}
				<span
					class="rounded border border-amber-900/20 bg-black/20 px-3 py-1 text-xs text-amber-100/60"
					>{name}</span
				>
			{/each}
		</div>
	</section>

	<!-- Installation -->
	<section class="space-y-3">
		<h2 class="fantasy text-xl text-amber-300">Installation</h2>
		<p class="text-sm text-amber-100/70">Clone the repo and install dependencies:</p>
		<pre
			class="overflow-x-auto rounded-lg border border-amber-900/30 bg-black/40 p-4 text-sm text-amber-100/80">{@html `<code>git clone https://github.com/TheOrcDev/warcraftcn-ui.git
cd warcraftcn-ui
pnpm install
pnpm dev</code>`}</pre>
	</section>

	<!-- Usage -->
	<section class="space-y-3">
		<h2 class="fantasy text-xl text-amber-300">Usage</h2>
		<p class="text-sm text-amber-100/70">Import components from the library barrel export:</p>
		<pre
			class="overflow-x-auto rounded-lg border border-amber-900/30 bg-black/40 p-4 text-sm text-amber-100/80">{@html `<code>&lt;script&gt;
  import { Button, Card, CardHeader, CardTitle } from '$lib/components/warcraftcn/index.js';
&lt;/script&gt;

&lt;Card&gt;
  &lt;CardHeader&gt;
    &lt;CardTitle&gt;Warcraft Card&lt;/CardTitle&gt;
  &lt;/CardHeader&gt;
  &lt;Button variant="frame"&gt;Click Me&lt;/Button&gt;
&lt;/Card&gt;</code>`}</pre>
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
					>Svelte Port Repository</a
				>
			</li>
			<li>
				<a
					href="https://github.com/TheOrcDev/warcraftcn-ui"
					target="_blank"
					class="text-amber-400 underline underline-offset-2 hover:text-amber-300"
					>Original React Repository</a
				>
			</li>
			<li>
				<a
					href="https://warcraftcn.com"
					target="_blank"
					class="text-amber-400 underline underline-offset-2 hover:text-amber-300"
					>Original React Site (warcraftcn.com)</a
				>
			</li>
		</ul>
	</section>
</div>
