export type ScrollFaction = 'default' | 'orc' | 'elf' | 'human' | 'undead';
export type ToastVariant = 'default' | 'success' | 'error' | 'warning' | 'info';

export interface Toast {
	id: string;
	message: string;
	faction: ScrollFaction;
	variant: ToastVariant;
	durationMs: number;
}

const store = $state({ toasts: [] as Toast[] });

export function getToasts(): Toast[] {
	return store.toasts;
}

export function addToast(
	options: {
		message?: string;
		faction?: ScrollFaction;
		variant?: ToastVariant;
		durationMs?: number;
	} = {}
): string {
	const id = crypto.randomUUID();
	store.toasts = [
		...store.toasts,
		{
			id,
			message: options.message ?? '',
			faction: options.faction ?? 'default',
			variant: options.variant ?? 'default',
			durationMs: options.durationMs ?? 5000
		}
	];
	return id;
}

export function removeToast(id: string) {
	store.toasts = store.toasts.filter((t) => t.id !== id);
}

export function triggerScrollToast(
	options: {
		message?: string;
		faction?: ScrollFaction;
		variant?: ToastVariant;
		durationMs?: number;
	} = {}
) {
	const id = addToast(options);
	setTimeout(() => removeToast(id), options.durationMs ?? 5000);
}
