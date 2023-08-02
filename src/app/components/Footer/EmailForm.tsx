import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Input from "../Input";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useState } from "react";

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
        await fetch(
            `http://localhost:3000/api?name=${name}&subject=${subject}&text=${text}`,
            {
                method: "GET",
            }
        )
            .then((res) => res.json())
            .then((data: ResponseItems) => {
                if (data.hasPassed) {
                    handleEmail(true);
                }
            });
    }
    function handleEmail(condition: boolean) {
        setSucces(condition);
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
    const [succes, setSucces] = useState(false);
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
                    succes && "bg-emerald-500 "
                } hover:bg-emerald-500 transition-all text-white relative flex items-center justify-center  rounded-lg -top-4 text-xs p-1 lg:h-[2rem] lg:text-md`}
            >
                {succes ? <AiOutlineCheckCircle size={20} /> : "Enviar"}
            </button>
        </form>
    );
}
