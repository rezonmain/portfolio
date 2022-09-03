import SphereWidget from '../Sphere/SphereWidget';
import { BsArrowDown } from 'react-icons/bs';

const Hero = () => {
	return (
		<section
			id='hero-container'
			className='h-screen w-screen flex flex-col items-center p-4 justify-around'
		>
			<div className='w-full max-w-[500px] animate-pulse'>
				<SphereWidget />
			</div>
			<h1 className='text-4xl text-center font-light'>
				hi, i'm <span className='glitched'>rezonmain</span>
			</h1>
			<div>
				<BsArrowDown size={40} className='motion-safe:animate-bounce' />
			</div>
		</section>
	);
};

export default Hero;
