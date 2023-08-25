import { Canvas } from '@react-three/fiber';
import ReactDOM from 'react-dom/client';
import PortraitWarning from './components/PortraitWarning';
import CustomLoader from './components/CustomLoader';
import Experience from './Experience';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<>
		<PortraitWarning />
		<CustomLoader />
		<Canvas>{<Experience />}</Canvas>
	</>
);
