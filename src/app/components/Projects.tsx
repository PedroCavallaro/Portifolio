import ProjectCard from "./ProjectCard";

const projects = [
    {
        name: "Code life Blog",
        image: "Code-life.png",
        link: "https://code-life-blog.vercel.app",
    },
];

export default function Projects() {
    return (
        <section>
            {projects.map((project, index) => {
                return (
                    <ProjectCard
                        name={project.name}
                        image={project.image}
                        link={project.image}
                        key={index.toString()}
                    />
                );
            })}
            <div></div>
            <div></div>
        </section>
    );
}
