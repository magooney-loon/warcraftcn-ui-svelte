<script lang="ts">
	import {
		Modal,
		ModalTrigger,
		ModalContent,
		CardHeader,
		CardTitle,
		CardDescription,
		CardContent,
		CardFooter,
		Button
	} from '$lib/components/warcraftcn/index.js';
	let questOpen = $state(false);
	let confirmOpen = $state(false);
</script>

<svelte:head>
	<title>Modal — warcraftcn/ui</title>
</svelte:head>

<div class="mx-auto max-w-4xl space-y-8">
	<div>
		<h1 class="fantasy text-3xl font-bold text-amber-200">Modal</h1>
		<p class="mt-2 text-amber-100/70">
			A Warcraft-themed modal dialog built on top of <code class="text-amber-300">Card</code>.
			Supports backdrop click dismiss, Escape key, and both
			<code class="text-amber-300">default</code>
			and <code class="text-amber-300">sm</code> sizes.
		</p>
	</div>

	<!-- Default -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Default</h2>
		<Modal bind:open={questOpen}>
			<ModalTrigger>
				<Button>Open Modal</Button>
			</ModalTrigger>
			<ModalContent>
				<CardHeader>
					<CardTitle>Quest Offer</CardTitle>
					<CardDescription>A mysterious stranger approaches you with a task.</CardDescription>
				</CardHeader>
				<CardContent>
					<p class="text-amber-100/70">
						Venture into the dark forest and retrieve the enchanted amulet from the ancient ruins.
						Beware — the path is guarded by spectres.
					</p>
				</CardContent>
				<CardFooter>
					<Button variant="frame" onclick={() => (questOpen = false)}>Accept Quest</Button>
				</CardFooter>
			</ModalContent>
		</Modal>
	</section>

	<!-- Small -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Small</h2>
		<Modal bind:open={confirmOpen}>
			<ModalTrigger>
				<Button variant="frame">Small Modal</Button>
			</ModalTrigger>
			<ModalContent size="sm">
				<CardHeader>
					<CardTitle>Confirm</CardTitle>
				</CardHeader>
				<CardContent>
					<p class="text-amber-100/70">Are you sure you want to abandon this quest?</p>
				</CardContent>
				<CardFooter>
					<Button onclick={() => (confirmOpen = false)}>Cancel</Button>
				</CardFooter>
			</ModalContent>
		</Modal>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Usage</h2>
		<pre
			class="overflow-x-auto rounded-lg border border-amber-900/30 bg-black/40 p-4 text-sm text-amber-100/80">{@html `<code class="language-html">&lt;script&gt;
  import {
    Modal, ModalTrigger, ModalContent,
    CardHeader, CardTitle, CardDescription,
    CardContent, CardFooter, Button
  } from 'warcraftcn-ui-svelte';

  let isOpen = $state(false);
&lt;/script&gt;

&lt;Modal bind:open={isOpen}&gt;
  &lt;ModalTrigger&gt;
    &lt;Button&gt;Open Modal&lt;/Button&gt;
  &lt;/ModalTrigger&gt;
  &lt;ModalContent&gt;
    &lt;CardHeader&gt;
      &lt;CardTitle&gt;Quest Offer&lt;/CardTitle&gt;
      &lt;CardDescription&gt;A mysterious task...&lt;/CardDescription&gt;
    &lt;/CardHeader&gt;
    &lt;CardContent&gt;
      &lt;p&gt;Retrieve the enchanted amulet.&lt;/p&gt;
    &lt;/CardContent&gt;
    &lt;CardFooter&gt;
      &lt;Button variant="frame" onclick={() =&gt; isOpen = false}&gt;Accept Quest&lt;/Button&gt;
    &lt;/CardFooter&gt;
  &lt;/ModalContent&gt;
&lt;/Modal&gt;</code>`}</pre>
	</section>

	<!-- Props -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Props</h2>
		<p class="text-xs font-semibold tracking-wider text-amber-400 uppercase">ModalContent</p>
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
		<p class="text-xs font-semibold tracking-wider text-amber-400 uppercase">Modal</p>
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
						<td class="px-4 py-2 font-mono">open</td>
						<td class="px-4 py-2">boolean (bindable)</td>
						<td class="px-4 py-2">false</td>
					</tr>
					<tr>
						<td class="px-4 py-2 font-mono">class</td>
						<td class="px-4 py-2">string</td>
						<td class="px-4 py-2">""</td>
					</tr>
				</tbody>
			</table>
		</div>
		<p class="text-xs font-semibold tracking-wider text-amber-400 uppercase">ModalTrigger</p>
		<div class="overflow-x-auto rounded-lg border border-amber-900/30">
			<table class="w-full text-sm text-amber-100/80">
				<thead class="border-b border-amber-900/30 bg-black/20">
					<tr>
						<th class="px-4 py-2 text-left text-amber-300">Prop</th>
						<th class="px-4 py-2 text-left text-amber-300">Type</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class="px-4 py-2 font-mono">class</td>
						<td class="px-4 py-2">string</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
</div>
