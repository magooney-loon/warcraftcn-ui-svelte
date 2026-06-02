<script lang="ts">
	interface Props {
		class?: string;
	}

	let { class: className = '' }: Props = $props();
</script>

<div
	class={['mx-2 my-1 h-px bg-amber-700/10', className]}
	role="separator"
	data-slot="dropdown-menu-separator"
></div>
