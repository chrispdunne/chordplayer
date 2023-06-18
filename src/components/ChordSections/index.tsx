import useHasNoSections from '../../hooks/useHasNoSections';
import AddSectionButton from '../Buttons/AddSectionButton';
import EditApp from '../EditApp';
import EditChord from '../EditChord';
import EditSection from '../EditSection';
import Sections from '../Sections';
import { Container } from './styles';

export default function ChordSections() {
	const hasNoSections = useHasNoSections();
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
