import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ cookies, redirect }) => {
    cookies.delete('pyxis_preview', { path: '/' });
    return redirect('/');
}