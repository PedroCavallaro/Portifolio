import ProjectCard from "./ProjectCard";

const projects = [
    {
        name: "Code life Blog",
        image: "Code-life.png",
        link: "https://code-life-blog.vercel.app",
        isDeployed: true,
    },
];

export default function Projects() {
    return (
        <section className="bg-black h-[14rem] lg:h-[20rem] w-screen -skew-x-[20deg] lg:-skew-x-[30deg] flex items-center justify-center flex-col">
            <div className="flex relative -top-5 lg:top-0 mr-4 gap-2">
                {projects.map((project, index) => {
                    return (
                        <ProjectCard
                            image={project.image}
                            link={project.link}
                            name={project.name}
                            isDeployed={project.isDeployed}
                            key={index.toString()}
                        />
                    );
                })}
            </div>
        </section>
    );
}
