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
			{sections.map(section => {
				let chordMeasureIndex = 0;
				return (
					<StyledSection key={section.id}>
						<EditSectionRepeatButton
							count={section.repeatCount}
							id={section.id}
						/>
						{section.chords.map(chord => {
							const rtn = (
								<Chord
									key={chord.id}
									chord={chord}
									chordMeasureIndex={chordMeasureIndex}
								/>
							);
							chordMeasureIndex += chord.length;
							return rtn;
						})}
						<AddChordButton sectionId={section.id} />
					</StyledSection>
				);
			})}
		</>
	);
}
