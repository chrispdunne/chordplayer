import { Chord as ChordType, KeyEnum } from "../../types"
import { ChordLength, ChordName, StyledChord } from "./styles"

export default function Chord({ chord }: { chord: ChordType }) {
  return (
    <StyledChord>
      <ChordName>
        {KeyEnum[chord.key]} {chord.flavour}
      </ChordName>
      <ChordLength> {chord.length}</ChordLength>
    </StyledChord>
  )
}
