import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import Navigation from '../Navigation/Navigation';

const Header = () => {
	return (
		<motion.header
			className='py-4 bg-neutral-900 top-0 sticky z-10 border-b-[0.5px] border-neutral-600'
			exit={{ opacity: 0 }}
		>
			<div
				id='links'
				className='flex flex-row justify-between items-center text-lg mx-auto px-6 sm:max-w-3xl xl:px-0 xl:max-w-5xl'
			>
				<div id='home-link' className='font-light hover:text-glitched'>
					<Link scroll={false} href='/'>
						home
					</Link>
				</div>
				<Navigation as='content' />
			</div>
		</motion.header>
	);
};

export default React.memo(Header);
