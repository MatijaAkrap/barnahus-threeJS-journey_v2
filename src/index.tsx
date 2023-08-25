import { Canvas } from '@react-three/fiber';
import React from 'react';
import ReactDOM from 'react-dom/client';
import PortraitWarning from './components/PortraitWarning';
import Experience from './Experience';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<PortraitWarning />
		<Canvas>{<Experience />}</Canvas>
	</React.StrictMode>
);
