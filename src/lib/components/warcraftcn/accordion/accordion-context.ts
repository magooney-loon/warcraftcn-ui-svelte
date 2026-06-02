import { setContext, getContext } from 'svelte';

const ACCORDION_KEY = Symbol('accordion');

export interface AccordionCtx {
	toggle: (value: string) => void;
	isOpen: (value: string) => boolean;
}

export function setAccordionCtx(ctx: AccordionCtx) {
	setContext(ACCORDION_KEY, ctx);
}

export function getAccordionCtx(): AccordionCtx {
	return getContext<AccordionCtx>(ACCORDION_KEY);
}
