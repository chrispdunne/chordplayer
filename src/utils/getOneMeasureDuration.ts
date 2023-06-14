import * as Tone from "tone"

/**
 * Get the duration of one measure in seconds.
 * @returns {number} The duration of one measure in seconds.
 */
export function getOneMeasureDuration(): number {
  const bpm = Tone.Transport.bpm.value
  const timeSignature = Tone.Transport.timeSignature
  const quarterNotesPerMeasure: number = Array.isArray(timeSignature)
    ? (timeSignature[0] / timeSignature[1]) * 4
    : timeSignature
  const oneBeatDurationInSecs = 60 / bpm
  const oneMeasureDuration = oneBeatDurationInSecs * quarterNotesPerMeasure
  return oneMeasureDuration
}
