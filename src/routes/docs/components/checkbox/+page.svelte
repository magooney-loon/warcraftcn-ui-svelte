<script lang="ts">
	import { Checkbox } from '$lib/components/warcraftcn/index.js';

	let checkedDefault = $state(false);
	let checkedOrc = $state(true);
	let checkedElf = $state(false);
	let checkedHuman = $state(false);
	let checkedUndead = $state(true);
</script>

<svelte:head>
	<title>Checkbox — warcraftcn/ui</title>
</svelte:head>

<div class="mx-auto max-w-4xl space-y-8">
	<div>
		<h1 class="fantasy text-3xl font-bold text-amber-200">Checkbox</h1>
		<p class="mt-2 text-amber-100/70">
			A faction-themed checkbox with custom checked/unchecked images per faction. Supports bindable
			checked state and disabled mode.
		</p>
	</div>

	<!-- Factions (Interactive) -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Factions</h2>
		<div class="flex flex-wrap gap-6">
			<Checkbox faction="default" bind:checked={checkedDefault}>Default</Checkbox>
			<Checkbox faction="human" bind:checked={checkedHuman}>Human</Checkbox>
			<Checkbox faction="orc" bind:checked={checkedOrc}>Orc</Checkbox>
			<Checkbox faction="elf" bind:checked={checkedElf}>Elf</Checkbox>
			<Checkbox faction="undead" bind:checked={checkedUndead}>Undead</Checkbox>
		</div>
	</section>

	<!-- Pre-checked -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Initially Checked</h2>
		<div class="flex flex-wrap gap-6">
			<Checkbox faction="orc" checked={true}>Orc (checked)</Checkbox>
			<Checkbox faction="human" checked={true}>Human (checked)</Checkbox>
			<Checkbox faction="elf" checked={true}>Elf (checked)</Checkbox>
		</div>
	</section>

	<!-- Disabled -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Disabled</h2>
		<div class="flex flex-wrap gap-6">
			<Checkbox faction="human" disabled>Disabled Unchecked</Checkbox>
			<Checkbox faction="orc" checked={true} disabled>Disabled Checked</Checkbox>
			<Checkbox faction="undead" disabled>Undead Disabled</Checkbox>
		</div>
	</section>

	<!-- With Labels -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">With Descriptive Labels</h2>
		<div class="space-y-2">
			<Checkbox faction="human">Enable Alliance notifications</Checkbox>
			<Checkbox faction="orc">Subscribe to Horde newsletters</Checkbox>
			<Checkbox faction="undead" disabled>Join the Scourge (unavailable)</Checkbox>
		</div>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Usage</h2>
		<pre
			class="overflow-x-auto rounded-lg border border-amber-900/30 bg-black/40 p-4 text-sm text-amber-100/80">{@html `<code>&lt;script&gt;
		  import { Checkbox } from 'warcraftcn-ui-svelte';
		  let checked = $state(false);
		&lt;/script&gt;

		&lt;Checkbox bind:checked faction="orc"&gt;Orc Checkbox&lt;/Checkbox&gt;
		&lt;Checkbox disabled&gt;Disabled&lt;/Checkbox&gt;</code>`}</pre>
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
						<td class="px-4 py-2 font-mono">faction</td>
						<td class="px-4 py-2">"default" | "orc" | "elf" | "human" | "undead"</td>
						<td class="px-4 py-2">"default"</td>
					</tr>
					<tr class="border-b border-amber-900/20">
						<td class="px-4 py-2 font-mono">checked</td>
						<td class="px-4 py-2">boolean (bindable)</td>
						<td class="px-4 py-2">false</td>
					</tr>
					<tr class="border-b border-amber-900/20">
						<td class="px-4 py-2 font-mono">disabled</td>
						<td class="px-4 py-2">boolean</td>
						<td class="px-4 py-2">false</td>
					</tr>
					<tr>
						<td class="px-4 py-2 font-mono">id</td>
						<td class="px-4 py-2">string</td>
						<td class="px-4 py-2">—</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
</div>
