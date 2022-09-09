import { BsGithub, BsGlobe } from 'react-icons/bs';
import { Tech } from '../../lib/tech';
import TechIcons from '../TechIcons/TechIcons';

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
	imgSrc?: string;
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
					className='bg-gray-100 dark:bg-neutral-800 w-full h-full group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform p-4 flex flex-col gap-5 justify-between'
				>
					<h2 className='font-semibold text-2xl'>{title}</h2>
					<p className='text-neutral-500 dark:text-neutral-400 text-lg'>
						{description.toLowerCase()}
					</p>
					<TechIcons techs={techs} />
					<div id='links' className='flex flex-row gap-3 justify-end'>
						<a target='_blank' rel='noreferrer' href={codeURL}>
							<div className='p-1 rounded-full hover:scale-[1.1] transition-transform'>
								<BsGithub size={30} title='Source code' />
							</div>
						</a>
						{webURL && (
							<a target='_blank' rel='noreferrer' href={webURL}>
								<div className='p-1 rounded-full hover:scale-[1.1] transition-transform'>
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

export default ProjectCard;
