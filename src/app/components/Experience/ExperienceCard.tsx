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
        <div className="bg-black leading-relaxed w-[145px] h-[180px] rounded-md text-white p-2 shadow-lg lg:w-[25rem]">
            <h3 className="lg:text-2xl  ">{company}</h3>
            <p className="text-sm py-1 lg:text-lg ">{role}</p>
            <ul className="text-xs lg:text-md text-zinc-400">
                {highlights.map((e, index) => {
                    return (
                        <>
                            <li
                                className="ml-3 list-disc my-[3px] lg:my-2 "
                                key={index.toString()}
                            >
                                {e}
                            </li>
                        </>
                    );
                })}
            </ul>
        </div>
    );
}
