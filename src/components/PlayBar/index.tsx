import { useDispatch } from "react-redux"
import { useAppSelector } from "../../app/hooks"
import { selectMode, setMode } from "../../store/appSlice"
import { StyledPlayBar } from "./styles"
import * as Tone from "tone"
import { createChordListForToneJs } from "../../utils/createChordListForTone"

// create synth once
const synth = new Tone.PolySynth(Tone.Synth).toDestination()
let scheduledEventIds: number[] = []

export default function PlayBar() {
  const dispatch = useDispatch()
  const isPlaying = useAppSelector(selectMode) === "play"
  const sections = useAppSelector((state) => state.sections)

  const handlePlay = () => {
    dispatch(setMode(isPlaying ? "edit" : "play"))

    if (isPlaying) {
      // STOP
      scheduledEventIds.forEach((scheduledEventId) =>
        Tone.Transport.clear(scheduledEventId),
      )
      scheduledEventIds = []
      Tone.Transport.stop() //.pause()?
      synth.releaseAll()
    } else {
      synth.releaseAll()

      // PLAY
      Tone.Transport.bpm.value = 120

      scheduledEventIds = createChordListForToneJs(synth, sections)
      Tone.Transport.start()
    }
  }
  return (
    <StyledPlayBar className="play-bar">
      <button onClick={handlePlay}>{isPlaying ? "||" : "|>"}</button>
    </StyledPlayBar>
  )
}
