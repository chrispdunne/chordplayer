import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import { selectMode, setActiveChord, setMode } from '../../store/appSlice';
import { OtherButtons, PlayButton, StyledPlayBar } from './styles';
import * as Tone from 'tone';
import { playChords } from '../../utils/playChords';
import { Id } from '../../types';
import NoteIcon from '../Icons/NoteIcon';
import MetronomeIcon from '../Icons/MetronomeIcon';
import PlayIcon from '../Icons/PlayIcon';

// create synth once
const synth = new Tone.PolySynth(Tone.Synth).toDestination();

export default function PlayBar() {
	const dispatch = useDispatch();
	const isPlaying = useAppSelector(selectMode) === 'play';
	const sections = useAppSelector(state => state.sections);
	const setCurrentChord = (chordId: Id) => dispatch(setActiveChord(chordId));
	const handlePlay = () => {
		dispatch(setMode(isPlaying ? 'edit' : 'play'));

		if (isPlaying) {
			// STOP

			Tone.Transport.cancel();
			Tone.Transport.stop(); //.pause()?
			synth.releaseAll();
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
			<PlayButton onClick={handlePlay}>
				{isPlaying ? '||' : <PlayIcon />}
			</PlayButton>
			<OtherButtons>
				<div>
					<NoteIcon /> 120bpm
				</div>
				<div>
					<MetronomeIcon /> 3/4
				</div>
			</OtherButtons>
		</StyledPlayBar>
	);
}
