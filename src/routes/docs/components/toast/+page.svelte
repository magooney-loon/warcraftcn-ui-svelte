<script lang="ts">
	import { triggerScrollToast, Button, Toaster } from '$lib/components/warcraftcn/index.js';
</script>

<svelte:head>
	<title>Toast — warcraftcn/ui</title>
</svelte:head>

<div class="mx-auto max-w-4xl space-y-8">
	<div>
		<h1 class="fantasy text-3xl font-bold text-amber-200">Toast</h1>
		<p class="mt-2 text-amber-100/70">
			A scroll-unroll toast notification with faction-based styling and semantic variants. Add
			<code class="text-amber-300">&lt;Toaster /&gt;</code> to your root layout once.
		</p>
	</div>

	<!-- Factions -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Factions</h2>
		<div class="flex flex-wrap gap-4">
			<Button
				onclick={() => triggerScrollToast({ message: 'Quest accepted!', faction: 'default' })}
			>
				Default
			</Button>
			<Button onclick={() => triggerScrollToast({ message: 'For the Horde!', faction: 'orc' })}>
				Orc
			</Button>
			<Button onclick={() => triggerScrollToast({ message: 'By the Light!', faction: 'human' })}>
				Human
			</Button>
			<Button onclick={() => triggerScrollToast({ message: 'Nature guides us.', faction: 'elf' })}>
				Elf
			</Button>
			<Button
				onclick={() => triggerScrollToast({ message: 'The Scourge spreads...', faction: 'undead' })}
			>
				Undead
			</Button>
		</div>
	</section>

	<!-- Semantic Variants -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Variants</h2>
		<div class="flex flex-wrap gap-4">
			<Button
				onclick={() => triggerScrollToast({ message: 'Operation completed.', variant: 'success' })}
			>
				Success
			</Button>
			<Button
				onclick={() => triggerScrollToast({ message: 'Something went wrong!', variant: 'error' })}
			>
				Error
			</Button>
			<Button onclick={() => triggerScrollToast({ message: 'Watch out...', variant: 'warning' })}>
				Warning
			</Button>
			<Button
				onclick={() => triggerScrollToast({ message: 'Here is some info.', variant: 'info' })}
			>
				Info
			</Button>
		</div>
	</section>

	<!-- Faction + Variant Combined -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Faction + Variant</h2>
		<div class="flex flex-wrap gap-4">
			<Button
				onclick={() =>
					triggerScrollToast({
						message: 'Victory for the Horde!',
						faction: 'orc',
						variant: 'success'
					})}
			>
				Orc Success
			</Button>
			<Button
				onclick={() =>
					triggerScrollToast({
						message: 'The Light has failed us.',
						faction: 'human',
						variant: 'error'
					})}
			>
				Human Error
			</Button>
			<Button
				onclick={() =>
					triggerScrollToast({
						message: 'The forests are dying...',
						faction: 'elf',
						variant: 'warning'
					})}
			>
				Elf Warning
			</Button>
		</div>
	</section>

	<!-- Duration -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Custom Duration</h2>
		<div class="flex flex-wrap gap-4">
			<Button
				onclick={() => triggerScrollToast({ message: 'Gone in 1.5 seconds!', durationMs: 1500 })}
			>
				Short (1.5s)
			</Button>
			<Button
				onclick={() =>
					triggerScrollToast({ message: 'Lasts 10 seconds. Read it all!', durationMs: 10000 })}
			>
				Long (10s)
			</Button>
		</div>
	</section>

	<Toaster />

	<!-- Usage -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Usage</h2>
		<pre
			class="overflow-x-auto rounded-lg border border-amber-900/30 bg-black/40 p-4 text-sm text-amber-100/80">{@html `<code>&lt;!-- In your root +layout.svelte --&gt;
&lt;script&gt;
  import { Toaster } from 'warcraftcn-ui-svelte';
&lt;/script&gt;

&lt;slot /&gt;
&lt;Toaster /&gt;

&lt;!-- Trigger from anywhere --&gt;
&lt;script&gt;
  import { triggerScrollToast } from 'warcraftcn-ui-svelte';
&lt;/script&gt;

&lt;button onclick={() =&gt; triggerScrollToast({
  message: 'Quest accepted!',
  faction: 'orc',
  variant: 'success'
})}&gt;
  Show Toast
&lt;/button&gt;</code>`}</pre>
	</section>

	<!-- Props -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">triggerScrollToast options</h2>
		<div class="overflow-x-auto rounded-lg border border-amber-900/30">
			<table class="w-full text-sm text-amber-100/80">
				<thead class="border-b border-amber-900/30 bg-black/20">
					<tr>
						<th class="px-4 py-2 text-left text-amber-300">Option</th>
						<th class="px-4 py-2 text-left text-amber-300">Type</th>
						<th class="px-4 py-2 text-left text-amber-300">Default</th>
					</tr>
				</thead>
				<tbody>
					<tr class="border-b border-amber-900/20">
						<td class="px-4 py-2 font-mono">message</td>
						<td class="px-4 py-2">string</td>
						<td class="px-4 py-2">""</td>
					</tr>
					<tr class="border-b border-amber-900/20">
						<td class="px-4 py-2 font-mono">faction</td>
						<td class="px-4 py-2">"default" | "orc" | "elf" | "human" | "undead"</td>
						<td class="px-4 py-2">"default"</td>
					</tr>
					<tr class="border-b border-amber-900/20">
						<td class="px-4 py-2 font-mono">variant</td>
						<td class="px-4 py-2">"default" | "success" | "error" | "warning" | "info"</td>
						<td class="px-4 py-2">"default"</td>
					</tr>
					<tr>
						<td class="px-4 py-2 font-mono">durationMs</td>
						<td class="px-4 py-2">number</td>
						<td class="px-4 py-2">5000</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
</div>
