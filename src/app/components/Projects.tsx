import { projects } from "../constants";
import ProjectCard from "./Projects/ProjectCard";

export default function Projects() {
    return (
        <section className="bg-black h-[14rem] lg:h-[25rem] w-screen -skew-x-[20deg] lg:-skew-x-[30deg] flex items-center justify-center flex-col ">
            <div className="flex relative -top-3 lg:top-0 mr-2 gap-2 lg:gap-5">
                {projects.map((project, index) => {
                    return (
                        <ProjectCard
                            imageDestktop={project.imageDesktop}
                            imageMobile={project.imageMobile}
                            link={project.link}
                            name={project.name}
                            shortDesc={project.shortDesc}
                            longDesc={project.longDesc}
                            isDeployed={project.isDeployed}
                            key={index.toString()}
                        />
                    );
                })}
            </div>
        </section>
    );
}
