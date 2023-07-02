import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import { selectView, setView } from '../../store/appSlice';
import ClickOutside from '../ClickOutside';
import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalFoot,
	ModalHead,
	ProButton
} from '../../app/styles';
import DeleteButton from '../Buttons/DeleteButton';
import { clearAll } from '../../store/sectionsSlice';
import useHasNoSections from '../../hooks/useHasNoSections';

export default function EditApp() {
	const dispatch = useDispatch();
	const hasSections = !useHasNoSections();
	const isVisible = useAppSelector(selectView) === 'editApp';

	const closeModal = () => {
		dispatch(setView('main'));
	};
	const handleDeleteAll = () => {
		dispatch(clearAll());
		closeModal();
	};
	return isVisible ? (
		<ClickOutside onClickOutside={closeModal}>
			<Modal>
				<ModalCloseButton
					onClick={closeModal}
					title="close this modal popup"
					aria-label="close this modal poup"
				/>
				<div>
					<ModalHead>Options</ModalHead>
					<ModalBody>
						{hasSections && (
							<DeleteButton
								confirmMessage="Are you sure you want to delete all sections and chords?"
								onClick={handleDeleteAll}
								title="Delete all sections and chords"
								aria-label="Delete all sections and chords"
							>
								Clear all chords
							</DeleteButton>
						)}
						<ProButton>Load</ProButton>
						<ProButton>Save</ProButton>
						<ProButton>Chord Options</ProButton>
						<ProButton>Drums</ProButton>
						<ProButton>Click</ProButton>
					</ModalBody>
				</div>

				<ModalFoot>
					{/* <SaveButton onClick={handleSaveChord}>
					 
					</SaveButton> */}
				</ModalFoot>
			</Modal>
		</ClickOutside>
	) : null;
}
