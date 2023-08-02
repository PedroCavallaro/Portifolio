import Input from "../Input";

export default function EmailForm() {
    return (
        <form className="flex flex-col gap-2 text-white relative -right-12 shadow bg-zinc-900 px-4 rounded-md mt-4">
            <p className="text-xs text-center text-white mt-4  lg:text-lg lg:w-[20rem]">
                Me mande uma mensagem!
            </p>
            <Input
                label="Email"
                erros=""
                className=""
                placeholder="email@email.com"
            />
            <Input
                label="Assunto"
                erros=""
                placeholder="Sobre este portifólio"
            />
            <div className="w-32 h-32 flex flex-col gap-1">
                <label htmlFor="" className="text-xs">
                    Texto
                </label>
                <textarea
                    name=""
                    id=""
                    className="text-black text-xs rounded-sm resize-none lg:w-[20rem] lg:text-md"
                    cols={10}
                    rows={5}
                ></textarea>
            </div>
            <button className="bg-black hover:bg-emerald-500 transition-all text-white relative  rounded-lg -top-5 text-xs p-1 lg:h-[2rem] lg:text-md">
                Enviar
            </button>
        </form>
    );
}
