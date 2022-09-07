const ProjectCard = ({
	children,
	accentColor,
}: {
	children: JSX.Element;
	accentColor: string;
}) => {
	return (
		<div id='card-container' className='w-full cursor-pointer'>
			<div
				id='card-background'
				style={{ backgroundColor: accentColor }}
				className='group relative'
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
					// style={{ border: `4px outset ${accentColor}` }}
					className='bg-neutral-800 w-full group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform p-4'
				>
					{children}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
