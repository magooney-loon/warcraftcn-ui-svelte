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
			A Warcraft-styled accordion with animated sword, shield, and rune-stone icons. Supports single
			and multiple modes.
		</p>
	</div>

	<!-- Default Accordion -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Default (Multiple Mode)</h2>
		<div class="max-w-lg">
			<Accordion type="multiple">
				<AccordionItem value="item-1">
					<AccordionTrigger value="item-1" icon="sword">The First War</AccordionTrigger>
					<AccordionContent value="item-1">
						<p>
							The First War was a conflict between the orcish Horde and the humans of the Kingdom of
							Azeroth. It began when the orcs, manipulated by the Burning Legion, crossed through
							the Dark Portal from the world of Draenor.
						</p>
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="item-2">
					<AccordionTrigger value="item-2" icon="shield">The Second War</AccordionTrigger>
					<AccordionContent value="item-2">
						<p>
							The Second War saw the Horde expand its forces across the seas to the northern
							continent of Lordaeron. The Alliance of Lordaeron was formed in response, uniting the
							human nations with the high elves and dwarves.
						</p>
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="item-3">
					<AccordionTrigger value="item-3" icon="rune-stone">The Third War</AccordionTrigger>
					<AccordionContent value="item-3">
						<p>
							The Third War brought the Burning Legion's full invasion to Azeroth. The Scourge
							ravaged Lordaeron, the night elves faced the demons at Mount Hyjal, and the Horde
							found a new home in Kalimdor under Thrall's leadership.
						</p>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Usage</h2>
		<pre
			class="overflow-x-auto rounded-lg border border-amber-900/30 bg-black/40 p-4 text-sm text-amber-100/80">{@html `<code>&lt;script&gt;
  import {
    Accordion, AccordionItem,
    AccordionTrigger, AccordionContent
  } from '$lib/components/warcraftcn/index.js';
&lt;/script&gt;

&lt;Accordion type="multiple"&gt;
  &lt;AccordionItem value="item-1"&gt;
    &lt;AccordionTrigger value="item-1" icon="sword"&gt;
      The First War
    &lt;/AccordionTrigger&gt;
    &lt;AccordionContent value="item-1"&gt;
      &lt;p&gt;Content here...&lt;/p&gt;
    &lt;/AccordionContent&gt;
  &lt;/AccordionItem&gt;
&lt;/Accordion&gt;</code>`}</pre>
	</section>
</div>
