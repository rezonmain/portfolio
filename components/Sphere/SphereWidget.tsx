import { Canvas } from '@react-three/fiber';
import { useWheel } from '@use-gesture/react';
import { RefObject, useRef } from 'react';
import Sphere from './Sphere';

const SphereWidget = () => {
	const target = useRef() as RefObject<HTMLDivElement>;
	return (
		<div ref={target} id='canvas-container' className='w-full h-full'>
			<Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}>
				<ambientLight intensity={0.05} />
				<spotLight position={[10, 10, 10]} angle={0.1} penumbra={1} />
				<pointLight position={[0, 0, 0]} />
				<Sphere position={[0, 0, 0]} target={target} />
			</Canvas>
		</div>
	);
};

export default SphereWidget;
