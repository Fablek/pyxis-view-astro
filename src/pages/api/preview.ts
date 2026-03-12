import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ request, cookies, redirect }) => {
    const url = new URL(request.url);
    const path = url.searchParams.get('path') || '';
    const expires = url.searchParams.get('expires');
    const signature = url.searchParams.get('signature');

    const verifyUrl = `http://pyxis-admin:8000/api/preview/verify?path=${path}&expires=${expires}&signature=${signature}`;
    
    try {
        const response = await fetch(verifyUrl);
        const data = await response.json();

        if (!response.ok || !data.valid) {
            return new Response('Nieprawidłowa sygnatura z backendu', { status: 403 });
        }

        cookies.set('pyxis_preview', data.preview_token, {
            path: '/',
            httpOnly: true,
            sameSite: 'lax',
            maxAge: 3600
        });

        const redirectPath = (path === 'homepage' || path === '') ? '/' : `/${path}`;
        return redirect(redirectPath);

    } catch (e) {
        return new Response('Błąd połączenia z API: ' + e.message, { status: 500 });
    }
}