import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import { flavourMap } from '../../const/flavourMap';
import {
	selectActiveChordId,
	setActiveChord,
	setActiveSection,
	setView
} from '../../store/appSlice';
import { Chord as ChordType, FlavourEnum, Id, KeyEnum } from '../../types';
import { calculateChordRows } from '../../utils/calculateChordRows';
import { ChordFlavour, ChordKey, ChordName, StyledChord } from './styles';

interface ElProps {
	chord: ChordType;
	active: boolean;
	length: number;
}

const El = ({
	chord: { key, flavour, id, parentSectionId },
	active,
	length
}: ElProps) => {
	const dispatch = useDispatch();
	const flavourLabel =
		flavourMap[FlavourEnum[flavour as keyof typeof FlavourEnum]];
	const handleClickChord = () => {
		dispatch(setActiveChord(id));
		dispatch(setActiveSection(parentSectionId));
		dispatch(setView('editChord'));
	};
	return (
		<StyledChord active={active} length={length} onClick={handleClickChord}>
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
}

export default function Chord({ chord, chordMeasureIndex }: Props) {
	const activeChordId = useAppSelector(selectActiveChordId);
	const placementIsOdd = chordMeasureIndex % 2 === 1;
	const rows = calculateChordRows(chord.length, placementIsOdd);

	return rows.map((length, i) => (
		<El
			key={i}
			chord={chord}
			active={activeChordId === chord.id}
			length={length}
		/>
	));
}
