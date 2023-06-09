import { useDispatch } from "react-redux"
import { setActiveSection, setView } from "../../../store/appSlice"
import { Id } from "../../../store/sectionsSlice"

export default function AddChordButton({ sectionId }: { sectionId: Id }) {
  const dispatch = useDispatch()
  const addChord = () => {
    dispatch(setView("editChord"))
    dispatch(setActiveSection(sectionId))
  }
  return (
    <button className="add-chord-button" onClick={addChord}>
      Add Chord
    </button>
  )
}
