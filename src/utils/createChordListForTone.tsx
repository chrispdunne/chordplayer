import * as Tone from "tone"
import { getOneMeasureDuration } from "./getOneMeasureDuration"
import { getChordNotes } from "./getChordNotes"
import { Chord, Section } from "../types"

function triggerReleaseChords(
  chords: Chord[],
  synth: Tone.PolySynth<Tone.Synth<Tone.SynthOptions>>,
  time: number,
) {
  const oneMeasureDuration = getOneMeasureDuration()

  let sectionTime = time
  chords.forEach((chord, i) => {
    // get key     // get chord type
    const { key, flavour } = chord

    // get chord notes
    const notes = getChordNotes(key, flavour).map(
      (note) => note.name + note.octave,
    )
    console.log({ notes })
    notes.forEach((note) => synth.triggerAttack(note, sectionTime))

    synth.triggerRelease(notes, sectionTime + 0.25)
    sectionTime += chord.length * oneMeasureDuration
  })
}

export function createChordListForToneJs(
  synth: Tone.PolySynth<Tone.Synth<Tone.SynthOptions>>,
  sections: Section[],
): number[] {
  let scheduledEventIds: number[] = []
  sections.forEach((section, i) => {
    console.log({ section })
    scheduledEventIds.push(
      Tone.Transport.scheduleRepeat(
        (time) => triggerReleaseChords(section.chords, synth, time),
        "4n", // every X note
        i === 0 ? "0" : `${i}m`, // start at Nth measure
        "2n", // duration of X note, [calculate from total duration of each chord * section repeatCount]
      ),
    )
  })
  return scheduledEventIds
}

// X1 X2
// Y1 Y2 Y3 Y4
// X1 X2
// Y1 Y2 Y3 Y4
