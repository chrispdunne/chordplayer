import NoteIcon from '../Icons/NoteIcon';
import { OtherButton } from './styles';
import * as Tone from 'tone';
import { PlainNumberInput } from '../../app/styles';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import { selectBpm, setBpm } from '../../store/appSlice';

export default function BpmEdit() {
	const dispatch = useDispatch();
	const bpm = useAppSelector(selectBpm);
	const handleSetBpm = (newBpm: number) => {
		dispatch(setBpm(newBpm));
		Tone.Transport.bpm.value = newBpm;
	};

	return (
		<OtherButton title="change bpm" aria-label="change bpm">
			<label htmlFor="bpm">
				<NoteIcon width={10} height={13} />
				<PlainNumberInput
					id="bpm"
					min={40}
					max={400}
					step={1}
					value={bpm}
					onChange={e => handleSetBpm(e.target.valueAsNumber)}
				/>
				bpm
			</label>
		</OtherButton>
	);
}
