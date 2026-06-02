<script lang="ts">
	import PaginationLink from './PaginationLink.svelte';

	interface Props {
		disabled?: boolean;
		class?: string;
	}

	let { disabled = false, class: className = '' }: Props = $props();
</script>

<li data-slot="pagination-previous">
	<PaginationLink
		{disabled}
		class={`gap-1 sm:w-auto sm:px-4 sm:pr-5 ${className}`}
		aria-label="Go to previous page"
	>
		<svg
			class="h-4 w-4 text-amber-500"
			style="filter: drop-shadow(0 0 2px rgba(245,158,11,0.5))"
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path d="m15 18-6-6 6-6" />
		</svg>
		<span class="hidden sm:block">Previous</span>
	</PaginationLink>
</li>
