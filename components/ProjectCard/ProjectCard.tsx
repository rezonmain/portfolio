import { Tech } from '../ProjectList/ProjectList';
import { BsGithub, BsGlobe } from 'react-icons/bs';

const ProjectCard = ({
	title,
	description,
	imgSrc,
	techs,
	webURL,
	codeURL,
	accentColor,
}: {
	title: string;
	description: string;
	imgSrc: string;
	techs: Tech[];
	webURL?: string;
	codeURL: string;
	accentColor: string;
}) => {
	return (
		<div id='card-container'>
			<div
				id='card-background'
				style={{ backgroundColor: accentColor }}
				className='group relative h-full'
			>
				<div
					id='top-left-corner'
					style={{ borderRight: `8px solid ${accentColor}` }}
					className={`absolute scale-0 border-t-8 border-t-transparent top-0 left-0 origin-[left_center_0] group-hover:-translate-y-2 group-hover:scale-100 transition-transform`}
				></div>
				<div
					id='bottom-right-corner'
					style={{ borderTop: `8px solid ${accentColor}` }}
					className={`absolute scale-0 border-r-8 border-r-transparent bottom-0 right-0 origin-[center_bottom_0] group-hover:translate-x-2 group-hover:scale-100 transition-transform`}
				></div>

				<div
					id='card-content'
					className='bg-neutral-800 w-full h-full group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform p-4 flex flex-col gap-5 justify-between'
				>
					<h2 className='font-semibold text-2xl'>{title}</h2>
					<p className='text-neutral-400 text-lg'>
						{description.toLowerCase()}
					</p>
					<div
						id='tech-icons'
						className='flex flex-row gap-2 bg-neutral-900 w-fit p-1 rounded-xl'
					>
						{techs.map((t, i) => (
							<a
								target='_blank'
								key={i}
								href={tech[t].url}
								className='p-0.5 rounded-full'
							>
								<img
									title={tech[t].title}
									src={tech[t].src}
									alt={tech[t].alt}
									width='30px'
								></img>
							</a>
						))}
					</div>
					<div id='links' className='flex flex-row gap-3 justify-end'>
						<a target='_blank' href={codeURL}>
							<div className='p-1 rounded-full hover:bg-neutral-700'>
								<BsGithub size={30} title='Source code' />
							</div>
						</a>
						{webURL && (
							<a target='_blank' href={webURL}>
								<div className='p-1 rounded-full hover:bg-neutral-700 transition-colors'>
									<BsGlobe size={30} title='Website' />
								</div>
							</a>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export const tech = {
	react: {
		src: 'https://raw.githubusercontent.com/Pedro-Murilo/icons-for-readme/main/.github/react-icon.svg',
		alt: 'reactjs icon',
		url: 'https://reactjs.org/',
		title: 'React.js',
	},
	ts: {
		src: 'https://raw.githubusercontent.com/Pedro-Murilo/icons-for-readme/main/.github/typescript-icon.svg',
		alt: 'typescript icon',
		url: 'https://www.typescriptlang.org',
		title: 'Typescript',
	},
	next: {
		src: 'https://raw.githubusercontent.com/Pedro-Murilo/icons-for-readme/main/.github/nextjs-icon.svg',
		alt: 'nextjs icon',
		url: 'https://nextjs.org',
		title: 'Next.js',
	},
	d3: {
		src: 'https://raw.githubusercontent.com/d3/d3-logo/master/d3.png',
		alt: 'd3js icon',
		url: 'https://d3js.org/',
		title: 'D3.js',
	},
	tailwind: {
		src: 'https://www.nstinfotech.com/wp-content/uploads/2020/10/tailwind-logo.png',
		alt: 'tailwind css icon',
		url: 'https://tailwindcss.com/',
		title: 'Tailwind CSS',
	},
	three: {
		// src: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Three.js_Icon.svg',
		src: '/img/three.png',
		alt: 'threejs icon',
		url: 'https://threejs.org/',
		title: 'Three.js',
	},
	js: {
		src: 'https://raw.githubusercontent.com/Pedro-Murilo/icons-for-readme/main/.github/js-icon.svg',
		alt: 'javascript icon',
		url: 'https://developer.mozilla.org/en-US/docs/Web/javascript',
		title: 'Javascript',
	},
	html: {
		src: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
		alt: 'html icon',
		url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
		title: 'Html 5',
	},
	css: {
		src: 'https://raw.githubusercontent.com/Pedro-Murilo/icons-for-readme/main/.github/css-icon.svg',
		alt: 'css icon',
		url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
		title: 'CSS 3',
	},
	vba: {
		src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-k8cyYC06VjI%2FXm9Uaj76SZI%2FAAAAAAAALkc%2FMqiKk07ZN2cJ9z1rlIxgI0WgAI3FWE7wACLcBGAsYHQ%2Fs1600%2F1920px-VB.NET_Logo.svg.png&f=1&nofb=1',
		alt: 'vba icon',
		url: 'https://docs.microsoft.com/en-us/office/vba/api/overview/',
		title: 'Visual Basic',
	},
	mongo: {
		src: 'https://avatars.githubusercontent.com/u/45120?s=200&v=4',
		alt: 'mongodb icon',
		url: 'https://www.mongodb.com/',
		title: 'MongoDB',
	},
	docker: {
		src: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png',
		alt: 'docker icon',
		url: 'https://www.docker.com/',
		title: 'Docker',
	},
};

export default ProjectCard;
