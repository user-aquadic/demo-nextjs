import NextAuth from "next-auth"
// import CredentialsProvider from "next-auth/providers/credentials";
// import axios from "axios";
import GoogleProvider from "next-auth/providers/google";
import { type AuthOptions} from "next-auth";

export const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),

        // CredentialsProvider({
        //     name: 'Credentials',
        //     credentials: {
        //         email: {label: "Email", type: "email", placeholder: "user@example.com"},
        //         password: {label: "Password", type: "password"},
        //     },
        //     async authorize(credentials) {
        //         try {
        //             const response = await axios.post('https://cloudwa.net/api/v2/auth/login', {
        //                 username: credentials?.email,
        //                 password: credentials?.password,
        //             });
        //
        //             const user = response.data.user;
        //
        //             if (user) {
        //                 return {
        //                     id: user.id,
        //                     name: user.name,
        //                     email: user.email,
        //                     token: response.data.token,
        //                 };
        //             }
        //             return null;
        //         } catch (error: unknown) {
        //             if (axios.isAxiosError(error) && error.response) {
        //                 throw new Error(error.response.data.message || 'Login failed');
        //             } else {
        //                 throw new Error('An unexpected error occurred');
        //             }
        //         }
        //     },
        // }),
    ],

    session: {
        strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions)

