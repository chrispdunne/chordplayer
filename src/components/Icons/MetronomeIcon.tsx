import { SVGProps } from 'react';

export default function MetronomeIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			width="11"
			height="11"
			viewBox="0 0 11 11"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M2.2 0H8.8L11 11H0L2.2 0Z" fill="currentColor" />
			<line x1="5.5" y1="1" x2="5.5" y2="6" stroke="black" />
		</svg>
	);
}
