<script lang="ts">
	import { Skeleton, Card, CardHeader, CardContent } from '$lib/components/warcraftcn/index.js';
</script>

<svelte:head>
	<title>Skeleton — warcraftcn/ui</title>
</svelte:head>

<div class="mx-auto max-w-4xl space-y-8">
	<div>
		<h1 class="fantasy text-3xl font-bold text-amber-200">Skeleton</h1>
		<p class="mt-2 text-amber-100/70">
			A pulsing fantasy placeholder for loading states. Supports
			<code class="text-amber-300">default</code> and
			<code class="text-amber-300">circular</code> variants plus faction-based color themes.
		</p>
	</div>

	<!-- Factions -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Factions</h2>
		<div class="flex flex-wrap items-end gap-6">
			{#each ['default', 'orc', 'elf', 'human', 'undead'] as f (f)}
				{@const faction = f as 'default' | 'orc' | 'elf' | 'human' | 'undead'}
				<div class="space-y-2">
					<p class="text-xs text-amber-100/50 capitalize">{f}</p>
					<Skeleton {faction} class="h-24 w-40" />
				</div>
			{/each}
		</div>
	</section>

	<!-- Circular -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Circular</h2>
		<div class="flex flex-wrap items-center gap-6">
			{#each ['default', 'orc', 'elf', 'human', 'undead'] as f (f)}
				{@const faction = f as 'default' | 'orc' | 'elf' | 'human' | 'undead'}
				<div class="space-y-2">
					<p class="text-xs text-amber-100/50 capitalize">{f}</p>
					<Skeleton variant="circular" {faction} class="h-16 w-16" />
				</div>
			{/each}
		</div>
	</section>

	<!-- Skeleton Card Layout -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Card Layout Pattern</h2>
		<div class="max-w-sm">
			<Card>
				<CardHeader>
					<div class="flex items-center gap-3">
						<Skeleton variant="circular" class="h-12 w-12 shrink-0" />
						<div class="flex-1 space-y-2">
							<Skeleton class="h-4 w-3/4" />
							<Skeleton class="h-3 w-1/2" />
						</div>
					</div>
				</CardHeader>
				<CardContent class="space-y-2">
					<Skeleton class="h-3 w-full" />
					<Skeleton class="h-3 w-full" />
					<Skeleton class="h-3 w-4/5" />
				</CardContent>
			</Card>
		</div>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Usage</h2>
		<pre
			class="overflow-x-auto rounded-lg border border-amber-900/30 bg-black/40 p-4 text-sm text-amber-100/80">{@html `<code>&lt;script&gt;
  import { Skeleton } from 'warcraftcn-ui-svelte';
&lt;/script&gt;

&lt;!-- Default rectangle --&gt;
&lt;Skeleton class="h-24 w-40" /&gt;

&lt;!-- Faction-colored --&gt;
&lt;Skeleton faction="orc" class="h-24 w-40" /&gt;
&lt;Skeleton faction="elf" class="h-24 w-40" /&gt;
&lt;Skeleton faction="human" class="h-24 w-40" /&gt;
&lt;Skeleton faction="undead" class="h-24 w-40" /&gt;

&lt;!-- Circular --&gt;
&lt;Skeleton variant="circular" class="h-16 w-16" /&gt;
&lt;Skeleton variant="circular" faction="orc" class="h-16 w-16" /&gt;</code>`}</pre>
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
						<td class="px-4 py-2">"default" | "circular"</td>
						<td class="px-4 py-2">"default"</td>
					</tr>
					<tr>
						<td class="px-4 py-2 font-mono">faction</td>
						<td class="px-4 py-2">"default" | "orc" | "elf" | "human" | "undead"</td>
						<td class="px-4 py-2">"default"</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
</div>
