import type { PyxisPage, PyxisSite } from './types';

const API_URL = import.meta.env.INTERNAL_API_URL;

/**
 * Fetches a page from Pyxis CMS by its path ("" or undefined = homepage).
 * Returns null when the page does not exist or is not available (404).
 */
export async function fetchPage(path: string | undefined, previewToken?: string): Promise<PyxisPage | null> {
  const url = path ? `${API_URL}/api/pages/${path}` : `${API_URL}/api/pages`;

  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
      ...(previewToken ? { 'X-Pyxis-Preview': previewToken } : {}),
    },
    signal: AbortSignal.timeout(5000),
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(`Pyxis API responded with ${response.status} for ${url}`);
  }

  const { data } = (await response.json()) as { data: PyxisPage };

  return data;
}

/** Used when the CMS cannot be reached, so the layout and error pages still render. */
const DEFAULT_SITE: PyxisSite = { language: 'pl' };

/**
 * Fetches the site-wide settings from Pyxis CMS (e.g. the language for <html lang>).
 * Falls back to the defaults when the API is not available.
 */
export async function fetchSite(): Promise<PyxisSite> {
  try {
    const response = await fetch(`${API_URL}/api/site`, {
      headers: { Accept: 'application/json' },
      signal: AbortSignal.timeout(5000),
    });

    if (!response.ok) {
      return DEFAULT_SITE;
    }

    const { data } = (await response.json()) as { data: PyxisSite };

    return data;
  } catch {
    return DEFAULT_SITE;
  }
}
