<script lang="ts">
	import {
		DropdownMenu,
		DropdownMenuTrigger,
		DropdownMenuContent,
		DropdownMenuItem,
		DropdownMenuLabel,
		DropdownMenuSeparator,
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
			A fantasy-themed dropdown menu with Warcraft-styled borders. Composable with trigger, content,
			items, labels, and separators.
		</p>
	</div>

	<!-- Standard Dropdown -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Standard Dropdown</h2>
		<div>
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
		</div>
	</section>

	<!-- Usage -->
	<section class="space-y-4">
		<h2 class="fantasy text-xl text-amber-300">Usage</h2>
		<pre
			class="overflow-x-auto rounded-lg border border-amber-900/30 bg-black/40 p-4 text-sm text-amber-100/80">{@html `<code>&lt;script&gt;
  import {
    DropdownMenu, DropdownMenuTrigger,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    Button
  } from '$lib/components/warcraftcn/index.js';
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
</div>
