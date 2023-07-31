import ProjectCard from "./ProjectCard";

const projects = [
    {
        name: "Code life Blog",
        link: "https://code-life-blog.vercel.app",
        imageMobile: "codeLifeMobile.png",
        imageDesktop: "codeLifeDesktop.png",
        isDeployed: true,
    },
    {
        name: "Game Store",
        imageMobile: "codeLifeMobile.png",
        imageDesktop: "asdasdd",
        link: "https://code-life-blog.vercel.app",
        isDeployed: false,
    },
    {
        name: "Ma reserve",
        link: "https://code-life-blog.vercel.app",
        imageMobile: "Code-life.png",
        imageDesktop: "asdasdd",
        isDeployed: false,
    },
];

export default function Projects() {
    return (
        <section className="bg-black h-[14rem] lg:h-[20rem] w-screen -skew-x-[20deg] lg:-skew-x-[30deg] flex items-center justify-center flex-col">
            <div className="flex relative -top-5 lg:top-0 mr-4 gap-2">
                {projects.map((project, index) => {
                    return (
                        <ProjectCard
                            imageDestktop={project.imageDesktop}
                            imageMobile={project.imageMobile}
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
