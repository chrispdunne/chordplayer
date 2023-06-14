export type Id = number

export interface Note {
  name: string
  octave: number
}
export interface Chord {
  id: Id
  key: number
  flavour: string
  length: number
}

export interface Section {
  id: Id
  chords: Chord[]
  repeatCount: number
  timeSignature?: string
  bpm?: number
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
  B,
}
export const getKeyEnumValues = () =>
  Object.values(KeyEnum).filter((v) => typeof v === "number") as number[] // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ...]

export const getKeyEnumKeys = () =>
  Object.keys(KeyEnum).filter((v) => isNaN(Number(v))) as string[] // ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", ...]

export enum FlavourEnum {
  Major = "Major",
  Minor = "Minor",
  Diminished = "Diminished",
  Augmented = "Augmented",
  Minor7 = "Minor7",
  Major7 = "Major7",
  Dominant7 = "Dominant7",
  Diminished7 = "Diminished7",
  Augmented7 = "Augmented7",
  HalfDiminished7 = "HalfDiminished7",
  Minor9 = "Minor9",
  Major9 = "Major9",
  Dominant9 = "Dominant9",
  Minor11 = "Minor11",
  Major11 = "Major11",
}
export const getFlavourEnumKeys = () => Object.keys(FlavourEnum) as string[] // ["Major", "Minor", "Diminished", "Augmented", "Minor7", ...]
