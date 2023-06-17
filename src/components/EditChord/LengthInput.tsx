import { NumberInput } from '../../app/styles';

interface Props {
	value: number;
	onChange: (value: number) => void;
}
export default function LengthInput({ value, onChange }: Props) {
	return (
		<div>
			How many bars:{' '}
			<NumberInput
				min={1}
				max={4}
				onChange={e => onChange(e.target.valueAsNumber)}
				value={value}
			/>
		</div>
	);
}
