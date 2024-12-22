'use client';

import {useSession} from "next-auth/react";
import {useEffect, useState} from 'react'
import {echo} from "@/app/lib/echo";

const SessionsSelector = () => {
    const {status} = useSession();
    const [notifications, setNotifications] = useState<Array<string>>([]);

    useEffect(() => {
        echo.channel('private-session.9b514696-e6bd-4e81-9b32-cd98abe57a75')
            .on('wa_message', function (data: {  payload: {body : string} }) {
                const message = data.payload.body.substring(0, 20); // Trim to first 20 characters
                setNotifications((prev: Array<string>) => [...prev, message]);
            });

        // Cleanup on unmount
        return () => {
            echo.disconnect();
        };
    }, []);

    if (status != 'authenticated') return (<></>);

    return (
        <>
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
            <br/>
            <div>
                {/* Notification UI */}
                <div className="notifications-container">
                    {notifications.map((notification, index) => (
                        <div key={index} className="notification">
                            {notification}
                        </div>
                    ))}
                </div>

                {/* Optional: Toast-like styling */}
                <style jsx>{`
                    .notifications-container {
                        position: fixed;
                        top: 20px;
                        right: 20px;
                        z-index: 1000;
                    }

                    .notification {
                        background-color: #333;
                        color: #fff;
                        padding: 10px 20px;
                        margin-bottom: 10px;
                        border-radius: 5px;
                        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
                    }
                `}</style>
            </div>
        </>
    )

};

export default SessionsSelector;