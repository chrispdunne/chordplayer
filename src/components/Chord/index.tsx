import { useAppSelector } from '../../app/hooks';
import { flavourMap } from '../../const/flavourMap';
import { selectActiveChord } from '../../store/appSlice';
import {
	Chord as ChordType,
	FlavourEnum,
	KeyEnum,
	getFlavourEnumKeys
} from '../../types';
import { calculateChordRows } from '../../utils/calculateChordRows';
import { ChordFlavour, ChordKey, ChordName, StyledChord } from './styles';

interface ElProps {
	chord: ChordType;
	active: boolean;
	length: number;
}

const El = ({ chord: { key, flavour }, active, length }: ElProps) => {
	const flavourLabel =
		flavourMap[FlavourEnum[flavour as keyof typeof FlavourEnum]];
	return (
		<StyledChord active={active} length={length}>
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
	const activeChordId = useAppSelector(selectActiveChord);
	const placementIsOdd = chordMeasureIndex % 2 === 1;
	const rows = calculateChordRows(chord.length, placementIsOdd);
	console.log({ rows });
	return rows.map((length, i) => (
		<El
			key={i}
			chord={chord}
			active={activeChordId === chord.id}
			length={length}
		/>
	));
}
