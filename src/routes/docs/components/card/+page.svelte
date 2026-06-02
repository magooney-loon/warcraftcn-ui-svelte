<script lang="ts">
	import {
		Card,
		CardHeader,
		CardTitle,
		CardDescription,
		CardAction,
		CardContent,
		CardFooter,
		Button,
		Badge
	} from '$lib/components/warcraftcn/index.js';
</script>

<svelte:head>
	<title>Card — warcraftcn/ui</title>
</svelte:head>

<div class="mx-auto max-w-4xl space-y-8">
	<div>
		<h1 class="fantasy text-3xl font-bold text-amber-200">Card</h1>
		<p class="mt-2 text-amber-100/70">
			A Warcraft-themed card with parchment border-image frames. Compose with
			<code class="text-amber-300">CardHeader</code>,
			<code class="text-amber-300">CardTitle</code>,
			<code class="text-amber-300">CardDescription</code>,
			<code class="text-amber-300">CardAction</code>,
			<code class="text-amber-300">CardContent</code>, and
			<code class="text-amber-300">CardFooter</code>.
		</p>
	</div>

	<!-- Default Size -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Default</h2>
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

	<!-- Small Size -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Small</h2>
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

	<!-- With CardAction -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">With CardAction</h2>
		<p class="text-sm text-amber-100/60">
			<code class="text-amber-300">CardAction</code> renders an action in the top-right of the header.
		</p>
		<div class="max-w-md">
			<Card>
				<CardHeader>
					<CardTitle>Hero Status</CardTitle>
					<CardDescription>Current battlefield position</CardDescription>
					<CardAction>
						<Badge variant="secondary">Active</Badge>
					</CardAction>
				</CardHeader>
				<CardContent>
					<p class="text-sm text-amber-100/70">
						Your hero is stationed at Stratholme, awaiting further orders from the Alliance command.
					</p>
				</CardContent>
				<CardFooter>
					<Button variant="frame">View Details</Button>
				</CardFooter>
			</Card>
		</div>
	</section>

	<!-- No Footer -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Content Only</h2>
		<div class="max-w-md">
			<Card>
				<CardHeader>
					<CardTitle>Lore Entry</CardTitle>
				</CardHeader>
				<CardContent>
					<p class="text-sm text-amber-100/70">
						The Frozen Throne holds the spirit of the Lich King. It was placed in Northrend by the
						demon lord Kil'jaeden to bind Ner'zhul's soul to the armor.
					</p>
				</CardContent>
			</Card>
		</div>
	</section>

	<!-- Installation -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Installation</h2>
		<pre
			class="overflow-x-auto rounded-lg border border-amber-900/30 bg-black/40 p-4 text-sm text-amber-100/80">{@html `<code>npm install warcraftcn-ui-svelte</code>`}</pre>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Usage</h2>
		<pre
			class="overflow-x-auto rounded-lg border border-amber-900/30 bg-black/40 p-4 text-sm text-amber-100/80">{@html `<code>&lt;script&gt;
  import {
    Card, CardHeader, CardTitle, CardDescription,
    CardAction, CardContent, CardFooter
  } from 'warcraftcn-ui-svelte';
&lt;/script&gt;

&lt;Card&gt;
  &lt;CardHeader&gt;
    &lt;CardTitle&gt;Title&lt;/CardTitle&gt;
    &lt;CardDescription&gt;Description&lt;/CardDescription&gt;
    &lt;CardAction&gt;&lt;Badge&gt;Active&lt;/Badge&gt;&lt;/CardAction&gt;
  &lt;/CardHeader&gt;
  &lt;CardContent&gt;
    &lt;p&gt;Card body content.&lt;/p&gt;
  &lt;/CardContent&gt;
  &lt;CardFooter&gt;
    &lt;Button&gt;Action&lt;/Button&gt;
  &lt;/CardFooter&gt;
&lt;/Card&gt;

&lt;!-- Compact size --&gt;
&lt;Card size="sm"&gt;...&lt;/Card&gt;</code>`}</pre>
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
						<td class="px-4 py-2 font-mono">size</td>
						<td class="px-4 py-2">"default" | "sm"</td>
						<td class="px-4 py-2">"default"</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
</div>
