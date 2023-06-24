import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { Chord, Id, Section } from '../types';

const initialState: Section[] = [];

export const sectionsSlice = createSlice({
	name: 'sections',
	initialState,
	reducers: {
		addSection: (state, action: PayloadAction<Section>) => {
			state.push(action.payload);
		},
		removeSection: (state, action: PayloadAction<Id>) => {
			return state.filter(section => section.id !== action.payload);
		},
		updateSection: (state, action: PayloadAction<Partial<Section>>) =>
			state.map(section =>
				section.id === action.payload.id
					? { ...section, ...action.payload }
					: section
			),

		addChord: (
			state,
			action: PayloadAction<{
				sectionId: Id;
				chord: Omit<Chord, 'parentSectionId'>;
			}>
		) => {
			const { sectionId, chord } = action.payload;

			const section = state.find(section => section.id === sectionId);
			if (section) {
				section.chords.push({ ...chord, parentSectionId: sectionId });
			}
		},
		removeChord: (
			state,
			action: PayloadAction<{ sectionId: Id; chordId: Id }>
		) => {
			const { sectionId, chordId } = action.payload;
			const section = state.find(section => section.id === sectionId);
			if (section) {
				section.chords = section.chords.filter(
					chord => chord.id !== chordId
				);
			}
		},
		updateChord: (
			state,
			action: PayloadAction<{
				sectionId: Id;
				chord: Omit<Chord, 'parentSectionId'>;
			}>
		) => {
			const { sectionId, chord } = action.payload;
			const section = state.find(section => section.id === sectionId);
			if (section) {
				section.chords = section.chords.map(oldChord =>
					oldChord.id === chord.id
						? { ...chord, parentSectionId: sectionId }
						: oldChord
				);
			}
		},
		clearAll: () => initialState
	}
});

export const {
	addSection,
	removeSection,
	updateSection,
	addChord,
	removeChord,
	updateChord,
	clearAll
} = sectionsSlice.actions;

export default sectionsSlice.reducer;

export const selectSections = (state: RootState) => state.sections;
