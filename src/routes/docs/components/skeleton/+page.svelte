<script lang="ts">
	import { Skeleton } from '$lib/components/warcraftcn/index.js';
</script>

<svelte:head>
	<title>Skeleton — warcraftcn/ui</title>
</svelte:head>

<div class="mx-auto max-w-4xl space-y-8">
	<div>
		<h1 class="fantasy text-3xl font-bold text-amber-200">Skeleton</h1>
		<p class="mt-2 text-amber-100/70">
			A pulsing fantasy placeholder for loading states. Supports default and circular variants, plus
			faction-based color themes.
		</p>
	</div>

	<!-- Factions -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Factions</h2>
		<div class="flex flex-wrap items-end gap-6">
			<div class="space-y-2">
				<p class="text-xs text-amber-100/50">Default</p>
				<Skeleton class="h-24 w-40" />
			</div>
			<div class="space-y-2">
				<p class="text-xs text-amber-100/50">Orc</p>
				<Skeleton faction="orc" class="h-24 w-40" />
			</div>
			<div class="space-y-2">
				<p class="text-xs text-amber-100/50">Elf</p>
				<Skeleton faction="elf" class="h-24 w-40" />
			</div>
			<div class="space-y-2">
				<p class="text-xs text-amber-100/50">Human</p>
				<Skeleton faction="human" class="h-24 w-40" />
			</div>
			<div class="space-y-2">
				<p class="text-xs text-amber-100/50">Undead</p>
				<Skeleton faction="undead" class="h-24 w-40" />
			</div>
		</div>
	</section>

	<!-- Circular Variant -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Circular Variant</h2>
		<div class="flex flex-wrap items-end gap-6">
			<Skeleton variant="circular" class="h-16 w-16" />
			<Skeleton variant="circular" faction="orc" class="h-16 w-16" />
			<Skeleton variant="circular" faction="elf" class="h-16 w-16" />
		</div>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Usage</h2>
		<pre
			class="overflow-x-auto rounded-lg border border-amber-900/30 bg-black/40 p-4 text-sm text-amber-100/80">{@html `<code>&lt;script&gt;
  import { Skeleton } from '$lib/components/warcraftcn/index.js';
&lt;/script&gt;

&lt;Skeleton class="h-24 w-40" /&gt;
&lt;Skeleton faction="orc" class="h-24 w-40" /&gt;
&lt;Skeleton variant="circular" faction="elf" class="h-16 w-16" /&gt;</code>`}</pre>
	</section>
</div>
