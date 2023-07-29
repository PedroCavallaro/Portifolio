import Image from "next/image";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

export default function Home() {
    return (
        <main className="flex flex-col lg:gap-7 gap-4 overflow-hidden">
            <Hero />
            <AboutMe />
            <Projects />
            <div className="h-[10rem]"></div>
        </main>
    );
}
