'use client';

import {signIn, signOut, useSession} from "next-auth/react";

const SignInOrLogout = () => {
    const {status} = useSession();

    return (
        <>
            {
                status === 'loading' && <span className={`text-purple-500`}>
                    Loading...
                </span>
            }
            {
                status === 'unauthenticated' && <button
                    type="button"
                    className={`text-purple-500`}
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
                    className={`text-purple-500`}
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