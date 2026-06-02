<script lang="ts">
	import {
		Card,
		CardHeader,
		CardTitle,
		CardContent,
		CardFooter
	} from '$lib/components/warcraftcn/card/index.js';
	import Button from '$lib/components/warcraftcn/Button.svelte';
</script>

<svelte:head>
	<title>warcraftcn/ui — Warcraft UI Components</title>
	<meta
		name="description"
		content="A set of components inspired by classic Warcraft III RTS UI aesthetics"
	/>
</svelte:head>

<div class="relative flex min-h-[80vh] flex-col items-center justify-center px-4 py-12">
	<!-- Decorative glow -->
	<div class="pointer-events-none absolute inset-0 overflow-hidden">
		<div
			class="absolute top-1/2 left-1/2 h-200 w-200 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.12)_0%,transparent_70%)] blur-[100px]"
		></div>
	</div>

	<Card class="relative z-10 max-w-xl">
		<CardHeader>
			<CardTitle class="text-center text-2xl font-bold md:text-4xl">warcraftcn</CardTitle>
		</CardHeader>
		<CardContent class="flex flex-col items-center justify-center gap-4 pt-5">
			<img src="/warcraftcn-logo.png" alt="warcraftcn logo" class="h-50 w-50 md:h-80 md:w-80" />
			<p class="text-center text-white">
				A set of components inspired by classic Warcraft III RTS UI aesthetics — fantasy borders,
				scroll textures, and faction-based color themes.
			</p>
		</CardContent>
		<CardFooter class="flex flex-col items-center justify-center gap-4">
			<a href="/docs"><Button class="px-10 text-xl">Get Started</Button></a>
		</CardFooter>
	</Card>
</div>
