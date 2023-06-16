import PlayIcon from '../Icons/PlayIcon';
import { StyledRepeatButton } from './styles';

interface Props {
	count: number;
}
export default function EditSectionRepeatButton({ count }: Props) {
	return (
		<StyledRepeatButton
			title="edit section repeats"
			aria-label="edit section repeats"
		>
			<PlayIcon /> X {count}
		</StyledRepeatButton>
	);
}
