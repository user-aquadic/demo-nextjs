'use client';

import { signOut } from "next-auth/react";

const SignOut = () => {
    return (
        <button
        className="mx-auto"
            type="button"
            onClick={() => {
                signOut();
            }}
        >
            <p className="text-2xl text-purple-500 mt-5">Sign out</p>
        </button>

    )

}

export default SignOut;