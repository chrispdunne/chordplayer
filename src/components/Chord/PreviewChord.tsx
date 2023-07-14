import { flavourMap } from '../../const/flavourMap';
import { Chord as ChordType, FlavourEnum, KeyEnum } from '../../types';
import { ChordFlavour, ChordKey, ChordName, StyledChord } from './styles';

interface Props {
	chord?: ChordType;
}

export default function PreviewChord({ chord }: Props) {
	const flavourLabel =
		flavourMap[FlavourEnum[chord?.flavour as keyof typeof FlavourEnum]] ??
		'';
	return (
		<StyledChord active={false} length={chord?.length ?? 1}>
			<ChordName>
				<ChordKey>{KeyEnum[chord?.key ?? 0]}</ChordKey>
				<ChordFlavour>{flavourLabel}</ChordFlavour>
			</ChordName>
		</StyledChord>
	);
}
