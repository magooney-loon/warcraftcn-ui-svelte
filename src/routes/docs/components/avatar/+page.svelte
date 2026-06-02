<script lang="ts">
	import { Avatar } from '$lib/components/warcraftcn/index.js';
</script>

<svelte:head>
	<title>Avatar — warcraftcn/ui</title>
</svelte:head>

<div class="mx-auto max-w-4xl space-y-8">
	<div>
		<h1 class="fantasy text-3xl font-bold text-amber-200">Avatar</h1>
		<p class="mt-2 text-amber-100/70">
			A hero portrait component with faction-based border frames. Supports default, orc, elf, human,
			and undead factions at sm, md, and lg sizes.
		</p>
	</div>

	<!-- Factions -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Factions (md)</h2>
		<div class="flex flex-wrap items-end gap-6">
			<Avatar faction="default" size="md">
				{#snippet fallback()}
					<span>⚔️</span>
				{/snippet}
			</Avatar>
			<Avatar faction="orc" size="md">
				{#snippet fallback()}
					<span>👹</span>
				{/snippet}
			</Avatar>
			<Avatar faction="elf" size="md">
				{#snippet fallback()}
					<span>🧝</span>
				{/snippet}
			</Avatar>
			<Avatar faction="human" size="md">
				{#snippet fallback()}
					<span>🛡️</span>
				{/snippet}
			</Avatar>
			<Avatar faction="undead" size="md">
				{#snippet fallback()}
					<span>💀</span>
				{/snippet}
			</Avatar>
		</div>
	</section>

	<!-- Sizes -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Sizes</h2>
		<div class="flex flex-wrap items-end gap-6">
			<Avatar faction="orc" size="sm">
				{#snippet fallback()}
					<span>👹</span>
				{/snippet}
			</Avatar>
			<Avatar faction="orc" size="md">
				{#snippet fallback()}
					<span>👹</span>
				{/snippet}
			</Avatar>
			<Avatar faction="orc" size="lg">
				{#snippet fallback()}
					<span>👹</span>
				{/snippet}
			</Avatar>
		</div>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Usage</h2>
		<pre
			class="overflow-x-auto rounded-lg border border-amber-900/30 bg-black/40 p-4 text-sm text-amber-100/80">{@html `<code>&lt;script&gt;
  import { Avatar } from '$lib/components/warcraftcn/index.js';
&lt;/script&gt;

&lt;!-- With image --&gt;
&lt;Avatar src="/hero.jpg" alt="Hero" faction="orc" size="md" /&gt;

&lt;!-- With fallback snippet --&gt;
&lt;Avatar faction="elf" size="sm"&gt;
  {#snippet fallback()}
    &lt;span&gt;🧝&lt;/span&gt;
  {/snippet}
&lt;/Avatar&gt;</code>`}</pre>
	</section>
</div>
