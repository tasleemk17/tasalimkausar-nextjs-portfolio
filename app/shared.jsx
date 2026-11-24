'use client';
import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';

export function Reveal({ children, className = '', delay = 0 }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 38, scale: .98, filter: 'blur(5px)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: .08 }}
      transition={{ duration: .85, delay, ease: [.22, 1, .36, 1] }}
    >{children}</motion.div>
  );
}

export function External({ href, children, className = '', label }) {
  return <a href={href} target={href.startsWith('mailto:') ? undefined : '_blank'} rel="noopener noreferrer" className={className} aria-label={label}>{children}</a>;
}

export function SectionTitle({ number, kicker, children, aside }) {
  return (
    <div className="flex justify-between items-end gap-10 mb-11 max-[760px]:flex-col max-[760px]:items-start max-[760px]:gap-[21px] max-[760px]:mb-[31px]">
      <Reveal>
        <div className="flex items-center gap-2.5 text-[8px] tracking-[.18em] text-[#b391d0] mb-[21px] max-[760px]:text-[6px] max-[760px]:gap-2 max-[760px]:tracking-[.13em] max-[760px]:mb-[18px]">
          <span className="text-[7px] px-1.5 py-[3px] border border-[#583c6a] rounded max-[760px]:text-[6px] max-[760px]:px-[5px]">{number}</span> {kicker}
        </div>
        <h2 className="text-[43px] font-[650] leading-[1.19] max-[1050px]:text-[38px] max-[760px]:text-[33px] max-[760px]:leading-[1.22] max-[760px]:tracking-[-.055em] max-[350px]:text-[29px]">{children}</h2>
      </Reveal>
      {aside && <Reveal className="[&_p]:text-[11px] [&_p]:leading-[1.8] [&_p_span]:text-[#b89bd5] max-[760px]:[&_p]:text-[10px] max-[760px]:[&_p_br]:hidden max-[760px]:[&_p_span]:ml-1">{aside}</Reveal>}
    </div>
  );
}

export function TypewriterRoles() {
  const reduced = useReducedMotion();
  const [text, setText] = useState('React Developer');
  useEffect(() => {
    if (reduced) { setText('React Developer'); return; }
    const roles = ['React Developer', 'Full Stack Developer', 'Java Backend Developer'];
    let role = 0, index = roles[0].length, deleting = true, timer;
    const tick = () => {
      if (deleting) {
        index--; setText(roles[role].slice(0, index));
        if (index === 0) { deleting = false; role = (role + 1) % roles.length; timer = setTimeout(tick, 300); return; }
        timer = setTimeout(tick, 45);
      } else {
        index++; setText(roles[role].slice(0, index));
        if (index === roles[role].length) { deleting = true; timer = setTimeout(tick, 2000); return; }
        timer = setTimeout(tick, 85);
      }
    };
    timer = setTimeout(tick, 2000);
    return () => clearTimeout(timer);
  }, [reduced]);
  return (
    <div className="min-h-[28px] mt-[22px] text-[19px] leading-[1.4] text-[#a5b4fc] font-[450] tracking-[.005em] max-[760px]:text-[17px] max-[760px]:mt-[18px] max-[760px]:min-h-[25px]">
      <span className="sr-only">React Developer, Full Stack Developer and Java Backend Developer</span>
      <span aria-hidden="true">{text}<span className="inline-block animate-cursor-blink ml-[3px] text-[#818cf8] motion-reduce:hidden motion-reduce:animate-none">|</span></span>
    </div>
  );
}

export function ScrollAccent() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -110]);
  return <motion.div className="fixed size-[430px] rounded-full bg-[radial-gradient(ellipse,#8b43c90a,transparent_70%)] right-[-180px] top-[40%] pointer-events-none -z-10" style={reduced ? {} : { y }} aria-hidden="true" />;
}

export function GithubIcon({ size = 17, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  );
}
