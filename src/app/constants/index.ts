export const projects = [
    {
        name: "Code life Blog",
        link: "https://code-life-blog.vercel.app",
        shortDesc: "Pequno blog criado com Next, React Node",
        longDesc:
            "Um blog feito por amigos para falar sobre a área da tecnologia e outros assuntos. No momento é só experimental mas quem sabe ele se torne algo maior no futuro!",
        imageMobile: "codeLifeMobile.png",
        imageDesktop: "codeLifeDesktop.png",
        isDeployed: true,
    },
    {
        name: "Game Store",
        imageMobile: "gameStoreMobile.png",
        imageDesktop: "GameStoreDesktop.png",
        shortDesc: "Pequena loja de jogos",
        longDesc:
            "Pequena loja de jogos. Inicialmente foi desenvolido como um projeto de faculdade utilizando PHP, porém eu decidi fazer uma versão melhorada, utilizando Next.js junto com Node.js",
        link: "https://github.com/PedroCavallaro/Theboys-games-store",
        isDeployed: false,
    },
    {
        name: "Ma reserve",
        shortDesc: "App facilitador de reservas",
        longDesc: "App facilitador de reservas",
        link: "https://code-life-blog.vercel.app",
        imageMobile: "maReserveMobile.png",
        imageDesktop: "ma-reserverDesktop.png",
        isDeployed: false,
    },
] as const;

export const experienceArray = [
    {
        company: "Cross Conection",
        role: "Suporte Técnico",
        highlights: ["Redes", "Solução de problemas", "Comunicação"],
    },
    {
        company: "Freelancer",
        role: "Desenvolvedor FullStack",
        highlights: [
            "Interfaces responsivas",
            "Modelagem de banco de dados",
            "Criação de APIs",
        ],
    },
];
