import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import {
	selectActiveSectionId,
	setActiveSection,
	setView
} from '../../store/appSlice';
import DeleteButton from '../Buttons/DeleteButton';
import { removeSection } from '../../store/sectionsSlice';

export default function DeleteSection() {
	const sectionId = useAppSelector(selectActiveSectionId);
	const dispatch = useDispatch();
	const handleDeleteSection = () => {
		if (sectionId != null) {
			dispatch(removeSection(sectionId));
			dispatch(setActiveSection(null));
			dispatch(setView('main'));
		}
	};
	return sectionId !== null ? (
		<DeleteButton onClick={handleDeleteSection}>
			Delete section
		</DeleteButton>
	) : null;
}
