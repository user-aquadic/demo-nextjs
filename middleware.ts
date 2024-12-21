import {withAuth} from "next-auth/middleware"
import {NextRequest, NextResponse} from "next/server";
import {getToken} from "next-auth/jwt";

export default withAuth(async function middleware(request: NextRequest) {
    const pathName = request.nextUrl.pathname;
    const isAuth = await getToken({req: request})
    const protectedRoutes = ['/account/'];
    const isAuthRoute = pathName.startsWith('/auth/');
    const isProtectedRoute = protectedRoutes.some(route => pathName.startsWith(route))

    if (!isAuth && isProtectedRoute) {
        return NextResponse.redirect(new URL('/api/signin', request.url));
    }

    if (isAuthRoute && isAuth) {
        return NextResponse.redirect(new URL('/', request.url));
    }
}, {
    callbacks: {
        async authorized() {
            return true;
        },
    },
});

export const config = {
    matcher: [
        '/account/:path*',
        '/auth/:path*',
    ],
};