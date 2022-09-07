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
				<h1>hi</h1>
			</Transition>
		</>
	);
};

About.getLayout = function getLayout(page: ReactElement) {
	return <ContentLayout>{page}</ContentLayout>;
};

export default About;
