"use client";

import { useState } from "react";

export default function EmailButton() {
    function handleCopy(condition: boolean) {
        setIsCopied(condition);
    }
    function copyEmail() {
        navigator.clipboard.writeText("pedrocavallaro.contato@gmail.com");
        handleCopy(true);
        const timeout = setTimeout(() => {
            handleCopy(false);
            clearTimeout(timeout);
        }, 4000);
    }

    const [isCopied, setIsCopied] = useState<boolean>(false);

    return (
        <button
            onClick={copyEmail}
            className="rounded-lg self-end mx-auto py-2 bg-black px-4 relative overflow-hidden group lg:w-full "
        >
            <div
                data-copied={isCopied}
                className="bg-zinc-400 w-full h-full absolute -bottom-10 lg:-bottom-12 left-0 -skew-y-6 group-hover:bottom-0 transition-all data-[copied=true]:bg-emerald-500 "
            >
                <p className="text-sm mt-2 text-white">
                    {isCopied ? "Email copiado!" : "Clique para copiar!"}
                </p>
            </div>
            <p className="text-white text-sm">
                pedrocavallaro.contato@gmail.com
            </p>
        </button>
    );
}
