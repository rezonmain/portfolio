import type { Project } from "../../lib/projects";
import ProjectList from "../ProjectList/ProjectList";

const ProjectsSection = ({title, projects}: {title: string, projects: Project[]}) => (
  <section className=" my-10">
    <h2 className=" text-2xl">{title}</h2>
    <ProjectList projects={projects} />
  </section>
)
   
export default ProjectsSection;