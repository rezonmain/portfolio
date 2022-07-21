import type { NextPage } from 'next';
import Head from 'next/head';
import SphereWidget from '../components/Cube/SphereWidget';
const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>rez | Frontend Developer</title>
			</Head>
			<a href='https://github.com/rezonmain' className='cursor-pointer'>
				<div className='bg-black w-screen h-screen'>
					<SphereWidget />
				</div>
			</a>
		</>
	);
};

export default Home;
