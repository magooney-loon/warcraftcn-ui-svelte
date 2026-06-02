<script lang="ts">
	interface Props {
		class?: string;
		[key: string]: unknown;
	}

	let { class: className, ...restProps }: Props = $props();
</script>

<li data-slot="pagination-ellipsis">
	<span
		class={['flex h-10 w-10 items-center justify-center sm:h-12 sm:w-12 text-amber-100/50', className]}
		{...restProps}
		aria-hidden="true"
	>
		♦ ♦ ♦
	</span>
	<span class="sr-only">More pages</span>
</li>
