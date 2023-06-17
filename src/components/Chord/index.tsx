import { useAppSelector } from '../../app/hooks';
import { selectActiveChord } from '../../store/appSlice';
import { Chord as ChordType, KeyEnum } from '../../types';
import { calculateChordRows } from '../../utils/calculateChordRows';
import { ChordName, StyledChord } from './styles';

interface ElProps {
	chord: ChordType;
	active: boolean;
	length: number;
}

const El = ({ chord: { key, flavour }, active, length }: ElProps) => (
	<StyledChord active={active} length={length}>
		<ChordName>
			{/* (odd:{placementIsOdd ? 'true' : 'false'}) (rows:{rows}) */}
			{KeyEnum[key]} {flavour}
			{/* (length:{chord.length}) */}
		</ChordName>
	</StyledChord>
);

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
