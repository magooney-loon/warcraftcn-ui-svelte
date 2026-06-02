<script lang="ts">
	import {
		Accordion,
		AccordionItem,
		AccordionTrigger,
		AccordionContent
	} from '$lib/components/warcraftcn/index.js';
</script>

<svelte:head>
	<title>Accordion — warcraftcn/ui</title>
</svelte:head>

<div class="mx-auto max-w-4xl space-y-8">
	<div>
		<h1 class="fantasy text-3xl font-bold text-amber-200">Accordion</h1>
		<p class="mt-2 text-amber-100/70">
			A Warcraft-styled accordion with animated sword, shield, and rune-stone icons. Supports
			<code class="text-amber-300">single</code> (one open at a time) and
			<code class="text-amber-300">multiple</code> modes.
		</p>
	</div>

	<!-- Multiple Mode -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Multiple Mode</h2>
		<p class="text-sm text-amber-100/60">Multiple items can be open simultaneously (default).</p>
		<div class="max-w-lg">
			<Accordion type="multiple">
				<AccordionItem value="item-1">
					<AccordionTrigger value="item-1" icon="sword">The First War</AccordionTrigger>
					<AccordionContent value="item-1">
						<p>
							The First War was a conflict between the orcish Horde and the humans of the Kingdom of
							Azeroth, beginning when orcs crossed the Dark Portal from Draenor.
						</p>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2">
					<AccordionTrigger value="item-2" icon="shield">The Second War</AccordionTrigger>
					<AccordionContent value="item-2">
						<p>
							The Second War saw the Horde expand its forces across the seas to Lordaeron. The
							Alliance was formed, uniting the human nations with the high elves and dwarves.
						</p>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-3">
					<AccordionTrigger value="item-3" icon="rune-stone">The Third War</AccordionTrigger>
					<AccordionContent value="item-3">
						<p>
							The Third War brought the Burning Legion's full invasion to Azeroth. The Scourge
							ravaged Lordaeron and the night elves faced the demons at Mount Hyjal.
						</p>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	</section>

	<!-- Single Mode -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Single Mode</h2>
		<p class="text-sm text-amber-100/60">Only one item can be open at a time.</p>
		<div class="max-w-lg">
			<Accordion type="single">
				<AccordionItem value="s-1">
					<AccordionTrigger value="s-1" icon="sword">Thrall</AccordionTrigger>
					<AccordionContent value="s-1">
						<p>Warchief of the Horde, shaman of the Earthen Ring, wielder of Doomhammer.</p>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="s-2">
					<AccordionTrigger value="s-2" icon="shield">Jaina Proudmoore</AccordionTrigger>
					<AccordionContent value="s-2">
						<p>Grand Magister of the Kirin Tor, one of the most powerful mages in Azeroth.</p>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="s-3">
					<AccordionTrigger value="s-3" icon="rune-stone">Arthas Menethil</AccordionTrigger>
					<AccordionContent value="s-3">
						<p>Prince of Lordaeron turned death knight. Wielder of Frostmourne. The Lich King.</p>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	</section>

	<!-- Icons -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Icons</h2>
		<p class="text-sm text-amber-100/60">Three icon options: sword, shield, rune-stone.</p>
		<div class="max-w-lg">
			<Accordion type="multiple">
				<AccordionItem value="icon-sword">
					<AccordionTrigger value="icon-sword" icon="sword">Sword Icon</AccordionTrigger>
					<AccordionContent value="icon-sword">
						<p>The sword icon — default choice for warriors and fighters.</p>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="icon-shield">
					<AccordionTrigger value="icon-shield" icon="shield">Shield Icon</AccordionTrigger>
					<AccordionContent value="icon-shield">
						<p>The shield icon — ideal for defensive or protection-themed content.</p>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="icon-rune">
					<AccordionTrigger value="icon-rune" icon="rune-stone">Rune Stone Icon</AccordionTrigger>
					<AccordionContent value="icon-rune">
						<p>The rune-stone icon — great for magic, lore, or arcane subjects.</p>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
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
    Accordion, AccordionItem,
    AccordionTrigger, AccordionContent
  } from 'warcraftcn-ui-svelte';
&lt;/script&gt;

&lt;!-- Multiple mode (default) --&gt;
&lt;Accordion type="multiple"&gt;
  &lt;AccordionItem value="item-1"&gt;
    &lt;AccordionTrigger value="item-1" icon="sword"&gt;Title&lt;/AccordionTrigger&gt;
    &lt;AccordionContent value="item-1"&gt;Content here&lt;/AccordionContent&gt;
  &lt;/AccordionItem&gt;
&lt;/Accordion&gt;

&lt;!-- Single mode --&gt;
&lt;Accordion type="single"&gt;
  &lt;AccordionItem value="item-1"&gt;
    &lt;AccordionTrigger value="item-1" icon="shield"&gt;Title&lt;/AccordionTrigger&gt;
    &lt;AccordionContent value="item-1"&gt;Content here&lt;/AccordionContent&gt;
  &lt;/AccordionItem&gt;
&lt;/Accordion&gt;</code>`}</pre>
	</section>

	<!-- Props -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Props</h2>
		<p class="text-xs font-semibold tracking-wider text-amber-400 uppercase">Accordion</p>
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
						<td class="px-4 py-2">"single" | "multiple"</td>
						<td class="px-4 py-2">"multiple"</td>
					</tr>
				</tbody>
			</table>
		</div>
		<p class="text-xs font-semibold tracking-wider text-amber-400 uppercase">AccordionTrigger</p>
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
						<td class="px-4 py-2 font-mono">value</td>
						<td class="px-4 py-2">string</td>
						<td class="px-4 py-2">—</td>
					</tr>
					<tr>
						<td class="px-4 py-2 font-mono">icon</td>
						<td class="px-4 py-2">"sword" | "shield" | "rune-stone"</td>
						<td class="px-4 py-2">"sword"</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
</div>
