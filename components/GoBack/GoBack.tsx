import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { BiArrowBack } from 'react-icons/bi';

const GoBack = () => {
	const router = useRouter();
	return (
		<motion.div
			id='go-back'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			onClick={() => router.back()}
			className='cursor-pointer w-fit h-fit p-1 rounded-full hover:bg-neutral-700 transition-colors'
		>
			<BiArrowBack size={28} />
		</motion.div>
	);
};

export default GoBack;
