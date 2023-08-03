import { NextRequest, NextResponse } from "next/server";
import { transporter } from "../../lib/transporter";

type Data = {
    name: string;
    subject: string;
    text: string;
};

export async function POST(request: NextRequest) {
    const data: Data = await request.json();
    const { name, subject, text } = data;
    let hasPassed = false;

    const message = await transporter.sendMail({
        to: "pedrocavallaro.contato@gmail.com",
        subject: `${name} - ${subject}`,
        html: `<p>${text}</p>`,
    });
    if (message.accepted) {
        hasPassed = true;
    }
    return new NextResponse(JSON.stringify({ hasPassed }));
}
