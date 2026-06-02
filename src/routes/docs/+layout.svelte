<script lang="ts">
	import DocsSidebar from './DocsSidebar.svelte';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<DocsSidebar>
	{@render children()}
</DocsSidebar>
