"use client";
import { useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
interface ProjectCardProps {
    name: string;
    link: string;
    imageMobile: string;
    imageDestktop: string;
    isDeployed: boolean;
    shortDesc: string;
    longDesc: string;
}

export default function ProjectCard({
    name = "",
    link = "",
    imageMobile = "",
    imageDestktop = "",
    isDeployed = false,
    shortDesc = "",
    longDesc = "",
}: ProjectCardProps) {
    function handleButtonClick() {
        setIsTextOpen(!isTextOpen);
    }
    const [isTextOpen, setIsTextOpen] = useState<boolean>(false);
    return (
        <div className="flex justify-center items-center flex-col skew-x-[20deg] lg:skew-x-[30deg]">
            <div className="bg-gray-800 w-[6rem] h-[8rem] lg:w-[25rem] lg:h-[15rem] relative overflow-hidden rounded-sm group  ">
                <Image
                    src={`/assets/${imageMobile}`}
                    className="object-center object-cover flex lg:hidden rounded-md"
                    alt={name}
                    width={1000}
                    height={1000}
                />
                <Image
                    src={`/assets/${imageDestktop}`}
                    className="w-full hidden lg:flex h-full object-cover rounded-md"
                    alt={name}
                    width={1000}
                    height={1000}
                />
                <div
                    data-isopen={isTextOpen}
                    className="h-full w-full absolute bg-white -bottom-64 data-[isopen=true]:bottom-0 transition-all lg:group-hover:bottom-0"
                >
                    <h2 className="text-black text-xs px-2 mt-2 leading-relaxed select-none">
                        <p className=" block lg:hidden">{shortDesc}</p>
                        <p className=" hidden lg:block">{longDesc}</p>

                        <br />

                        <Link
                            target="_blank"
                            referrerPolicy="no-referrer"
                            href={link}
                            className="underline hover:text-zinc-900 transition-all relative -top-2 lg:-top-o"
                        >
                            {isDeployed ? "Visitar " : "Ver mais "}
                        </Link>
                    </h2>
                </div>

                <div className="text-black absolute -bottom-0 flex items-center justify-center w-full z-50 lg:hidden ">
                    {isTextOpen ? (
                        <button onClick={handleButtonClick}>
                            <AiOutlineClose />
                        </button>
                    ) : (
                        <button onClick={handleButtonClick}>
                            <FaChevronUp />
                        </button>
                    )}
                </div>
            </div>
            <p className="text-white text-xs text-center mt-2  flex lg:text-lg">
                {name}
            </p>
        </div>
    );
}
