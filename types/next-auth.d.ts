// types/next-auth.d.ts

declare module "next-auth" {
    interface User {
        accessToken?: string; // Add other custom properties if needed
    }

    interface Session {
        user?: User;
    }
}
