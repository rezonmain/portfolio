import {
	motion,
	useReducedMotion,
	useScroll,
	useSpring,
	useTransform,
} from 'framer-motion';
import { useState, useRef, useLayoutEffect } from 'react';

const Parallax = ({
	children,
	offset = 50,
}: {
	children: JSX.Element;
	offset?: number;
}) => {
	const prefersReducedMotion = useReducedMotion();
	const [elementTop, setElementTop] = useState(0);
	const [clientHeight, setClientHeight] = useState(0);
	const ref = useRef<HTMLDivElement | null>(null);

	const { scrollY } = useScroll();

	// start animating our element when we've scrolled it into view
	const initial = elementTop - clientHeight;
	// end our animation when we've scrolled the offset specified
	const final = elementTop + offset;

	const yRange = useTransform(scrollY, [initial, final], [offset, -offset]);
	// apply a spring to ease the result
	const y = useSpring(yRange, { stiffness: 400, damping: 90 });

	useLayoutEffect(() => {
		const element = ref.current;
		// save our layout measurements in a function in order to trigger
		// it both on mount and on resize
		const onResize = () => {
			// use getBoundingClientRect instead of offsetTop in order to
			// get the offset relative to the viewport
			if (element) {
				setElementTop(
					element.getBoundingClientRect().top + window.scrollY ||
						window.pageYOffset
				);
			}
			setClientHeight(window.innerHeight);
		};
		onResize();
		window.addEventListener('resize', onResize);
		return () => window.removeEventListener('resize', onResize);
	}, [ref]);

	if (prefersReducedMotion) {
		return <>{children}</>;
	}

	return (
		<motion.div ref={ref} style={{ y }}>
			{children}
		</motion.div>
	);
};

export default Parallax;
