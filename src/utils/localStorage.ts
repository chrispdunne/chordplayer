import { RootState } from '../app/store';

export function saveLocalStorageState(stateSlice: Partial<RootState>): void {
	const existingState = JSON.parse(
		localStorage.getItem('cp_state') ?? '{"app":{},"sections":[]}'
	);
	localStorage.setItem(
		'cp_state',
		JSON.stringify({ ...existingState, ...stateSlice })
	);
}

export function loadLocalStorageState(): Partial<RootState> {
	return JSON.parse(localStorage.getItem('cp_state') ?? '{}');
}
