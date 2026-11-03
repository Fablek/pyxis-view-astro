/**
 * Texts of the starter's own interface (navigation, preview bar, error page, form) in the site languages.
 * Page content comes from the CMS and is not translated here.
 */
const translations = {
  pl: {
    home: 'Strona główna',
    previewActive: 'Tryb podglądu aktywny',
    exitPreview: 'Wyjdź',
    builtWith: 'Zbudowano z Astro i Tailwind v4.',
    notFoundTitle: 'Nie znaleziono strony',
    notFoundText: 'Strona, której szukasz, nie istnieje lub nie jest już dostępna.',
    backHome: 'Wróć na stronę główną',
    formSubmit: 'Wyślij',
    formError: 'Nie udało się wysłać formularza. Spróbuj ponownie.',
  },
  en: {
    home: 'Home',
    previewActive: 'Preview mode active',
    exitPreview: 'Exit',
    builtWith: 'Built with Astro & Tailwind v4.',
    notFoundTitle: 'Page not found',
    notFoundText: 'The page you are looking for does not exist or is no longer available.',
    backHome: 'Back to the homepage',
    formSubmit: 'Send',
    formError: 'The form could not be sent. Please try again.',
  },
};

export type Translations = (typeof translations)['pl'];

/**
 * Returns the interface texts for the site language; unknown languages fall back to Polish.
 */
export function getTranslations(language: string): Translations {
  return translations[language as keyof typeof translations] ?? translations.pl;
}
