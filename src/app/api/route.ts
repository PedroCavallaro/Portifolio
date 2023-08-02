import { NextRequest, NextResponse } from "next/server";
import { transporter } from "../lib/transporter";

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get("name");
    const subject = searchParams.get("subject");
    const text = searchParams.get("text");
    let hasPassed = false;

    const message = await transporter.sendMail({
        from: name!,
        to: "pedrocavallaro.contato@gmail.com",
        subject: subject!,
        html: `<p>${text}</p>`,
    });
    if (message.accepted) {
        hasPassed = true;
    }
    return new NextResponse(JSON.stringify({ hasPassed }));
}
