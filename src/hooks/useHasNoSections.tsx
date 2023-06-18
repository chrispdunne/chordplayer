import { useAppSelector } from '../app/hooks';
import { selectSections } from '../store/sectionsSlice';

export default function useHasNoSections() {
	return useAppSelector(selectSections).length === 0;
}
