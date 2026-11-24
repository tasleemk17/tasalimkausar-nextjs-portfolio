'use client';
import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Reveal } from './shared';
import { whyPoints } from './data';

export default function Why() {
  const reduced = useReducedMotion();
  return (
    <section className="border-y border-white/5 bg-white/[0.02] py-[80px] max-[760px]:py-[56px]">
      <div className="mx-auto w-[min(1152px,calc(100%-48px))]">
        <Reveal className="text-center">
          <h2 className="text-[42px] font-bold tracking-[-.025em] text-white max-[760px]:text-[32px]">Why Choose Me?</h2>
        </Reveal>
        <div className="mt-[44px] grid grid-cols-3 gap-6 max-[950px]:grid-cols-1 max-[760px]:mt-[32px]">
          {whyPoints.map((point, i) => (
            <motion.div
              key={point}
              initial={reduced ? false : { opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: .2 }}
              transition={{ duration: .65, delay: i * .12, ease: [.22, 1, .36, 1] }}
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-8 text-center text-[15px] font-medium leading-[1.7] text-[#e5e7eb] transition-[border-color,transform] duration-300 hover:border-[#6366f166] hover:-translate-y-1"
            >{point}</motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
