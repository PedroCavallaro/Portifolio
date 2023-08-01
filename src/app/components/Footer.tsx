import EmailForm from "./Footer/EmailForm";
import email from "../../../public/assets/email.png";
import Image from "next/image";

export default function Footer() {
    return (
        <div className="bg-black p-2 mt-10 flex flex-col gap-2">
            <p className="text-xs text-white text-center mt-4">
                Se achar mais facíl, pode me contactar por aqui mesmo
            </p>
            <div className="flex gap-3  justify-center items-center">
                <EmailForm />
                <div className="">
                    <Image
                        src={email}
                        className="object-cover h-44"
                        alt="Email Image"
                        height={1000}
                        width={1000}
                    />
                </div>
            </div>
        </div>
    );
}
