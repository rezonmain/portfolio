import { motion } from 'framer-motion';

const Transition = ({ children }: { children: JSX.Element }) => {
	return (
		<motion.div
			id='page-transition-wrapper'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			{children}
		</motion.div>
	);
};

export default Transition;
