'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Code2, Layers, ArrowUpRight, ImagePlay, X } from 'lucide-react';
import { Reveal } from './shared';
import { useContent } from './ContentProvider';

const FILTERS = ['All', 'Full Stack', 'AI-powered'];

function ProjectCard({ project, setPreview, index }) {
  const reduced = useReducedMotion();
  return (
    <motion.article
      layout
      initial={reduced ? false : { opacity: 0, y: 40, scale: .96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      exit={reduced ? { opacity: 0 } : { opacity: 0, scale: .94, y: 18 }}
      viewport={{ once: true, amount: .12 }}
      transition={{ duration: .7, delay: index * .12, ease: [.22, 1, .36, 1] }}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-[border-color,box-shadow] duration-300 hover:border-[#6366f166] hover:shadow-[0_25px_60px_#6366f124]"
    >
      <button
        onClick={() => setPreview(project)}
        aria-label={`View ${project.name} screenshot`}
        className="relative block w-full overflow-hidden text-left"
      >
        <span className="block aspect-[16/10] overflow-hidden">
          <img
            src={project.image} alt={project.alt} loading="lazy"
            className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />
        </span>
        <span aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_top,#00001299,transparent_55%)]" />
        <span aria-hidden="true" className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(105deg,transparent_40%,#ffffff14_50%,transparent_60%)] transition-transform duration-1000 ease-out group-hover:translate-x-full" />
        <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/60 px-3.5 py-1.5 text-[11px] font-medium text-[#e5e7eb] backdrop-blur-md">{project.category}</span>
        <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full border border-[#22c55e55] bg-black/60 px-3.5 py-1.5 text-[11px] font-medium text-[#4ade80] backdrop-blur-md">
          <i className="size-[6px] rounded-full bg-[#22c55e] animate-floor-glow motion-reduce:animate-none" /> Live demo available
        </span>
      </button>
      <div className="p-7 max-[760px]:p-5">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-[22px] font-bold tracking-[-.01em] text-white">{project.name}</h3>
          <a
            href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.name} live site`}
            className="grid shrink-0 place-items-center size-[38px] rounded-lg border border-white/10 text-[#a5b4fc] transition-[transform,border-color,background] duration-300 hover:rotate-[-45deg] hover:border-[#6366f166] hover:bg-[#6366f11a]"
          ><ArrowUpRight size={17} /></a>
        </div>
        <p className="mt-3 text-[13px] leading-[1.85] text-[#9ca3af]">{project.description}</p>
        <p className="mt-5 flex items-center gap-2 text-[10px] font-medium tracking-[.2em] text-[#818cf8]"><Layers size={13} /> TECHNOLOGIES</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.stack.map(tech => (
            <span key={tech} className="rounded-md border border-[#6366f138] bg-[#6366f11a] px-3 py-1.5 text-[11px] text-[#a5b4fc]">{tech}</span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center gap-2 text-[14px] font-medium text-[#818cf8] transition-colors hover:text-[#a5b4fc]">
            View Live Website <ArrowUpRight size={15} className="transition-transform duration-300 group-hover/link:translate-x-[3px] group-hover/link:-translate-y-[3px]" />
          </a>
          <button onClick={() => setPreview(project)} className="inline-flex items-center gap-2 text-[12px] text-[#6b7280] transition-colors hover:text-[#a5b4fc]">
            <ImagePlay size={14} /> View screenshot
          </button>
        </div>
        <p className="mt-3.5 text-[10px] leading-[1.7] text-[#5b6472]">{project.note}</p>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const { projects } = useContent();
  const [filter, setFilter] = useState('All');
  const [preview, setPreview] = useState(null);
  const closeRef = useRef(null);
  const visible = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  useEffect(() => {
    if (!preview) return;
    const old = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const fn = e => {
      if (e.key === 'Escape') setPreview(null);
      if (e.key === 'Tab') { e.preventDefault(); closeRef.current?.focus(); }
    };
    window.addEventListener('keydown', fn);
    return () => { document.body.style.overflow = old; window.removeEventListener('keydown', fn); };
  }, [preview]);

  return (
    <section id="projects" className="py-[90px] max-[760px]:py-[64px]">
      <div className="mx-auto w-[min(1152px,calc(100%-48px))]">
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#6366f14d] bg-[#6366f11a] px-4 py-2 text-[12px] font-medium text-[#a5b4fc]">
            <Code2 size={14} /> My Work
          </span>
          <h2 className="mt-5 text-[52px] font-extrabold tracking-[-.03em] text-gradient block max-[760px]:text-[38px]">My Projects</h2>
          <p className="mt-4 mx-auto max-w-[560px] text-[14px] leading-[1.85] text-[#9ca3af]">
            A selection of websites and applications I've built with React, backend APIs and modern web tools.
          </p>
        </Reveal>
        <Reveal delay={.1} className="mt-9 flex flex-wrap justify-center gap-3">
          {FILTERS.map(item => (
            <button
              key={item} onClick={() => setFilter(item)} aria-pressed={filter === item}
              className={`rounded-full px-6 py-2.5 text-[13px] font-medium transition-[background,transform,box-shadow] duration-300 hover:-translate-y-[2px] ${filter === item ? 'bg-[linear-gradient(115deg,#6366f1,#a855f7)] text-white shadow-[0_10px_25px_#6366f140]' : 'border border-white/10 bg-white/5 text-[#b6b4c6] hover:border-[#6366f166]'}`}
            >{item}</button>
          ))}
        </Reveal>
        <motion.div layout className="mt-[46px] grid grid-cols-2 gap-7 max-[950px]:grid-cols-1">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <ProjectCard key={project.name} project={project} setPreview={setPreview} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      {preview && (
        <div className="fixed inset-0 bg-[#000c] backdrop-blur-[10px] z-[150] grid place-items-center p-[25px] max-[760px]:p-[15px]" onClick={() => setPreview(null)}>
          <div role="dialog" aria-modal="true" aria-label={`${preview.name} screenshot`} onClick={e => e.stopPropagation()} className="w-[min(1000px,100%)] max-h-[90svh] overflow-auto rounded-2xl border border-white/10 bg-[#0b0b22] shadow-[0_30px_80px_#000a]">
            <div className="flex items-center justify-between gap-[15px] px-5 py-4 max-[760px]:p-3">
              <h3 className="text-[14px] text-white max-[760px]:text-[11px]">{preview.name} / project screenshots</h3>
              <button ref={closeRef} onClick={() => setPreview(null)} aria-label="Close screenshot" className="grid place-items-center size-[38px] rounded-lg border border-white/10 bg-white/5 text-[#b6b4c6] transition-colors hover:text-white max-[760px]:size-9"><X size={17} /></button>
            </div>
            {(preview.gallery?.length ? preview.gallery : [{ src: preview.image, caption: null }]).map(item => {
              const { src, caption } = typeof item === 'string' ? { src: item, caption: null } : item;
              return (
                <figure key={src} className="border-t border-white/5 first:border-t-0">
                  {caption && <figcaption className="px-5 pt-3 text-[10px] font-medium tracking-[.14em] text-[#6b7280] max-[760px]:px-3">{caption.toUpperCase()}</figcaption>}
                  <img src={src} alt={preview.alt} className="w-full" />
                </figure>
              );
            })}
            <p className="px-5 py-4 text-[11px] leading-[1.8] text-[#6b7280] max-[760px]:p-3">{preview.note}</p>
          </div>
        </div>
      )}
    </section>
  );
}
