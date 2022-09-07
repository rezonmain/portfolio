import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from '../components/Hero/Hero';
import React from 'react';
import Transition from '../components/Transition/Transition';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>rezonmain | front-end dev</title>
			</Head>
			<Transition>
				<Hero />
			</Transition>
		</>
	);
};

export default Home;
