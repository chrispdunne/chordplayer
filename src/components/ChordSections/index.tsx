import AddSectionButton from "../Buttons/AddSectionButton"
import EditApp from "../EditApp"
import EditChord from "../EditChord"
import EditSection from "../EditSection"
import Sections from "../Sections"

export default function ChordSections() {
  return (
    <div className="chords">
      <EditApp />
      <EditSection />
      <EditChord />
      <Sections />
      <AddSectionButton />
    </div>
  )
}
