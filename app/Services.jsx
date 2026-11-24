'use client';
import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Globe, Atom, Server } from 'lucide-react';
import { Reveal } from './shared';
import { services } from './data';

const ICONS = { Globe, Atom, Server };

export default function Services() {
  const reduced = useReducedMotion();
  return (
    <section id="services" className="py-[90px] max-[760px]:py-[64px]">
      <div className="mx-auto w-[min(1152px,calc(100%-48px))]">
        <Reveal className="text-center">
          <h2 className="text-[42px] font-bold tracking-[-.025em] text-white max-[760px]:text-[32px]">What I Do Best</h2>
        </Reveal>
        <div className="mt-[52px] grid grid-cols-3 gap-6 max-[950px]:grid-cols-1 max-[760px]:mt-[38px]">
          {services.map((service, i) => {
            const Icon = ICONS[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={reduced ? false : { opacity: 0, y: 34, scale: .97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: .15 }}
                transition={{ duration: .7, delay: i * .12, ease: [.22, 1, .36, 1] }}
                className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition-[border-color,transform,box-shadow] duration-300 hover:border-[#6366f166] hover:-translate-y-[6px] hover:shadow-[0_20px_45px_#6366f11f] max-[760px]:p-6"
              >
                <span className="inline-grid place-items-center size-[52px] rounded-xl border border-[#6366f14d] bg-[#6366f11a] text-[#818cf8] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                  <Icon size={24} />
                </span>
                <h3 className="mt-6 text-[20px] font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.85] text-[#9ca3af]">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
