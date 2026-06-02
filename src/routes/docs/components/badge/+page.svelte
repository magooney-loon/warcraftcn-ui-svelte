<script lang="ts">
	import { Badge, Spinner } from '$lib/components/warcraftcn/index.js';
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
			<Badge variant="default">Default</Badge>
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

	<!-- With Icon (Spinner) -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">With Icon</h2>
		<div class="flex flex-wrap items-center gap-4">
			<Badge>
				<Spinner class="size-3" />
				Syncing
			</Badge>
			<Badge variant="secondary">
				<Spinner class="size-3" />
				Loading
			</Badge>
		</div>
	</section>

	<!-- Combined Props -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Combined</h2>
		<div class="flex flex-wrap items-center gap-4">
			<Badge size="lg" faction="alliance" shape="shield">Alliance Shield</Badge>
			<Badge size="lg" faction="horde" shape="banner">Horde Banner</Badge>
			<Badge size="sm" variant="destructive" shape="shield">Danger</Badge>
		</div>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Usage</h2>
		<pre
			class="overflow-x-auto rounded-lg border border-amber-900/30 bg-black/40 p-4 text-sm text-amber-100/80">{@html `<code class="language-html">&lt;script&gt;
  import { Badge } from 'warcraftcn-ui-svelte';
&lt;/script&gt;

&lt;Badge variant="secondary"&gt;Secondary&lt;/Badge&gt;
&lt;Badge size="lg" faction="alliance" shape="shield"&gt;Alliance&lt;/Badge&gt;</code>`}</pre>
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
						<td class="px-4 py-2 font-mono">variant</td>
						<td class="px-4 py-2">"default" | "secondary" | "destructive" | "outline"</td>
						<td class="px-4 py-2">"default"</td>
					</tr>
					<tr class="border-b border-amber-900/20">
						<td class="px-4 py-2 font-mono">size</td>
						<td class="px-4 py-2">"sm" | "default" | "lg"</td>
						<td class="px-4 py-2">"default"</td>
					</tr>
					<tr class="border-b border-amber-900/20">
						<td class="px-4 py-2 font-mono">faction</td>
						<td class="px-4 py-2">"none" | "alliance" | "horde"</td>
						<td class="px-4 py-2">"none"</td>
					</tr>
					<tr>
						<td class="px-4 py-2 font-mono">shape</td>
						<td class="px-4 py-2">"default" | "shield" | "banner"</td>
						<td class="px-4 py-2">"default"</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
</div>
