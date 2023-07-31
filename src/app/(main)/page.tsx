import Image from "next/image";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <main className="flex flex-col lg:gap-7 overflow-hidden">
            <Hero />
            <AboutMe />
            <Projects />
            <Experience />
            <Footer />
        </main>
    );
}
