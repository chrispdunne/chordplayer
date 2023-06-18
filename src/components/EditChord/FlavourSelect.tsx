import { InputContainer, Label } from '../../app/styles';
import { getFlavourEnumKeys } from '../../types';
import Select from '../Select';

const flavours = getFlavourEnumKeys();
interface Props {
	value: string;
	onChange: (value: string) => void;
}

export default function FlavourSelect({ value, onChange }: Props) {
	return (
		<InputContainer>
			<Label>Type:</Label>
			<Select
				options={flavours.map(flavour => ({
					value: flavour,
					label: flavour
				}))}
				value={value}
				onChange={onChange}
			/>
		</InputContainer>
	);
}
