<script lang="ts">
	import { Input } from '$lib/components/warcraftcn/index.js';
</script>

<svelte:head>
	<title>Input — warcraftcn/ui</title>
</svelte:head>

<div class="mx-auto max-w-4xl space-y-8">
	<div>
		<h1 class="fantasy text-3xl font-bold text-amber-200">Input</h1>
		<p class="mt-2 text-amber-100/70">
			A Warcraft-themed input with a gold border-image frame. Supports all standard input types and
			attributes.
		</p>
	</div>

	<!-- Standard Input -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Standard Input</h2>
		<div class="max-w-sm">
			<Input placeholder="Enter your hero name..." />
		</div>
	</section>

	<!-- Disabled -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Disabled</h2>
		<div class="max-w-sm">
			<Input placeholder="Disabled input" disabled />
		</div>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Usage</h2>
		<pre
			class="overflow-x-auto rounded-lg border border-amber-900/30 bg-black/40 p-4 text-sm text-amber-100/80">{@html `<code>&lt;script&gt;
  import { Input } from '$lib/components/warcraftcn/index.js';
&lt;/script&gt;

&lt;Input placeholder="Enter your hero name..." /&gt;
&lt;Input type="password" placeholder="Secret..." /&gt;
&lt;Input disabled /&gt;</code>`}</pre>
	</section>
</div>
