import * as Tone from 'tone';

export function get1BeatDuration(noteLength: number = 1): number {
	const bpm = Tone.Transport.bpm.value;
	return (60 / bpm) * noteLength;
}
