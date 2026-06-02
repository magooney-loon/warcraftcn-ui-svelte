<script lang="ts">
	import { Textarea } from '$lib/components/warcraftcn/index.js';
</script>

<svelte:head>
	<title>Textarea — warcraftcn/ui</title>
</svelte:head>

<div class="mx-auto max-w-4xl space-y-8">
	<div>
		<h1 class="fantasy text-3xl font-bold text-amber-200">Textarea</h1>
		<p class="mt-2 text-amber-100/70">
			A Warcraft-themed textarea with a gold border-image frame. Uses field-sizing for auto-growing
			content.
		</p>
	</div>

	<!-- Standard Textarea -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Standard</h2>
		<div class="max-w-md">
			<Textarea placeholder="Write your battle plans here..." />
		</div>
	</section>

	<!-- With Placeholder -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">With Placeholder</h2>
		<div class="max-w-md">
			<Textarea
				placeholder="Describe your hero's backstory... The lands of Azeroth await your tale."
			/>
		</div>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Usage</h2>
		<pre
			class="overflow-x-auto rounded-lg border border-amber-900/30 bg-black/40 p-4 text-sm text-amber-100/80">{@html `<code>&lt;script&gt;
  import { Textarea } from '$lib/components/warcraftcn/index.js';
&lt;/script&gt;

&lt;Textarea placeholder="Write your battle plans..." /&gt;
&lt;Textarea disabled /&gt;</code>`}</pre>
	</section>
</div>
