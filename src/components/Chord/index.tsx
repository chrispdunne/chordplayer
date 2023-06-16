import { useAppSelector } from '../../app/hooks';
import { selectActiveChord } from '../../store/appSlice';
import { Chord as ChordType, KeyEnum } from '../../types';
import { ChordName, StyledChord } from './styles';

interface Props {
	chord: ChordType;
	chordMeasureIndex: number;
}

export default function Chord({ chord, chordMeasureIndex }: Props) {
	const activeChordId = useAppSelector(selectActiveChord);
	return (
		<StyledChord active={activeChordId === chord.id} length={chord.length}>
			<ChordName>
				({chordMeasureIndex}){KeyEnum[chord.key]} {chord.flavour}
			</ChordName>
		</StyledChord>
	);
}
