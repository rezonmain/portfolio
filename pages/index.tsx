import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from '../components/Hero/Hero';
import ProjectList from '../components/ProjectList/ProjectList';
const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>rez | Frontend Developer</title>
			</Head>
			<main className='bg-neutral-900 font-serif'>
				<Hero />
				<ProjectList />
			</main>
		</>
	);
};

export default Home;
