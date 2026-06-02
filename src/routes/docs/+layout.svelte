<script lang="ts">
	import DocsSidebar from '$lib/site/DocsSidebar.svelte';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="flex gap-0">
	<!-- Sidebar (hidden on mobile) -->
	<div class="hidden md:block">
		<DocsSidebar class="sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto" />
	</div>
	<!-- Content -->
	<main class="flex-1 overflow-x-hidden p-6 md:p-10">
		{@render children()}
	</main>
</div>
