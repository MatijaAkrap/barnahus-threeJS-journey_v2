import { OrbitControls, OrthographicCamera } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import { Suspense, useEffect, useState } from 'react';
import Scene from './models/Scene';
import { isMobile } from 'react-device-detect';

const Experience = () => {
	// const [enebleControls, setEnebleControls] = useState<boolean>(false);
	const [cameraZoom, setCameraZoom] = useState<number>(window.innerHeight / (isMobile ? 6 : 7));

	const controlsProps = {
		maxPolarAngle: Math.PI / 2,
		minAzimuthAngle: -Math.PI / 2000,
		maxAzimuthAngle: Math.PI / 2
	};
	const handleResize = () => {
		setCameraZoom(window.innerHeight / (isMobile ? 6 : 7));
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<>
			<Perf position='top-left' />
			<OrthographicCamera makeDefault zoom={cameraZoom} position={[3, 2.5, 4]} near={2} far={12} />
			<OrbitControls makeDefault {...controlsProps} />
			<Suspense fallback={null}>
				<Scene />
			</Suspense>
		</>
	);
};

export default Experience;
