import { motion } from 'framer-motion';
import Link from 'next/link';

const Navigation = ({ as }: { as: 'homepage' | 'content' }) => {
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
	);
};

export default Navigation;
