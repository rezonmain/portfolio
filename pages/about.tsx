import Head from 'next/head';
import { ReactElement } from 'react';
import ContentLayout from '../components/ContentLayout/ContentLayout';
import Transition from '../components/Transition/Transition';
import { NextPageWithLayout } from './_app';

const About: NextPageWithLayout = () => {
	return (
		<>
			<Head>
				<title>rezonmain | about</title>
			</Head>
			<Transition>
				<h1>about</h1>
			</Transition>
		</>
	);
};

// Opt-in for the consistent layouy
About.getLayout = function getLayout(page: ReactElement) {
	return <ContentLayout>{page}</ContentLayout>;
};

export default About;
