import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    return JSON.stringify({ oi: "Oi" });
}
