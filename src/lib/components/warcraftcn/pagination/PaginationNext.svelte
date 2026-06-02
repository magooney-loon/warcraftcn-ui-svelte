<script lang="ts">
	import PaginationLink from './PaginationLink.svelte';

	interface Props {
		disabled?: boolean;
		class?: string;
		[key: string]: unknown;
	}

	let { disabled = false, class: className, ...restProps }: Props = $props();
</script>

<li data-slot="pagination-next">
	<PaginationLink {disabled} class={className} aria-label="Go to next page" {...restProps}>
		<svg
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
			<path d="m9 18 6-6-6-6" />
		</svg>
	</PaginationLink>
</li>
