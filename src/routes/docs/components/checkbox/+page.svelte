<script lang="ts">
	import { Checkbox } from '$lib/components/warcraftcn/index.js';
</script>

<svelte:head>
	<title>Checkbox — warcraftcn/ui</title>
</svelte:head>

<div class="mx-auto max-w-4xl space-y-8">
	<div>
		<h1 class="fantasy text-3xl font-bold text-amber-200">Checkbox</h1>
		<p class="mt-2 text-amber-100/70">
			A faction-themed checkbox with custom checked/unchecked images for each faction. Supports
			bindable checked state and disabled mode.
		</p>
	</div>

	<!-- Factions -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Factions</h2>
		<div class="flex flex-wrap gap-6">
			<Checkbox faction="default">Default</Checkbox>
			<Checkbox faction="human">Human</Checkbox>
			<Checkbox faction="orc">Orc</Checkbox>
			<Checkbox faction="elf">Elf</Checkbox>
			<Checkbox faction="undead">Undead</Checkbox>
		</div>
	</section>

	<!-- Disabled -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Disabled</h2>
		<div class="flex flex-wrap gap-6">
			<Checkbox faction="human" disabled>Disabled Unchecked</Checkbox>
			<Checkbox faction="orc" checked={true} disabled>Disabled Checked</Checkbox>
		</div>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Usage</h2>
		<pre
			class="overflow-x-auto rounded-lg border border-amber-900/30 bg-black/40 p-4 text-sm text-amber-100/80">{@html `<code>&lt;script&gt;
  import { Checkbox } from '$lib/components/warcraftcn/index.js';

  let checked = $state(false);
&lt;/script&gt;

&lt;Checkbox bind:checked faction="orc"&gt;Orc Checkbox&lt;/Checkbox&gt;
&lt;Checkbox bind:checked faction="elf"&gt;Elf Checkbox&lt;/Checkbox&gt;
&lt;Checkbox disabled&gt;Disabled&lt;/Checkbox&gt;</code>`}</pre>
	</section>
</div>
