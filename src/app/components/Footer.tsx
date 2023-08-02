"use client";
import EmailForm from "./Footer/EmailForm";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "../../../public/assets/email.json";
import { useRef } from "react";

export default function Footer() {
    const animationRef = useRef<LottieRefCurrentProps>(null);
    return (
        <div className="bg-black p-2 mt-10 flex flex-col gap-2 lg:h-[25rem] overflow-hidden">
            <div className="flex justify-center items-center mb-4">
                <EmailForm />
                <div className="">
                    <Lottie
                        className="h-[15rem] w-[15rem] relative -top-4 -right-3 lg:h-[22rem] lg:w-[25rem]"
                        lottieRef={animationRef}
                        animationData={animationData}
                    />
                </div>
            </div>
        </div>
    );
}
