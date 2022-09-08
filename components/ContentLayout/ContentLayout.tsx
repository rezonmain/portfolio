import { AnimatePresence } from 'framer-motion';
import Footer from '../Footer/Footer';
import GoBack from '../GoBack/GoBack';
import Header from '../Header/Header';

const ContentLayout = ({ children }: { children: JSX.Element }) => {
	return (
		<>
			<Header />
			<main className='py-8 mx-auto px-6 sm:max-w-3xl xl:px-0 xl:max-w-5xl'>
				<GoBack />
				<AnimatePresence
					mode='wait'
					onExitComplete={() => window.scrollTo(0, 0)}
				>
					{children}
				</AnimatePresence>
			</main>
			<Footer />
		</>
	);
};

export default ContentLayout;
