import { Chord as ChordType } from "../../store/sectionsSlice"
import { ChordLength, ChordName, StyledChord } from "./styles"

export default function Chord({ chord }: { chord: ChordType }) {
  return (
    <StyledChord>
      <ChordName>
        {chord.key} {chord.flavour}
      </ChordName>
      <ChordLength> {chord.length}</ChordLength>
    </StyledChord>
  )
}
