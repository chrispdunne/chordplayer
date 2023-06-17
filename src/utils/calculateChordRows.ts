export function calculateChordRows(
	length: number,
	isPlacementOdd: boolean
): number[] {
	const rows =
		length % 2 !== 0
			? Math.ceil(length / 2)
			: isPlacementOdd
			? Math.ceil(length / 2) + 1
			: Math.ceil(length / 2);

	let remaingLength = length;
	return Array.from({ length: rows }, (_, i) => {
		let result = 0;

		if (isPlacementOdd) {
			if (i === 0) {
				result = 1;
			} else {
				result = remaingLength > 1 ? 2 : 1;
			}
		} else {
			if (i === 0 && remaingLength > 1) {
				result = 2;
			} else {
				result = remaingLength > 1 ? 2 : 1;
			}
		}

		remaingLength -= result;
		return result;
	});
}
