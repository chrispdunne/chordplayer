import AddSectionButton from '../Buttons/AddSectionButton';
import EditApp from '../EditApp';
import EditChord from '../EditChord';
import EditSection from '../EditSection';
import Sections from '../Sections';
import { Container } from './styles';

export default function ChordSections() {
	return (
		<Container className="chord-sections">
			<EditApp />
			<EditSection />
			<EditChord />
			<Sections />
			<AddSectionButton />
		</Container>
	);
}
