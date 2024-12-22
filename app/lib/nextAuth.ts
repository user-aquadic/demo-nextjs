import NextAuth, {type AuthOptions} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),

        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {label: "Email", type: "email", placeholder: "user@cloudwa.net"},
                password: {label: "Password", type: "password"},
            },
            async authorize(credentials) {
                try {
                    const response = await axios.create({
                        baseURL: process.env.API_URL as string,
                        timeout: 10000,
                    }).post('v2/auth/login', {
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

    callbacks: {
        async redirect({ url, baseUrl }) {
            // Allows relative callback URLs
            if (url.startsWith("/")) return `${baseUrl}${url}`
            // Allows callback URLs on the same origin
            else if (new URL(url).origin === baseUrl) return url
            return baseUrl
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.name = user.name;
                token.email = user.email;
                token.accessToken = user.token;
            }
            return token;
        },
        async session({ session, token }) {
            session.user = {
                id: token.id,
                name: token.name,
                email: token.email,
                accessToken: token.accessToken,
            };
            return session;
        },
    },

    session: {
        strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions)

