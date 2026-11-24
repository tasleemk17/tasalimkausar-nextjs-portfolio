'use client';
import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Reveal } from './shared';
import { useContent } from './ContentProvider';

export default function Tools() {
  const { skills: tools } = useContent();
  const reduced = useReducedMotion();
  return (
    <section id="skills" className="py-[64px] max-[760px]:py-[48px]">
      <div className="mx-auto w-[min(1152px,calc(100%-48px))] text-center">
        <Reveal>
          <p className="text-[15px] text-[#9ca3af] tracking-[.01em]">Tools &amp; Technologies I Work With</p>
        </Reveal>
        <div className="mt-7 flex flex-wrap justify-center gap-3 max-[760px]:gap-2.5 max-[760px]:mt-6">
          {tools.map((tool, i) => (
            <motion.span
              key={tool}
              initial={reduced ? false : { opacity: 0, y: 16, scale: .92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: .4 }}
              transition={{ duration: .5, delay: (i % 13) * .05, ease: [.22, 1, .36, 1] }}
              className="rounded-full border border-[#6366f14d] bg-[#6366f11a] px-5 py-2.5 text-[13px] text-[#e5e7eb] transition-[background,transform,box-shadow] duration-300 hover:bg-[#6366f133] hover:-translate-y-[3px] hover:shadow-[0_10px_25px_#6366f130] cursor-default max-[760px]:text-[12px] max-[760px]:px-4 max-[760px]:py-2"
            >{tool}</motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
