import { useCallback, useEffect } from 'react';
import './App.css';
import ChordSections from './components/ChordSections';
import Header from './components/Header';
import PlayBar from './components/PlayBar';
import { useAppSelector } from './app/hooks';
import { selectInit } from './store/appSlice';
import { useDispatch } from 'react-redux';
import { init } from './store/appSlice';
import * as Tone from 'tone';

function App() {
	const isInit = useAppSelector(selectInit);

	const dispatch = useDispatch();
	const handleInitClick = useCallback(() => {
		if (isInit) return;
		dispatch(init());
		Tone.start();
	}, [dispatch, isInit]);
	useEffect(() => {
		window.addEventListener('click', handleInitClick);
		return () => window.removeEventListener('click', handleInitClick);
	}, [handleInitClick]);
	return (
		<div className="App">
			<Header />
			<ChordSections />
			<PlayBar />
		</div>
	);
}

export default App;
