import { useDispatch } from 'react-redux';
import PlayIcon from '../Icons/PlayIcon';
import { StyledRepeatButton } from './styles';
import { setActiveSection, setView } from '../../store/appSlice';
import { Id } from '../../types';

interface Props {
	count: number;
	id: Id;
}
export default function EditSectionRepeatButton({ count, id }: Props) {
	const dispatch = useDispatch();
	const handleEditSection = () => {
		dispatch(setActiveSection(id));
		dispatch(setView('editSection'));
	};
	return (
		<StyledRepeatButton
			title="edit section repeats"
			aria-label="edit section repeats"
			onClick={handleEditSection}
		>
			<PlayIcon /> X {count}
		</StyledRepeatButton>
	);
}
