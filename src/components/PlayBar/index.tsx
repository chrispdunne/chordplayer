import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import { selectMode, setActiveChord, setMode } from '../../store/appSlice';
import { OtherButtons, PlayButton, StyledPlayBar } from './styles';
import * as Tone from 'tone';
import { playChords } from '../../utils/playChords';
import { Id } from '../../types';
import PlayIcon from '../Icons/PlayIcon';
import PauseIcon from '../Icons/PauseIcon';
import { selectSections } from '../../store/sectionsSlice';
import BpmEdit from './BpmEdit';
import TimeSignatureEdit from './TimeSignatureEdit';

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
			synth.volume.value = -99;
			Tone.Transport.cancel();
			Tone.Transport.stop();
			synth.releaseAll();
			setCurrentChord(null);
		} else {
			synth.volume.value = 0;
			synth.releaseAll();
			console.log({ vol: synth.volume.value });
			// PLAY
			playChords(synth, sections, setCurrentChord);
			Tone.Transport.start();
		}
	};
	return (
		<StyledPlayBar className="play-bar">
			<PlayButton onClick={handlePlay} disabled={isDisabled}>
				{isPlaying ? <PauseIcon /> : <PlayIcon />}
			</PlayButton>
			<OtherButtons>
				<BpmEdit />
				<TimeSignatureEdit />
			</OtherButtons>
		</StyledPlayBar>
	);
}
