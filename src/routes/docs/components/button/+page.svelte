<script lang="ts">
	import { Button } from '$lib/components/warcraftcn/index.js';
</script>

<svelte:head>
	<title>Button — warcraftcn/ui</title>
</svelte:head>

<div class="mx-auto max-w-4xl space-y-8">
	<div>
		<h1 class="fantasy text-3xl font-bold text-amber-200">Button</h1>
		<p class="mt-2 text-amber-100/70">
			A Warcraft-themed button with gold border-image frames. Supports default and frame variants.
		</p>
	</div>

	<!-- Default Buttons -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Default Variant</h2>
		<div class="flex flex-wrap items-center gap-4">
			<Button>Default Button</Button>
			<Button disabled>Disabled</Button>
		</div>
	</section>

	<!-- Frame Buttons -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Frame Variant</h2>
		<div class="flex flex-wrap items-center gap-4">
			<Button variant="frame">Frame Button</Button>
			<Button variant="frame" disabled>Disabled</Button>
		</div>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Usage</h2>
		<pre
			class="overflow-x-auto rounded-lg border border-amber-900/30 bg-black/40 p-4 text-sm text-amber-100/80">{@html `<code>&lt;script&gt;
  import { Button } from '$lib/components/warcraftcn/index.js';
&lt;/script&gt;

&lt;Button&gt;Default Button&lt;/Button&gt;
&lt;Button variant="frame"&gt;Frame Button&lt;/Button&gt;
&lt;Button disabled&gt;Disabled&lt;/Button&gt;</code>`}</pre>
	</section>
</div>
