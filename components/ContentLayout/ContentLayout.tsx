import GoBack from '../GoBack/GoBack';

const ContentLayout = ({ children }: { children: JSX.Element }) => {
	return (
		<>
			<GoBack />
			<main>{children}</main>
		</>
	);
};

export default ContentLayout;
