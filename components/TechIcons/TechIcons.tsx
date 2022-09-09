import Image from 'next/image';
import tech from '../../lib/tech';
import type { Tech } from '../../lib/tech';

const TechIcons = ({ techs }: { techs: Tech[] }) => {
	return (
		<div
			id='tech-icons'
			className='flex flex-row flex-wrap gap-2 dark:bg-neutral-900 w-fit p-1.5 rounded-xl'
		>
			{techs.map((t, i) => (
				<div key={i} className='w-[30px] h-[30px]'>
					<a target='_blank' rel='noreferrer' href={tech[t].url}>
						<Image
							title={tech[t].title}
							src={tech[t].src}
							alt={tech[t].alt}
							width='30px'
							height='30px'
						></Image>
					</a>
				</div>
			))}
		</div>
	);
};

export default TechIcons;
