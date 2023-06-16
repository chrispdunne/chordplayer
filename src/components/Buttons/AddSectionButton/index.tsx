import { useDispatch } from 'react-redux';
import { setView } from '../../../store/appSlice';
import { StyledAddButton } from './styles';

export default function AddSectionButton() {
	const dispatch = useDispatch();
	const addSection = () => {
		dispatch(setView('editSection'));
	};
	return (
		<StyledAddButton
			className="add-section-button"
			onClick={addSection}
			title="Add section"
			aria-label="Add section"
		>
			+
		</StyledAddButton>
	);
}
