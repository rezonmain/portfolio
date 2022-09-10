import { Tech } from './tech';

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
		techs: [
			Tech.reactjs,
			Tech.ts,
			Tech.python,
			Tech.next,
			Tech.tailwind,
			Tech.three,
			Tech.mongo,
			Tech.redis,
			Tech.trpc,
			Tech.docker,
		],
		webURL: 'https://mc-server-scanner.vercel.app/',
		codeURL: 'https://github.com/rezonmain/mc-server-scanner',
		accentColor: '#17A34A',
	},
	{
		title: 'simple word clouds',
		description:
			'Generate simple wordclouds from text file or text input, It uses D3.js to generate the cloud',
		imgSrc: '/img/swc.png',
		techs: [Tech.reactjs, Tech.ts, Tech.next, Tech.d3, Tech.tailwind],
		webURL: 'https://simple-wordcloud.vercel.app/',
		codeURL: 'https://github.com/rezonmain/simple-wordcloud',
		accentColor: '#A8A29E',
	},

	{
		title: 'command line typetest',
		description: 'Tests your speed and accuracy typing linux commands',
		imgSrc: '/img/swc.png',
		techs: [Tech.reactjs, Tech.js, Tech.css],
		webURL: 'https://rezonmain.github.io/command-line-typetest/',
		codeURL: 'https://github.com/rezonmain/command-line-typetest',
		accentColor: '#1C8394',
	},
	{
		title: 'react games',
		description: 'Simple games implemented in react',
		imgSrc: '/img/swc.png',
		techs: [Tech.reactjs, Tech.js, Tech.ts, Tech.css, Tech.next],
		webURL: 'https://react-games-two.vercel.app/',
		codeURL: 'https://github.com/rezonmain/react-games',
		accentColor: '#FACC15',
	},
	{
		title: 'red wagon',
		description: 'Website for the red wagon restaurant',
		imgSrc: '/img/swc.png',
		techs: [Tech.html, Tech.js, Tech.css],
		webURL: 'https://rezonmain.github.io/redwagon/',
		codeURL: 'https://github.com/rezonmain/redwagon',
		accentColor: '#E0312F',
	},
	{
		title: 'minesweeper for excel',
		description:
			'A clone of minesweeper written in VBA that runs in Microsoft Excel',
		imgSrc: '/img/swc.png',
		techs: [Tech.vba],
		webURL: '',
		codeURL: 'https://github.com/rezonmain/minesweeper-for-excel',
		accentColor: '#0100FE',
	},
];

export default projects;
