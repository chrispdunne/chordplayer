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
	const sectionRef = useRef(null);
	const observerOptions = useMemo(
		() => ({
			root: sectionRef.current,
			rootMargin: '0px',
			threshold: 1.0
		}),
		[]
	);
	const callback = (
		entries: IntersectionObserverEntry[],
		obs: IntersectionObserver
	) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				console.log({ entry });
				console.log('section is intersecting');
			}
		});
	};

	const observer = new IntersectionObserver(callback, observerOptions);

	const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		const draggedChordId = e.dataTransfer.getData('chordId');
		const draggedChord = document.getElementById(draggedChordId);
		if (sectionRef.current && draggedChord) {
			observer.observe(draggedChord);
		}
	};

	const handleDrop = (e: DragEvent<HTMLDivElement>) => {
		console.log('drop');
		e.preventDefault();
		const draggedChordId = e.dataTransfer.getData('chordId');
	};

	return (
		<StyledSection
			ref={sectionRef}
			onDragOver={handleDragOver}
			onDrop={handleDrop}
		>
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
