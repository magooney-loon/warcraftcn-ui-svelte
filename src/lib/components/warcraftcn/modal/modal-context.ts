import { setContext, getContext } from 'svelte';

export function setModalCtx(ctx: { get open(): boolean; toggle(): void; close(): void }) {
	setContext('modal-ctx', ctx);
}

export function getModalCtx() {
	return getContext<{ get open(): boolean; toggle(): void; close(): void }>('modal-ctx');
}
