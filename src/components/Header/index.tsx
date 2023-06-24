import { useDispatch } from 'react-redux';
import { StyledHeader, NavToggle } from './styles';
import BarsIcon from '../Icons/BarsIcon';
import { setView } from '../../store/appSlice';

export default function Header() {
	const dispatch = useDispatch();

	return (
		<StyledHeader>
			<NavToggle
				title="settings"
				aria-label="settings"
				onClick={() => dispatch(setView('editApp'))}
			>
				<BarsIcon width={20} height={20} />
			</NavToggle>
		</StyledHeader>
	);
}
