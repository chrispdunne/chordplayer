import { useState } from "react"
import { useAppSelector } from "../../app/hooks"
import {
  Modal,
  ModalBody,
  ModalFoot,
  ModalHead,
  SaveButton,
} from "../../app/styles"
import { selectActiveSection, selectView, setView } from "../../store/appSlice"
import { useDispatch } from "react-redux"
import { updateSection } from "../../store/sectionsSlice"
import { addSection } from "../../store/sectionsSlice"

export default function EditSection() {
  const dispatch = useDispatch()

  const isVisible = useAppSelector(selectView) === "editSection"
  const activeSectionId = useAppSelector(selectActiveSection)
  const [repeatCount, setRepeatCount] = useState(1)

  const handleSaveSection = () => {
    dispatch(
      activeSectionId
        ? updateSection({ id: activeSectionId, repeatCount })
        : addSection({ id: Date.now(), repeatCount, chords: [] }),
    )
    dispatch(setView("main"))
  }
  return isVisible ? (
    <Modal>
      <ModalHead>{activeSectionId ? "Edit" : "Add"} Section</ModalHead>
      <ModalBody>
        Repeat section{" "}
        <input
          type="number"
          min={1}
          max={99}
          value={repeatCount}
          onChange={(e) => setRepeatCount(e.target.valueAsNumber)}
        />{" "}
        times
      </ModalBody>
      <ModalFoot>
        <SaveButton onClick={handleSaveSection}>
          {activeSectionId ? "Edit" : "Add"} Section
        </SaveButton>
      </ModalFoot>
    </Modal>
  ) : null
}
