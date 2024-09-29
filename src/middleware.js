import { NextResponse } from "next/server"

const user = false;

const coo = 'faysalahmmed'

export const middleware = (request) => {
console.log(request.cookies.get('token'))
    // if (request.nextUrl.pathname.startsWith('/about')) {
    //     return NextResponse.redirect(new URL('/blogs', request.url))
    // }


    // if (!user) {
    //     return NextResponse.redirect(new URL('/login', request.url))
    // }
    // return NextResponse.next();

    // let cookies = request.cookies.get('token');

    // if (!cookies || cookies.value !== coo) {
    //     return NextResponse.redirect(new URL('login', request.url))
    // }

}
export const config = {
    matcher: ['/deshboard', '/about']
}