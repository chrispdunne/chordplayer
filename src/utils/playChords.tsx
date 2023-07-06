import * as Tone from 'tone';
import { getChordNotes } from './getChordNotes';
import { Id, Section } from '../types';
import { getTotalMeasureCount } from './getTotalMeasureCount';
import { get1BeatDuration } from './timing';

function playChordsEachBeat(
	note: string,
	synth: Tone.PolySynth<Tone.Synth<Tone.SynthOptions>>,
	time: number,
	veloctiy: number,
	timeSignature: [number, number]
) {
	const oneBeatDuration = get1BeatDuration(4 / timeSignature[1]);

	for (let i = 0; i < timeSignature[0]; i++) {
		synth.triggerAttackRelease(
			note,
			`${timeSignature[1] * 2}n`, // duration
			time + i * oneBeatDuration, // start
			veloctiy
		);
	}
}

const getTimeCode = (measureCount: number) =>
	`${String(measureCount).padStart(2, '0')}:00:00`;

function playSectionChords(
	{ chords, repeatCount }: Section,
	timeSignature: [number, number],
	synth: Tone.PolySynth<Tone.Synth<Tone.SynthOptions>>,
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

			const noteVelocity = 1 / notes.length;

			for (let x = 0; x < chord.length; x++) {
				const timeCode = getTimeCode(measures.count);

				Tone.Transport.schedule(time => {
					// set active chord
					setCurrentChord(chord.id);
					// play chord
					notes.forEach(note => {
						playChordsEachBeat(
							note,
							synth,
							time,
							noteVelocity,
							timeSignature
						);
					});
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
	},
	timeSignature: [number, number]
) {
	const totalMeasureCount = getTotalMeasureCount(sections);
	const endOfChordsTimeCode = getTimeCode(totalMeasureCount);

	let measureCount = 0;
	sections.forEach((section, i) => {
		measureCount = playSectionChords(
			section,
			timeSignature,
			synth,
			measureCount,
			setCurrentChord
		);
	});

	Tone.Transport.schedule(time => {
		Tone.Transport.stop();
		Tone.Transport.start();
	}, endOfChordsTimeCode);
}
