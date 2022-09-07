import Footer from '../Footer/Footer';
import GoBack from '../GoBack/GoBack';
import Navigation from '../Navigation/Navigation';

const ContentLayout = ({ children }: { children: JSX.Element }) => {
	return (
		<>
			{/* <Navigation /> */}
			<GoBack />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default ContentLayout;
