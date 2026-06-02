<script lang="ts">
	import { Button, Spinner } from '$lib/components/warcraftcn/index.js';

	let loading = $state(false);

	function simulateLoad() {
		loading = true;
		setTimeout(() => (loading = false), 2000);
	}
</script>

<svelte:head>
	<title>Button — warcraftcn/ui</title>
</svelte:head>

<div class="mx-auto max-w-4xl space-y-8">
	<div>
		<h1 class="fantasy text-3xl font-bold text-amber-200">Button</h1>
		<p class="mt-2 text-amber-100/70">
			A Warcraft-themed button with gold border-image frames. Supports
			<code class="text-amber-300">default</code> and <code class="text-amber-300">frame</code> variants.
		</p>
	</div>

	<!-- Default Variant -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Default</h2>
		<div class="flex flex-wrap items-center gap-4">
			<Button>Accept Quest</Button>
			<Button disabled>Disabled</Button>
		</div>
	</section>

	<!-- Frame Variant -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Frame</h2>
		<div class="flex flex-wrap items-center gap-4">
			<Button variant="frame">Open Chest</Button>
			<Button variant="frame" disabled>Disabled</Button>
		</div>
	</section>

	<!-- Loading State -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Loading State</h2>
		<div class="flex flex-wrap items-center gap-4">
			<Button disabled={loading} onclick={simulateLoad}>
				{#if loading}
					<Spinner class="size-4" />
					Loading...
				{:else}
					Submit
				{/if}
			</Button>
			<Button variant="frame" disabled={loading} onclick={simulateLoad}>
				{#if loading}
					<Spinner class="size-4" />
					Please wait
				{:else}
					Cast Spell
				{/if}
			</Button>
		</div>
	</section>

	<!-- Click Handler -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Click Handler</h2>
		<p class="text-sm text-amber-100/60">
			Any HTML attribute is forwarded to the underlying <code class="text-amber-300"
				>&lt;button&gt;</code
			>. Use <code class="text-amber-300">onclick</code> for click events.
		</p>
		<div class="flex flex-wrap items-center gap-4">
			<Button onclick={() => alert('Quest accepted!')}>Accept Quest</Button>
			<Button variant="frame" onclick={() => alert('Chest opened!')}>Open Chest</Button>
		</div>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Usage</h2>
		<pre
			class="overflow-x-auto rounded-lg border border-amber-900/30 bg-black/40 p-4 text-sm text-amber-100/80">{@html `<code class="language-html">&lt;script&gt;
  import { Button } from 'warcraftcn-ui-svelte';
&lt;/script&gt;

&lt;Button&gt;Accept Quest&lt;/Button&gt;
&lt;Button variant="frame"&gt;Open Chest&lt;/Button&gt;
&lt;Button disabled&gt;Locked&lt;/Button&gt;</code>`}</pre>
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
						<td class="px-4 py-2">"default" | "frame"</td>
						<td class="px-4 py-2">"default"</td>
					</tr>
					<tr class="border-b border-amber-900/20">
						<td class="px-4 py-2 font-mono">style</td>
						<td class="px-4 py-2">string</td>
						<td class="px-4 py-2">""</td>
					</tr>
					<tr>
						<td class="px-4 py-2 font-mono">class</td>
						<td class="px-4 py-2">string</td>
						<td class="px-4 py-2">""</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
</div>
