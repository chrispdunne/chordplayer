import {
  selectActiveChord,
  selectActiveSection,
  selectView,
  setActiveSection,
  setView,
} from "../../store/appSlice"
import { useAppSelector } from "../../app/hooks"
import {
  Modal,
  ModalBody,
  ModalFoot,
  ModalHead,
  SaveButton,
} from "../../app/styles"
import KeySelect from "./KeySelect"
import FlavourSelect from "./FlavourSelect"
import LengthInput from "./LengthInput"
import { useState } from "react"
import { flavours, keys } from "../../const/keys"
import { useDispatch } from "react-redux"
import { addChord, updateChord } from "../../store/sectionsSlice"

export default function EditChord() {
  const dispatch = useDispatch()

  const sectionId = useAppSelector(selectActiveSection)
  const isVisible =
    useAppSelector(selectView) === "editChord" && sectionId !== null
  const activeChordId = useAppSelector(selectActiveChord)

  const [key, setKey] = useState(keys[0])
  const [flavour, setFlavour] = useState(flavours[0])
  const [length, setLength] = useState(1)

  const handleSaveChord = isVisible
    ? () => {
        dispatch(
          activeChordId !== null
            ? updateChord({
                sectionId,
                chord: { id: activeChordId, key, flavour, length },
              })
            : addChord({
                sectionId,
                chord: { id: Date.now(), key, flavour, length },
              }),
        )
        dispatch(setView("main"))
        dispatch(setActiveSection(null))
      }
    : undefined
  return isVisible ? (
    <Modal>
      <ModalHead>{activeChordId !== null ? "Edit" : "Add"} Chord</ModalHead>

      <ModalBody>
        <KeySelect value={key} onChange={setKey} />
        <FlavourSelect value={flavour} onChange={setFlavour} />
        <LengthInput value={length} onChange={setLength} />
      </ModalBody>

      <ModalFoot>
        <SaveButton onClick={handleSaveChord}>
          {activeChordId !== null ? "Edit" : "Add"} Chord
        </SaveButton>
      </ModalFoot>
    </Modal>
  ) : null
}
