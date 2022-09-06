import { motion } from 'framer-motion';
import Parallax from '../Parallax/Parallax';
import SphereWidget from '../Sphere/SphereWidget';

const Hero = () => {
	const container = {
		show: {
			transition: {
				delayChildren: 1,
				staggerChildren: 0.13,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, y: -90 },
		show: { opacity: 1, y: 0 },
	};

	const scrollTo = (id: string) => {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<motion.section
			id='hero-container'
			className='h-screen flex flex-col items-center p-4 justify-around'
		>
			<motion.div
				className='w-full max-w-[500px]'
				initial={{ y: 300 }}
				animate={{ y: 0 }}
				transition={{
					type: 'spring',
					stiffness: 400,
					damping: 90,
				}}
			>
				<SphereWidget />
			</motion.div>
			<motion.h1
				className='text-4xl text-center font-light'
				variants={item}
				initial='hidden'
				animate='show'
				transition={{
					delay: 1,
					type: 'spring',
					stiffness: 300,
					damping: 22,
				}}
			>
				{"hi, i'm "}
				<span className='glitched'>rezonmain</span>
			</motion.h1>
			<motion.nav
				className='flex flex-col gap-6 text-center'
				variants={container}
				initial='hidden'
				animate='show'
			>
				{[
					['[ about me ]', 'about-me'],
					['[ my work ]', 'my-work'],
					['[ contact ]', 'contact'],
				].map(([title, element], i) => (
					<motion.a
						onClick={() => scrollTo(element)}
						key={i}
						variants={item}
						transition={{ type: 'spring', stiffness: 300, damping: 22 }}
						className='cursor-pointer font-extralight select-none text-2xl hover:text-glitched active:text-glitched transition-[text-shadow]'
					>
						{title}
					</motion.a>
				))}
			</motion.nav>
		</motion.section>
	);
};

export default Hero;
