<script lang="ts">
	import { Badge } from '$lib/components/warcraftcn/index.js';
</script>

<svelte:head>
	<title>Badge — warcraftcn/ui</title>
</svelte:head>

<div class="mx-auto max-w-4xl space-y-8">
	<div>
		<h1 class="fantasy text-3xl font-bold text-amber-200">Badge</h1>
		<p class="mt-2 text-amber-100/70">
			A fantasy-styled badge with variant, size, faction, and shape options.
		</p>
	</div>

	<!-- Variants -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Variants</h2>
		<div class="flex flex-wrap items-center gap-4">
			<Badge>Default</Badge>
			<Badge variant="secondary">Secondary</Badge>
			<Badge variant="destructive">Destructive</Badge>
			<Badge variant="outline">Outline</Badge>
		</div>
	</section>

	<!-- Sizes -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Sizes</h2>
		<div class="flex flex-wrap items-center gap-4">
			<Badge size="sm">Small</Badge>
			<Badge size="default">Default</Badge>
			<Badge size="lg">Large</Badge>
		</div>
	</section>

	<!-- Factions -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Factions</h2>
		<div class="flex flex-wrap items-center gap-4">
			<Badge faction="alliance">Alliance</Badge>
			<Badge faction="horde">Horde</Badge>
		</div>
	</section>

	<!-- Shapes -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Shapes</h2>
		<div class="flex flex-wrap items-center gap-4">
			<Badge shape="default">Default</Badge>
			<Badge shape="shield">Shield</Badge>
			<Badge shape="banner">Banner</Badge>
		</div>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Usage</h2>
		<pre
			class="overflow-x-auto rounded-lg border border-amber-900/30 bg-black/40 p-4 text-sm text-amber-100/80">{@html `<code>&lt;script&gt;
  import { Badge } from '$lib/components/warcraftcn/index.js';
&lt;/script&gt;

&lt;Badge&gt;Default&lt;/Badge&gt;
&lt;Badge variant="secondary"&gt;Secondary&lt;/Badge&gt;
&lt;Badge variant="destructive"&gt;Destructive&lt;/Badge&gt;
&lt;Badge variant="outline"&gt;Outline&lt;/Badge&gt;
&lt;Badge size="lg" faction="alliance" shape="shield"&gt;Alliance&lt;/Badge&gt;</code>`}</pre>
	</section>
</div>
