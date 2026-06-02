<script lang="ts">
	import { SPINNER_PATH } from './assets/spinner-path.js';

	const SPINNER_VIEW_BOX = '14 15.946284 187.21483 333.9404';
	const SPINNER_CENTER_X = 107.607415;
	const SPINNER_CENTER_Y = 182.916484;
	const SPINNER_STATIC_TRANSFORM = `translate(${SPINNER_CENTER_X} ${SPINNER_CENTER_Y}) rotate(-2) translate(${-SPINNER_CENTER_X} ${-SPINNER_CENTER_Y})`;

	interface SpinnerProps {
		class?: string;
		[key: string]: unknown;
	}

	let { class: className, ...rest }: SpinnerProps = $props();
</script>

<svg
	data-slot="spinner"
	role="status"
	aria-label="Loading"
	class={['wc-spinner size-10', className]}
	viewBox={SPINNER_VIEW_BOX}
	preserveAspectRatio="none"
	xmlns="http://www.w3.org/2000/svg"
	{...rest}
>
	<g transform={SPINNER_STATIC_TRANSFORM}>
		<g class="wc-spinner-wrap">
			<path class="wc-spinner-glow" d={SPINNER_PATH} fill="currentColor" />
			<path class="wc-spinner-core" d={SPINNER_PATH} fill="currentColor" />
		</g>
	</g>
</svg>
