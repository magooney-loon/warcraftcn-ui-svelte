export type ScrollFaction = 'default' | 'orc' | 'elf' | 'human' | 'undead';
export type ToastVariant = 'default' | 'success' | 'error' | 'warning' | 'info';
export type ToastPosition =
	| 'top-left'
	| 'top-center'
	| 'top-right'
	| 'bottom-left'
	| 'bottom-center'
	| 'bottom-right';

export interface Toast {
	id: string;
	message: string;
	faction: ScrollFaction;
	variant: ToastVariant;
	durationMs: number;
	position: ToastPosition;
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
		position?: ToastPosition;
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
			durationMs: options.durationMs ?? 5000,
			position: options.position ?? 'top-center'
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
		position?: ToastPosition;
	} = {}
) {
	const id = addToast(options);
	// Add 500ms buffer for the fade-out transition after the scroll closes
	setTimeout(() => removeToast(id), (options.durationMs ?? 5000) + 500);
}
