<script lang="ts">
	import {
		DropdownMenu,
		DropdownMenuTrigger,
		DropdownMenuContent,
		DropdownMenuItem,
		DropdownMenuLabel,
		DropdownMenuSeparator,
		DropdownMenuShortcut,
		Button
	} from '$lib/components/warcraftcn/index.js';
</script>

<svelte:head>
	<title>Dropdown Menu — warcraftcn/ui</title>
</svelte:head>

<div class="mx-auto max-w-4xl space-y-8">
	<div>
		<h1 class="fantasy text-3xl font-bold text-amber-200">Dropdown Menu</h1>
		<p class="mt-2 text-amber-100/70">
			A fantasy-themed dropdown menu with Warcraft-styled borders. Close by clicking outside or
			pressing Escape.
		</p>
	</div>

	<!-- Standard -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Standard</h2>
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Button>Open Menu</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>Actions</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>New Game</DropdownMenuItem>
				<DropdownMenuItem>Load Game</DropdownMenuItem>
				<DropdownMenuItem>Settings</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem disabled>Locked Option</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	</section>

	<!-- With Shortcuts -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">With Shortcuts</h2>
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Button variant="frame">Commands</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>Battle Commands</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					Attack
					<DropdownMenuShortcut>A</DropdownMenuShortcut>
				</DropdownMenuItem>
				<DropdownMenuItem>
					Stop
					<DropdownMenuShortcut>S</DropdownMenuShortcut>
				</DropdownMenuItem>
				<DropdownMenuItem>
					Hold Position
					<DropdownMenuShortcut>H</DropdownMenuShortcut>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					Patrol
					<DropdownMenuShortcut>P</DropdownMenuShortcut>
				</DropdownMenuItem>
				<DropdownMenuItem disabled>
					Retreat
					<DropdownMenuShortcut>R</DropdownMenuShortcut>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Usage</h2>
		<pre
			class="overflow-x-auto rounded-lg border border-amber-900/30 bg-black/40 p-4 text-sm text-amber-100/80">{@html `<code>&lt;script&gt;
  import {
    DropdownMenu, DropdownMenuTrigger,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator
  } from 'warcraftcn-ui-svelte';
&lt;/script&gt;

&lt;DropdownMenu&gt;
  &lt;DropdownMenuTrigger&gt;
    &lt;Button&gt;Open Menu&lt;/Button&gt;
  &lt;/DropdownMenuTrigger&gt;
  &lt;DropdownMenuContent&gt;
    &lt;DropdownMenuLabel&gt;Actions&lt;/DropdownMenuLabel&gt;
    &lt;DropdownMenuSeparator /&gt;
    &lt;DropdownMenuItem&gt;New Game&lt;/DropdownMenuItem&gt;
    &lt;DropdownMenuItem disabled&gt;Locked&lt;/DropdownMenuItem&gt;
  &lt;/DropdownMenuContent&gt;
&lt;/DropdownMenu&gt;</code>`}</pre>
	</section>

	<!-- Props -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Props</h2>
		<p class="text-xs font-semibold tracking-wider text-amber-400 uppercase">DropdownMenu</p>
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
						<td class="px-4 py-2 font-mono">class</td>
						<td class="px-4 py-2">string</td>
						<td class="px-4 py-2">""</td>
					</tr>
				</tbody>
			</table>
		</div>
		<p class="mt-2 text-xs font-semibold tracking-wider text-amber-400 uppercase">
			DropdownMenuItem
		</p>
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
						<td class="px-4 py-2 font-mono">disabled</td>
						<td class="px-4 py-2">boolean</td>
						<td class="px-4 py-2">false</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
</div>
