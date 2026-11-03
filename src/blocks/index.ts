import type { PyxisBlock } from '@/lib/pyxis/types';
import Test from './Test.astro';
import Obraz from './Obraz.astro';
import Hero from './Hero.astro';
import Tekst from './Tekst.astro';
import Galeria from './Galeria.astro';
import Formularz from './Formularz.astro';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type BlockComponent = (props: { block: PyxisBlock<any> }) => unknown;

/**
 * Maps a block type (the slug of a field group in the "block" mode) to its component.
 *
 * To add a block:
 * 1. Create a field group in Pyxis CMS with "Usage: Content block", e.g. with the slug "hero".
 * 2. Create a component in this directory, e.g. Hero.astro, receiving the `block` prop.
 * 3. Register it below: `hero: Hero`.
 */
export const blocks: Record<string, BlockComponent> = {
  test: Test,
  obraz: Obraz,
  hero: Hero,
  tekst: Tekst,
  galeria: Galeria,
  formularz: Formularz,
};