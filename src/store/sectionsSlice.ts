import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { Chord, Id, Section } from '../types';
import { saveLocalStorageState } from '../utils/localStorage';

const initialState: Section[] = [];

export const sectionsSlice = createSlice({
	name: 'sections',
	initialState,
	reducers: {
		addSection: (state, action: PayloadAction<Section>) => {
			state.push(action.payload);
			saveLocalStorageState({ sections: state });
		},
		restoreSectionsFromLocalStorage: (
			_,
			action: PayloadAction<Section[]>
		) => action.payload,
		removeSection: (state, action: PayloadAction<Id>) => {
			state = state.filter(section => section.id !== action.payload);
			saveLocalStorageState({ sections: state });
			return state;
		},
		updateSection: (state, action: PayloadAction<Partial<Section>>) => {
			state = state.map(section =>
				section.id === action.payload.id
					? { ...section, ...action.payload }
					: section
			);
			saveLocalStorageState({ sections: state });
			return state;
		},
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
				saveLocalStorageState({ sections: state });
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
				saveLocalStorageState({ sections: state });
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
				saveLocalStorageState({ sections: state });
			}
		},
		swapChords: (
			state,
			action: PayloadAction<{
				sectionId: Id;
				chordOneId: Id;
				chordTwoId: Id;
			}>
		) => {
			const { sectionId, chordOneId, chordTwoId } = action.payload;
			const section = state.find(section => section.id === sectionId);
			if (section) {
				const chordOneIndex = section.chords.findIndex(
					chord => chord.id === chordOneId
				);
				const chordTwoIndex = section.chords.findIndex(
					chord => chord.id === chordTwoId
				);
				[section.chords[chordOneIndex], section.chords[chordTwoIndex]] =
					[
						section.chords[chordTwoIndex],
						section.chords[chordOneIndex]
					];
				saveLocalStorageState({ sections: state });
			}
		},
		clearAll: () => {
			saveLocalStorageState({ sections: initialState });
			return initialState;
		}
	}
});

export const {
	addSection,
	restoreSectionsFromLocalStorage,
	removeSection,
	updateSection,
	addChord,
	removeChord,
	updateChord,
	swapChords,
	clearAll
} = sectionsSlice.actions;

export default sectionsSlice.reducer;

export const selectSections = (state: RootState) => state.sections;
