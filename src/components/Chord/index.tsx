import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import { flavourMap } from '../../const/flavourMap';
import {
	selectActiveChordId,
	selectMode,
	setActiveChord,
	setActiveSection,
	setView
} from '../../store/appSlice';
import { Chord as ChordType, FlavourEnum, Id, KeyEnum } from '../../types';
import { calculateChordRows } from '../../utils/calculateChordRows';
import { ChordFlavour, ChordKey, ChordName, StyledChord } from './styles';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface ElProps {
	chord: ChordType;
	active: boolean;
	length: number;
	isDraggingAndFaded: boolean;
}

const El = ({
	chord: { key, flavour, id, parentSectionId },
	active,
	length,
	isDraggingAndFaded
}: ElProps) => {
	const dispatch = useDispatch();
	const mode = useAppSelector(selectMode);
	const flavourLabel =
		flavourMap[FlavourEnum[flavour as keyof typeof FlavourEnum]];
	const handleClickChord = () => {
		if (mode === 'edit') {
			dispatch(setActiveChord(id));
			dispatch(setActiveSection(parentSectionId));
			dispatch(setView('editChord'));
		}
	};

	// Drag and drop
	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({ id: String(id) });

	const style = {
		transform: CSS.Transform.toString(transform),
		transition
	};

	return (
		<StyledChord
			active={active}
			id={String(id)}
			isFaded={isDraggingAndFaded}
			length={length}
			onClick={handleClickChord}
			ref={setNodeRef}
			style={style}
			{...attributes}
			{...listeners}
		>
			<ChordName>
				<ChordKey>{KeyEnum[key]}</ChordKey>
				<ChordFlavour>{flavourLabel}</ChordFlavour>
			</ChordName>
		</StyledChord>
	);
};

interface Props {
	chord: ChordType;
	chordMeasureIndex: number;
	draggingChordId: Id | null;
}

export default function Chord({
	chord,
	chordMeasureIndex,
	draggingChordId
}: Props) {
	const activeChordId = useAppSelector(selectActiveChordId);
	const placementIsOdd = chordMeasureIndex % 2 === 1;
	const rows = calculateChordRows(chord.length, placementIsOdd);
	const isDraggingAndFaded = chord.id === draggingChordId;
	return rows.map((length, i) => (
		<El
			key={i}
			active={activeChordId === chord.id}
			chord={chord}
			isDraggingAndFaded={isDraggingAndFaded}
			length={length}
		/>
	));
}
