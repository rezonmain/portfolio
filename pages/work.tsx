import Head from 'next/head';
import { ReactElement } from 'react';
import ContentLayout from '../components/ContentLayout/ContentLayout';
import ProjectList from '../components/ProjectList/ProjectList';
import Transition from '../components/Transition/Transition';
import { NextPageWithLayout } from './_app';

const Work: NextPageWithLayout = () => {
	return (
		<>
			<Head>
				<title>rezonmain | work</title>
			</Head>
			<Transition>
				<ProjectList />
			</Transition>
		</>
	);
};

Work.getLayout = function getLayout(page: ReactElement) {
	return <ContentLayout>{page}</ContentLayout>;
};

export default Work;
