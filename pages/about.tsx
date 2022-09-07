import type { NextPage } from 'next';
import Head from 'next/head';
import GoBack from '../components/GoBack/GoBack';
import Transition from '../components/Transition/Transition';

const About: NextPage = () => {
	return (
		<>
			<Head>
				<title>rezonmain | about</title>
			</Head>
			<Transition>
				<>
					<GoBack />
				</>
			</Transition>
		</>
	);
};

export default About;
