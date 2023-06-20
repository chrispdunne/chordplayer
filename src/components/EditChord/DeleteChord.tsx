import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import {
	selectActiveChordId,
	selectActiveSectionId,
	setActiveChord,
	setActiveSection,
	setView
} from '../../store/appSlice';
import DeleteButton from '../Buttons/DeleteButton';
import { removeChord } from '../../store/sectionsSlice';

export default function DeleteChord() {
	const chordId = useAppSelector(selectActiveChordId);
	const sectionId = useAppSelector(selectActiveSectionId);
	const dispatch = useDispatch();
	const handleDeleteChord = () => {
		if (chordId != null && sectionId != null) {
			dispatch(removeChord({ chordId, sectionId }));
			dispatch(setActiveChord(null));
			dispatch(setActiveSection(null));
			dispatch(setView('main'));
		}
	};
	return chordId !== null ? (
		<DeleteButton onClick={handleDeleteChord}>Delete chord</DeleteButton>
	) : null;
}
