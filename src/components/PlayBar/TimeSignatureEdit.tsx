import { useState } from 'react';
import MetronomeIcon from '../Icons/MetronomeIcon';
import { OtherButton } from './styles';
import Select from '../Select';
import { NumberInput } from '../../app/styles';
import * as Tone from 'tone';
import { useDispatch } from 'react-redux';
import { setTimeSignature } from '../../store/appSlice';

export default function TimeSignatureEdit() {
	const dispatch = useDispatch();

	const [numerator, _setNumerator] = useState(4);
	const setNumerator = (n: number) => {
		_setNumerator(n);
		Tone.Transport.timeSignature = [n, denominator];

		dispatch(setTimeSignature((n / denominator) * 4));
	};

	const [denominator, _setDenominator] = useState(4);
	const setDenominator = (n: number) => {
		_setDenominator(n);
		Tone.Transport.timeSignature = [numerator, n];
		dispatch(setTimeSignature((numerator / n) * 4));
	};
	return (
		<OtherButton
			title="change time signature"
			aria-label="change time signature"
		>
			<MetronomeIcon />
			<NumberInput
				max={16}
				min={1}
				value={numerator}
				onChange={e => setNumerator(e.target.valueAsNumber)}
			/>
			/
			<Select
				value={String(denominator)}
				onChange={(v: string) => setDenominator(parseInt(v))}
				options={[
					{ value: '2', label: '2' },
					{ value: '4', label: '4' },
					{ value: '8', label: '8' },
					{ value: '16', label: '16' }
				]}
			/>
		</OtherButton>
	);
}
