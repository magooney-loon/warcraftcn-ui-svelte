<script lang="ts">
	import { Textarea, Label } from '$lib/components/warcraftcn/index.js';
</script>

<svelte:head>
	<title>Textarea — warcraftcn/ui</title>
</svelte:head>

<div class="mx-auto max-w-4xl space-y-8">
	<div>
		<h1 class="fantasy text-3xl font-bold text-amber-200">Textarea</h1>
		<p class="mt-2 text-amber-100/70">
			A Warcraft-themed textarea with a gold border-image frame. Uses
			<code class="text-amber-300">field-sizing</code> for auto-growing content.
		</p>
	</div>

	<!-- Standard -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Standard</h2>
		<div class="max-w-md">
			<Textarea placeholder="Write your battle plans here..." />
		</div>
	</section>

	<!-- Long placeholder -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">With Long Placeholder</h2>
		<div class="max-w-md">
			<Textarea
				placeholder="Describe your hero's backstory... The lands of Azeroth await your tale. The more detail you provide, the greater your legend will become."
			/>
		</div>
	</section>

	<!-- Disabled -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Disabled</h2>
		<div class="max-w-md">
			<Textarea placeholder="This field is locked." disabled />
		</div>
	</section>

	<!-- With Label -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">With Label</h2>
		<div class="max-w-md space-y-1">
			<Label for="lore" required>Lore Entry</Label>
			<Textarea id="lore" placeholder="Write your lore entry here..." />
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
  import { Textarea, Label } from 'warcraftcn-ui-svelte';
  let value = $state('');
&lt;/script&gt;

&lt;Textarea bind:value placeholder="Write your battle plans..." /&gt;
&lt;Textarea disabled /&gt;

&lt;!-- With label --&gt;
&lt;Label for="lore" required&gt;Lore Entry&lt;/Label&gt;
&lt;Textarea id="lore" placeholder="Write your lore..." /&gt;</code>`}</pre>
	</section>
</div>
