// types/next-auth.d.ts
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from "next-auth";

declare module "next-auth" {
    interface User {
        id?: string;
        accessToken?: string; // Add other custom properties if needed
    }

    interface Session {
        user?: User;
    }
}
