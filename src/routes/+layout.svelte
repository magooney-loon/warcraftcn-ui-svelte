<script lang="ts">
	import './layout.css';
	import SiteHeader from '$lib/site/SiteHeader.svelte';
	import SiteFooter from '$lib/site/SiteFooter.svelte';
	import type { Snippet } from 'svelte';

	const { children }: { children: Snippet } = $props();
</script>

<div class="flex min-h-screen flex-col overflow-x-hidden">
	<SiteHeader />
	<div class="mx-auto w-full max-w-[1400px] flex-1">
		{@render children()}
	</div>
	<SiteFooter />
</div>
