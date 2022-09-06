import { useRouter } from 'next/router';
import { BiArrowBack } from 'react-icons/bi';

const GoBack = () => {
	const router = useRouter();
	return (
		<div
			onClick={() => router.back()}
			className='cursor-pointer w-fit h-fit mb-4 p-1 rounded-full hover:bg-neutral-700 transition-colors'
		>
			<BiArrowBack size={28} />
		</div>
	);
};

export default GoBack;
