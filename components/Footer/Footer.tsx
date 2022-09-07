import { motion } from 'framer-motion';

const Footer = () => {
	return (
		<motion.footer
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className='text-center'
		>
			<small>&copy; 2022 made with 💝 by rezonmain</small>
		</motion.footer>
	);
};

export default Footer;
