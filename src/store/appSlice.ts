import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { Id } from '../types';

export type View = 'main' | 'editApp' | 'editSection' | 'editChord';

export type Mode = 'edit' | 'play';
export interface AppState {
	mode: Mode;
	view: View;
	init: boolean;
	activeSection: Id | null;
	activeChord: Id | null;
	bpm: number;
	timeSignature: number;
}

const initialState: AppState = {
	mode: 'edit',
	view: 'main',
	init: false,
	activeSection: null,
	activeChord: null,
	bpm: 120,
	timeSignature: 4
};

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setMode: (state, action: PayloadAction<Mode>) => {
			state.mode = action.payload;
		},
		setView: (state, action: PayloadAction<View>) => {
			state.view = action.payload;
		},
		init: state => {
			state.init = true;
		},
		setActiveSection: (state, action: PayloadAction<Id | null>) => {
			state.activeSection = action.payload;
		},
		setActiveChord: (state, action: PayloadAction<Id | null>) => {
			state.activeChord = action.payload;
		},
		setBpm: (state, action: PayloadAction<number>) => {
			state.bpm = action.payload;
		},
		setTimeSignature: (state, action: PayloadAction<number>) => {
			state.timeSignature = action.payload;
		}
	}
});

export const {
	setMode,
	setView,
	init,
	setActiveSection,
	setActiveChord,
	setBpm,
	setTimeSignature
} = appSlice.actions;

export default appSlice.reducer;

export const selectView = (state: RootState) => state.app.view;
export const selectMode = (state: RootState) => state.app.mode;
export const selectInit = (state: RootState) => state.app.init;
export const selectActiveChord = (state: RootState) => state.app.activeChord;
export const selectActiveSection = (state: RootState) =>
	state.app.activeSection;
export const selectBpm = (state: RootState) => state.app.bpm;
export const selectTimeSignature = (state: RootState) =>
	state.app.timeSignature;
