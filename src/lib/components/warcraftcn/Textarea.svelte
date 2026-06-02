<script lang="ts">
	interface TextareaProps {
		class?: string;
		[key: string]: unknown;
	}

	let { class: className = '', ...rest }: TextareaProps = $props();
</script>

<textarea
	{...rest}
	class={[
		'fantasy min-w-0 bg-cover bg-center bg-no-repeat p-3 px-5 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
		'wc-textarea-border border-solid [border-image-repeat:stretch]',
		'border-6 [border-image-slice:16_fill]',
		'field-sizing-content min-h-24 w-full resize-none',
		className
	]}
	data-slot="textarea"
></textarea>
