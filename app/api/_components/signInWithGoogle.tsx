'use client';

import { signIn } from "next-auth/react";

const SignInWithGoogle = () => {
    return (
        <button
            type="button"
            onClick={() => {
                signIn('google').catch(err => console.error("Sign-in error:", err));
            }}
        >
            Sign in with Google
        </button>

    )

}

export default SignInWithGoogle;