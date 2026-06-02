<script lang="ts">
	import {
		Tooltip,
		TooltipTrigger,
		TooltipContent,
		TooltipTitle,
		TooltipBody,
		Button
	} from '$lib/components/warcraftcn/index.js';
</script>

<svelte:head>
	<title>Tooltip — warcraftcn/ui</title>
</svelte:head>

<div class="mx-auto max-w-4xl space-y-8">
	<div>
		<h1 class="fantasy text-3xl font-bold text-amber-200">Tooltip</h1>
		<p class="mt-2 text-amber-100/70">
			A Warcraft-themed tooltip with item-rarity color variants. Hover over each trigger to preview.
			Compose with <code class="text-amber-300">TooltipTitle</code> and
			<code class="text-amber-300">TooltipBody</code> for rich content.
		</p>
	</div>

	<!-- All Variants -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Rarity Variants</h2>
		<div class="flex flex-wrap gap-4">
			<Tooltip>
				<TooltipTrigger>
					<Button>Common</Button>
				</TooltipTrigger>
				<TooltipContent>
					<TooltipTitle>Short Sword</TooltipTitle>
					<TooltipBody>A simple but reliable blade. No special enchantments.</TooltipBody>
				</TooltipContent>
			</Tooltip>

			<Tooltip variant="uncommon">
				<TooltipTrigger>
					<Button variant="frame">Uncommon</Button>
				</TooltipTrigger>
				<TooltipContent>
					<TooltipTitle>Enchanted Blade</TooltipTitle>
					<TooltipBody>Glows faintly with arcane energy, granting +5 Attack Speed.</TooltipBody>
				</TooltipContent>
			</Tooltip>

			<Tooltip variant="rare">
				<TooltipTrigger>
					<Button variant="frame">Rare</Button>
				</TooltipTrigger>
				<TooltipContent>
					<TooltipTitle>Frostmourne Shard</TooltipTitle>
					<TooltipBody>
						A fragment of the cursed blade. Whispers of the damned emanate from within.
					</TooltipBody>
				</TooltipContent>
			</Tooltip>

			<Tooltip variant="epic">
				<TooltipTrigger>
					<Button variant="frame">Epic</Button>
				</TooltipTrigger>
				<TooltipContent>
					<TooltipTitle>Thunderfury</TooltipTitle>
					<TooltipBody>Blessed Blade of the Windseeker. Binds when picked up.</TooltipBody>
				</TooltipContent>
			</Tooltip>

			<Tooltip variant="legendary">
				<TooltipTrigger>
					<Button variant="frame">Legendary</Button>
				</TooltipTrigger>
				<TooltipContent>
					<TooltipTitle>Atiesh, Greatstaff of the Guardian</TooltipTitle>
					<TooltipBody>
						The staff of the last Guardian of Tirisfal. Only one may exist on each realm.
					</TooltipBody>
				</TooltipContent>
			</Tooltip>
		</div>
	</section>

	<!-- Title Only -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Title Only</h2>
		<div class="flex flex-wrap gap-4">
			<Tooltip>
				<TooltipTrigger>
					<Button>Hover me</Button>
				</TooltipTrigger>
				<TooltipContent>
					<TooltipTitle>Simple Tooltip</TooltipTitle>
				</TooltipContent>
			</Tooltip>
		</div>
	</section>

	<!-- Positioning -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Positioning</h2>
		<p class="text-sm text-amber-100/60">
			Control tooltip placement with <code class="text-amber-300">side</code> and offset with
			<code class="text-amber-300">sideOffset</code>.
		</p>
		<div class="flex flex-wrap gap-6">
			<Tooltip side="top">
				<TooltipTrigger>
					<Button>Top</Button>
				</TooltipTrigger>
				<TooltipContent>
					<TooltipTitle>Top Tooltip</TooltipTitle>
				</TooltipContent>
			</Tooltip>
			<Tooltip side="bottom">
				<TooltipTrigger>
					<Button>Bottom</Button>
				</TooltipTrigger>
				<TooltipContent>
					<TooltipTitle>Bottom Tooltip</TooltipTitle>
				</TooltipContent>
			</Tooltip>
			<Tooltip side="left">
				<TooltipTrigger>
					<Button>Left</Button>
				</TooltipTrigger>
				<TooltipContent>
					<TooltipTitle>Left Tooltip</TooltipTitle>
				</TooltipContent>
			</Tooltip>
			<Tooltip side="right">
				<TooltipTrigger>
					<Button>Right</Button>
				</TooltipTrigger>
				<TooltipContent>
					<TooltipTitle>Right Tooltip</TooltipTitle>
				</TooltipContent>
			</Tooltip>
		</div>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Usage</h2>
		<pre
			class="overflow-x-auto rounded-lg border border-amber-900/30 bg-black/40 p-4 text-sm text-amber-100/80">{@html `<code class="language-html">&lt;script&gt;
  import {
    Tooltip, TooltipTrigger, TooltipContent,
    TooltipTitle, TooltipBody
  } from 'warcraftcn-ui-svelte';
&lt;/script&gt;

&lt;Tooltip variant="rare" side="top"&gt;
  &lt;TooltipTrigger&gt;
    &lt;Button&gt;Hover me&lt;/Button&gt;
  &lt;/TooltipTrigger&gt;
  &lt;TooltipContent&gt;
    &lt;TooltipTitle&gt;Rare Item&lt;/TooltipTitle&gt;
    &lt;TooltipBody&gt;A rare piece of equipment.&lt;/TooltipBody&gt;
  &lt;/TooltipContent&gt;
&lt;/Tooltip&gt;</code>`}</pre>
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
						<td class="px-4 py-2 font-mono">variant</td>
						<td class="px-4 py-2">"default" | "uncommon" | "rare" | "epic" | "legendary"</td>
						<td class="px-4 py-2">"default"</td>
					</tr>
					<tr class="border-b border-amber-900/20">
						<td class="px-4 py-2 font-mono">side</td>
						<td class="px-4 py-2">"top" | "bottom" | "left" | "right"</td>
						<td class="px-4 py-2">"bottom"</td>
					</tr>
					<tr>
						<td class="px-4 py-2 font-mono">sideOffset</td>
						<td class="px-4 py-2">number</td>
						<td class="px-4 py-2">8</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
</div>
