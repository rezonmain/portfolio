import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/About/About';
import Hero from '../components/Hero/Hero';
import Parallax from '../components/Parallax/Parallax';
import ProjectList from '../components/ProjectList/ProjectList';
const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>rez | Frontend Developer</title>
			</Head>
			<main className='bg-neutral-900 font-serif'>
				<Hero />
				<About />
				<ProjectList />
			</main>
		</>
	);
};

export default Home;
