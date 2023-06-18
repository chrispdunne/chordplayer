import { InputContainer, Label } from '../../app/styles';
import { KeyEnum, getKeyEnumValues } from '../../types';
import Select from '../Select';

interface Props {
	value: string;
	onChange: (value: string) => void;
}
export default function KeySelect({ value, onChange }: Props) {
	const keyValues = getKeyEnumValues();
	return (
		<InputContainer>
			<Label htmlFor="key_select">Key: </Label>
			<Select
				id="key_select"
				options={keyValues.map(value => ({
					value,
					label: KeyEnum[value]
				}))}
				value={value}
				onChange={onChange}
			/>
		</InputContainer>
	);
}
