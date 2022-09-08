import Head from 'next/head';
import { ReactElement } from 'react';
import ContentLayout from '../components/ContentLayout/ContentLayout';
import Transition from '../components/Transition/Transition';
import { NextPageWithLayout } from './_app';

const About: NextPageWithLayout = () => {
	return (
		<>
			<Head>
				<title>rezonmain | about</title>
			</Head>
			<Transition>
				<section id='text-container' className='max-w-2xl flex flex-col gap-10'>
					<div>
						<Sub>about me</Sub>
						<Text>
							<>
								Hello, my name is alejandro díaz (aka{' '}
								<span className='glitched'>rezonmain</span>) I'm a{' '}
								<b>front-end developer</b> located in tijuana 🇲🇽, I focus on
								mobile friendly UX, with the goal to make every website
								accesable to everyone.
								<Pbr />I have a technical degree in electronics and a bachelor
								degree in bioingeneering, but have dedicated the last 2.5 years
								learning web development
								<Pbr />
								I've been programming since my early teens, started with{' '}
								<b>C</b>, writing firmware for{' '}
								<TextLink href='https://www.arduino.cc/'>arduino</TextLink>, PIC
								and ATMEL based microcontrollers, then learned <b>matlab</b> and{' '}
								<b>python</b> in college, in the last year of it I learned{' '}
								<b>javascript</b> to write websites and back-end services for my
								school IoT and research projects. I also have a bit of
								experience writing <b>VBA</b> for automating microsoft office
								documents.
							</>
						</Text>
					</div>
					<div>
						<Sub>tech stack</Sub>
						<Text>
							<>
								I use <b>vscode</b> as my text editor, my front-end framework of
								choice is <b>react</b> which I pair it with{' '}
								<TextLink href='https://nextjs.org/'>next.js</TextLink> for{' '}
								<TextLink href='https://nextjs.org/learn/foundations/how-nextjs-works/rendering'>
									SSR
								</TextLink>
								.
								<Pbr />
								<b>Typescript</b> is my language of choice for both front-end
								and when I need to write a little bit of back-end code, which is
								usally in the form of a{' '}
								<TextLink href='https://trpc.io/'>tRPC</TextLink> api, and
								involves a <b>mongoDB</b> database.
							</>
						</Text>
					</div>
				</section>
			</Transition>
		</>
	);
};

const Sub = ({ children }: { children: string | JSX.Element }) => {
	return <h2 className='text-3xl mb-5'>{children}</h2>;
};

const Text = ({ children }: { children: string | JSX.Element }) => {
	return <p className='text-xl font-extralight'>{children}</p>;
};

const TextLink = ({ children, href }: { children: string; href: string }) => {
	return (
		<a
			target='_blank'
			rel='noreferrer'
			className='text-blue-500 visited:text-purple-500 hover:underline'
			href={href}
		>
			{children}
		</a>
	);
};

const Pbr = () => (
	<>
		<br></br>
		<br></br>
	</>
);

// Opt-in for the consistent layouy
About.getLayout = function getLayout(page: ReactElement) {
	return <ContentLayout>{page}</ContentLayout>;
};

export default About;
