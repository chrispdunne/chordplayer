import { useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalFoot,
	ModalHead,
	NumberInput,
	SaveButton
} from '../../app/styles';
import { selectActiveSection, selectView, setView } from '../../store/appSlice';
import { useDispatch } from 'react-redux';
import { updateSection } from '../../store/sectionsSlice';
import { addSection } from '../../store/sectionsSlice';

export default function EditSection() {
	const dispatch = useDispatch();

	const closeModal = () => {
		dispatch(setView('main'));
	};

	const isVisible = useAppSelector(selectView) === 'editSection';
	const activeSectionId = useAppSelector(selectActiveSection);
	const [repeatCount, setRepeatCount] = useState(1);

	const handleSaveSection = () => {
		dispatch(
			activeSectionId
				? updateSection({ id: activeSectionId, repeatCount })
				: addSection({ id: Date.now(), repeatCount, chords: [] })
		);
		dispatch(setView('main'));
	};
	return isVisible ? (
		<Modal>
			<ModalCloseButton
				onClick={closeModal}
				title="close this modal popup"
				aria-label="close this modal poup"
			/>
			<ModalHead>{activeSectionId ? 'Edit' : 'Add'} Section</ModalHead>
			<ModalBody>
				Repeat section{' '}
				<NumberInput
					min={1}
					max={99}
					value={repeatCount}
					onChange={e => setRepeatCount(e.target.valueAsNumber)}
				/>{' '}
				time{repeatCount > 1 && 's'}
			</ModalBody>
			<ModalFoot>
				<SaveButton onClick={handleSaveSection}>
					{activeSectionId ? 'Edit' : 'Add'} Section
				</SaveButton>
			</ModalFoot>
		</Modal>
	) : null;
}
