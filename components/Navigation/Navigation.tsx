import { AnimateSharedLayout, motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import GoBack from '../GoBack/GoBack';

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

	const router = useRouter();

	if (as === 'content') {
		return (
			<nav className='p-4 flex flex-col gap-10'>
				<div id='links' className='flex flex-row justify-between'>
					<div id='home-link'>
						<Link href='/'>Home</Link>
					</div>
					<div id='content-links' className='flex flex-row gap-5 text-center'>
						{[
							['about', '/about'],
							['my work', '/work'],
							['contact', '/contact'],
						].map(([title, url], i) => (
							<Link href={url} key={i}>
								<motion.a
									key={i}
									transition={{ type: 'spring', stiffness: 300, damping: 22 }}
									className={`cursor-pointer font-extralight select-none hover:text-glitched transition-[text-shadow] text-lg 
										${router.route === url ? 'text-glitched' : ''}`}
								>
									{title}
									{router.route === url && (
										<motion.div
											layoutId='nav-selected'
											className='nav-selected'
										></motion.div>
									)}
								</motion.a>
							</Link>
						))}
					</div>
				</div>
				<GoBack />
			</nav>
		);
	}

	return (
		<motion.nav
			variants={container}
			initial='hidden'
			animate='show'
			className='p-4 flex flex-col gap-6 text-center'
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
						className='cursor-pointer font-extralight select-none hover:text-glitched active:text-glitched hover:italic transition-[text-shadow] text-2xl'
					>
						{title}
					</motion.a>
				</Link>
			))}
		</motion.nav>
	);
};

export default Navigation;
