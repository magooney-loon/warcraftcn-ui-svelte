<script lang="ts">
	import {
		Spinner,
		Badge,
		Button,
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle
	} from '$lib/components/warcraftcn/index.js';

	let loading = $state(false);

	function simulateLoad() {
		loading = true;
		setTimeout(() => (loading = false), 2000);
	}
</script>

<svelte:head>
	<title>Spinner — warcraftcn/ui</title>
</svelte:head>

<div class="mx-auto max-w-4xl space-y-8">
	<div>
		<h1 class="fantasy text-3xl font-bold text-amber-200">Spinner</h1>
		<p class="mt-2 text-amber-100/70">
			A Warcraft-themed loading spinner using an SVG path. Size it with Tailwind's
			<code class="text-amber-300">size-*</code> utilities.
		</p>
	</div>

	<!-- Sizes -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Sizes</h2>
		<div class="flex flex-wrap items-center gap-6">
			<div class="flex flex-col items-center gap-2">
				<Spinner class="size-4" />
				<span class="text-xs text-amber-100/50">size-4</span>
			</div>
			<div class="flex flex-col items-center gap-2">
				<Spinner class="size-6" />
				<span class="text-xs text-amber-100/50">size-6</span>
			</div>
			<div class="flex flex-col items-center gap-2">
				<Spinner class="size-10" />
				<span class="text-xs text-amber-100/50">size-10</span>
			</div>
			<div class="flex flex-col items-center gap-2">
				<Spinner class="size-16" />
				<span class="text-xs text-amber-100/50">size-16</span>
			</div>
			<div class="flex flex-col items-center gap-2">
				<Spinner class="size-24" />
				<span class="text-xs text-amber-100/50">size-24</span>
			</div>
		</div>
	</section>

	<!-- In Button -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">In Button (Loading State)</h2>
		<div class="flex flex-wrap items-center gap-4">
			<Button disabled={loading} onclick={simulateLoad}>
				{#if loading}
					<Spinner class="size-4" />
					Loading...
				{:else}
					Click to Load
				{/if}
			</Button>
			<Button variant="frame" disabled={loading} onclick={simulateLoad}>
				{#if loading}
					<Spinner class="size-4" />
					Casting...
				{:else}
					Cast Spell
				{/if}
			</Button>
		</div>
	</section>

	<!-- In Badge -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">In Badge</h2>
		<div class="flex flex-wrap items-center gap-4">
			<Badge>
				<Spinner class="size-3" />
				Syncing
			</Badge>
			<Badge variant="secondary">
				<Spinner class="size-3" />
				Loading
			</Badge>
			<Badge variant="outline">
				<Spinner class="size-3" />
				Processing
			</Badge>
		</div>
	</section>

	<!-- In Card -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">In Card</h2>
		<div class="max-w-sm">
			<Card>
				<CardHeader>
					<CardTitle>Loading Quest</CardTitle>
					<CardDescription>Fetching quest data from the archives...</CardDescription>
				</CardHeader>
				<CardContent>
					<div class="flex items-center gap-3">
						<Spinner class="size-8 shrink-0" />
						<span class="text-sm text-amber-100/70">
							Please wait while we retrieve your quest details.
						</span>
					</div>
				</CardContent>
			</Card>
		</div>
	</section>

	<!-- Standalone -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Standalone Loader</h2>
		<div class="flex h-32 items-center justify-center">
			<Spinner class="size-16" />
		</div>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Usage</h2>
		<pre
			class="overflow-x-auto rounded-lg border border-amber-900/30 bg-black/40 p-4 text-sm text-amber-100/80">{@html `<code>&lt;script&gt;
  import { Spinner, Button } from 'warcraftcn-ui-svelte';
  let loading = $state(false);
&lt;/script&gt;

&lt;!-- Standalone --&gt;
&lt;Spinner class="size-10" /&gt;

&lt;!-- In a loading button --&gt;
&lt;Button disabled={loading} onclick={handleClick}&gt;
  {#if loading}
    &lt;Spinner class="size-4" /&gt; Loading...
  {:else}
    Submit
  {/if}
&lt;/Button&gt;</code>`}</pre>
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
						<td class="px-4 py-2 font-mono">class</td>
						<td class="px-4 py-2">string</td>
						<td class="px-4 py-2">""</td>
					</tr>
				</tbody>
			</table>
		</div>
		<p class="mt-2 text-xs text-amber-100/50">
			Size the spinner with Tailwind's <code class="text-amber-300">size-*</code> utility via the
			<code class="text-amber-300">class</code> prop. All other attributes are forwarded to the
			underlying SVG.
		</p>
	</section>
</div>
