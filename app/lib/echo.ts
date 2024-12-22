import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

export const echo = new Echo({
    broadcaster: 'pusher',
    Pusher: Pusher,
    key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY,
    cluster: process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER ?? 'mt1',
    wsHost: process.env.NEXT_PUBLIC_PUSHER_HOST ? process.env.NEXT_PUBLIC_PUSHER_HOST : `ws-${process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER}.pusher.com`,
    wsPort: process.env.NEXT_PUBLIC_PUSHER_PORT ?? 80,
    wssPort: process.env.NEXT_PUBLIC_PUSHER_PORT ?? 443,
    forceTLS: (process.env.NEXT_PUBLIC_PUSHER_SCHEME ?? 'https') === 'https',
    encrypted: (process.env.NEXT_PUBLIC_PUSHER_SCHEME ?? 'https') === 'https',
    enabledTransports: ['ws', 'wss'],
    authEndpoint: '/api/broadcasting/auth', // App Router API route
});
