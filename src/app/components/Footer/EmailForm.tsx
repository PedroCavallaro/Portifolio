import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Input from "../Input";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useEffect, useReducer, useState } from "react";
import { INIT_STATE, emailReducer } from "@/app/reducers";
import { CgSpinner } from "react-icons/cg";
import { swal } from "@/app/lib/swall";

const schema = z.object({
    name: z.string().min(3, "Minimo 3 caractéres"),
    subject: z.string().min(5, "Minimo 5 caracteres"),
    text: z.string().min(10, "Minimo 10 caracteres"),
});

type FormData = z.infer<typeof schema>;
type ResponseItems = {
    hasPassed: true;
};

export default function EmailForm() {
    async function submit({ name, subject, text }: FormData) {
        dispatch({ type: 0 });
        await fetch(
            `http://localhost:3000/api?name=${name}&subject=${subject}&text=${text}`,
            {
                method: "GET",
            }
        )
            .then((res) => res.json())
            .then((data: ResponseItems) => {
                if (data.hasPassed) {
                    dispatch({ type: 2 });
                }
            })
            .catch((err) => dispatch({ type: 1 }));
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({
        mode: "onBlur",
        resolver: zodResolver(schema),
    });
    const [emailState, dispatch] = useReducer(emailReducer, INIT_STATE);

    useEffect(() => {
        if (emailState.success) {
            swal.fire();
        }
        const timeout = setTimeout(() => {
            dispatch({ type: 3 });
        }, 5000);

        return () => {
            clearTimeout(timeout);
        };
    }, [emailState.success]);
    return (
        <form
            onSubmit={handleSubmit((data) => {
                submit(data);
                reset();
            })}
            className="flex flex-col gap-2 text-white relative -right-12 shadow bg-zinc-900 px-4 rounded-md mt-4"
        >
            <p className="text-xs text-center text-white mt-4  lg:text-lg lg:w-[20rem]">
                Me mande uma mensagem!
            </p>
            <Input
                label="Nome"
                {...register("name")}
                erros={errors.name?.message}
                className=""
                placeholder="email@email.com"
            />
            <Input
                {...register("subject")}
                label="Assunto"
                erros={errors.subject?.message}
                placeholder="Sobre este portifólio"
            />
            <div className="w-32 h-32 flex flex-col gap-1">
                <label htmlFor="" className="text-xs">
                    Texto
                </label>
                <textarea
                    {...register("text")}
                    id=""
                    className="text-black text-xs rounded-sm resize-none lg:w-[20rem] lg:text-md"
                    cols={10}
                    rows={5}
                ></textarea>
                {errors.text && (
                    <span className="text-red-500 text-xs lg:text-sm">
                        {errors.text.message}
                    </span>
                )}
            </div>
            <button
                className={`bg-black ${
                    emailState.success && "bg-emerald-500 "
                } hover:bg-emerald-500 transition-all text-white relative flex items-center justify-center  rounded-lg -top-4 text-xs p-1 lg:h-[2rem] lg:text-md`}
            >
                {emailState.loading && (
                    <div className="animate-spin">
                        <CgSpinner />
                    </div>
                )}
                {emailState.success && <AiOutlineCheckCircle size={20} />}
                {emailState.none && "Enviar"}
            </button>
        </form>
    );
}
