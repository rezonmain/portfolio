import Head from 'next/head';
import { ReactElement } from 'react';
import ContentLayout from '../components/ContentLayout/ContentLayout';
import Transition from '../components/Transition/Transition';
import { NextPageWithLayout } from './_app';
import ProjectsSection from '../components/ProjectsSection/ProjectsSection';
import projects from '../lib/projects';

const Work: NextPageWithLayout = () => {
	return (
		<>
			<Head>
				<title>rezonmain | work</title>
			</Head>
			<Transition>
				<>
					<ProjectsSection title='as a professional' projects={projects.filter((p) => p.section === 'pro')} />
					<ProjectsSection title='competent' projects={projects.filter((p) => p.section === 'competent')} />
					<ProjectsSection title='learning' projects={projects.filter((p) => p.section === 'learning')} />
					<ProjectsSection title='baby steps' projects={projects.filter((p) => p.section === 'baby')} />
				</>
			</Transition>
		</>
	);
};

Work.getLayout = function getLayout(page: ReactElement) {
	return <ContentLayout>{page}</ContentLayout>;
};

export default Work;
