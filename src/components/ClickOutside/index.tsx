import { ReactNode, useCallback, useEffect, useMemo, useRef } from 'react';
import { assertIsNode } from '../../utils/types';

interface Props {
	onClickOutside: (e: Event) => void;
	children: ReactNode;
}

export default function ClickOutside({ onClickOutside, children }: Props) {
	const ref = useRef<HTMLDivElement>(null);
	// constructor(props) {
	// 	super(props);
	// 	this.getContainer = this.getContainer.bind(this);
	// 	this.isTouch = false;
	// }

	// getContainer(ref) {
	// 	this.container = ref;
	// }

	const memoizedOnClickOutside = useMemo(
		() => onClickOutside,
		[onClickOutside]
	);

	const handle = useCallback(
		(e: Event) => {
			let isTouch = false;

			if (e.type === 'touchend') isTouch = true;
			if (e.type === 'click' && isTouch) return;

			if (ref.current) {
				const el: HTMLDivElement = ref.current;
				assertIsNode(e.target);
				if (el && !el.contains(e.target)) memoizedOnClickOutside(e);
			}
		},
		[memoizedOnClickOutside]
	);

	useEffect(() => {
		document.addEventListener('touchend', handle, true);
		document.addEventListener('click', handle, true);
		return () => {
			document.removeEventListener('touchend', handle, true);
			document.removeEventListener('click', handle, true);
		};
	}, [handle]);

	return <div ref={ref}>{children}</div>;
}
