import Head from 'next/head';
import { ReactElement } from 'react';
import ContentLayout from '../components/ContentLayout/ContentLayout';
import TechIcons from '../components/TechIcons/TechIcons';
import Transition from '../components/Transition/Transition';
import { Tech } from '../lib/tech';
import { NextPageWithLayout } from './_app';

const About: NextPageWithLayout = () => {
	return (
		<>
			<Head>
				<title>rezonmain | about</title>
			</Head>
			<Transition>
				<section id='text-container' className='max-w-2xl flex flex-col gap-10'>
					<article>
						<Sub>about me</Sub>
						<Text>
							<>
								Hello, my name is Alejandro Díaz (aka{' '}
								<span className='glitched dark:text-glitched-dark'>
									rezonmain
								</span>
								) I&apos;m a <b>front-end developer</b> located in tijuana 🇲🇽, I
								focus on responsive and mobile friendly UX, with the goal to
								make every website accessible to everyone.
								<Pbr />I have a technical degree in <b>electronics</b> and a
								bachelor degree in <b>bioengineering</b>, but have dedicated the
								last 2.5 years learning web development.
								<Pbr />
								I&apos;ve been programming since my early teens, started with{' '}
								<b>C</b>, writing firmware for{' '}
								<TextLink href='https://www.arduino.cc/'>arduino</TextLink>, PIC
								and ATMEL based microcontrollers, then learned <b>matlab</b> and{' '}
								<b>python</b> in college, in the last year of it I learned{' '}
								<b>javascript</b> to write websites and back-end services for my
								school IoT and research projects. I also have a bit of
								experience writing <b>VBA</b> for automating Microsoft office
								documents.
							</>
						</Text>
					</article>
					<article>
						<Sub>tech stack</Sub>
						<Text>
							<>
								I use <b>vscode</b> as my text editor, my front-end framework of
								choice is <b>react</b> which I pair it with{' '}
								<TextLink href='https://nextjs.org/'>
									<b>next.js</b>
								</TextLink>{' '}
								for{' '}
								<TextLink href='https://nextjs.org/learn/foundations/how-nextjs-works/rendering'>
									SSR
								</TextLink>
								. Though I&apos;m not afraid of writing simple websites with
								vanilla JS
								<Pbr />
								<b>Typescript</b> is my language of choice for both front-end
								and when I need to write a little bit of back-end code, which is
								usually in the form of a{' '}
								<TextLink href='https://trpc.io/'>
									<b>tRPC</b>
								</TextLink>{' '}
								api, and involves a <b>mongoDB</b> database. For styling I use
								Tailwind CSS, these technologies &#40;Typescript, tRPC,
								Tailwind&#41; form the T3 stack popularized by{' '}
								<TextLink href='https://twitter.com/t3dotgg'>Theo.</TextLink>
							</>
						</Text>
						{/* All icons */}
						<br />
						<TechIcons techs={Object.values(Tech)} />
					</article>
				</section>
			</Transition>
		</>
	);
};

export const Sub = ({
	children,
	id,
}: {
	children: string | JSX.Element;
	id?: string;
}) => {
	return (
		<h2 id={id ? id : 'sub-title'} className='text-3xl mb-5'>
			{children}
		</h2>
	);
};

export const Text = ({ children }: { children: string | JSX.Element }) => {
	return <p className='text-xl font-extralight'>{children}</p>;
};

export const TextLink = ({
	children,
	href,
}: {
	children: string | JSX.Element;
	href: string;
}) => {
	return (
		<a
			target='_blank'
			rel='noreferrer'
			className='text-blue-500 hover:underline'
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

// Opt-in shared layout
About.getLayout = function getLayout(page: ReactElement) {
	return <ContentLayout>{page}</ContentLayout>;
};

export default About;
