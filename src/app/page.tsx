import Image from "next/image";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

export default function Home() {
    return (
        <main className="flex flex-col lg:gap-7 gap-4 overflow-hidden">
            <Hero />
            <AboutMe />
            <Projects />
            <Experience />
            <div className="h-[10rem]"></div>
        </main>
    );
}
