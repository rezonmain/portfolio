import Head from 'next/head';
import { ReactElement } from 'react';
import ContentLayout from '../components/ContentLayout/ContentLayout';
import Transition from '../components/Transition/Transition';
import { TextLink } from './about';
import { NextPageWithLayout } from './_app';
import {
	BsEnvelopeFill,
	BsGithub,
	BsTelegram,
	BsTwitter,
} from 'react-icons/bs';

const Contact: NextPageWithLayout = () => {
	return (
		<>
			<Head>
				<title>rezonmain | contact</title>
			</Head>
			<Transition>
				<article className='text-xl text-center'>
					<ul className='flex flex-col gap-10'>
						<li>
							<h2 className='text-2xl'>drop me an email</h2>
							<BsEnvelopeFill className='inline mr-2 text-center' />
							<TextLink href='mailto:rez@rezonmain.dev'>
								rez@rezonmain.dev
							</TextLink>
						</li>
						<li>
							<h2 className='text-2xl'>message me</h2>
							<BsTelegram className='inline mr-2' />
							<TextLink href='https://t.me/rezonmain'>t.me/rezonmain</TextLink>
							<br />
							<BsTwitter className='inline mr-2' />
							<TextLink href='https://twitter.com/rezonmain'>
								twitter.com/rezonmain
							</TextLink>
						</li>
						<li>
							<h2 className='text-2xl'>judge my code</h2>
							<BsGithub className='inline mr-2' />
							<TextLink href='https://github.com/rezonmain'>
								github.com/rezonmain
							</TextLink>
						</li>
					</ul>
				</article>
			</Transition>
		</>
	);
};

Contact.getLayout = function getLayout(page: ReactElement) {
	return <ContentLayout>{page}</ContentLayout>;
};

export default Contact;
