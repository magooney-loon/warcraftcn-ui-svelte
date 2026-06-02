<script lang="ts">
	import { Label, Input } from '$lib/components/warcraftcn/index.js';
</script>

<svelte:head>
	<title>Label — warcraftcn/ui</title>
</svelte:head>

<div class="mx-auto max-w-4xl space-y-8">
	<div>
		<h1 class="fantasy text-3xl font-bold text-amber-200">Label</h1>
		<p class="mt-2 text-amber-100/70">
			A styled form label with support for required indicator and disabled state.
		</p>
	</div>

	<!-- Standard Label -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Standard</h2>
		<div class="max-w-sm space-y-3">
			<div class="space-y-1">
				<Label>Hero Name</Label>
				<Input placeholder="Enter hero name..." />
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
			<Input placeholder="Disabled" disabled />
		</div>
	</section>

	<!-- Muted -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Muted</h2>
		<div class="max-w-sm space-y-1">
			<Label variant="muted">Optional Info</Label>
			<Input placeholder="Not required..." />
		</div>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Usage</h2>
		<pre
			class="overflow-x-auto rounded-lg border border-amber-900/30 bg-black/40 p-4 text-sm text-amber-100/80">{@html `<code>&lt;script&gt;
  import { Label, Input } from '$lib/components/warcraftcn/index.js';
&lt;/script&gt;

&lt;Label&gt;Hero Name&lt;/Label&gt;
&lt;Label required&gt;Battle Tag&lt;/Label&gt;
&lt;Label disabled&gt;Locked&lt;/Label&gt;
&lt;Label variant="muted"&gt;Optional&lt;/Label&gt;</code>`}</pre>
	</section>
</div>
