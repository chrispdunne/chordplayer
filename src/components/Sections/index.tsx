import { useAppSelector } from '../../app/hooks';
import { selectSections } from '../../store/sectionsSlice';
import Section from '../Section';

export default function Sections() {
	const sections = useAppSelector(selectSections);

	return (
		<>
			{sections.map(section => {
				let chordMeasureIndex = 0;
				return (
					<Section
						key={section.id}
						chordMeasureIndex={chordMeasureIndex}
						section={section}
					/>
				);
			})}
		</>
	);
}
