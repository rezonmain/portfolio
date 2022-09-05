import { Canvas } from '@react-three/fiber';
import { useDrag } from '@use-gesture/react';
import { useRef } from 'react';
import Sphere from './Sphere';

const SphereWidget = () => {
	const gestureRef = useRef();
	const bind = useDrag((state) => {
		console.log(state);
	});
	return (
		<div id='canvas-container' className='aspect-square touch-none' {...bind()}>
			<Canvas camera={{ fov: 45, near: 0.1, far: 1000, position: [0, 0, 122] }}>
				<ambientLight intensity={100} />
				<Sphere position={[0, 0, 0]} />
			</Canvas>
		</div>
	);
};

export default SphereWidget;
