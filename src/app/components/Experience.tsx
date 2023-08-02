import { experienceArray } from "../constants";
import ExperienceCard from "./Experience/ExperienceCard";

export default function Experience() {
    return (
        <div className="flex flex-col mt-10 gap-2">
            <div className="flex gap-2 items-center justify-center">
                <div className=" h-[0.10rem] bg-zinc-600 w-full"></div>
                <h1 className=" font-bold leading-normal text-left ">
                    Experiências
                </h1>
                <div className=" h-[0.10rem] bg-zinc-600 w-full"></div>
            </div>
            <div className="flex justify-center items-center gap-5 mt-4">
                {experienceArray.map((e, index) => {
                    return (
                        <>
                            <ExperienceCard
                                company={e.company}
                                role={e.role}
                                highlights={e.highlights}
                                key={index.toString()}
                            />
                        </>
                    );
                })}
            </div>
            <div className=" h-[0.10rem] bg-zinc-600 w-full mt-4"></div>
        </div>
    );
}
