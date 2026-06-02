import { setContext, getContext } from 'svelte';

const TOOLTIP_KEY = Symbol('tooltip');

export interface TooltipCtx {
	visible: boolean;
	position: { x: number; y: number };
	variant: string;
	side: 'top' | 'bottom' | 'left' | 'right';
	sideOffset: number;
	open: () => void;
	close: () => void;
}

export function setTooltipCtx(ctx: TooltipCtx) {
	setContext(TOOLTIP_KEY, ctx);
}

export function getTooltipCtx(): TooltipCtx {
	return getContext<TooltipCtx>(TOOLTIP_KEY);
}
