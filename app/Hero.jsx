'use client';
import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, Hand, Mail, MapPin } from 'lucide-react';
import { Reveal, External, TypewriterRoles, GithubIcon } from './shared';
import { links } from './data';

export default function Hero() {
  const reduced = useReducedMotion();
  return (
    <section id="home" className="relative overflow-hidden">
      <div aria-hidden="true" className="absolute size-[560px] rounded-full bg-[#6366f112] blur-[130px] -top-40 -left-40 pointer-events-none" />
      <div aria-hidden="true" className="absolute size-[460px] rounded-full bg-[#a855f714] blur-[130px] top-24 -right-32 pointer-events-none" />
      <div className="mx-auto w-[min(1152px,calc(100%-48px))] grid grid-cols-[1.15fr_.85fr] items-center gap-[60px] pt-[72px] pb-[80px] max-[950px]:grid-cols-1 max-[950px]:gap-[55px] max-[950px]:pt-[52px] max-[950px]:pb-[64px]">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 border border-[#6366f14d] bg-[#6366f11a] rounded-full px-4 py-2 text-[13px] text-[#c7d2fe] max-[760px]:text-[12px]">
              <span className="animate-hello-wave motion-reduce:animate-none inline-block text-[#a5b4fc]"><Hand size={14} /></span> Hi, I'm Tasalimkausar Shaikh
            </span>
          </Reveal>
          <Reveal delay={.08}>
            <h1 className="mt-6 text-[58px] leading-[1.08] font-extrabold tracking-[-.03em] max-[1050px]:text-[50px] max-[760px]:text-[40px] max-[760px]:mt-5 max-[350px]:text-[34px]">
              Software Developer<br />
              <span className="text-gradient-hero">&amp; App Developer</span>
            </h1>
          </Reveal>
          <Reveal delay={.16}>
            <TypewriterRoles />
          </Reveal>
          <Reveal delay={.22}>
            <p className="mt-5 max-w-[520px] text-[15px] leading-[1.85] max-[760px]:text-[14px]">
              I build responsive websites and connected full-stack applications with React, Java and Spring Boot. From a clear interface to the API behind it, I bring the pieces together.
            </p>
          </Reveal>
          <Reveal delay={.3}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/projects" className="inline-flex items-center gap-2 rounded-xl bg-[linear-gradient(115deg,#6366f1,#a855f7)] px-7 py-[15px] text-[15px] font-semibold text-white shadow-[0_12px_35px_#6366f145] transition-[transform,box-shadow] duration-300 hover:-translate-y-[3px] hover:shadow-[0_18px_45px_#6366f166]">
                View Projects <ArrowRight size={17} />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-[15px] text-[15px] font-semibold text-[#e5e7eb] transition-[transform,background] duration-300 hover:-translate-y-[3px] hover:bg-white/10">
                Hire Me <ArrowRight size={17} />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={.38}>
            <div className="mt-8 flex items-center gap-4 text-[#9ca3af] max-[760px]:mt-7">
              <External href={links.github} label="Visit GitHub" className="transition-colors hover:text-white"><GithubIcon size={19} /></External>
              <External href={links.linkedin} label="Visit LinkedIn" className="transition-colors hover:text-white"><span style={{ fontFamily: 'Arial, sans-serif' }} className="text-[17px] font-bold leading-none">in</span></External>
              <External href={links.email} label="Send email" className="transition-colors hover:text-white"><Mail size={19} /></External>
              <span className="h-5 w-px bg-white/15" aria-hidden="true" />
              <span className="inline-flex items-center gap-[6px] text-[12px]"><MapPin size={13} /> Pune, India</span>
            </div>
          </Reveal>
        </div>
        <Reveal delay={.15} className="justify-self-center">
          <div className="relative">
            <div aria-hidden="true" className="absolute inset-[-30px] rounded-full bg-[radial-gradient(circle,#6366f140,transparent_65%)] blur-[45px] animate-aura-breathe motion-reduce:animate-none" />
            <motion.div
              animate={reduced ? {} : { y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <img
                src="/assets/portrait.webp" alt="Tasalimkausar Shaikh" width="380" height="380"
                className="size-[380px] rounded-full object-cover border-4 border-[#6366f166] shadow-[0_0_70px_#6366f138] max-[1050px]:size-[320px] max-[760px]:size-[270px] max-[350px]:size-[230px]"
              />
              <span className="absolute left-1/2 -translate-x-1/2 bottom-[6px] inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[#052e16] border border-[#22c55e66] px-4 py-2 text-[12px] font-medium text-[#4ade80] shadow-[0_8px_25px_#22c55e2e]">
                <i className="size-[7px] rounded-full bg-[#22c55e] animate-status-pulse motion-reduce:animate-none" aria-hidden="true" /> Available for Work
              </span>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
