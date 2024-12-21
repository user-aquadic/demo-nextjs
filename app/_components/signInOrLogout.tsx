'use client';

import {signIn, signOut, useSession} from "next-auth/react";

const SignInOrLogout = () => {
    const {status} = useSession();

    return (
        <>
            {status === 'loading' && <p> Loading... </p>}
            {
                status === 'unauthenticated' && <button
                    type="button"
                    onClick={() => {
                        signIn()
                    }}
                >
                    Sign in
                </button>
            }
            {
                status === 'authenticated' && <button
                    type="button"
                    onClick={() => {
                        signOut()
                    }}
                >
                    Sign Out
                </button>
            }
        </>
    )

};

export default SignInOrLogout;