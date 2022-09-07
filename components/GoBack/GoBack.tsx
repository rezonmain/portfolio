import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { BiArrowBack } from 'react-icons/bi';

const GoBack = () => {
	const router = useRouter();
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			onClick={() => router.back()}
			className='top-[10vw] left-[10vw] cursor-pointer w-fit h-fit p-1 rounded-full hover:bg-neutral-700 transition-colors'
		>
			<BiArrowBack size={32} />
		</motion.div>
	);
};

export default GoBack;
