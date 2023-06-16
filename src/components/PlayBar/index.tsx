import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import { selectMode, setActiveChord, setMode } from '../../store/appSlice';
import { OtherButton, OtherButtons, PlayButton, StyledPlayBar } from './styles';
import * as Tone from 'tone';
import { playChords } from '../../utils/playChords';
import { Id } from '../../types';
import NoteIcon from '../Icons/NoteIcon';
import MetronomeIcon from '../Icons/MetronomeIcon';
import PlayIcon from '../Icons/PlayIcon';
import PauseIcon from '../Icons/PauseIcon';
import { selectSections } from '../../store/sectionsSlice';

// create synth once
const synth = new Tone.PolySynth(Tone.Synth).toDestination();

export default function PlayBar() {
	const dispatch = useDispatch();
	const isPlaying = useAppSelector(selectMode) === 'play';
	const isDisabled =
		useAppSelector(selectSections).length === 0 && !isPlaying;
	const sections = useAppSelector(state => state.sections);
	const setCurrentChord = (chordId: Id | null) =>
		dispatch(setActiveChord(chordId));
	const handlePlay = () => {
		dispatch(setMode(isPlaying ? 'edit' : 'play'));

		if (isPlaying) {
			// STOP

			Tone.Transport.cancel();
			Tone.Transport.stop(); //.pause()?
			synth.releaseAll();
			setCurrentChord(null);
		} else {
			synth.releaseAll();

			// PLAY
			Tone.Transport.bpm.value = 120;

			playChords(synth, sections, setCurrentChord);
			// Tone.Transport.loop = true;
			Tone.Transport.start();
		}
	};
	return (
		<StyledPlayBar className="play-bar">
			<PlayButton onClick={handlePlay} disabled={isDisabled}>
				{isPlaying ? <PauseIcon /> : <PlayIcon />}
			</PlayButton>
			<OtherButtons>
				<OtherButton title="change bpm" aria-label="change bpm">
					<NoteIcon /> 120bpm
				</OtherButton>
				<OtherButton
					title="change time signature"
					aria-label="change time signature"
				>
					<MetronomeIcon /> 3/4
				</OtherButton>
			</OtherButtons>
		</StyledPlayBar>
	);
}
