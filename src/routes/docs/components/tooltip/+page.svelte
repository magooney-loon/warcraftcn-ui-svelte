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
			A Warcraft-themed tooltip with rarity-based color variants inspired by item tooltips. Hover
			over each button to see the tooltip.
		</p>
	</div>

	<!-- Default -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Default</h2>
		<div class="flex flex-wrap gap-4">
			<Tooltip>
				<TooltipTrigger>
					<Button>Common Item</Button>
				</TooltipTrigger>
				<TooltipContent>
					<TooltipTitle>Short Sword</TooltipTitle>
					<TooltipBody>A simple but reliable blade.</TooltipBody>
				</TooltipContent>
			</Tooltip>

			<Tooltip variant="uncommon">
				<TooltipTrigger>
					<Button variant="frame">Uncommon</Button>
				</TooltipTrigger>
				<TooltipContent>
					<TooltipTitle>Enchanted Blade</TooltipTitle>
					<TooltipBody>Glows faintly with arcane energy.</TooltipBody>
				</TooltipContent>
			</Tooltip>

			<Tooltip variant="rare">
				<TooltipTrigger>
					<Button variant="frame">Rare</Button>
				</TooltipTrigger>
				<TooltipContent>
					<TooltipTitle>Frostmourne Shard</TooltipTitle>
					<TooltipBody>A fragment of the cursed blade.</TooltipBody>
				</TooltipContent>
			</Tooltip>

			<Tooltip variant="epic">
				<TooltipTrigger>
					<Button variant="frame">Epic</Button>
				</TooltipTrigger>
				<TooltipContent>
					<TooltipTitle>Thunderfury</TooltipTitle>
					<TooltipBody>Blessed by the Windseeker.</TooltipBody>
				</TooltipContent>
			</Tooltip>

			<Tooltip variant="legendary">
				<TooltipTrigger>
					<Button variant="frame">Legendary</Button>
				</TooltipTrigger>
				<TooltipContent>
					<TooltipTitle>Atiesh, Greatstaff of the Guardian</TooltipTitle>
					<TooltipBody>The staff of the last Guardian of Tirisfal.</TooltipBody>
				</TooltipContent>
			</Tooltip>
		</div>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Usage</h2>
		<pre
			class="overflow-x-auto rounded-lg border border-amber-900/30 bg-black/40 p-4 text-sm text-amber-100/80">{@html `<code>&lt;script&gt;
  import {
    Tooltip, TooltipTrigger, TooltipContent,
    TooltipTitle, TooltipBody, Button
  } from '$lib/components/warcraftcn/index.js';
&lt;/script&gt;

&lt;Tooltip variant="rare"&gt;
  &lt;TooltipTrigger&gt;
    &lt;Button&gt;Hover me&lt;/Button&gt;
  &lt;/TooltipTrigger&gt;
  &lt;TooltipContent&gt;
    &lt;TooltipTitle&gt;Rare Item&lt;/TooltipTitle&gt;
    &lt;TooltipBody&gt;A rare piece of equipment.&lt;/TooltipBody&gt;
  &lt;/TooltipContent&gt;
&lt;/Tooltip&gt;

&lt;!-- Variants: default, uncommon, rare, epic, legendary --&gt;</code>`}</pre>
	</section>
</div>
