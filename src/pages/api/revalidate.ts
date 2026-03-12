import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
    try {
        const body = await request.json();
        const { path, secret } = body;

        // Check if secret token is valid
        // Set REVALIDATE_TOKEN in both apps
        if (secret !== import.meta.env.REVALIDATE_TOKEN) {
            return new Response(JSON.stringify({ message: "Invalid token" }), {
                status: 401,
            });
        }

        if (!path) {
            return new Response(JSON.stringify({ message: "Path is required" }), {
                status: 400,
            });
        }

        console.log(`[Revalidate] Refreshing path: ${path}`);

        return new Response(JSON.stringify({
            revalidated: true, 
            now: Date.now(),
            path: path
        }), {
            status: 200,
        });
    } catch (err) {
        return new Response(JSON.stringify({ message: "Error revalidating" }), {
            status: 500,
        });
    }
};