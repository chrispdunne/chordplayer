import { InputContainer, Label, NumberInput } from '../../app/styles';

interface Props {
	value: number;
	onChange: (value: number) => void;
}
export default function LengthInput({ value, onChange }: Props) {
	return (
		<InputContainer>
			<Label>How many bars: </Label>
			<NumberInput
				min={1}
				max={4}
				onChange={e => onChange(e.target.valueAsNumber)}
				value={value}
			/>
		</InputContainer>
	);
}
