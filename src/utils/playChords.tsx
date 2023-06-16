import * as Tone from 'tone';
import { getChordNotes } from './getChordNotes';
import { Chord, Section } from '../types';
import { getTotalMeasureCount } from './getTotalMeasureCount';

const getTimeCode = (measureCount: number) =>
	`${String(measureCount).padStart(2, '0')}:00:00`;

function playSectionChords(
	chords: Chord[],
	synth: Tone.PolySynth<Tone.Synth<Tone.SynthOptions>>,
	repeatCount: number,
	measureCount: number
) {
	let measures = { count: measureCount };
	for (let n = 0; n < repeatCount; n++) {
		chords.forEach((chord, i) => {
			// get key     // get chord type
			const { key, flavour } = chord;

			// get chord notes
			const notes = getChordNotes(key, flavour).map(
				note => note.name + note.octave
			);

			for (let x = 0; x < chord.length; x++) {
				const timeCode = getTimeCode(measures.count);
				// console.log({ timeCode });
				Tone.Transport.schedule(time => {
					// update currently selected chord in UI
					// console.log('playing chord', { time, measures });

					// play chord
					notes.forEach(note => synth.triggerAttack(note, time));
					synth.triggerRelease(notes, time + 1);
				}, timeCode);
				measures.count += 1;
			}
		});
	}

	return measures.count;
}

export function playChords(
	synth: Tone.PolySynth<Tone.Synth<Tone.SynthOptions>>,
	sections: Section[]
) {
	const totalMeasureCount = getTotalMeasureCount(sections);
	const endOfChordsTimeCode = getTimeCode(totalMeasureCount);

	let measureCount = 0;
	sections.forEach((section, i) => {
		measureCount = playSectionChords(
			section.chords,
			synth,
			section.repeatCount,
			measureCount
		);
	});

	Tone.Transport.schedule(time => {
		console.log({ time }, 'restarting');
		Tone.Transport.stop();
		Tone.Transport.start();
	}, endOfChordsTimeCode);
}

// X1 X2
// Y1 Y2 Y3 Y4
// X1 X2
// Y1 Y2 Y3 Y4
