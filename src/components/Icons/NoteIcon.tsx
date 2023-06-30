import { SVGProps } from 'react';

export default function NoteIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			width="6"
			height="11"
			viewBox="0 0 6 11"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<circle cx="3" cy="8" r="3" fill="currentColor" />
			<line
				x1="5.5"
				y1="8"
				x2="5.5"
				y2="2.18557e-08"
				stroke="currentColor"
			/>
		</svg>
	);
}
