<script lang="ts">
	import { Tabs, TabsList, TabsTrigger, TabsContent } from '$lib/components/warcraftcn/index.js';
</script>

<svelte:head>
	<title>Tabs — warcraftcn/ui</title>
</svelte:head>

<div class="mx-auto max-w-4xl space-y-8">
	<div>
		<h1 class="fantasy text-3xl font-bold text-amber-200">Tabs</h1>
		<p class="mt-2 text-amber-100/70">
			A Warcraft-themed tabbed navigation. Supports all five factions and horizontal/vertical
			orientations.
		</p>
	</div>

	<!-- Default -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Default (Horizontal)</h2>
		<div class="max-w-lg">
			<Tabs value="tab1">
				<TabsList>
					<TabsTrigger value="tab1">Warriors</TabsTrigger>
					<TabsTrigger value="tab2">Mages</TabsTrigger>
					<TabsTrigger value="tab3">Rogues</TabsTrigger>
				</TabsList>
				<TabsContent value="tab1">
					<p>Warriors are melee fighters who rely on strength and heavy armor.</p>
				</TabsContent>
				<TabsContent value="tab2">
					<p>Mages wield arcane and frost magic to devastate their enemies.</p>
				</TabsContent>
				<TabsContent value="tab3">
					<p>Rogues operate from the shadows using stealth and poison.</p>
				</TabsContent>
			</Tabs>
		</div>
	</section>

	<!-- Human -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Human Faction</h2>
		<div class="max-w-lg">
			<Tabs value="tab1" faction="human">
				<TabsList>
					<TabsTrigger value="tab1">Paladin</TabsTrigger>
					<TabsTrigger value="tab2">Knight</TabsTrigger>
					<TabsTrigger value="tab3">Footman</TabsTrigger>
				</TabsList>
				<TabsContent value="tab1">
					<p>Holy warriors of the Light, wielding both sword and divine magic.</p>
				</TabsContent>
				<TabsContent value="tab2">
					<p>Noble riders clad in steel, defending the realm with honor.</p>
				</TabsContent>
				<TabsContent value="tab3">
					<p>The backbone of the Alliance army — steadfast and courageous.</p>
				</TabsContent>
			</Tabs>
		</div>
	</section>

	<!-- Orc -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Orc Faction</h2>
		<div class="max-w-lg">
			<Tabs value="tab1" faction="orc">
				<TabsList>
					<TabsTrigger value="tab1">Blademaster</TabsTrigger>
					<TabsTrigger value="tab2">Tauren</TabsTrigger>
					<TabsTrigger value="tab3">Grunt</TabsTrigger>
				</TabsList>
				<TabsContent value="tab1">
					<p>Master swordsmen who walk the path of the blade with deadly precision.</p>
				</TabsContent>
				<TabsContent value="tab2">
					<p>Mighty bull-like warriors who protect the plains of Mulgore.</p>
				</TabsContent>
				<TabsContent value="tab3">
					<p>For the Horde! Front-line fighters of the orcish war machine.</p>
				</TabsContent>
			</Tabs>
		</div>
	</section>

	<!-- Elf -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Elf Faction</h2>
		<div class="max-w-lg">
			<Tabs value="tab1" faction="elf">
				<TabsList>
					<TabsTrigger value="tab1">Keeper</TabsTrigger>
					<TabsTrigger value="tab2">Dryad</TabsTrigger>
					<TabsTrigger value="tab3">Archer</TabsTrigger>
				</TabsList>
				<TabsContent value="tab1">
					<p>Ancient guardians of the forests, wielding nature's raw power.</p>
				</TabsContent>
				<TabsContent value="tab2">
					<p>Swift centaur-like creatures, daughters of the Goddess Cenarius.</p>
				</TabsContent>
				<TabsContent value="tab3">
					<p>Night elf ranged fighters, deadly with a bow from the shadows.</p>
				</TabsContent>
			</Tabs>
		</div>
	</section>

	<!-- Undead -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Undead Faction</h2>
		<div class="max-w-lg">
			<Tabs value="tab1" faction="undead">
				<TabsList>
					<TabsTrigger value="tab1">Lich</TabsTrigger>
					<TabsTrigger value="tab2">Banshee</TabsTrigger>
					<TabsTrigger value="tab3">Ghoul</TabsTrigger>
				</TabsList>
				<TabsContent value="tab1">
					<p>Undead spellcasters of immense power, masters of frost magic.</p>
				</TabsContent>
				<TabsContent value="tab2">
					<p>Wailing spirits who can possess and control living units.</p>
				</TabsContent>
				<TabsContent value="tab3">
					<p>Ravenous undead shock troops — fast and relentless in melee.</p>
				</TabsContent>
			</Tabs>
		</div>
	</section>

	<!-- Vertical Orientation -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Vertical Orientation</h2>
		<div class="max-w-lg">
			<Tabs value="tab1" orientation="vertical">
				<TabsList>
					<TabsTrigger value="tab1">Chapter I</TabsTrigger>
					<TabsTrigger value="tab2">Chapter II</TabsTrigger>
					<TabsTrigger value="tab3">Chapter III</TabsTrigger>
				</TabsList>
				<TabsContent value="tab1">
					<p>Exodus of the Horde — Thrall leads his people to Kalimdor.</p>
				</TabsContent>
				<TabsContent value="tab2">
					<p>Eternity's End — The Legion's invasion begins in earnest.</p>
				</TabsContent>
				<TabsContent value="tab3">
					<p>The Founding of Durotar — A new homeland for the orcish people.</p>
				</TabsContent>
			</Tabs>
		</div>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Usage</h2>
		<pre
			class="overflow-x-auto rounded-lg border border-amber-900/30 bg-black/40 p-4 text-sm text-amber-100/80">{@html `<code>&lt;script&gt;
  import { Tabs, TabsList, TabsTrigger, TabsContent } from 'warcraftcn-ui-svelte';
  let active = $state('tab1');
&lt;/script&gt;

&lt;Tabs bind:value={active}&gt;
  &lt;TabsList&gt;
    &lt;TabsTrigger value="tab1"&gt;Tab 1&lt;/TabsTrigger&gt;
    &lt;TabsTrigger value="tab2"&gt;Tab 2&lt;/TabsTrigger&gt;
  &lt;/TabsList&gt;
  &lt;TabsContent value="tab1"&gt;Content 1&lt;/TabsContent&gt;
  &lt;TabsContent value="tab2"&gt;Content 2&lt;/TabsContent&gt;
&lt;/Tabs&gt;

&lt;!-- Faction variants --&gt;
&lt;Tabs faction="orc" value="tab1"&gt;...&lt;/Tabs&gt;
&lt;Tabs faction="human" value="tab1"&gt;...&lt;/Tabs&gt;
&lt;Tabs faction="elf" value="tab1"&gt;...&lt;/Tabs&gt;
&lt;Tabs faction="undead" value="tab1"&gt;...&lt;/Tabs&gt;

&lt;!-- Vertical orientation --&gt;
&lt;Tabs orientation="vertical" value="tab1"&gt;...&lt;/Tabs&gt;</code>`}</pre>
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
						<td class="px-4 py-2 font-mono">value</td>
						<td class="px-4 py-2">string (bindable)</td>
						<td class="px-4 py-2">""</td>
					</tr>
					<tr class="border-b border-amber-900/20">
						<td class="px-4 py-2 font-mono">faction</td>
						<td class="px-4 py-2">"default" | "orc" | "elf" | "human" | "undead"</td>
						<td class="px-4 py-2">"default"</td>
					</tr>
					<tr>
						<td class="px-4 py-2 font-mono">orientation</td>
						<td class="px-4 py-2">"horizontal" | "vertical"</td>
						<td class="px-4 py-2">"horizontal"</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
</div>
