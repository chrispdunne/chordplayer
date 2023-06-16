import { Section } from '../types';

/**
 * calculate the total number of measures in the song
 * from sections
 * @param {Array} Section sections
 * @return number
 */
export function getTotalMeasureCount(sections: Section[]): number {
	return sections.reduce((total, section) => {
		return (
			total +
			section.repeatCount *
				section.chords.reduce(
					(chordTotal, chord) => chordTotal + chord.length,
					0
				)
		);
	}, 0);
}
