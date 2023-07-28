export default function AboutMe() {
    return (
        <section className="flex items-center justify-center flex-col gap-2 text-white">
            <div className="w-[10rem] h-[10rem] bg-white"></div>
            <h3 className="text-center font-bold">Sobre Mim</h3>
            <p className="text-xs text-center px-4 leading-snug">
                Sou um desenvolvedor web, curioso para novos aprendizados e
                tecnologias. Atualmente estou no 4 semestre de ADS, também
                atuando como freelancer nas horas vagas, utilizando
                principlamento Nextjs, React e Node, mas também possuo alguma
                experiência com Java e PHP.
            </p>
        </section>
    );
}
