import { setContext, getContext } from 'svelte';

const RADIO_GROUP_KEY = Symbol('radio-group');

export interface RadioGroupCtx {
	value: string;
	setValue: (v: string) => void;
	name: string;
	disabled: boolean;
}

export function setRadioGroupCtx(ctx: RadioGroupCtx) {
	setContext(RADIO_GROUP_KEY, ctx);
}

export function getRadioGroupCtx(): RadioGroupCtx {
	return getContext<RadioGroupCtx>(RADIO_GROUP_KEY);
}
