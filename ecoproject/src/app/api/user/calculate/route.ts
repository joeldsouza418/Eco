// app/api/user/calculate/route.ts (Next.js App Router)
import { NextResponse } from "next/server";
import { spawn } from "child_process";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const number = body.number; // expecting { "number": 42 }

        return new Promise((resolve, reject) => {
            const py = spawn("python", ["process.py", number.toString()]);

            let result = "";
            py.stdout.on("data", (data) => {
                result += data.toString();
            });

            py.stderr.on("data", (data) => {
                console.error("Python error:", data.toString());
            });

            py.on("close", () => {
                resolve(NextResponse.json({ result }));
            });
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}
