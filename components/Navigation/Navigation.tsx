import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
			<motion.nav
				className='py-4 bg-neutral-900 top-0 sticky z-10 border-b-[0.5px] border-neutral-600'
				exit={{ opacity: 0 }}
			>
				<div
					id='links'
					className='flex flex-row justify-between items-center text-lg mx-auto px-6 sm:max-w-3xl xl:px-0 xl:max-w-5xl'
				>
					<div id='home-link' className='font-light hover:text-glitched'>
						<Link href='/'>home</Link>
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
									className={`cursor-pointer font-extralight select-none hover:text-glitched transition-[text-shadow]
										${router.route === url ? 'text-glitched' : ''}`}
								>
									{title}
									{router.route === url && (
										<motion.div
											layoutId='nav-selected'
											className='nav-selected'
											transition={{
												type: 'spring',
												stiffness: 300,
												damping: 25,
											}}
										></motion.div>
									)}
								</motion.a>
							</Link>
						))}
					</div>
				</div>
			</motion.nav>
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
