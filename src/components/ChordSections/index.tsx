import { useEffect } from 'react';
import useHasNoSections from '../../hooks/useHasNoSections';
import AddSectionButton from '../Buttons/AddSectionButton';
import EditApp from '../EditApp';
import EditChord from '../EditChord';
import EditSection from '../EditSection';
import Sections from '../Sections';
import { Container } from './styles';
import { loadLocalStorageState } from '../../utils/localStorage';
import { useDispatch } from 'react-redux';
import { restoreSectionsFromLocalStorage } from '../../store/sectionsSlice';

export default function ChordSections() {
	const dispatch = useDispatch();
	const hasNoSections = useHasNoSections();

	useEffect(() => {
		const localStorageState = loadLocalStorageState();
		if (localStorageState?.sections?.length) {
			dispatch(
				restoreSectionsFromLocalStorage(localStorageState.sections)
			);
		}
	}, []);
	return (
		<Container className="chord-sections" hasNoSections={hasNoSections}>
			<EditApp />
			<EditSection />
			<EditChord />
			<Sections />
			<AddSectionButton hasNoSections={hasNoSections} />
		</Container>
	);
}
