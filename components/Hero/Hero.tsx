import SphereWidget from '../Sphere/SphereWidget';
import { BsArrowDown } from 'react-icons/bs';

const Hero = () => {
	const handleScroll = () => {
		globalThis.scrollTo({
			top: globalThis.innerHeight,
			behavior: 'smooth',
		});
	};
	return (
		<section
			id='hero-container'
			className='h-screen w-screen flex flex-col items-center p-4 justify-around'
		>
			<div className='w-full max-w-[500px]'>
				<SphereWidget />
			</div>
			<h1 className='text-4xl text-center font-light'>
				hi, i'm <span className='glitched'>rezonmain</span>
			</h1>
			<nav className='flex flex-col gap-6 text-center'>
				{[
					['[ about me ]', '/about'],
					['[ my work ]', '/work'],
					['[ contact ]', '/contact'],
				].map(([title, url], i) => (
					<a
						key={i}
						className='cursor-pointer select-none text-xl hover:text-glitched active:text-glitched transition-all'
					>
						{title}
					</a>
				))}
			</nav>
		</section>
	);
};

export default Hero;
