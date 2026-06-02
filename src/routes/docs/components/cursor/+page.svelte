<script lang="ts">
	import {
		Cursor,
		Card,
		CardHeader,
		CardTitle,
		CardDescription,
		CardContent,
		CardFooter,
		Button,
		Avatar
	} from '$lib/components/warcraftcn/index.js';

	const factions = [
		{
			faction: 'default' as const,
			label: 'Default',
			src: '/warcraftcn/human-peasant.webp',
			alt: 'Human Peasant'
		},
		{ faction: 'orc' as const, label: 'Orc', src: '/warcraftcn/orc-hero.webp', alt: 'Orc Hero' },
		{ faction: 'elf' as const, label: 'Elf', src: '/warcraftcn/elf-hero.webp', alt: 'Elf Hero' },
		{
			faction: 'human' as const,
			label: 'Human',
			src: '/warcraftcn/human-hero.webp',
			alt: 'Human Hero'
		},
		{
			faction: 'undead' as const,
			label: 'Undead',
			src: '/warcraftcn/undead-hero.webp',
			alt: 'Undead Hero'
		}
	];
</script>

<svelte:head>
	<title>Cursor — warcraftcn/ui</title>
</svelte:head>

<div class="mx-auto max-w-4xl space-y-8">
	<div>
		<h1 class="fantasy text-3xl font-bold text-amber-200">Cursor</h1>
		<p class="mt-2 text-amber-100/70">
			A wrapper component that applies faction-based custom CSS cursors to its children. Hover over
			each card to see the different cursor styles.
		</p>
	</div>

	<!-- Faction Cursors -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Faction Cursors</h2>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each factions as item (item.faction)}
				<Cursor faction={item.faction}>
					<Card>
						<CardHeader>
							<CardTitle>{item.label}</CardTitle>
							<CardDescription>Hover to see cursor</CardDescription>
						</CardHeader>
						<CardContent>
							<Avatar faction={item.faction} size="sm" src={item.src} alt={item.alt} />
						</CardContent>
						<CardFooter>
							<Button variant="frame">Interact</Button>
						</CardFooter>
					</Card>
				</Cursor>
			{/each}
		</div>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Usage</h2>
		<pre
			class="overflow-x-auto rounded-lg border border-amber-900/30 bg-black/40 p-4 text-sm text-amber-100/80">{@html `<code>&lt;script&gt;
  import { Cursor } from 'warcraftcn-ui-svelte';
&lt;/script&gt;

&lt;Cursor faction="orc"&gt;
  &lt;div&gt;Hover over me for the orc cursor&lt;/div&gt;
&lt;/Cursor&gt;</code>`}</pre>
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
