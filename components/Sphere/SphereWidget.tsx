import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { Suspense, useRef } from 'react';
import { useFrame, useLoader, Vector3 } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { SphereGeometry } from 'three';
import { mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils';
import { a, useSpring } from '@react-spring/three';

const SphereWidget = () => {
	return (
		<div id='canvas-container' className='aspect-square'>
			<Canvas camera={{ fov: 45, near: 0.1, far: 1000, position: [0, 0, 122] }}>
				<ambientLight intensity={100} />
				<Suspense fallback={null}>
					<Sphere position={[0, 0, 0]} />
				</Suspense>
			</Canvas>
		</div>
	);
};

const Sphere = ({ position }: { position: Vector3 }) => {
	const ref = useRef<THREE.Points>(null!);
	const time = useRef(0);
	const pointTexture = useLoader(TextureLoader, '/img/disc.png');

	useFrame((state, delta) => {
		// Rotation is in radians
		time.current += delta;
		let rotVel = 0.03 - 0.005 * time.current;
		rotVel = rotVel <= 0.002 ? 0.002 : rotVel;
		ref.current.rotation.y -= rotVel;
	});

	let sphere = new SphereGeometry(45);
	sphere.deleteAttribute('normal');
	sphere.deleteAttribute('uv');
	sphere = mergeVertices(sphere) as SphereGeometry;
	const pSize = 4;

	const spherePosition = sphere.getAttribute('position');
	let sizes: number[] | THREE.Float32BufferAttribute = [];
	let colors: number[] | THREE.Float32BufferAttribute = [];

	for (let i = 0, l = spherePosition.count; i < l; i++) {
		const color = new THREE.Color();
		color.setHex(0xffffff);
		color.toArray(colors, i * 3);
		sizes[i] = pSize * 0.5;
	}
	colors = new THREE.Float32BufferAttribute(colors, 3);
	sizes = new THREE.Float32BufferAttribute(sizes, 1);

	const { scale } = useSpring({
		to: { scale: 0.95 },
		from: { scale: 0.05 },
		delay: 700,
		config: {
			tension: 175,
			mass: 2,
		},
	});

	return (
		<a.points
			position={position}
			ref={ref}
			scale={scale}
			rotation-x={(10 * Math.PI) / 180}
			rotation-z={(-15 * Math.PI) / 180}
		>
			<bufferGeometry>
				<bufferAttribute
					attach='attributes-position'
					count={spherePosition.count}
					array={spherePosition.array}
					itemSize={3}
				/>
				<bufferAttribute
					attach='attributes-size'
					array={sizes.array}
					itemSize={1}
				/>
				<bufferAttribute
					attach='attributes-customColor'
					array={colors.array}
					count={colors.count}
					itemSize={3}
				/>
			</bufferGeometry>
			<shaderMaterial
				uniforms={{
					color: { value: new THREE.Color(0xffffff) },
					pointTexture: { value: pointTexture },
					alphaTest: { value: 0.9 },
				}}
				vertexShader={`
				attribute float size;
				attribute vec3 customColor;
				varying vec3 vColor;
				void main() {
					vColor = customColor;
					vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
					gl_PointSize = size * (300.0 / -mvPosition.z);
					gl_Position = projectionMatrix * mvPosition;
				}`}
				fragmentShader={`
				uniform vec3 color;
				uniform sampler2D pointTexture;
				uniform float alphaTest;
				varying vec3 vColor;
				void main() {
						gl_FragColor = vec4( color * vColor, 1.0 );
						gl_FragColor = gl_FragColor * texture2D( pointTexture, gl_PointCoord );
						if ( gl_FragColor.a < alphaTest ) discard;
					}`}
			/>
		</a.points>
	);
};

export default SphereWidget;
