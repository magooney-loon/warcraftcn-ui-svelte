<script lang="ts">
	import { Input, Label } from '$lib/components/warcraftcn/index.js';
</script>

<svelte:head>
	<title>Input — warcraftcn/ui</title>
</svelte:head>

<div class="mx-auto max-w-4xl space-y-8">
	<div>
		<h1 class="fantasy text-3xl font-bold text-amber-200">Input</h1>
		<p class="mt-2 text-amber-100/70">
			A Warcraft-themed input with a gold border-image frame. Supports all standard HTML input types
			and attributes.
		</p>
	</div>

	<!-- Text -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Text</h2>
		<div class="max-w-sm">
			<Input type="text" placeholder="Enter your hero name..." />
		</div>
	</section>

	<!-- Password -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Password</h2>
		<div class="max-w-sm">
			<Input type="password" placeholder="Secret battle code..." />
		</div>
	</section>

	<!-- Email -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Email</h2>
		<div class="max-w-sm">
			<Input type="email" placeholder="hero@azeroth.com" />
		</div>
	</section>

	<!-- Number -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Number</h2>
		<div class="max-w-sm">
			<Input type="number" placeholder="Gold amount" min="0" />
		</div>
	</section>

	<!-- Search -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Search</h2>
		<div class="max-w-sm">
			<Input type="search" placeholder="Search the archives..." />
		</div>
	</section>

	<!-- Disabled -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Disabled</h2>
		<div class="max-w-sm">
			<Input placeholder="Locked field" disabled />
		</div>
	</section>

	<!-- With Label -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">With Label</h2>
		<div class="max-w-sm space-y-4">
			<div class="space-y-1">
				<Label for="hero-name" required>Hero Name</Label>
				<Input id="hero-name" placeholder="Enter your hero name..." />
			</div>
			<div class="space-y-1">
				<Label for="battle-tag">Battle Tag</Label>
				<Input id="battle-tag" placeholder="Optional identifier" />
			</div>
			<div class="space-y-1">
				<Label for="locked" disabled>Locked Field</Label>
				<Input id="locked" placeholder="Cannot edit" disabled />
			</div>
		</div>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Usage</h2>
		<pre
			class="overflow-x-auto rounded-lg border border-amber-900/30 bg-black/40 p-4 text-sm text-amber-100/80">{@html `<code>&lt;script&gt;
  import { Input, Label } from 'warcraftcn-ui-svelte';
  let value = $state('');
&lt;/script&gt;

&lt;Input bind:value placeholder="Enter your hero name..." /&gt;
&lt;Input type="password" placeholder="Secret..." /&gt;
&lt;Input type="email" placeholder="hero@azeroth.com" /&gt;
&lt;Input type="number" min="0" /&gt;
&lt;Input type="search" placeholder="Search..." /&gt;
&lt;Input disabled /&gt;

&lt;!-- With label --&gt;
&lt;Label for="name" required&gt;Hero Name&lt;/Label&gt;
&lt;Input id="name" placeholder="..." /&gt;</code>`}</pre>
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
						<td class="px-4 py-2 font-mono">type</td>
						<td class="px-4 py-2">string</td>
						<td class="px-4 py-2">"text"</td>
					</tr>
					<tr>
						<td class="px-4 py-2 font-mono">class</td>
						<td class="px-4 py-2">string</td>
						<td class="px-4 py-2">""</td>
					</tr>
				</tbody>
			</table>
		</div>
		<p class="mt-2 text-xs text-amber-100/50">
			All standard HTML input attributes (<code class="text-amber-300">placeholder</code>,
			<code class="text-amber-300">disabled</code>, <code class="text-amber-300">id</code>, etc.) are
			forwarded to the underlying <code class="text-amber-300">&lt;input&gt;</code> element.
		</p>
	</section>
</div>
