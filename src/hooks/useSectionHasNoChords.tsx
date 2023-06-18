import { useAppSelector } from '../app/hooks';
import { selectSections } from '../store/sectionsSlice';
import { Id } from '../types';

export default function useSectionHasChords(sectionId: Id): boolean {
	const sections = useAppSelector(selectSections);
	const section = sections.find(section => section.id === sectionId);
	if (!section) {
		console.error(`Section with id ${sectionId} not found`);
	}
	return section?.chords.length !== 0;
}
