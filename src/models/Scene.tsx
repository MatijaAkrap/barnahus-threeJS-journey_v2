import { useGLTF } from '@react-three/drei';

const Scene = () => {
	const barnahus: any = useGLTF('./Scene/Barnahus_2.glb');

	barnahus.scene.traverse((obj: any) => {
		obj.castShadow = true;
		obj.receiveShadow = true;
	});

	return <primitive position={[0.5, -1.2, 0]} object={barnahus.scene} />;
};

export default Scene;
