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
			<small className='mt-1'>
				<a
					target='_blank'
					rel='noreferrer'
					href='https://github.com/rezonmain/portfolio'
					className='hover:underline'
				>
					github
				</a>
				{' | '}
				<a
					target='_blank'
					rel='noreferrer'
					href='https://twitter.com/rezonmain'
					className='hover:underline'
				>
					twitter
				</a>
			</small>
		</motion.footer>
	);
};

export default Footer;
