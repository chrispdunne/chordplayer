import { SVGProps } from 'react';

export default function BinIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			width="12px"
			height="12px"
			viewBox="0 0 490.646 490.646"
			{...props}
		>
			<path
				d="M399.179,67.285l-74.794,0.033L324.356,0L166.214,0.066l0.029,67.318l-74.802,0.033l0.025,62.914h307.739L399.179,67.285z
			 M198.28,32.11l94.03-0.041l0.017,35.262l-94.03,0.041L198.28,32.11z"
			/>
			<path
				d="M91.465,490.646h307.739V146.359H91.465V490.646z M317.461,193.372h16.028v250.259h-16.028V193.372L317.461,193.372z
			 M237.321,193.372h16.028v250.259h-16.028V193.372L237.321,193.372z M157.18,193.372h16.028v250.259H157.18V193.372z"
			/>
		</svg>
	);
}
