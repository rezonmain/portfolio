import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Exo+2:wght@100;200;300;400;500;600;700;800&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<body className='bg-neutral-900 font-serif'>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
