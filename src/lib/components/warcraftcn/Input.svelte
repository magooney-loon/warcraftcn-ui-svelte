<script lang="ts">
	interface InputProps {
		type?: string;
		class?: string;
		[key: string]: unknown;
	}

	let { type = 'text', class: className = '', ...rest }: InputProps = $props();
</script>

<input
	{...rest}
	{type}
	class={[
		'fantasy min-w-0 bg-cover bg-center bg-no-repeat p-3 text-base shadow-xs transition-[color,box-shadow] outline-none selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
		'wc-input-border border-solid [border-image-repeat:stretch]',
		'border-6 [border-image-slice:16_fill]',
		className
	]}
	data-slot="input"
/>
