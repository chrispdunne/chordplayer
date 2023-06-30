import { SVGProps } from 'react';

export default function PauseIcon(props: SVGProps<SVGSVGElement>) {
	const scaleFactor = 0.8;
	return (
		<svg
			width={21 * scaleFactor}
			height={26 * scaleFactor}
			viewBox="0 0 21 26"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<rect width="7" height="26" fill="currentColor" />
			<rect x="14" width="7" height="26" fill="currentColor" />
		</svg>
	);
}
