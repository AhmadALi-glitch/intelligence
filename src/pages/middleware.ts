import { NextRequest } from 'next/server'

export const config = {
    matcher: '/api',
} 

export function middleware(request: NextRequest) {
    console.log("Middlewaring")
    // call our authentication function to check the request
    if ((request)) {
        // Respond with JSON indicating an error message
        return Response.json(
            { success: false, message: 'authentication failed' },
            { status: 401 }
        )
    }
}
