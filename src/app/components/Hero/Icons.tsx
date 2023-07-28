import Link from "next/link";
import { GrGithub, GrLinkedin } from "react-icons/gr";
import { HiOutlineDocumentText } from "react-icons/hi";

export default function Iconst() {
    return (
        <div className="flex gap-4 ">
            <Link
                href={"https://www.github.com/PedroCavallaro"}
                target="_blank"
                className="hover:text-zinc-600 transition-all"
                referrerPolicy="no-referrer"
            >
                <GrGithub size={30} />
            </Link>
            <Link
                target="_blank"
                referrerPolicy="no-referrer"
                className="hover:text-zinc-600 transition-all"
                href={"https://www.linkedin.com/in/pedro-cavallaro/"}
            >
                <GrLinkedin size={30} />
            </Link>
            <a
                href="/CV_Pedro_Cavallaro.pdf"
                className="hover:text-zinc-600 transition-all"
                download={"CV-Pedro-Cavallaro"}
            >
                <HiOutlineDocumentText size={30} />
            </a>
        </div>
    );
}
