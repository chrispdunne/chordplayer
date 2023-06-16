import { useDispatch } from 'react-redux';
import { setActiveSection, setView } from '../../../store/appSlice';
import { Id } from '../../../types';
import { StyledAddChordButton } from './styles';

export default function AddChordButton({ sectionId }: { sectionId: Id }) {
	const dispatch = useDispatch();
	const addChord = () => {
		dispatch(setView('editChord'));
		dispatch(setActiveSection(sectionId));
	};
	return (
		<StyledAddChordButton className="add-chord-button" onClick={addChord}>
			+
		</StyledAddChordButton>
	);
}
