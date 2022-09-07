import Head from 'next/head';
import { ReactElement } from 'react';
import ContentLayout from '../components/ContentLayout/ContentLayout';
import Navigation from '../components/Navigation/Navigation';
import Transition from '../components/Transition/Transition';
import { NextPageWithLayout } from './_app';

const Work: NextPageWithLayout = () => {
	return (
		<>
			<Head>
				<title>rezonmain | work</title>
			</Head>
			<Transition>
				<>
					<h1>Work</h1>
					<Navigation />
				</>
			</Transition>
		</>
	);
};

Work.getLayout = function getLayout(page: ReactElement) {
	return <ContentLayout>{page}</ContentLayout>;
};

export default Work;
