import { experienceArray } from "../constants";
import ExperienceCard from "./Experience/ExperienceCard";

export default function Experience() {
    return (
        <div className="flex flex-col gap-4 mt-4">
            <h1 className="text-lg text-center font-bold leading-normal hidden lg:flex lg:justify-center lg:items-center ">
                Experiência
            </h1>
            <div className="flex gap-2 items-center justify-center lg:hidden">
                <div className=" h-[0.10rem] bg-zinc-600 w-full"></div>
                <h1 className="text-lg font-bold leading-normal  text-center">
                    Experiência
                </h1>
                <div className=" h-[0.10rem] bg-zinc-600 w-full"></div>
            </div>
            <div className="flex justify-center items-center gap-5 ">
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
        </div>
    );
}
