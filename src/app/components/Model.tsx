"use client";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "../../../public/assets/animation-2.json";
import { useRef } from "react";
export default function Model() {
    const animationRef = useRef<LottieRefCurrentProps>(null);
    return (
        <>
            <Lottie
                lottieRef={animationRef}
                animationData={animationData}
                className="relative lg:mx-0 -top-14 lg:top-0 lg:w-[20rem] lg:h-[20rem] lg:ml-7"
            />
        </>
    );
}
