import { useState } from 'react';
import NoteIcon from '../Icons/NoteIcon';
import { OtherButton } from './styles';
import * as Tone from 'tone';
import { NumberInput } from '../../app/styles';

export default function BpmEdit() {
	const [bpm, _setBpm] = useState(Tone.Transport.bpm.value);
	const setBpm = (newBpm: number) => {
		_setBpm(newBpm);
		Tone.Transport.bpm.value = newBpm;
	};

	return (
		<OtherButton title="change bpm" aria-label="change bpm">
			<NoteIcon />
			<NumberInput
				min={40}
				max={400}
				step={1}
				value={bpm}
				onChange={e => setBpm(e.target.valueAsNumber)}
			/>
			bpm
		</OtherButton>
	);
}
