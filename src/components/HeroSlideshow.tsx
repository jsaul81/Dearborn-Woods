import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

/**
 * Hero background slideshow.
 *
 * TO ADD OR REMOVE PHOTOS: drop .jpg files into src/assets/hero/ and rebuild.
 * They are picked up automatically, in filename order, so name them
 * hero-01.jpg, hero-02.jpg, hero-03.jpg ... to control the sequence.
 * Nothing else needs editing.
 */
const images = Object.entries(
  import.meta.glob('../assets/hero/*.{jpg,jpeg,png,webp}', {
    eager: true,
    query: '?url',
    import: 'default',
  }) as Record<string, string>,
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, url]) => url);

const SLIDE_MS = 6000;
const FADE_S = 1.6;

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0);

  // Respect the visitor's reduced-motion setting: hold on the first photo.
  const reducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  const shouldCycle = images.length > 1 && !reducedMotion;

  useEffect(() => {
    if (!shouldCycle) return;
    const id = setInterval(() => setIndex(i => (i + 1) % images.length), SLIDE_MS);
    return () => clearInterval(id);
  }, [shouldCycle]);

  // Warm the next image so the crossfade never reveals a half-loaded photo.
  useEffect(() => {
    if (!shouldCycle) return;
    const next = new Image();
    next.src = images[(index + 1) % images.length];
  }, [index, shouldCycle]);

  // No photos in the folder: fall back to the flat brand panel rather than break.
  if (images.length === 0) return null;

  return (
    <AnimatePresence initial={false}>
      <motion.img
        key={images[index]}
        src={images[index]}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: FADE_S, ease: 'easeInOut' }}
      />
    </AnimatePresence>
  );
}
