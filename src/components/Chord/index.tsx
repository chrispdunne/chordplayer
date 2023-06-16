import { useAppSelector } from '../../app/hooks';
import { selectActiveChord } from '../../store/appSlice';
import { Chord as ChordType, KeyEnum } from '../../types';
import { ChordLength, ChordName, StyledChord } from './styles';

export default function Chord({ chord }: { chord: ChordType }) {
	const activeChordId = useAppSelector(selectActiveChord);
	return (
		<StyledChord active={activeChordId === chord.id}>
			<ChordName>
				{KeyEnum[chord.key]} {chord.flavour}
			</ChordName>
			{/* <ChordLength> {chord.length}</ChordLength> */}
		</StyledChord>
	);
}
