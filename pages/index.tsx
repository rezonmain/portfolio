import type { NextPage } from 'next';
import Head from 'next/head';
import SphereWidget from '../components/Sphere/SphereWidget';
const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>rez | Frontend Developer</title>
			</Head>
			<main className='bg-black w-screen h-screen'>
				<a href='https://github.com/rezonmain' className='cursor-pointer'>
					<SphereWidget />
				</a>
			</main>
		</>
	);
};

export default Home;
