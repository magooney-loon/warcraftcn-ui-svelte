<script lang="ts">
	import {
		Card,
		CardHeader,
		CardTitle,
		CardDescription,
		CardContent,
		CardFooter,
		Button
	} from '$lib/components/warcraftcn/index.js';
</script>

<svelte:head>
	<title>Card — warcraftcn/ui</title>
</svelte:head>

<div class="mx-auto max-w-4xl space-y-8">
	<div>
		<h1 class="fantasy text-3xl font-bold text-amber-200">Card</h1>
		<p class="mt-2 text-amber-100/70">
			A Warcraft-themed card with parchment border-image frames. Composable with CardHeader,
			CardTitle, CardDescription, CardContent, and CardFooter sub-components.
		</p>
	</div>

	<!-- Standard Card -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Standard Card</h2>
		<div class="max-w-md">
			<Card>
				<CardHeader>
					<CardTitle>Warcraft III</CardTitle>
					<CardDescription>The Reign of Chaos</CardDescription>
				</CardHeader>
				<CardContent>
					<p class="text-sm text-amber-100/70">
						The armies of the Burning Legion have been unleashed upon the world. The once peaceful
						kingdoms now stand on the brink of destruction.
					</p>
				</CardContent>
				<CardFooter>
					<Button>Accept Quest</Button>
				</CardFooter>
			</Card>
		</div>
	</section>

	<!-- Small Card -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Small Card</h2>
		<div class="max-w-sm">
			<Card size="sm">
				<CardHeader>
					<CardTitle>Quick Info</CardTitle>
					<CardDescription>Compact card variant</CardDescription>
				</CardHeader>
				<CardContent>
					<p class="text-sm text-amber-100/70">A smaller card for compact layouts.</p>
				</CardContent>
			</Card>
		</div>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Usage</h2>
		<pre
			class="overflow-x-auto rounded-lg border border-amber-900/30 bg-black/40 p-4 text-sm text-amber-100/80">{@html `<code>&lt;script&gt;
  import {
    Card, CardHeader, CardTitle,
    CardDescription, CardContent, CardFooter, Button
  } from '$lib/components/warcraftcn/index.js';
&lt;/script&gt;

&lt;Card&gt;
  &lt;CardHeader&gt;
    &lt;CardTitle&gt;Title&lt;/CardTitle&gt;
    &lt;CardDescription&gt;Description&lt;/CardDescription&gt;
  &lt;/CardHeader&gt;
  &lt;CardContent&gt;
    &lt;p&gt;Card body content.&lt;/p&gt;
  &lt;/CardContent&gt;
  &lt;CardFooter&gt;
    &lt;Button&gt;Action&lt;/Button&gt;
  &lt;/CardFooter&gt;
&lt;/Card&gt;

&lt;Card size="sm"&gt;...&lt;/Card&gt;</code>`}</pre>
	</section>
</div>
