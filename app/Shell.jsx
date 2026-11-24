'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import Lenis from 'lenis';
import Header from './Header';
import Footer from './Footer';

export default function Shell({ children }) {
  const reduced = useReducedMotion();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    if (reduced) return;
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true });
    let id;
    const frame = t => { lenis.raf(t); id = requestAnimationFrame(frame); };
    id = requestAnimationFrame(frame);
    return () => { cancelAnimationFrame(id); lenis.destroy(); };
  }, [reduced]);

  useEffect(() => {
    const fn = () => setShowTop(window.scrollY > 600);
    fn();
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <>
      <a className="fixed -top-[100px] z-[200] p-[15px] bg-white text-black focus:top-[10px]" href="#main">Skip to content</a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 14, scale: .85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: .85 }}
            transition={{ duration: .3, ease: [.22, 1, .36, 1] }}
            onClick={() => window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })}
            aria-label="Back to top"
            className="fixed bottom-7 right-7 z-[120] grid place-items-center size-[46px] rounded-full bg-[linear-gradient(115deg,#6366f1,#a855f7)] text-white shadow-[0_10px_30px_#6366f155] max-[760px]:bottom-5 max-[760px]:right-5 max-[760px]:size-[42px]"
          ><ArrowUp size={19} /></motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
