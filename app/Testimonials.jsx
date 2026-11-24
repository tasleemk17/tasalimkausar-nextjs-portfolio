'use client';
import Link from 'next/link';
import { Quote, ArrowUpRight, BriefcaseBusiness, MessageCircle } from 'lucide-react';
import { Reveal } from './shared';
import { testimonials } from './data';
export default function Testimonials() {
  return <section id="testimonials" className="py-[90px] max-[760px]:py-[64px]">
    <div className="mx-auto w-[min(1152px,calc(100%-48px))]">
      <Reveal className="text-center">
        <p className="text-[12px] font-semibold tracking-[.25em] text-[#a5b4fc]">CLIENT FEEDBACK</p>
        <h2 className="mt-3 text-[46px] font-extrabold leading-[1.15] tracking-[-.03em] text-gradient-hero max-[760px]:text-[34px]">What My Clients Say</h2>
        <p className="mx-auto mt-4 max-w-[620px] text-[14px] leading-[1.8] text-[#9ca3af]">Feedback from clients I have worked with on websites and full-stack development projects.</p>
      </Reveal>
      {testimonials.map(client => <Reveal key={client.name} delay={.1} className="mt-[45px]">
        <article className="relative mx-auto max-w-[900px] overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(135deg,#131326,#101022)] p-10 shadow-[0_20px_70px_#0003] max-[760px]:p-6">
          <div className="absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/70 to-transparent" />
          <Quote size={92} className="pointer-events-none absolute right-9 top-9 text-indigo-400/10 max-[760px]:hidden" aria-hidden="true" />
          <div className="relative flex items-center gap-5 max-[760px]:gap-4">
            <img src={client.photo} alt="Munaf" className="size-[96px] shrink-0 rounded-full border-2 border-indigo-400/40 object-cover shadow-[0_0_25px_#6366f130] max-[760px]:size-[76px]" />
            <div><h3 className="text-[24px] font-semibold text-white max-[760px]:text-[21px]">{client.name}</h3><p className="mt-1 text-[13px] leading-6 text-[#a5b4fc]">{client.role}</p></div>
          </div>
          <div className="mt-8 flex items-center gap-2.5 text-[11px] tracking-[.12em] text-[#9ca3af]"><span className="grid size-9 place-items-center rounded-xl border border-indigo-400/20 bg-indigo-400/10 text-indigo-300"><Quote size={17} /></span>CLIENT EXPERIENCE</div>
          <p className="mt-5 text-[15px] leading-[1.95] text-[#c9c9d6]">"{client.quote}"</p>
          <div className="mt-8 border-t border-white/10 pt-6">
            <h4 className="flex items-center gap-2.5 text-[14px] font-semibold text-white"><span className="grid size-9 place-items-center rounded-xl border border-indigo-400/20 bg-indigo-400/10 text-indigo-300"><BriefcaseBusiness size={17} /></span>Projects Developed</h4>
            <div className="mt-4 grid grid-cols-2 gap-3 max-[760px]:grid-cols-1">{client.projects.map(project => <a key={project.url} href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[.025] p-4 transition-colors hover:border-indigo-400/50"><div><p className="text-sm font-semibold text-white">{project.name}</p><p className="mt-1 text-xs text-slate-400">{project.type}</p></div><ArrowUpRight size={18} className="text-indigo-300" /></a>)}</div>
            <a href={client.contact} target="_blank" rel="noopener noreferrer" className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-300/15 bg-cyan-400/10 px-5 py-4 text-sm font-semibold text-cyan-200 transition-colors hover:bg-cyan-400/20"><MessageCircle size={18} />Contact Client</a>
          </div>
        </article>
      </Reveal>)}
      <Reveal delay={.15} className="mt-[60px] max-[760px]:mt-[45px]">
        <div className="mx-auto max-w-[1050px] rounded-3xl border border-white/10 bg-white/[0.04] px-8 py-[64px] text-center max-[760px]:py-[46px] max-[760px]:px-5">
          <p className="text-[13px] text-[#9ca3af]">Have a project in mind?</p>
          <h3 className="mt-3 text-[28px] font-bold tracking-[-.02em] text-white max-[760px]:text-[22px]">Let's build something amazing together.</h3>
          <Link href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[linear-gradient(115deg,#6366f1,#a855f7)] px-7 py-3.5 text-[14px] font-semibold text-white transition-transform hover:-translate-y-0.5">Start a Project <ArrowUpRight size={16} /></Link>
        </div>
      </Reveal>
    </div>
  </section>;
}
