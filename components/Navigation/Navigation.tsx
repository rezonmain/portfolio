import { AnimatePresence, motion } from 'framer-motion';
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

	const links = [
		['about', '/about'],
		['my work', '/work'],
		['contact', '/contact'],
	];

	const router = useRouter();

	if (as === 'content') {
		return (
			<nav id='content-links' className='flex flex-row gap-5 text-center'>
				{links.map(([title, url], i) => (
					<Link scroll={false} href={url} key={i}>
						<a
							className={`cursor-pointer font-extralight hover:text-glitched hover:dark:text-glitched-dark transition-[text-shadow] ${
								router.route === url
									? 'text-glitched dark:text-glitched-dark'
									: ''
							}`}
						>
							{title}
							<AnimatePresence>
								{router.route === url && (
									<motion.div
										className='nav-selected'
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										transition={{
											type: 'spring',
											stiffness: 300,
											damping: 25,
										}}
									></motion.div>
								)}
							</AnimatePresence>
						</a>
					</Link>
				))}
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
				<Link scroll={false} href={url} key={i}>
					<motion.a
						key={i}
						variants={item}
						transition={{ type: 'spring', stiffness: 300, damping: 22 }}
						className='cursor-pointer font-extralight select-none hover:text-glitched hover:dark:text-glitched-dark active:text-glitched hover:italic transition-[text-shadow] text-2xl'
					>
						{title}
					</motion.a>
				</Link>
			))}
		</motion.nav>
	);
};

export default Navigation;
