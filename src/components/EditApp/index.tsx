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
	SaveButton
} from '../../app/styles';
import DeleteButton from '../Buttons/DeleteButton';
import { clearAll } from '../../store/sectionsSlice';

export default function EditApp() {
	const dispatch = useDispatch();
	const isVisible = useAppSelector(selectView) === 'editApp';

	const closeModal = () => {
		dispatch(setView('main'));
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
						<DeleteButton
							confirmMessage="Are you sure you want to delete all sections and chords?"
							onClick={() => dispatch(clearAll())}
							title="Delete all sections and chords"
							aria-label="Delete all sections and chords"
						>
							Clear all chords
						</DeleteButton>
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
