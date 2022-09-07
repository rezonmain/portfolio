import { motion } from 'framer-motion';
import Link from 'next/link';
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

	const sphere = {
		hidden: { y: 300 },
		show: {
			y: 0,
			transition: {
				type: 'spring',
				stiffness: 400,
				damping: 90,
			},
		},
	};

	return (
		<section
			id='hero-container'
			className='h-screen flex flex-col items-center p-4 justify-around'
		>
			<motion.div
				className='w-full max-w-[500px]'
				variants={sphere}
				initial='hidden'
				animate='show'
			>
				<SphereWidget />
			</motion.div>
			<motion.div
				className=' text-center'
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
				<h1 className='text-5xl font-light'>
					{"hi, i'm "}
					<span className='glitched'>rezonmain</span>
				</h1>
				<p className='text-lg leading-10 tracking-widest font-light text-neutral-500 '>
					front-end developer
				</p>
			</motion.div>

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
					<Link href={url} key={i}>
						<motion.a
							key={i}
							variants={item}
							transition={{ type: 'spring', stiffness: 300, damping: 22 }}
							className='cursor-pointer font-extralight select-none text-2xl hover:text-glitched active:text-glitched hover:italic transition-[text-shadow]'
						>
							{title}
						</motion.a>
					</Link>
				))}
			</motion.nav>
		</section>
	);
};

export default Hero;
