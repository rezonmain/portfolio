import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';

/* Allows defining consistent layout on a per page basis
 see https://nextjs.org/docs/basic-features/layouts */

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps, router }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? ((page) => page);

	return (
		<AnimatePresence mode='wait'>
			{getLayout(<Component {...pageProps} key={router.route} />)}
		</AnimatePresence>
	);
}

export default MyApp;
