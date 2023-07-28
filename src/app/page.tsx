import Image from "next/image";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

export default function Home() {
    return (
        <main className="flex flex-col">
            <Hero />
            <AboutMe />
            <Projects />
        </main>
    );
}
