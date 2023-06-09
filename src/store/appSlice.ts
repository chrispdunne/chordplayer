import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../app/store"
import { Id } from "./sectionsSlice"

export type View = "main" | "editApp" | "editSection" | "editChord"

export type Mode = "edit" | "play"
export interface AppState {
  mode: Mode
  view: View
  activeSection: Id | null
  activeChord: Id | null
}

const initialState: AppState = {
  mode: "edit",
  view: "main",
  activeSection: null,
  activeChord: null,
}

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<Mode>) => {
      state.mode = action.payload
    },
    setView: (state, action: PayloadAction<View>) => {
      state.view = action.payload
    },
    setActiveSection: (state, action: PayloadAction<Id | null>) => {
      state.activeSection = action.payload
    },
    setActiveChord: (state, action: PayloadAction<Id | null>) => {
      state.activeChord = action.payload
    },
  },
})

export const { setMode, setView, setActiveSection, setActiveChord } =
  appSlice.actions

export default appSlice.reducer

export const selectView = (state: RootState) => state.app.view
export const selectMode = (state: RootState) => state.app.mode
export const selectActiveChord = (state: RootState) => state.app.activeChord
export const selectActiveSection = (state: RootState) => state.app.activeSection
