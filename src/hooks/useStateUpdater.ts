import { useCallback } from 'react';

export default function useStateUpdater(
	callback: (v?: any) => void,
	buttonToFocus: HTMLButtonElement | null
) {
	return useCallback(
		(v?: any) => {
			callback(v);
			if (v != null && !isNaN(v)) {
				buttonToFocus?.focus();
			}
		},
		[callback, buttonToFocus]
	);
}
