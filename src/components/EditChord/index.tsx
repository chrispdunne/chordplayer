import {
	selectActiveChord,
	selectActiveSection,
	selectView,
	setActiveSection,
	setView
} from '../../store/appSlice';
import { useAppSelector } from '../../app/hooks';
import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalFoot,
	ModalHead,
	SaveButton
} from '../../app/styles';
import KeySelect from './KeySelect';
import FlavourSelect from './FlavourSelect';
import LengthInput from './LengthInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addChord, updateChord } from '../../store/sectionsSlice';
import { getFlavourEnumKeys } from '../../types';
import ClickOutside from '../ClickOutside';

const flavours = getFlavourEnumKeys();

export default function EditChord() {
	const dispatch = useDispatch();

	const closeModal = () => {
		dispatch(setView('main'));
		dispatch(setActiveSection(null));
	};
	const sectionId = useAppSelector(selectActiveSection);
	const isVisible =
		useAppSelector(selectView) === 'editChord' && sectionId !== null;
	const activeChordId = useAppSelector(selectActiveChord);

	const [key, setKey] = useState<number>(0);
	const [flavour, setFlavour] = useState<string>(flavours[0]);
	const [length, setLength] = useState(1);

	const handleSaveChord = isVisible
		? () => {
				dispatch(
					activeChordId !== null
						? updateChord({
								sectionId,
								chord: {
									id: activeChordId,
									key,
									flavour,
									length
								}
						  })
						: addChord({
								sectionId,
								chord: { id: Date.now(), key, flavour, length }
						  })
				);
				dispatch(setView('main'));
				dispatch(setActiveSection(null));
		  }
		: undefined;
	return isVisible ? (
		<ClickOutside onClickOutside={closeModal}>
			<Modal>
				<ModalCloseButton
					onClick={closeModal}
					title="close this modal popup"
					aria-label="close this modal poup"
				/>
				<ModalHead>
					{activeChordId !== null ? 'Edit' : 'Add'} Chord
				</ModalHead>

				<ModalBody>
					<KeySelect
						value={String(key)}
						onChange={v => setKey(Number(v))}
					/>
					<FlavourSelect value={flavour} onChange={setFlavour} />
					<LengthInput value={length} onChange={setLength} />
				</ModalBody>

				<ModalFoot>
					<SaveButton onClick={handleSaveChord}>
						{activeChordId !== null ? 'Edit' : 'Add'} Chord
					</SaveButton>
				</ModalFoot>
			</Modal>
		</ClickOutside>
	) : null;
}
