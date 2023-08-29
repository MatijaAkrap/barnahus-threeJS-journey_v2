import { useGLTF } from '@react-three/drei';

const Scene = () => {
	const barnahus = useGLTF('./Scene/Barnahus.glb');

	return <primitive position={[0.5, -1.2, 0]} object={barnahus.scene} />;
};

export default Scene;
