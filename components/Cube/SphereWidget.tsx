import { Canvas } from '@react-three/fiber';
import Sphere from './Sphere';

const SphereWidget = () => {
	return (
		<Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}>
			<ambientLight intensity={0.5} />
			<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
			<pointLight position={[0, 0, 0]} />
			<Sphere position={[0, 0, 0]} />
		</Canvas>
	);
};

export default SphereWidget;
