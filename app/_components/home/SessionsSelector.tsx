'use client';

import {useSession} from "next-auth/react";
import { useEffect } from 'react'
import {echo} from "@/app/lib/echo";

const SessionsSelector = () => {
    const {status} = useSession();
    useEffect(()=> {
        echo.channel('private-session.9daa9a85-b8f6-4eb8-90b8-d8ada7ad0229')
            .on('wa_message', function(data: unknown){
                console.log(data);
            });
    });

    if (status != 'authenticated') return (<></>);

    return (
        <section className="py-16">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white shadow-md p-6 rounded-lg text-center">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Session (AQ Whatsapp)</h3>
                    <p className="text-gray-600">xXxXxX-XxXxXxX-xXxXxXx</p>
                </div>
                <div className="bg-white shadow-md p-6 rounded-lg text-center">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Session (CW Whatsapp)</h3>
                    <p className="text-gray-600">yYyYyY-yYyYyYy-YyYyYyY</p>
                </div>
                <div className="bg-white shadow-md p-6 rounded-lg text-center">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Session (OB Whatsapp)</h3>
                    <p className="text-gray-600">zZzZzZ-zZzZzZz-ZzZzZzZ</p>
                </div>
            </div>
        </section>
    )

};

export default SessionsSelector;