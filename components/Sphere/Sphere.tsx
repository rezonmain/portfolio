import * as THREE from 'three';
import { RefObject, useRef, useState } from 'react';
import { useFrame, useLoader, Vector3 } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { useGesture } from '@use-gesture/react';

const Sphere = ({
	position,
	target,
}: {
	position: Vector3;
	target: RefObject<HTMLDivElement>;
}) => {
	const ref = useRef<THREE.Mesh>(null!);
	const colorMap = useLoader(TextureLoader, '/img/map.jpg');
	const wheelOffset = useRef(0);

	useGesture(
		{
			onWheel: ({ event, offset: [, y], direction: [, dy] }) => {
				event.preventDefault();
				wheelOffset.current = y / 50;
			},

			onDrag: ({ event, offset: [, y], direction: [, dy] }) => {
				event.preventDefault();
				wheelOffset.current = y / 5;
			},
		},
		{ target, wheel: { eventOptions: { passive: false } } }
	);

	useFrame((state, delta) => {
		// Rotation is in radians
		ref.current.rotation.y = -(wheelOffset.current * Math.PI) / 180;
		ref.current.rotation.y += 0.01;
		// Rotate 20 degrees cw
		ref.current.rotation.x = (20 * Math.PI) / 180;
	});

	return (
		<mesh position={position} ref={ref}>
			<sphereGeometry />
			<meshStandardMaterial map={colorMap} />
		</mesh>
	);
};

export default Sphere;
