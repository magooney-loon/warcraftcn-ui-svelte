<script lang="ts">
	import DocsSidebar from './DocsSidebar.svelte';
	import type { Snippet } from 'svelte';
	import { afterNavigate } from '$app/navigation';

	let { children }: { children: Snippet } = $props();

	function highlight() {
		if (window.hljs) {
			window.hljs.highlightAll();
		} else {
			const check = setInterval(() => {
				if (window.hljs) {
					window.hljs.highlightAll();
					clearInterval(check);
				}
			}, 50);
		}
	}

	afterNavigate(highlight);
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/github-dark.min.css"
	/>
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/highlight.min.js"
	></script>
</svelte:head>

<DocsSidebar>
	{@render children()}
</DocsSidebar>
