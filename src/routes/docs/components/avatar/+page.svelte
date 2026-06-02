<script lang="ts">
	import { Avatar } from '$lib/components/warcraftcn/index.js';
</script>

<svelte:head>
	<title>Avatar — warcraftcn/ui</title>
</svelte:head>

<div class="mx-auto max-w-4xl space-y-8">
	<div>
		<h1 class="fantasy text-3xl font-bold text-amber-200">Avatar</h1>
		<p class="mt-2 text-amber-100/70">
			A hero portrait component with faction-based border frames. Accepts an image via
			<code class="text-amber-300">src</code> or a custom
			<code class="text-amber-300">fallback</code> snippet.
		</p>
	</div>

	<!-- Default Faction -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Default — All Sizes</h2>
		<div class="flex flex-wrap items-end gap-6">
			<Avatar
				faction="default"
				size="sm"
				src="/warcraftcn/human-peasant.webp"
				alt="Human Peasant"
			/>
			<Avatar
				faction="default"
				size="md"
				src="/warcraftcn/human-peasant.webp"
				alt="Human Peasant"
			/>
			<Avatar
				faction="default"
				size="lg"
				src="/warcraftcn/human-peasant.webp"
				alt="Human Peasant"
			/>
		</div>
	</section>

	<!-- Orc Faction -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Orc — All Sizes</h2>
		<div class="flex flex-wrap items-end gap-6">
			<Avatar faction="orc" size="sm" src="/warcraftcn/orc-hero.webp" alt="Orc Hero" />
			<Avatar faction="orc" size="md" src="/warcraftcn/orc-hero.webp" alt="Orc Hero" />
			<Avatar faction="orc" size="lg" src="/warcraftcn/orc-hero.webp" alt="Orc Hero" />
		</div>
	</section>

	<!-- Elf Faction -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Elf — All Sizes</h2>
		<div class="flex flex-wrap items-end gap-6">
			<Avatar faction="elf" size="sm" src="/warcraftcn/elf-hero.webp" alt="Elf Hero" />
			<Avatar faction="elf" size="md" src="/warcraftcn/elf-hero.webp" alt="Elf Hero" />
			<Avatar faction="elf" size="lg" src="/warcraftcn/elf-hero.webp" alt="Elf Hero" />
		</div>
	</section>

	<!-- Human Faction -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Human — All Sizes</h2>
		<div class="flex flex-wrap items-end gap-6">
			<Avatar faction="human" size="sm" src="/warcraftcn/human-hero.webp" alt="Human Hero" />
			<Avatar faction="human" size="md" src="/warcraftcn/human-hero.webp" alt="Human Hero" />
			<Avatar faction="human" size="lg" src="/warcraftcn/human-hero.webp" alt="Human Hero" />
		</div>
	</section>

	<!-- Undead Faction -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Undead — All Sizes</h2>
		<div class="flex flex-wrap items-end gap-6">
			<Avatar faction="undead" size="sm" src="/warcraftcn/undead-hero.webp" alt="Undead Hero" />
			<Avatar faction="undead" size="md" src="/warcraftcn/undead-hero.webp" alt="Undead Hero" />
			<Avatar faction="undead" size="lg" src="/warcraftcn/undead-hero.webp" alt="Undead Hero" />
		</div>
	</section>

	<!-- Fallback Snippet -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Fallback Snippet</h2>
		<p class="text-sm text-amber-100/60">
			Used when no <code class="text-amber-300">src</code> is provided.
		</p>
		<div class="flex flex-wrap items-end gap-6">
			{#each ['default', 'orc', 'elf', 'human', 'undead'] as f (f)}
				{@const faction = f as 'default' | 'orc' | 'elf' | 'human' | 'undead'}
				<Avatar {faction} size="md">
					{#snippet fallback()}
						<span class="text-3xl font-bold text-amber-300">{f[0].toUpperCase()}</span>
					{/snippet}
				</Avatar>
			{/each}
		</div>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Usage</h2>
		<pre
			class="overflow-x-auto rounded-lg border border-amber-900/30 bg-black/40 p-4 text-sm text-amber-100/80">{@html `<code>&lt;script&gt;
  import { Avatar } from 'warcraftcn-ui-svelte';
&lt;/script&gt;

&lt;Avatar src="/hero.jpg" alt="Hero" faction="orc" size="md" /&gt;

&lt;Avatar faction="elf" size="sm"&gt;
  {#snippet fallback()}
    &lt;span&gt;E&lt;/span&gt;
  {/snippet}
&lt;/Avatar&gt;</code>`}</pre>
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
						<td class="px-4 py-2 font-mono">src</td>
						<td class="px-4 py-2">string</td>
						<td class="px-4 py-2">—</td>
					</tr>
					<tr class="border-b border-amber-900/20">
						<td class="px-4 py-2 font-mono">alt</td>
						<td class="px-4 py-2">string</td>
						<td class="px-4 py-2">""</td>
					</tr>
					<tr class="border-b border-amber-900/20">
						<td class="px-4 py-2 font-mono">faction</td>
						<td class="px-4 py-2">"default" | "orc" | "elf" | "human" | "undead"</td>
						<td class="px-4 py-2">"default"</td>
					</tr>
					<tr class="border-b border-amber-900/20">
						<td class="px-4 py-2 font-mono">size</td>
						<td class="px-4 py-2">"sm" | "md" | "lg"</td>
						<td class="px-4 py-2">"md"</td>
					</tr>
					<tr>
						<td class="px-4 py-2 font-mono">fallback</td>
						<td class="px-4 py-2">Snippet</td>
						<td class="px-4 py-2">—</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
</div>
