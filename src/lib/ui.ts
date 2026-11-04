/** Shared class names, so blocks look the same in both starters. */
export const container = 'mx-auto w-full max-w-6xl px-6';

/** Small monospaced label above headings and in captions. */
export const label = 'font-mono text-xs uppercase tracking-[0.14em]';

/**
 * Classes of a button link; "drugorzedny" is the outlined variant, "onDark" adapts it to a dark background.
 */
export function buttonClass(style: string | null | undefined, onDark = false): string {
  const base = 'inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium transition-colors';

  if (style === 'drugorzedny') {
    return `${base} border ${onDark ? 'border-white/40 text-white hover:border-white' : 'border-ink text-ink hover:bg-ink hover:text-white'}`;
  }

  return `${base} border ${onDark ? 'border-white bg-white text-ink hover:bg-neutral-200' : 'border-ink bg-ink text-white hover:bg-neutral-700'}`;
}

/** Link attributes for links that open in a new tab. */
export function linkTarget(newTab: boolean | null | undefined): { target?: string; rel?: string } {
  return newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {};
}

/** Two-digit index used for numbered items, e.g. "01". */
export function index(position: number): string {
  return String(position + 1).padStart(2, '0');
}
