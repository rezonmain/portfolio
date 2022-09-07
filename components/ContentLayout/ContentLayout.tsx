import { AnimatePresence } from 'framer-motion';
import Footer from '../Footer/Footer';
import GoBack from '../GoBack/GoBack';
import Navigation from '../Navigation/Navigation';

const ContentLayout = ({ children }: { children: JSX.Element }) => {
	return (
		<>
			<Navigation as='content' />
			<main>
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
