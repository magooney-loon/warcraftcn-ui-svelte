<script lang="ts">
	import { RadioGroup, RadioGroupItem, Label } from '$lib/components/warcraftcn/index.js';

	let selected = $state('thrall');
	let selectedFaction = $state('orc');
</script>

<svelte:head>
	<title>Radio Group — warcraftcn/ui</title>
</svelte:head>

<div class="mx-auto max-w-4xl space-y-8">
	<div>
		<h1 class="fantasy text-3xl font-bold text-amber-200">Radio Group</h1>
		<p class="mt-2 text-amber-100/70">
			A gem socket radio button group with Warcraft-themed styling. Supports vertical and horizontal
			orientations with bindable value.
		</p>
	</div>

	<!-- Default Vertical -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Vertical (default)</h2>
		<div class="max-w-sm">
			<RadioGroup bind:value={selected}>
				<div class="flex items-center gap-2">
					<RadioGroupItem value="thrall" />
					<Label>Thrall</Label>
				</div>
				<div class="flex items-center gap-2">
					<RadioGroupItem value="jaina" />
					<Label>Jaina Proudmoore</Label>
				</div>
				<div class="flex items-center gap-2">
					<RadioGroupItem value="arthas" />
					<Label>Arthas Menethil</Label>
				</div>
				<div class="flex items-center gap-2">
					<RadioGroupItem value="tyrande" />
					<Label>Tyrande Whisperwind</Label>
				</div>
			</RadioGroup>
			<p class="mt-2 text-xs text-amber-100/50">Selected: {selected}</p>
		</div>
	</section>

	<!-- Horizontal -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Horizontal</h2>
		<RadioGroup orientation="horizontal" bind:value={selectedFaction}>
			<div class="flex items-center gap-2">
				<RadioGroupItem value="orc" />
				<Label>Orc</Label>
			</div>
			<div class="flex items-center gap-2">
				<RadioGroupItem value="human" />
				<Label>Human</Label>
			</div>
			<div class="flex items-center gap-2">
				<RadioGroupItem value="elf" />
				<Label>Elf</Label>
			</div>
			<div class="flex items-center gap-2">
				<RadioGroupItem value="undead" />
				<Label>Undead</Label>
			</div>
		</RadioGroup>
		<p class="text-xs text-amber-100/50">Faction: {selectedFaction}</p>
	</section>

	<!-- Disabled -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Disabled</h2>
		<div class="max-w-sm">
			<RadioGroup disabled value="a">
				<div class="flex items-center gap-2">
					<RadioGroupItem value="a" />
					<Label>Option A (selected)</Label>
				</div>
				<div class="flex items-center gap-2">
					<RadioGroupItem value="b" />
					<Label>Option B</Label>
				</div>
			</RadioGroup>
		</div>
	</section>

	<!-- Installation -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Installation</h2>
		<pre
			class="overflow-x-auto rounded-lg border border-amber-900/30 bg-black/40 p-4 text-sm text-amber-100/80">{@html `<code>npm install warcraftcn-ui-svelte</code>`}</pre>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Usage</h2>
		<pre
			class="overflow-x-auto rounded-lg border border-amber-900/30 bg-black/40 p-4 text-sm text-amber-100/80">{@html `<code>&lt;script&gt;
  import { RadioGroup, RadioGroupItem, Label } from 'warcraftcn-ui-svelte';
  let selected = $state('thrall');
&lt;/script&gt;

&lt;!-- Vertical (default) --&gt;
&lt;RadioGroup bind:value={selected}&gt;
  &lt;div class="flex items-center gap-2"&gt;
    &lt;RadioGroupItem value="thrall" /&gt;
    &lt;Label&gt;Thrall&lt;/Label&gt;
  &lt;/div&gt;
  &lt;div class="flex items-center gap-2"&gt;
    &lt;RadioGroupItem value="jaina" /&gt;
    &lt;Label&gt;Jaina&lt;/Label&gt;
  &lt;/div&gt;
&lt;/RadioGroup&gt;

&lt;!-- Horizontal --&gt;
&lt;RadioGroup orientation="horizontal" bind:value={selected}&gt;
  ...
&lt;/RadioGroup&gt;

&lt;!-- Disabled --&gt;
&lt;RadioGroup disabled value="a"&gt;...&lt;/RadioGroup&gt;</code>`}</pre>
	</section>

	<!-- Props -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Props</h2>
		<div class="overflow-x-auto rounded-lg border border-amber-900/30">
			<table class="w-full text-sm text-amber-100/80">
				<thead class="border-b border-amber-900/30 bg-black/20">
					<tr>
						<th class="px-4 py-2 text-left text-amber-300">Prop</th>
						<th class="px-4 py-2 text-left text-amber-300">Type</th>
						<th class="px-4 py-2 text-left text-amber-300">Default</th>
					</tr>
				</thead>
				<tbody>
					<tr class="border-b border-amber-900/20">
						<td class="px-4 py-2 font-mono">value</td>
						<td class="px-4 py-2">string (bindable)</td>
						<td class="px-4 py-2">""</td>
					</tr>
					<tr class="border-b border-amber-900/20">
						<td class="px-4 py-2 font-mono">orientation</td>
						<td class="px-4 py-2">"vertical" | "horizontal"</td>
						<td class="px-4 py-2">"vertical"</td>
					</tr>
					<tr>
						<td class="px-4 py-2 font-mono">disabled</td>
						<td class="px-4 py-2">boolean</td>
						<td class="px-4 py-2">false</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
</div>
