import * as THREE from 'three';
import { useRef, useState } from 'react';
import { useFrame, useLoader, Vector3 } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { SphereGeometry } from 'three';
import { mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils';
import { useSpring, animated } from '@react-spring/three';

const Sphere = ({ position }: { position: Vector3 }) => {
	const [active, setActive] = useState(false);
	const ref = useRef<THREE.Points>(null!);
	const pointTexture = useLoader(TextureLoader, '/img/disc.png');
	const colorTexture = useLoader(TextureLoader, '/img/map.jpg');
	const material = new THREE.MeshBasicMaterial();
	material.map = colorTexture;

	useFrame((state, delta) => {
		// Rotation is in radians
		ref.current.rotation.y -= 0.001;
		// Rotate 20 degrees cw
		ref.current.rotation.x = (20 * Math.PI) / 180;
		ref.current.rotation.z = (-10 * Math.PI) / 180;
	});

	const { scale } = useSpring({ scale: active ? 0.05 : 1 });

	let sphere = new SphereGeometry(45);
	sphere.deleteAttribute('normal');
	sphere.deleteAttribute('uv');
	sphere = mergeVertices(sphere) as SphereGeometry;
	const pSize = 5;

	const spherePosition = sphere.getAttribute('position');
	let sizes: number[] | THREE.Float32BufferAttribute = [];
	let colors: number[] | THREE.Float32BufferAttribute = [];

	for (let i = 0, l = spherePosition.count; i < l; i++) {
		const color = new THREE.Color();
		color.setHSL(0.01 + 0.1 * (i / l), 1.0, 1);
		color.toArray(colors, i * 3);
		sizes[i] = pSize * 0.5;
	}
	colors = new THREE.Float32BufferAttribute(colors, 3);
	sizes = new THREE.Float32BufferAttribute(sizes, 1);

	return (
		<animated.points
			scale={scale}
			position={position}
			ref={ref}
			onClick={() => setActive((prev) => !prev)}
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
		</animated.points>
	);
};

export default Sphere;
