import {
    NextResponse
} from "next/server";
import middlewareAuth from "./utils/middlewareAuth";

export async function middleware(req) {

    console.log(req.url, req.nextUrl.pathname)
    const url = req.url;
    const pathname = req.nextUrl.pathname;

    if (pathname.startsWith("/profile")) {

        const user = await
        
        middlewareAuth(req)
        if (!user) NextResponse.redirect(new URL("/", url))
    }

    if (pathname.startsWith("/admin")) {
        const user = await middlewareAuth(req);
        if (!user) NextResponse.redirect(new URL("/", url))
        if (user && user.role !== "ADMIN") NextResponse.redirect(new URL("/", url))
    }

}

export const config = {
    matcher: ["/admin/:path*", "/profile/:path*"]
}