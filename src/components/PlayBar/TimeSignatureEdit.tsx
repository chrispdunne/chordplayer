import { useState } from 'react';
import MetronomeIcon from '../Icons/MetronomeIcon';
import { OtherButton } from './styles';
import { PlainSelect } from '../../app/styles';
import * as Tone from 'tone';
import { useDispatch } from 'react-redux';
import { setTimeSignature } from '../../store/appSlice';

export default function TimeSignatureEdit() {
	const dispatch = useDispatch();

	const [numerator, _setNumerator] = useState<number>(4);
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
	const numeratorOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const denominatorOptions = [2, 4, 8, 16];

	return (
		<OtherButton
			title="change time signature"
			aria-label="change time signature"
		>
			<MetronomeIcon width={20} height={14} />
			<PlainSelect
				value={String(numerator)}
				onChange={e => setNumerator(parseInt(e.target.value))}
			>
				{numeratorOptions.map(n => (
					<option key={`numerator-${n}`} value={n}>
						{n}
					</option>
				))}
			</PlainSelect>
			/
			<PlainSelect
				value={String(denominator)}
				onChange={e => setDenominator(parseInt(e.target.value))}
			>
				{denominatorOptions.map(n => (
					<option key={`denominator-${n}`} value={n}>
						{n}
					</option>
				))}
			</PlainSelect>
		</OtherButton>
	);
}
