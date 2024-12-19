import { type AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"; 
import axios from "axios";

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
            email: { label: "Email", type: "email", placeholder: "user@example.com" },
            password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
            try {
                const response = await axios.post('https://cloudwa.net/api/v2/auth/login', {
                username: credentials?.email,
                password: credentials?.password,
                });
        
                const user = response.data.user;
        
                if (user) {
                return {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    token: response.data.token,
                };
                }
                return null;
            } catch (error: unknown) {
                if (axios.isAxiosError(error) && error.response) {
                throw new Error(error.response.data.message || 'Login failed');
                } else {
                throw new Error('An unexpected error occurred');
                }
            }
            },
        }),
        ],

    

    session: {
        strategy: 'jwt',
        maxAge: 1 * 24 * 60 * 60
    },
    secret:process.env.NEXTAUTH_SECRET,
};
