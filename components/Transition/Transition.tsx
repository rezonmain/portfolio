import { motion } from 'framer-motion';

const Transition = ({ children }: { children: JSX.Element }) => {
	return (
		<motion.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			{children}
		</motion.main>
	);
};

export default Transition;
