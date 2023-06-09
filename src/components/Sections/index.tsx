import { useAppSelector } from "../../app/hooks"
import { selectSections } from "../../store/sectionsSlice"
import AddChordButton from "../Buttons/AddChordButton"
import Chord from "../Chord"
import { Loops, StyledSection } from "./styles"

export default function Sections() {
  const sections = useAppSelector(selectSections)
  return (
    <>
      {sections.map((section) => (
        <StyledSection key={section.id}>
          <Loops>Repeat: {section.repeatCount} times</Loops>
          {section.chords.map((chord) => (
            <Chord chord={chord} />
          ))}
          <AddChordButton sectionId={section.id} />
        </StyledSection>
      ))}
    </>
  )
}
