import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import { selectMode, setMode } from '../../store/appSlice';
import { StyledPlayBar } from './styles';
import * as Tone from 'tone';
import { playChords } from '../../utils/playChords';

// create synth once
const synth = new Tone.PolySynth(Tone.Synth).toDestination();

export default function PlayBar() {
	const dispatch = useDispatch();
	const isPlaying = useAppSelector(selectMode) === 'play';
	const sections = useAppSelector(state => state.sections);

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

			playChords(synth, sections);
			// Tone.Transport.loop = true;
			Tone.Transport.start();
		}
	};
	return (
		<StyledPlayBar className="play-bar">
			<button onClick={handlePlay}>{isPlaying ? '||' : '|>'}</button>
		</StyledPlayBar>
	);
}
