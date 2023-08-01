import { forwardRef, ComponentProps, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    erros: string;
};
// eslint-disable-next-line react/display-name
const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        { name = "", type = "text", className = "", erros, label, ...props },
        ref
    ) => {
        return (
            <div className="flex flex-col gap-1 text-xs">
                <label htmlFor="">{label}</label>
                <input
                    ref={ref}
                    className={twMerge(`w-32 text-black ${className}`)}
                    {...props}
                />
                {erros && <span>{erros}</span>}
            </div>
        );
    }
);

export default Input;
