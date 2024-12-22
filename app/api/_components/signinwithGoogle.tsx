'use client';

import { signIn } from "next-auth/react";

const SigninwithGoogle = () => {
    return (
        <button
        className="mx-auto flex p-5"
            type="button"
            onClick={() => {
                signIn('google').catch(err => console.error("Sign-in error:", err));
            }}
        >
            Sign in with Google
        </button>

    )

}

export default SigninwithGoogle;