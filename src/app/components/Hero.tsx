"use client";
import { useEffect, useRef, useState } from "react";
import Icons from "./Hero/Icons";

export default function Hero() {
    const [count, setCount] = useState<number>(0);
    const [title, setTitle] = useState<string>("Fullstack");

    const tilteRef = useRef<string>(title);
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    useEffect(() => {
        const titles = ["Fullstack", "React", "Node.js"];
        let iteration = 0;
        let interval = setInterval(() => {
            tilteRef.current = titles[count]
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return titles[count][index];
                    }
                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");

            if (tilteRef.current.length === Math.floor(iteration)) {
                if (count === titles.length - 1) {
                    setCount(0);
                } else {
                    setCount(count + 1);
                }
            }
            iteration += 1 / 3;
            setTitle(tilteRef.current);
        }, 120);

        return () => {
            clearInterval(interval);
        };
    }, [count]);

    return (
        <section className="flex  justify-center  items-center w-screen mx-auto h-[14rem] bg-black lg:h-[25rem] ">
            <article className="text-white font-extrabold flex flex-col gap-2 lg:mr-[10rem] ">
                <div className="flex flex-col">
                    <h2 className="text-xs lg:text-2xl">
                        Prazer! meu nome é Pedro
                    </h2>
                    <h1 className="text-4xl lg:text-8xl uppercase w-20">
                        {title}
                    </h1>
                    <h1 className="text-4xl lg:text-8xl uppercase">
                        Developer
                    </h1>
                </div>
                <Icons />
            </article>
        </section>
    );
}
