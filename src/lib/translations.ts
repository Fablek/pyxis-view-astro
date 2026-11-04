/**
 * Texts of the starter's own interface (header, footer, preview bar, error page, forms) in the site languages.
 * Page content comes from the CMS and is not translated here.
 */
const translations = {
  pl: {
    home: 'Strona główna',
    menu: 'Menu',
    previewActive: 'Tryb podglądu aktywny',
    exitPreview: 'Wyjdź',
    builtWith: 'Starter Astro · Tailwind CSS 4',
    footerAbout: 'Headless CMS z panelem administracyjnym, REST API i systemem wtyczek. Ta strona to dane demo z seedera, wyrenderowane przez oficjalny starter.',
    footerPages: 'Strony',
    footerProject: 'Projekt',
    footerThesis: 'Praca inżynierska, Politechnika Śląska',
    learnMore: 'Szczegóły',
    notFoundTitle: 'Nie znaleziono strony',
    notFoundText: 'Strona, której szukasz, nie istnieje lub nie jest już dostępna.',
    backHome: 'Wróć na stronę główną',
    formSubmit: 'Wyślij',
    formError: 'Nie udało się wysłać formularza. Spróbuj ponownie.',
    contactRepository: 'Repozytorium',
    contactDocs: 'Dokumentacja',
    contactIssues: 'Zgłoszenia',
    contactUniversity: 'Uczelnia',
  },
  en: {
    home: 'Home',
    menu: 'Menu',
    previewActive: 'Preview mode active',
    exitPreview: 'Exit',
    builtWith: 'Astro starter · Tailwind CSS 4',
    footerAbout: 'A headless CMS with an admin panel, a REST API and a plugin system. This site is the seeded demo content, rendered by the official starter.',
    footerPages: 'Pages',
    footerProject: 'Project',
    footerThesis: 'Engineering thesis, Silesian University of Technology',
    learnMore: 'Details',
    notFoundTitle: 'Page not found',
    notFoundText: 'The page you are looking for does not exist or is no longer available.',
    backHome: 'Back to the homepage',
    formSubmit: 'Send',
    formError: 'The form could not be sent. Please try again.',
    contactRepository: 'Repository',
    contactDocs: 'Documentation',
    contactIssues: 'Issues',
    contactUniversity: 'University',
  },
};

export type Translations = (typeof translations)['pl'];

/**
 * Returns the interface texts for the site language; unknown languages fall back to Polish.
 */
export function getTranslations(language: string): Translations {
  return translations[language as keyof typeof translations] ?? translations.pl;
}
