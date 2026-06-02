import { setContext, getContext } from 'svelte';

const DROPDOWN_KEY = Symbol('dropdown-menu');

export interface DropdownMenuCtx {
	open: boolean;
	toggle: () => void;
	close: () => void;
}

export function setDropdownMenuCtx(ctx: DropdownMenuCtx) {
	setContext(DROPDOWN_KEY, ctx);
}

export function getDropdownMenuCtx(): DropdownMenuCtx {
	return getContext<DropdownMenuCtx>(DROPDOWN_KEY);
}
