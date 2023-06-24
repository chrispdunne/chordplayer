import {
	selectActiveChord,
	selectActiveSectionId,
	selectView,
	setActiveChord,
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
import DeleteChord from './DeleteChord';

const flavours = getFlavourEnumKeys();

export default function EditChord() {
	const dispatch = useDispatch();

	const closeModal = () => {
		dispatch(setView('main'));
		dispatch(setActiveSection(null));
		dispatch(setActiveChord(null));
	};
	const sectionId = useAppSelector(selectActiveSectionId);
	const isVisible =
		useAppSelector(selectView) === 'editChord' && sectionId !== null;
	const activeChord = useAppSelector(selectActiveChord);

	const [key, setKey] = useState<number>(activeChord?.key ?? 0);
	const [flavour, setFlavour] = useState<string>(
		activeChord?.flavour ?? flavours[0]
	);
	const [length, setLength] = useState(activeChord?.length ?? 1);

	const isDirty =
		!activeChord ||
		(activeChord &&
			(key !== activeChord.key ||
				flavour !== activeChord.flavour ||
				length !== activeChord.length));

	const handleSaveChord = isVisible
		? () => {
				if (isDirty && activeChord !== null) {
					dispatch(
						updateChord({
							sectionId,
							chord: {
								id: activeChord.id,
								key,
								flavour,
								length
							}
						})
					);
				} else if (isDirty) {
					dispatch(
						addChord({
							sectionId,
							chord: {
								id: Date.now(),
								key,
								flavour,
								length
							}
						})
					);
				}
				dispatch(setView('main'));
				dispatch(setActiveSection(null));
				dispatch(setActiveChord(null));
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
				<div>
					<ModalHead>
						{activeChord !== null ? 'Edit' : 'Add'} Chord
					</ModalHead>

					<ModalBody>
						<KeySelect
							value={String(key)}
							onChange={v => setKey(Number(v))}
						/>
						<FlavourSelect value={flavour} onChange={setFlavour} />
						<LengthInput value={length} onChange={setLength} />
						<DeleteChord />
					</ModalBody>
				</div>

				<ModalFoot>
					<SaveButton onClick={handleSaveChord}>
						{activeChord !== null ? 'Save' : 'Add'} Chord
					</SaveButton>
				</ModalFoot>
			</Modal>
		</ClickOutside>
	) : null;
}
