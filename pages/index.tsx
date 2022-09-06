import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from '../components/Hero/Hero';
const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>rezonmain | front-end dev</title>
			</Head>
			<main className='bg-neutral-900 font-serif'>
				<Hero />
			</main>
		</>
	);
};

export default Home;
