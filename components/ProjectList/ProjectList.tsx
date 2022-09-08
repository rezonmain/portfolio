import { motion } from 'framer-motion';
import projects from '../../lib/projects';
import ProjectCard from '../ProjectCard/ProjectCard';

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
