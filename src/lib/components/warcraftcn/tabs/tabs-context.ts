import { setContext, getContext } from 'svelte';

const TABS_KEY = Symbol('tabs');

export interface TabsCtx {
	activeTab: string;
	setActive: (v: string) => void;
	orientation: string;
}

export function setTabsCtx(ctx: TabsCtx) {
	setContext(TABS_KEY, ctx);
}

export function getTabsCtx(): TabsCtx {
	return getContext<TabsCtx>(TABS_KEY);
}
