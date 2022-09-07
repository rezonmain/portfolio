import ProjectCard from '../ProjectCard/ProjectCard';

const ProjectList = () => {
	return (
		<section id='my-work'>
			{/* <h1 className='text-2xl glitched'>{'[ my work ]'}</h1> */}
			<div className='mt-4 flex flex-col items-center gap-4 lg:grid lg:grid-cols-2'>
				<ProjectCard accentColor='#F5F5F5'>
					<h1>simple word clouds</h1>
				</ProjectCard>
				<ProjectCard accentColor='#17A34A'>
					<h1>minecraft server scanner</h1>
				</ProjectCard>
				<ProjectCard accentColor='#1C8394'>
					<h1>command line typetest</h1>
				</ProjectCard>
				<ProjectCard accentColor='#FACC15'>
					<h1>react games</h1>
				</ProjectCard>
				<ProjectCard accentColor='#E0312F'>
					<h1>red wagon</h1>
				</ProjectCard>
				<ProjectCard accentColor='#0100FE'>
					<h1>minesweeper for excel</h1>
				</ProjectCard>
			</div>
		</section>
	);
};

export default ProjectList;
