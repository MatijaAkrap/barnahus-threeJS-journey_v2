import { useMobileOrientation } from 'react-device-detect';
import PortraitWarningIcon from './../Images/PortraitWarningIcon.svg';

const PortraitWarning = () => {
	const { isPortrait } = useMobileOrientation();

	return (
		<div className={`portrait-warning-container ${isPortrait ? 'show' : 'hide'}`}>
			<label>To use expirence please turn your phone to lanscape mode</label>
			<img src={PortraitWarningIcon} alt='React Logo' />
		</div>
	);
};

export default PortraitWarning;
