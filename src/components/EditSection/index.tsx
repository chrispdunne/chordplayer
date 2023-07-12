import { useEffect, useRef, useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import {
	AddOn,
	AddOnInput,
	AddOnInputContainer,
	Label,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalFoot,
	ModalHead,
	SaveButton
} from '../../app/styles';
import {
	selectActiveSection,
	selectActiveSectionId,
	selectView,
	setView
} from '../../store/appSlice';
import { useDispatch } from 'react-redux';
import { updateSection } from '../../store/sectionsSlice';
import { addSection } from '../../store/sectionsSlice';
import DeleteSection from './DeleteSection';
import useStateUpdater from '../../hooks/useStateUpdater';

export default function EditSection() {
	const dispatch = useDispatch();

	const closeModal = () => {
		dispatch(setView('main'));
	};

	const isVisible = useAppSelector(selectView) === 'editSection';
	const activeSectionId = useAppSelector(selectActiveSectionId);
	const activeSection = useAppSelector(selectActiveSection);

	const saveRef = useRef<HTMLButtonElement>(null);
	// state
	const [repeatCount, _setRepeatCount] = useState(1);
	const setRepeatCount = useStateUpdater(_setRepeatCount, saveRef?.current);

	const handleSaveSection = () => {
		dispatch(
			activeSectionId
				? updateSection({ id: activeSectionId, repeatCount })
				: addSection({ id: Date.now(), repeatCount, chords: [] })
		);
		dispatch(setView('main'));
	};

	// when first loading, if editing existing section, load section data
	useEffect(() => {
		if (isVisible && activeSection !== null) {
			console.log('LOADING EXISTING SECTION DATA');
			setRepeatCount(activeSection.repeatCount);
		}
	}, [isVisible, activeSection, setRepeatCount]);
	return isVisible ? (
		<Modal>
			<ModalCloseButton
				onClick={closeModal}
				title="close this modal popup"
				aria-label="close this modal poup"
			/>
			<div>
				<ModalHead>
					{activeSectionId ? 'Edit' : 'Add'} Section
				</ModalHead>
				<ModalBody>
					<Label>Repeat section</Label>
					<AddOnInputContainer>
						<AddOnInput
							type="number"
							min={1}
							max={99}
							value={repeatCount}
							onChange={e =>
								setRepeatCount(e.target.valueAsNumber)
							}
						/>
						<AddOn>time{repeatCount > 1 && 's'}</AddOn>
					</AddOnInputContainer>
					<DeleteSection />
				</ModalBody>
			</div>
			<ModalFoot>
				<SaveButton ref={saveRef} onClick={handleSaveSection}>
					{activeSectionId ? 'Save' : 'Add'} Section
				</SaveButton>
			</ModalFoot>
		</Modal>
	) : null;
}
