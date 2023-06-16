import * as Tone from 'tone';
import { getChordNotes } from './getChordNotes';
import { Chord, Id, Section } from '../types';
import { getTotalMeasureCount } from './getTotalMeasureCount';

const getTimeCode = (measureCount: number) =>
	`${String(measureCount).padStart(2, '0')}:00:00`;

function playSectionChords(
	chords: Chord[],
	synth: Tone.PolySynth<Tone.Synth<Tone.SynthOptions>>,
	repeatCount: number,
	measureCount: number,
	setCurrentChord: (chordId: Id) => {
		payload: any;
		type: 'app/setActiveChord';
	}
) {
	let measures = { count: measureCount };
	for (let n = 0; n < repeatCount; n++) {
		chords.forEach((chord, i) => {
			const { key, flavour } = chord;

			// get chord notes
			const notes = getChordNotes(key, flavour).map(
				note => note.name + note.octave
			);

			for (let x = 0; x < chord.length; x++) {
				const timeCode = getTimeCode(measures.count);

				Tone.Transport.schedule(time => {
					// set active chord
					setCurrentChord(chord.id);
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
	sections: Section[],
	setCurrentChord: (chordId: Id) => {
		payload: any;
		type: 'app/setActiveChord';
	}
) {
	const totalMeasureCount = getTotalMeasureCount(sections);
	const endOfChordsTimeCode = getTimeCode(totalMeasureCount);

	let measureCount = 0;
	sections.forEach((section, i) => {
		measureCount = playSectionChords(
			section.chords,
			synth,
			section.repeatCount,
			measureCount,
			setCurrentChord
		);
	});

	Tone.Transport.schedule(time => {
		console.log({ time }, 'restarting');
		Tone.Transport.stop();
		Tone.Transport.start();
	}, endOfChordsTimeCode);
}
