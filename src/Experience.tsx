import { OrbitControls, OrthographicCamera } from '@react-three/drei';
import { Suspense, useEffect, useState } from 'react';
import Scene from './models/Scene';
import { isMobile } from 'react-device-detect';
import { Perf } from 'r3f-perf';

const Experience = () => {
	const [cameraZoom, setCameraZoom] = useState<number>(window.innerHeight / (isMobile ? 5.5 : 6.5));

	const controlsProps = {
		maxPolarAngle: Math.PI / 2,
		minAzimuthAngle: -Math.PI / 2000,
		maxAzimuthAngle: Math.PI / 2
	};
	const handleResize = () => {
		setCameraZoom(window.innerHeight / (isMobile ? 5.5 : 6.5));
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<>
			{/* <Perf position='top-left' /> */}
			<OrthographicCamera makeDefault zoom={cameraZoom} position={[3, 2.5, 4]} near={2} far={12} />
			<OrbitControls makeDefault {...controlsProps} />
			<ambientLight intensity={0.4} />
			<directionalLight
				castShadow
				position={[7, 5, 6]}
				intensity={0.5}
				shadow-mapSize-width={512}
				shadow-mapSize-height={512}
				shadow-camera-near={1}
				shadow-camera-far={20}
				shadow-camera-top={12}
				shadow-camera-bottom={-12}
				shadow-camera-left={-12}
				shadow-camera-right={12}
			/>
			<Suspense fallback={null}>
				<Scene />
			</Suspense>
		</>
	);
};

export default Experience;
