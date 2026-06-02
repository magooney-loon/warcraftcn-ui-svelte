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
			A Warcraft-themed tabbed navigation with faction-based styling. Supports horizontal and
			vertical orientations.
		</p>
	</div>

	<!-- Default Horizontal -->
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
					<p>
						Warriors are melee fighters who rely on strength and heavy armor. From the footmen of
						Lordaeron to the grunts of the Horde, warriors form the backbone of any army.
					</p>
				</TabsContent>
				<TabsContent value="tab2">
					<p>
						Mages wield arcane and frost magic to devastate their enemies. The Kirin Tor of Dalaran
						are among the most powerful spellcasters in all of Azeroth.
					</p>
				</TabsContent>
				<TabsContent value="tab3">
					<p>
						Rogues operate from the shadows, using stealth and poison. From the assassins of the
						Defias Brotherhood to the scouts of the Horde, they strike when least expected.
					</p>
				</TabsContent>
			</Tabs>
		</div>
	</section>

	<!-- Human Faction -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Human Faction</h2>
		<div class="max-w-lg">
			<Tabs value="tab1" faction="human">
				<TabsList>
					<TabsTrigger value="tab1">Paladin</TabsTrigger>
					<TabsTrigger value="tab2">Knight</TabsTrigger>
				</TabsList>
				<TabsContent value="tab1">
					<p>Holy warriors of the Light, wielding both sword and divine magic.</p>
				</TabsContent>
				<TabsContent value="tab2">
					<p>Noble riders clad in steel, defending the realm with honor.</p>
				</TabsContent>
			</Tabs>
		</div>
	</section>

	<!-- Orc Faction -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Orc Faction</h2>
		<div class="max-w-lg">
			<Tabs value="tab1" faction="orc">
				<TabsList>
					<TabsTrigger value="tab1">Blademaster</TabsTrigger>
					<TabsTrigger value="tab2">Tauren</TabsTrigger>
				</TabsList>
				<TabsContent value="tab1">
					<p>Master swordsmen who walk the path of the blade with deadly precision.</p>
				</TabsContent>
				<TabsContent value="tab2">
					<p>Mighty bull-like warriors who protect the plains of Mulgore.</p>
				</TabsContent>
			</Tabs>
		</div>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Usage</h2>
		<pre
			class="overflow-x-auto rounded-lg border border-amber-900/30 bg-black/40 p-4 text-sm text-amber-100/80">{@html `<code>&lt;script&gt;
  import { Tabs, TabsList, TabsTrigger, TabsContent } from '$lib/components/warcraftcn/index.js';

  let activeTab = $state('tab1');
&lt;/script&gt;

&lt;Tabs bind:value={activeTab}&gt;
  &lt;TabsList&gt;
    &lt;TabsTrigger value="tab1"&gt;Tab 1&lt;/TabsTrigger&gt;
    &lt;TabsTrigger value="tab2"&gt;Tab 2&lt;/TabsTrigger&gt;
  &lt;/TabsList&gt;
  &lt;TabsContent value="tab1"&gt;
    &lt;p&gt;Content for tab 1&lt;/p&gt;
  &lt;/TabsContent&gt;
  &lt;TabsContent value="tab2"&gt;
    &lt;p&gt;Content for tab 2&lt;/p&gt;
  &lt;/TabsContent&gt;
&lt;/Tabs&gt;

&lt;!-- Faction variant --&gt;
&lt;Tabs faction="orc" value="tab1"&gt;...&lt;/Tabs&gt;
&lt;Tabs faction="human" value="tab1"&gt;...&lt;/Tabs&gt;</code>`}</pre>
	</section>
</div>
