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
			{#each [{ faction: 'default' as const, label: 'Default' }, { faction: 'orc' as const, label: 'Orc' }, { faction: 'elf' as const, label: 'Elf' }, { faction: 'human' as const, label: 'Human' }, { faction: 'undead' as const, label: 'Undead' }] as item (item.faction)}
				<Cursor faction={item.faction}>
					<Card>
						<CardHeader>
							<CardTitle>{item.label}</CardTitle>
							<CardDescription>Hover to see cursor</CardDescription>
						</CardHeader>
						<CardContent>
							<Avatar faction={item.faction} size="sm">
								{#snippet fallback()}
									<span>⚔️</span>
								{/snippet}
							</Avatar>
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
  import { Cursor } from '$lib/components/warcraftcn/index.js';
&lt;/script&gt;

&lt;Cursor faction="orc"&gt;
  &lt;!-- Content here gets the orc cursor --&gt;
  &lt;div&gt;Hover over me!&lt;/div&gt;
&lt;/Cursor&gt;</code>`}</pre>
	</section>
</div>
