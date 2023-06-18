import { Note, getKeyEnumKeys } from '../types';
import { KeyEnum } from '../types';

const parseNote = (key: number): Note => {
	const keyCount = getKeyEnumKeys().length;

	let octave = 3;
	if (key >= keyCount) {
		const diff = key - keyCount;
		const additonalOctaves = Math.ceil(diff / keyCount);
		octave += additonalOctaves;
		key = diff % keyCount;
		return { name: KeyEnum[key], octave };
	} else {
		return { name: KeyEnum[key], octave };
	}
};

/**
 * Returns the notes of a chord
 * @param key number - a value from KeyEnum
 * @param flavour string - a value from FlavourEnum
 * @return Note[] - an array of Notes
 */
export function getChordNotes(key: number, flavour: string) {
	const notes: Note[] = [{ name: KeyEnum[key], octave: 3 }];
	if (flavour === 'Major') {
		notes.push(parseNote(key + 4));
		notes.push(parseNote(key + 7));
	}
	if (flavour === 'Minor') {
		notes.push(parseNote(key + 3));
		notes.push(parseNote(key + 7));
	}
	if (flavour === 'Diminished') {
		notes.push(parseNote(key + 3));
		notes.push(parseNote(key + 6));
	}
	if (flavour === 'Augmented') {
		notes.push(parseNote(key + 4));
		notes.push(parseNote(key + 8));
	}
	if (flavour === 'Minor7') {
		notes.push(parseNote(key + 3));
		notes.push(parseNote(key + 7));
		notes.push(parseNote(key + 10));
	}
	if (flavour === 'Major7') {
		notes.push(parseNote(key + 4));
		notes.push(parseNote(key + 7));
		notes.push(parseNote(key + 11));
	}
	if (flavour === 'Dominant7') {
		notes.push(parseNote(key + 4));
		notes.push(parseNote(key + 7));
		notes.push(parseNote(key + 10));
	}
	if (flavour === 'Diminished7') {
		notes.push(parseNote(key + 3));
		notes.push(parseNote(key + 6));
		notes.push(parseNote(key + 9));
	}
	if (flavour === 'Augmented7') {
		notes.push(parseNote(key + 4));
		notes.push(parseNote(key + 8));
		notes.push(parseNote(key + 10));
	}
	if (flavour === 'HalfDiminished7') {
		notes.push(parseNote(key + 3));
		notes.push(parseNote(key + 6));
		notes.push(parseNote(key + 10));
	}
	if (flavour === 'Minor9') {
		notes.push(parseNote(key + 3));
		notes.push(parseNote(key + 7));
		notes.push(parseNote(key + 10));
		notes.push(parseNote(key + 14));
	}
	if (flavour === 'Major9') {
		notes.push(parseNote(key + 4));
		notes.push(parseNote(key + 7));
		notes.push(parseNote(key + 11));
		notes.push(parseNote(key + 14));
	}
	if (flavour === 'Dominant9') {
		notes.push(parseNote(key + 4));
		notes.push(parseNote(key + 7));
		notes.push(parseNote(key + 10));
		notes.push(parseNote(key + 14));
	}
	if (flavour === 'Minor11') {
		notes.push(parseNote(key + 3));
		notes.push(parseNote(key + 7));
		notes.push(parseNote(key + 10));
		notes.push(parseNote(key + 14));
		notes.push(parseNote(key + 17));
	}
	if (flavour === 'Major11') {
		notes.push(parseNote(key + 4));
		notes.push(parseNote(key + 7));
		notes.push(parseNote(key + 11));
		notes.push(parseNote(key + 14));
		notes.push(parseNote(key + 18));
	}
	return notes;
}
