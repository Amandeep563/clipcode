/**
 * Client-side logout function for use in components
 * Calls the logout API and redirects to home page
 * @returns Promise that resolves when logout is complete
 */
export async function clientLogout(): Promise<void> {
    try {
        // Call logout API
        const response = await fetch("/api/auth/signout", {
            method: "POST",
            credentials: "include",
        });

        if (!response.ok) {
            throw new Error("Logout API call failed");
        }

        // Redirect to home page after successful logout
        window.location.href = "/";
    } catch (error) {
        console.error("Client logout failed:", error);
        // Fallback: redirect to home even if API fails
        window.location.href = "/";
    }
}
