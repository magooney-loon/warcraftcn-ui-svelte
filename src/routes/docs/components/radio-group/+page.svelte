<script lang="ts">
	import { RadioGroup, RadioGroupItem, Label } from '$lib/components/warcraftcn/index.js';
</script>

<svelte:head>
	<title>Radio Group — warcraftcn/ui</title>
</svelte:head>

<div class="mx-auto max-w-4xl space-y-8">
	<div>
		<h1 class="fantasy text-3xl font-bold text-amber-200">Radio Group</h1>
		<p class="mt-2 text-amber-100/70">
			A gem socket radio button group with Warcraft-themed styling. Supports vertical and horizontal
			orientations.
		</p>
	</div>

	<!-- Default (Vertical) -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Default (Vertical)</h2>
		<div class="max-w-sm">
			<RadioGroup value="thrall">
				<div class="flex items-center gap-2">
					<RadioGroupItem value="thrall" />
					<Label>Thrall</Label>
				</div>
				<div class="flex items-center gap-2">
					<RadioGroupItem value="jaina" />
					<Label>Jaina</Label>
				</div>
				<div class="flex items-center gap-2">
					<RadioGroupItem value="arthas" />
					<Label>Arthas</Label>
				</div>
			</RadioGroup>
		</div>
	</section>

	<!-- Horizontal -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Horizontal</h2>
		<div>
			<RadioGroup orientation="horizontal" value="orc">
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
			</RadioGroup>
		</div>
	</section>

	<!-- Disabled -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Disabled</h2>
		<div class="max-w-sm">
			<RadioGroup disabled value="">
				<div class="flex items-center gap-2">
					<RadioGroupItem value="a" />
					<Label>Option A</Label>
				</div>
				<div class="flex items-center gap-2">
					<RadioGroupItem value="b" />
					<Label>Option B</Label>
				</div>
			</RadioGroup>
		</div>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Usage</h2>
		<pre
			class="overflow-x-auto rounded-lg border border-amber-900/30 bg-black/40 p-4 text-sm text-amber-100/80">{@html `<code>&lt;script&gt;
  import { RadioGroup, RadioGroupItem, Label } from '$lib/components/warcraftcn/index.js';

  let selected = $state('thrall');
&lt;/script&gt;

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
&lt;/RadioGroup&gt;</code>`}</pre>
	</section>
</div>
