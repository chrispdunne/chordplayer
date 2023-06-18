import * as Tone from 'tone';

export function get1BeatDuration(): number {
	const bpm = Tone.Transport.bpm.value;
	return 60 / bpm;
}
