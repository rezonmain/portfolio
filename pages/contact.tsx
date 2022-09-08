import Head from 'next/head';
import { ReactElement } from 'react';
import ContentLayout from '../components/ContentLayout/ContentLayout';
import Transition from '../components/Transition/Transition';
import { Sub, TextLink } from './about';
import { NextPageWithLayout } from './_app';
import { BsEnvelope } from 'react-icons/bs';

const Contact: NextPageWithLayout = () => {
	return (
		<>
			<Head>
				<title>rezonmain | contact</title>
			</Head>
			<Transition>
				<article>
					<Sub>Drop me an email</Sub>
					<BsEnvelope />
					<TextLink href='mailto:rez@rezonmain.dev'>rez@rezonmain.dev</TextLink>
				</article>
			</Transition>
		</>
	);
};

// Opt-in for the consistent layouy
Contact.getLayout = function getLayout(page: ReactElement) {
	return <ContentLayout>{page}</ContentLayout>;
};

export default Contact;
