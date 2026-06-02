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
</script>

<svelte:head>
	<title>Spinner — warcraftcn/ui</title>
</svelte:head>

<div class="mx-auto max-w-4xl space-y-8">
	<div>
		<h1 class="fantasy text-3xl font-bold text-amber-200">Spinner</h1>
		<p class="mt-2 text-amber-100/70">
			A Warcraft-themed loading spinner using an SVG path. Use alongside buttons, badges, or other
			components to indicate loading states.
		</p>
	</div>

	<!-- Standard Sizes -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Sizes</h2>
		<div class="flex flex-wrap items-center gap-6">
			<Spinner class="size-6" />
			<Spinner class="size-10" />
			<Spinner class="size-16" />
		</div>
	</section>

	<!-- In Button -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">In Button (Loading)</h2>
		<div class="flex flex-wrap items-center gap-4">
			<Button disabled>
				<Spinner class="size-5" />
				Loading...
			</Button>
			<Button variant="frame" disabled>
				<Spinner class="size-5" />
				Please wait
			</Button>
		</div>
	</section>

	<!-- In Badge -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">In Badge</h2>
		<div class="flex flex-wrap items-center gap-4">
			<Badge>
				<Spinner class="size-4" />
				Syncing
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
					<CardDescription>Fetching quest data...</CardDescription>
				</CardHeader>
				<CardContent>
					<div class="flex items-center gap-3">
						<Spinner class="size-8" />
						<span class="text-sm text-amber-100/70">Please wait while we load your quest.</span>
					</div>
				</CardContent>
			</Card>
		</div>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Usage</h2>
		<pre
			class="overflow-x-auto rounded-lg border border-amber-900/30 bg-black/40 p-4 text-sm text-amber-100/80">{@html `<code>&lt;script&gt;
  import { Spinner, Button } from '$lib/components/warcraftcn/index.js';

  let loading = $state(false);
&lt;/script&gt;

&lt;Spinner class="size-10" /&gt;

&lt;!-- Loading button --&gt;
&lt;Button disabled={loading}&gt;
  {#if loading}
    &lt;Spinner class="size-5" /&gt;
  {/if}
  {loading ? 'Loading...' : 'Submit'}
&lt;/Button&gt;</code>`}</pre>
	</section>
</div>
