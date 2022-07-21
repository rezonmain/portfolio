import * as THREE from 'three';
import { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

const Sphere = (props: JSX.IntrinsicElements['mesh']) => {
	const ref = useRef<THREE.Mesh>(null!);
	const colorMap = useLoader(TextureLoader, '/img/map.jpg');

	useFrame((state, delta) => {
		ref.current.rotation.y -= 0.002;
		ref.current.rotation.x = 0.3;
	});

	return (
		<mesh {...props} ref={ref}>
			<sphereGeometry />
			<meshStandardMaterial map={colorMap} />
		</mesh>
	);
};

export default Sphere;
