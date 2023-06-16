import { StyledOption, StyledSelect } from './styles';

export interface Option {
	value: string | number;
	label: string;
}
interface Props {
	value: string;
	onChange: (value: string) => void;
	options: Option[];
	id?: string;
}
export default function Select({ value, onChange, options, id }: Props) {
	return (
		<StyledSelect
			id={id}
			value={value}
			onChange={e => onChange(e.target.value)}
		>
			{options.map(option => (
				<StyledOption key={option.value} autoFocus value={option.value}>
					{option.label}
				</StyledOption>
			))}
		</StyledSelect>
	);
}
