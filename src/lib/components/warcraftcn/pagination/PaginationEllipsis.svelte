<script lang="ts">
	interface Props {
		class?: string;
	}

	let { class: className }: Props = $props();
</script>

<li data-slot="pagination-ellipsis">
	<span
		class={['flex h-10 w-10 items-center justify-center select-none sm:h-12 sm:w-12', className]}
		aria-hidden="true"
	>
		<span
			class="text-xs font-bold tracking-[2px] text-amber-500/60 [text-shadow:0_0_4px_rgba(245,158,11,0.3)]"
		>
			♦ ♦ ♦
		</span>
	</span>
	<span class="sr-only">More pages</span>
</li>
