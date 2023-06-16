import { useAppSelector } from '../../app/hooks';
import { selectSections } from '../../store/sectionsSlice';
import AddChordButton from '../Buttons/AddChordButton';
import Chord from '../Chord';
import EditSectionRepeatButton from '../EditSectionRepeatButton';
import { StyledSection } from './styles';

export default function Sections() {
	const sections = useAppSelector(selectSections);
	return (
		<>
			{sections.map(section => (
				<StyledSection key={section.id}>
					<EditSectionRepeatButton
						count={section.repeatCount}
						id={section.id}
					/>
					{section.chords.map(chord => (
						<Chord key={chord.id} chord={chord} />
					))}
					<AddChordButton sectionId={section.id} />
				</StyledSection>
			))}
		</>
	);
}
