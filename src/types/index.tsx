export type Id = number;

export interface Note {
	name: string;
	octave: number;
}
export interface Chord {
	id: Id;
	key: number;
	flavour: string;
	length: number; // in measures
	parentSectionId: Id;
}

export interface Section {
	id: Id;
	chords: Chord[];
	repeatCount: number;
	timeSignature?: string;
	bpm?: number;
}

export enum KeyEnum {
	C,
	Db,
	D,
	Eb,
	E,
	F,
	Gb,
	G,
	Ab,
	A,
	Bb,
	B
}
export const getKeyEnumValues = () =>
	Object.values(KeyEnum).filter(v => typeof v === 'number') as number[]; // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ...]

export const getKeyEnumKeys = () =>
	Object.keys(KeyEnum).filter(v => isNaN(Number(v))) as string[]; // ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", ...]

export enum FlavourEnum {
	Major = 'Major',
	Minor = 'Minor',
	Diminished = 'Diminished',
	Augmented = 'Augmented',
	Minor7 = 'Minor 7',
	Major7 = 'Major 7',
	Dominant7 = 'Dominant 7',
	Diminished7 = 'Diminished 7',
	Augmented7 = 'Augmented 7',
	HalfDiminished7 = 'Half Diminished 7',
	Minor9 = 'Minor 9',
	Major9 = 'Major 9',
	Dominant9 = 'Dominant 9',
	Minor11 = 'Minor 11',
	Major11 = 'Major 11'
}
export const getFlavourEnumKeys = () => Object.keys(FlavourEnum) as string[]; // ["Major", "Minor", "Diminished", "Augmented", "Minor7", ...]
