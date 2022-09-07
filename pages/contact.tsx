import Head from 'next/head';
import { ReactElement } from 'react';
import ContentLayout from '../components/ContentLayout/ContentLayout';
import Transition from '../components/Transition/Transition';
import { NextPageWithLayout } from './_app';

const Contact: NextPageWithLayout = () => {
	return (
		<>
			<Head>
				<title>rezonmain | contact</title>
			</Head>
			<Transition>
				<h1>contact</h1>
			</Transition>
		</>
	);
};

// Opt-in for the consistent layouy
Contact.getLayout = function getLayout(page: ReactElement) {
	return <ContentLayout>{page}</ContentLayout>;
};

export default Contact;
