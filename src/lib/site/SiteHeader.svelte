<script lang="ts">
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<header class="sticky top-0 z-50 flex h-14 w-full shrink-0 items-center border-b bg-background/95">
	<div
		class="flex h-full w-full items-center gap-2 px-2 md:mx-auto md:max-w-350 md:gap-5 md:px-6"
	>
		<a href="/" class="flex items-center gap-2">
			<img src="/warcraftcn-logo.png" alt="logo" class="h-8 w-8" />
			<span class="font-bold">warcraftcn/ui</span>
		</a>

		<nav class="hidden items-center gap-4 text-sm md:flex">
			<a href="/docs">Docs</a>
			<a href="/docs/components">Components</a>
		</nav>

		<div class="flex items-center gap-2 md:ml-auto">
			<a
				href="https://github.com/TheOrcDev/warcraftcn-ui"
				target="_blank"
				rel="noopener noreferrer"
				class="fantasy rounded-md p-2 text-amber-200 transition-colors hover:bg-amber-900/30"
				aria-label="GitHub"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path
						d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
					></path>
					<path d="M9 18c-4.51 2-5-2-7-2"></path>
				</svg>
			</a>
			<ThemeToggle />
		</div>
	</div>
</header>
