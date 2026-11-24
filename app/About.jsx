'use client';
import React from 'react';
import Link from 'next/link';
import { Rocket, Smartphone, Link2, Lightbulb, Handshake } from 'lucide-react';
import { Reveal } from './shared';
import { about } from './data';
import { useContent } from './ContentProvider';

const PROBLEM_ICONS = { rocket: Rocket, phone: Smartphone, link: Link2, idea: Lightbulb };

function EntryCard({ item, delay }) {
  return (
    <Reveal delay={delay}>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-7 transition-[border-color,transform] duration-300 hover:border-[#6366f166] hover:-translate-y-1 max-[760px]:p-6">
        <p className="text-[10px] tracking-[.22em] text-[#818cf8] font-medium">{item.period}</p>
        <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-2">
          <h3 className="text-[19px] font-semibold text-white">{item.title}</h3>
          {item.grade && <span className="rounded-md border border-[#6366f14d] bg-[#6366f11a] px-2.5 py-1 text-[10px] font-medium tracking-[.08em] text-[#a5b4fc]">{item.grade}</span>}
        </div>
        <p className="mt-2.5 text-[13px] leading-[1.8] text-[#9ca3af]">{item.description}</p>
      </div>
    </Reveal>
  );
}

export default function About() {
  const { certificates } = useContent();
  return (
    <section id="about" className="py-[90px] max-[760px]:py-[64px]">
      <div className="mx-auto w-[min(1152px,calc(100%-48px))]">
        <Reveal className="text-center">
          <h2 className="text-[48px] font-extrabold tracking-[-.03em] text-gradient inline-block max-[760px]:text-[36px]">About Me</h2>
          <p className="mt-5 mx-auto max-w-[640px] text-[15px] leading-[1.85] text-[#9ca3af] max-[760px]:text-[14px]">
            I'm <strong className="text-white font-semibold">Tasalimkausar</strong>, a software developer based in Pune, passionate about building fast, responsive and user-friendly digital experiences.
          </p>
        </Reveal>
        <div className="mt-[56px] grid grid-cols-2 gap-6 max-[760px]:grid-cols-1 max-[760px]:mt-[40px]">
          <Reveal delay={.08}>
            <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-8 transition-[border-color,transform] duration-300 hover:border-[#6366f166] hover:-translate-y-1 max-[760px]:p-6">
              <h3 className="text-[20px] font-semibold text-[#a5b4fc]">My Journey</h3>
              <p className="mt-4 text-[14px] leading-[1.9] text-[#9ca3af]">{about.journey}</p>
            </div>
          </Reveal>
          <Reveal delay={.16}>
            <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-8 transition-[border-color,transform] duration-300 hover:border-[#6366f166] hover:-translate-y-1 max-[760px]:p-6">
              <h3 className="text-[20px] font-semibold text-[#a5b4fc]">Problems I Solve</h3>
              <ul className="mt-4 space-y-[14px]">
                {about.problems.map(([icon, text]) => {
                  const Icon = PROBLEM_ICONS[icon];
                  return (
                    <li key={text} className="flex items-center gap-3 text-[14px] text-[#c9c9d6]">
                      <span aria-hidden="true" className="grid shrink-0 place-items-center size-[30px] rounded-lg border border-[#6366f14d] bg-[#6366f11a] text-[#818cf8]"><Icon size={14} /></span> {text}
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal className="text-center mt-[80px] max-[760px]:mt-[56px]">
          <h2 className="text-[34px] font-bold tracking-[-.02em] text-white max-[760px]:text-[27px]">Experience</h2>
        </Reveal>
        <div className="mt-[36px] mx-auto max-w-[760px] space-y-5">
          {about.experience.map((item, i) => <EntryCard key={item.title} item={item} delay={i * .08} />)}
        </div>

        <Reveal className="text-center mt-[64px] max-[760px]:mt-[48px]">
          <h2 className="text-[34px] font-bold tracking-[-.02em] text-white max-[760px]:text-[27px]">Education</h2>
        </Reveal>
        <div className="mt-[36px] mx-auto max-w-[760px] space-y-5">
          {about.education.map((item, i) => <EntryCard key={item.title} item={item} delay={i * .08} />)}
        </div>

        <Reveal className="text-center mt-[64px] max-[760px]:mt-[48px]">
          <h2 className="text-[34px] font-bold tracking-[-.02em] text-white max-[760px]:text-[27px]">Certifications</h2>
        </Reveal>
        <div className="mt-[36px] mx-auto grid max-w-[860px] grid-cols-2 gap-6 max-[760px]:grid-cols-1">
          {certificates.map((cert, i) => (
            <Reveal key={cert.title} delay={i * .08}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-7 text-center transition-[border-color,transform] duration-300 hover:border-[#6366f166] hover:-translate-y-1 max-[760px]:p-6">
                <h3 className="text-[17px] font-semibold text-white">{cert.title}</h3>
                <p className="mt-2.5 text-[13px] leading-[1.8] text-[#9ca3af]">{cert.description}</p>
                <div className="mt-4 flex items-center justify-center gap-5 text-[13px] font-medium">
                  <a href={cert.file} target="_blank" rel="noopener noreferrer" className="text-[#818cf8] underline decoration-[#818cf866] underline-offset-4 transition-colors hover:text-[#a5b4fc]">View Certificate</a>
                  <a href={cert.file} download className="text-[#818cf8] underline decoration-[#818cf866] underline-offset-4 transition-colors hover:text-[#a5b4fc]">Download</a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-[72px] max-[760px]:mt-[52px]">
          <Link href="/contact" className="inline-flex items-center gap-2.5 rounded-full bg-[linear-gradient(115deg,#6366f1,#a855f7)] px-8 py-4 text-[15px] font-semibold text-white shadow-[0_12px_35px_#6366f145] transition-[transform,box-shadow] duration-300 hover:-translate-y-[3px] hover:shadow-[0_18px_45px_#6366f166]">
            <Handshake size={17} aria-hidden="true" /> Let's Work Together
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
