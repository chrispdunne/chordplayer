import { Section as SectionType } from '../../types';
import AddChordButton from '../Buttons/AddChordButton';
import Chord from '../Chord';
import EditSectionRepeatButton from '../EditSectionRepeatButton';
import { StyledSection } from './styles';
import {
	DndContext,
	DragEndEvent,
	KeyboardSensor,
	PointerSensor,
	closestCenter,
	useSensor,
	useSensors
} from '@dnd-kit/core';
import {
	SortableContext,
	sortableKeyboardCoordinates,
	verticalListSortingStrategy
} from '@dnd-kit/sortable';
import { useDispatch } from 'react-redux';
import { swapChords } from '../../store/sectionsSlice';

interface Props {
	chordMeasureIndex: number;
	section: SectionType;
}

export default function Section({ chordMeasureIndex, section }: Props) {
	const dispatch = useDispatch();

	const handleDragEnd = (event: DragEndEvent) => {
		const { active, over } = event;

		if (active.id !== over?.id) {
			dispatch(
				swapChords({
					sectionId: section.id,
					chordOneId: Number(active.id),
					chordTwoId: Number(over?.id)
				})
			);
		}
	};

	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates
		})
	);

	return (
		<StyledSection>
			<EditSectionRepeatButton
				count={section.repeatCount}
				id={section.id}
			/>
			<DndContext
				sensors={sensors}
				collisionDetection={closestCenter}
				onDragEnd={handleDragEnd}
			>
				<SortableContext
					items={section.chords}
					strategy={verticalListSortingStrategy}
				>
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
				</SortableContext>
			</DndContext>

			<AddChordButton sectionId={section.id} />
		</StyledSection>
	);
}
