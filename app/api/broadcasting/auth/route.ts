import axios from 'axios';
import {getServerSession, Session} from "next-auth";
import {authOptions} from "@/app/lib/nextAuth";
import { NextRequest } from 'next/server';
import { AxiosError } from 'axios';

export async function POST(req: NextRequest) {
    const session: Session|null = await getServerSession(authOptions);

    if (!session || !session.user) {
        return new Response(
            JSON.stringify({message: 'Unauthorized'}),
            {status: 401}
        );
    }

    try {
        const formData = await req.text();

        // Forward the request to Laravel with the user's token
        const response = await axios.create({
            baseURL: process.env.API_URL as string,
            timeout: 10000,
        }).post(
            `broadcasting/auth`,
            formData, // Forward form-encoded data as-is
            {
                headers: {
                    'Authorization': `Bearer ${session.user.accessToken}`, // Include the token from the session
                    'Content-Type': 'application/x-www-form-urlencoded', // Set the correct content type
                },
            }
        );

        return new Response(JSON.stringify(response.data), {
            status: response.status,
        });
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            return new Response(
                JSON.stringify({ message: error.response?.data?.message || 'Internal Server Error' }),
                { status: error.response?.status || 500 }
            );
        }

        return new Response(
            JSON.stringify({ message: 'Unexpected Error' }),
            { status: 500 }
        );
    }
}
