import { NextRequest, NextResponse } from 'next/server';
import {PrismaClient} from "@prisma/client";
const client = new PrismaClient();

export async function POST(req: NextRequest) {
    const body = await req.json();
    console.log("/api/user hitted", body);
    const user = await client.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    });
    console.log(user);
    return NextResponse.json({ username: body.username, password: body.password })
}

export async function GET() {
    const user = await client.user.findMany({});
    return Response.json(user)
}

