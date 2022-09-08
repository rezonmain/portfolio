import { motion } from 'framer-motion';
import { BsGithub } from 'react-icons/bs';

const Footer = () => {
	return (
		<motion.footer
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className='text-center mt-3 mb-10 flex flex-col items-center'
		>
			<small>&copy; 2022 made with 💝 by rezonmain</small>
		</motion.footer>
	);
};

export default Footer;
