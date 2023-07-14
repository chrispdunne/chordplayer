import { DragEvent, useEffect, useMemo, useRef } from 'react';
import { Section as SectionType } from '../../types';
import AddChordButton from '../Buttons/AddChordButton';
import Chord from '../Chord';
import EditSectionRepeatButton from '../EditSectionRepeatButton';
import { StyledSection } from './styles';

interface Props {
	chordMeasureIndex: number;
	section: SectionType;
}

export default function Section({ chordMeasureIndex, section }: Props) {
	return (
		<StyledSection>
			<EditSectionRepeatButton
				count={section.repeatCount}
				id={section.id}
			/>
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
			<AddChordButton sectionId={section.id} />
		</StyledSection>
	);
}
