import type { PyxisBlock } from '@/lib/pyxis/types';
import Hero from './Hero.astro';
import Liczby from './Liczby.astro';
import Funkcje from './Funkcje.astro';
import DlaKogo from './DlaKogo.astro';
import TekstObraz from './TekstObraz.astro';
import Kod from './Kod.astro';
import Kroki from './Kroki.astro';
import Faq from './Faq.astro';
import OsCzasu from './OsCzasu.astro';
import ZobaczTez from './ZobaczTez.astro';
import Cta from './Cta.astro';
import Tekst from './Tekst.astro';
import Obraz from './Obraz.astro';
import Galeria from './Galeria.astro';
import Formularz from './Formularz.astro';
import Test from './Test.astro';
import Kontakt from './Kontakt.astro';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type BlockComponent = (props: { block: PyxisBlock<any> }) => unknown;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type StaticFieldsComponent = (props: { fields: any }) => unknown;

/**
 * Maps a block type (the slug of a field group in the "block" mode) to its component.
 *
 * To add a block:
 * 1. Create a field group in Pyxis CMS with "Usage: Content block", e.g. with the slug "baner".
 * 2. Create a component in this directory, e.g. Baner.astro, receiving the `block` prop.
 * 3. Register it below: `baner: Baner`.
 */
export const blocks: Record<string, BlockComponent> = {
  hero: Hero,
  liczby: Liczby,
  funkcje: Funkcje,
  dla_kogo: DlaKogo,
  tekst_obraz: TekstObraz,
  kod: Kod,
  kroki: Kroki,
  faq: Faq,
  os_czasu: OsCzasu,
  zobacz_tez: ZobaczTez,
  cta: Cta,
  tekst: Tekst,
  obraz: Obraz,
  galeria: Galeria,
  formularz: Formularz,
  test: Test,
};

/**
 * Maps a field group in the "static page fields" mode (its slug in page.fields) to the component that shows its values.
 * Static fields are rendered after the content blocks.
 */
export const staticFields: Record<string, StaticFieldsComponent> = {
  kontakt: Kontakt,
};
