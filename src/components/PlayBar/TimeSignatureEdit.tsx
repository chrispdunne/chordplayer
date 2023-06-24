import { ChangeEvent, useState } from 'react';
import MetronomeIcon from '../Icons/MetronomeIcon';
import { OtherButton } from './styles';
import Select from '../Select';
import { PlainNumberInput, PlainSelect } from '../../app/styles';
import * as Tone from 'tone';
import { useDispatch } from 'react-redux';
import { setTimeSignature } from '../../store/appSlice';

export default function TimeSignatureEdit() {
	const dispatch = useDispatch();

	const [numerator, _setNumerator] = useState<number>(4);
	const setNumerator = (e: ChangeEvent<HTMLInputElement>) => {
		let num = e.target.valueAsNumber;
		_setNumerator(Number(num));
		Tone.Transport.timeSignature = [num, denominator];
		dispatch(setTimeSignature((num / denominator) * 4));
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
			<PlainNumberInput
				id="numerator"
				max={16}
				min={1}
				value={isNaN(numerator) ? '' : numerator}
				onChange={setNumerator}
			/>
			/
			<PlainSelect
				value={String(denominator)}
				onChange={e => setDenominator(parseInt(e.target.value))}
			>
				<option value="2"> 2 </option>
				<option value="4"> 4 </option>
				<option value="8"> 8 </option>
				<option value="16"> 16</option>
			</PlainSelect>
		</OtherButton>
	);
}
