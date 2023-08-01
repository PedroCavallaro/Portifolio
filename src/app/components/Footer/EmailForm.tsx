import Input from "../Input";

export default function EmailForm() {
    return (
        <form className="flex flex-col gap-2 text-white">
            <Input label="Email" erros="" className="" />
            <Input label="Assunto" erros="" />
            <div className="w-32 h-32 flex flex-col gap-1">
                <label htmlFor="" className="text-xs">
                    Texto
                </label>
                <textarea
                    name=""
                    id=""
                    className="text-black text-xs"
                    cols={10}
                    rows={5}
                ></textarea>
            </div>
            <button className="bg-zinc-700 text-white relative  rounded-lg -top-5 text-xs p-1">
                Enviar
            </button>
        </form>
    );
}
