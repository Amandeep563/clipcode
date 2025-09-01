import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        // Clear the authentication cookie
        const response = NextResponse.json({ success: true });

        // Redirect to the home page
        return NextResponse.redirect(new URL("/", request.url), {
            headers: response.headers,
        });
    } catch (error) {
        console.error("Logout failed:", error);

        // Return error response
        return NextResponse.json(
            { error: "Logout failed" },
            { status: 500 }
        );
    }
}

