import { useDispatch } from 'react-redux';
import { selectMode, setActiveSection, setView } from '../../../store/appSlice';
import { Id } from '../../../types';
import {
	ChordButtonAddon,
	ChordButtonAddonShape,
	StyledAddChordButton
} from './styles';
import useSectionHasChords from '../../../hooks/useSectionHasNoChords';
import { useAppSelector } from '../../../app/hooks';

export default function AddChordButton({ sectionId }: { sectionId: Id }) {
	const mode = useAppSelector(selectMode);
	const dispatch = useDispatch();
	const addChord = () => {
		dispatch(setView('editChord'));
		dispatch(setActiveSection(sectionId));
	};
	const doesSectionHaveChords = useSectionHasChords(sectionId);

	return mode === 'edit' ? (
		<StyledAddChordButton
			className="add-chord-button"
			onClick={addChord}
			doesSectionHaveChords={doesSectionHaveChords}
		>
			+{' '}
			{!doesSectionHaveChords && (
				<ChordButtonAddon>
					<ChordButtonAddonShape />
					Add Chord
				</ChordButtonAddon>
			)}
		</StyledAddChordButton>
	) : null;
}
