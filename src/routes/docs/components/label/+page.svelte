<script lang="ts">
	import { Label, Input, Checkbox, Textarea } from '$lib/components/warcraftcn/index.js';
</script>

<svelte:head>
	<title>Label — warcraftcn/ui</title>
</svelte:head>

<div class="mx-auto max-w-4xl space-y-8">
	<div>
		<h1 class="fantasy text-3xl font-bold text-amber-200">Label</h1>
		<p class="mt-2 text-amber-100/70">
			A styled form label. Supports required indicator, disabled state, and a muted variant.
		</p>
	</div>

	<!-- Variants -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Variants</h2>
		<div class="max-w-sm space-y-4">
			<div class="space-y-1">
				<Label>Default</Label>
				<Input placeholder="Hero name..." />
			</div>
			<div class="space-y-1">
				<Label variant="muted">Muted</Label>
				<Input placeholder="Optional field..." />
			</div>
		</div>
	</section>

	<!-- Required -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Required</h2>
		<div class="max-w-sm space-y-1">
			<Label required>Battle Tag</Label>
			<Input placeholder="Required field..." />
		</div>
	</section>

	<!-- Disabled -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Disabled</h2>
		<div class="max-w-sm space-y-1">
			<Label disabled>Locked Field</Label>
			<Input placeholder="Cannot edit" disabled />
		</div>
	</section>

	<!-- With Checkbox -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">With Checkbox</h2>
		<div class="space-y-2">
			<div class="flex items-center gap-2">
				<Checkbox faction="human" />
				<Label>Join the Alliance</Label>
			</div>
			<div class="flex items-center gap-2">
				<Checkbox faction="orc" />
				<Label>Join the Horde</Label>
			</div>
			<div class="flex items-center gap-2">
				<Checkbox faction="undead" disabled />
				<Label disabled>Serve the Scourge (unavailable)</Label>
			</div>
		</div>
	</section>

	<!-- With Textarea -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">With Textarea</h2>
		<div class="max-w-md space-y-1">
			<Label for="lore" required>Lore Entry</Label>
			<Textarea id="lore" placeholder="Write your lore here..." />
		</div>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Usage</h2>
		<pre
			class="overflow-x-auto rounded-lg border border-amber-900/30 bg-black/40 p-4 text-sm text-amber-100/80">{@html `<code>&lt;script&gt;
  import { Label, Input } from 'warcraftcn-ui-svelte';
&lt;/script&gt;

&lt;Label for="name" required&gt;Hero Name&lt;/Label&gt;
&lt;Input id="name" placeholder="..." /&gt;</code>`}</pre>
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
						<td class="px-4 py-2 font-mono">variant</td>
						<td class="px-4 py-2">"default" | "muted"</td>
						<td class="px-4 py-2">"default"</td>
					</tr>
					<tr class="border-b border-amber-900/20">
						<td class="px-4 py-2 font-mono">required</td>
						<td class="px-4 py-2">boolean</td>
						<td class="px-4 py-2">false</td>
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
