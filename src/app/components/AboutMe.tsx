import EmailButton from "./AboutMe/EmailButton";
import Model from "./AboutMe/Model";

export default function AboutMe() {
    return (
        <section className="flex lg:flex lg:justify-start flex-col text-black">
            <article className="lg:flex lg:flex-row lg:p-2 items-center">
                <Model />
                <div className="flex flex-col justify-start lg:px-10 lg:gap-4 gap-2 relative -top-14">
                    <h3 className="text-center font-bold lg:text-start">
                        Sobre Mim
                    </h3>
                    <p className="text-xs px-6 leading-relaxed lg:text-lg lg:text-start lg:w-[50rem] lg:px-0 ">
                        Sou um desenvolvedor web, curioso para novos
                        aprendizados e tecnologias. Atualmente estou no 4
                        semestre de ADS, também atuando como freelancer nas
                        horas vagas, utilizando principlamente Nextjs, React e
                        Node, mas também possuo alguma experiência com Java e
                        PHP.
                    </p>
                    <div className="flex items-center justify-center">
                        <p className="text-black text-center  flex lg:hidden text-sm">
                            Clique para copiar!
                        </p>
                    </div>
                    <EmailButton />
                </div>
            </article>
        </section>
    );
}
