import { motion } from 'framer-motion';
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

	return (
		<motion.section
			id='hero-container'
			className='h-screen flex flex-col items-center p-4 justify-around'
		>
			<motion.div className='w-full max-w-[500px] cursor-grab active:cursor-grabbing'>
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
					damping: 40,
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
					['[ about me ]', '/about'],
					['[ my work ]', '/work'],
					['[ contact ]', '/contact'],
				].map(([title, url], i) => (
					<motion.a
						key={i}
						variants={item}
						transition={{ type: 'spring', stiffness: 300, damping: 40 }}
						className='cursor-pointer select-none text-xl hover:text-glitched active:text-glitched transition-[text-shadow]'
					>
						{title}
					</motion.a>
				))}
			</motion.nav>
		</motion.section>
	);
};

export default Hero;
