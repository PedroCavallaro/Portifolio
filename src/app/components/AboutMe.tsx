export default function AboutMe() {
    return (
        <section className="flex items-center justify-center flex-col gap-2 text-black">
            <div className="relative w-[10rem] h-[8rem] bg-zinc-500 -top-5"></div>
            <article>
                <h3 className="text-center font-bold">Sobre Mim</h3>
                <p className="text-xs text-left px-6 leading-relaxed">
                    Sou um desenvolvedor web, curioso para novos aprendizados e
                    tecnologias. Atualmente estou no 4 semestre de ADS, também
                    atuando como freelancer nas horas vagas, utilizando
                    principlamento Nextjs, React e Node, mas também possuo
                    alguma experiência com Java e PHP.
                </p>
            </article>
            <p className="text-sm font-bold">Clique para copiar!</p>
            <button className="ml-5 rounded-lg self-end mx-auto py-2 bg-black px-4">
                <p className="text-white text-sm">
                    pedrocavallaro.contato@gmail.com
                </p>
            </button>
        </section>
    );
}
