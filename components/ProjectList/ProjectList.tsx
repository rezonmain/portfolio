import { motion } from 'framer-motion';
import ProjectCard from '../ProjectCard/ProjectCard';

export type Tech =
	| 'js'
	| 'css'
	| 'html'
	| 'react'
	| 'ts'
	| 'next'
	| 'd3'
	| 'tailwind'
	| 'vba'
	| 'mongo'
	| 'docker'
	| 'three';

export type Project = {
	title: string;
	description: string;
	imgSrc: string;
	techs: Tech[];
	webURL?: string;
	codeURL: string;
	accentColor: string;
};

const projects: Project[] = [
	{
		title: 'minecraft server scanner',
		description:
			'Front end for my minecraft server scanner, Browse scanned entries, look for particular servers or players, see players skins with the built-in 3D skin viewer',
		imgSrc: '/img/swc.png',
		techs: ['react', 'ts', 'next', 'tailwind', 'three', 'mongo', 'docker'],
		webURL: 'https://mc-server-scanner.vercel.app/',
		codeURL: 'https://github.com/rezonmain/mc-server-scanner',
		accentColor: '#17A34A',
	},
	{
		title: 'simple word clouds',
		description:
			'Generate simple wordclouds from text file or text input, It uses D3.js to generate the cloud',
		imgSrc: '/img/swc.png',
		techs: ['react', 'next', 'ts', 'd3', 'tailwind'],
		webURL: 'https://simple-wordcloud.vercel.app/',
		codeURL: 'https://github.com/rezonmain/simple-wordcloud',
		accentColor: '#F5F5F5',
	},

	{
		title: 'command line typetest',
		description: 'Tests your speed and accuracy typing linux commands',
		imgSrc: '/img/swc.png',
		techs: ['react', 'js', 'css'],
		webURL: 'https://rezonmain.github.io/command-line-typetest/',
		codeURL: 'https://github.com/rezonmain/command-line-typetest',
		accentColor: '#1C8394',
	},
	{
		title: 'react games',
		description: 'Simple games implemented in react',
		imgSrc: '/img/swc.png',
		techs: ['react', 'js', 'ts', 'css', 'next'],
		webURL: 'https://react-games-two.vercel.app/',
		codeURL: 'https://github.com/rezonmain/react-games',
		accentColor: '#FACC15',
	},
	{
		title: 'red wagon',
		description: 'Website for the red wagon restaurant',
		imgSrc: '/img/swc.png',
		techs: ['html', 'js', 'css'],
		webURL: 'https://rezonmain.github.io/redwagon/',
		codeURL: 'https://github.com/rezonmain/redwagon',
		accentColor: '#E0312F',
	},
	{
		title: 'minesweeper for excel',
		description:
			'A clone of minesweeper written in VBA that runs in Microsoft Excel',
		imgSrc: '/img/swc.png',
		techs: ['vba'],
		webURL: '',
		codeURL: 'https://github.com/rezonmain/minesweeper-for-excel',
		accentColor: '#0100FE',
	},
];

const ProjectList = () => {
	return (
		<section id='my-work'>
			{/* <h1 className='text-2xl glitched'>{'[ my work ]'}</h1> */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className='mt-4 flex flex-col gap-4 lg:grid lg:grid-cols-2'
			>
				{projects.map((p, i) => (
					<ProjectCard key={i} {...p} />
				))}
			</motion.div>
		</section>
	);
};

export default ProjectList;
