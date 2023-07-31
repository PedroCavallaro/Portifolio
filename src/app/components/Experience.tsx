import ExperienceCard from "./Experience/ExperienceCard";

export default function Experience() {
    return (
        <div className="p-2">
            <h1>Experiência</h1>
            <div className="flex justify-center items-center gap-5 mt-4">
                <ExperienceCard />
                <ExperienceCard />
            </div>
        </div>
    );
}
