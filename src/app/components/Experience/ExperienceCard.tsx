interface ExperienceCardProps {
    company: string;
    role: string;
    highlights: Array<string>;
}
export default function ExperienceCard({
    company,
    role,
    highlights,
}: ExperienceCardProps) {
    return (
        <div className="bg-black leading-relaxed w-[145px] h-[148px] rounded-md text-white p-2 shadow-lg">
            <h3>{company}</h3>
            <p className="text-sm py-1">{role}</p>
            <ul className="text-xs list-disc">
                {highlights.map((e, index) => {
                    return (
                        <>
                            <li key={index.toString()}>{e}</li>
                        </>
                    );
                })}
            </ul>
        </div>
    );
}
