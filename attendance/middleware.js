
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isProtectedRoute = createRouteMatcher(['/studentpanel(.*)', '/forum(.*)'])
export default clerkMiddleware(async (auth, req) => {
    if (isProtectedRoute(req)) await auth.protect()
})

export const config = {
    // matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],        // Always run for API routes
    // '/(api|trpc)(.*)',
    // ],
}