import { useEffect, useRef, RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin safely
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimationOptions {
  triggerRef?: RefObject<HTMLElement | null>;
  cardsSelector?: string;
  headerSelector?: string;
  stagger?: number;
  yOffset?: number;
  duration?: number;
}

export function useSectionAnimation({
  triggerRef,
  cardsSelector,
  headerSelector = '.gsap-header',
  stagger = 0.1,
  yOffset = 28,
  duration = 0.75,
}: AnimationOptions) {
  const containerRef = useRef<HTMLElement | null>(null);
  const activeRef = triggerRef || containerRef;

  useEffect(() => {
    const el = activeRef.current;
    if (!el) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // Ensure all elements remain completely visible without transform
      gsap.set(el.querySelectorAll('.gsap-header, .gsap-card, .gsap-reveal'), {
        opacity: 1,
        y: 0,
        clearProps: 'all',
      });
      return;
    }

    const ctx = gsap.context(() => {
      // 1. Header / Titles Reveal
      const headers = el.querySelectorAll(headerSelector);
      if (headers.length > 0) {
        gsap.fromTo(
          headers,
          { opacity: 0, y: yOffset * 0.75 },
          {
            opacity: 1,
            y: 0,
            duration: duration * 0.9,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // 2. Staggered Cards / Child Elements
      if (cardsSelector) {
        const cards = el.querySelectorAll(cardsSelector);
        if (cards.length > 0) {
          gsap.fromTo(
            cards,
            { opacity: 0, y: yOffset },
            {
              opacity: 1,
              y: 0,
              duration,
              stagger,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: cards[0] || el,
                start: 'top 88%',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      }

      // 3. Generic Reveal Elements (e.g., bottom banners, trust strips)
      const genericReveals = el.querySelectorAll('.gsap-reveal');
      if (genericReveals.length > 0) {
        gsap.fromTo(
          genericReveals,
          { opacity: 0, y: yOffset * 0.7 },
          {
            opacity: 1,
            y: 0,
            duration: duration * 0.9,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: genericReveals[0] || el,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, el);

    return () => {
      ctx.revert();
    };
  }, [activeRef, cardsSelector, headerSelector, stagger, yOffset, duration]);

  return containerRef;
}
