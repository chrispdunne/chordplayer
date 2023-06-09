import { useDispatch } from "react-redux"
import { setView } from "../../../store/appSlice"

export default function AddSectionButton() {
  const dispatch = useDispatch()
  const addSection = () => {
    dispatch(setView("editSection"))
  }
  return (
    <button className="add-section-button" onClick={addSection}>
      Add Section
    </button>
  )
}
