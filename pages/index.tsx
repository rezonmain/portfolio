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
				<meta
					name='description'
					content="rezonmain's portfolio website, check out my work, judge my code."
					key='desc'
				></meta>
				<meta property='og:title' content="rezonmain's portfolio website" />
				<meta
					property='og:description'
					content='Checkout out my work, judge my code.'
				/>
			</Head>
			<Transition>
				<Hero />
			</Transition>
		</>
	);
};

export default Home;
