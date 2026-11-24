'use client';
import React from 'react';
import { Mail, MapPin, MessageCircle, ArrowUpRight } from 'lucide-react';
import { Reveal, External } from './shared';
import { links } from './data';
import { whatsappContactUrl } from './contact-config';

export default function Contact() {
  return (
    <section id="contact" className="border-t border-white/5 bg-white/[0.02] py-[90px] max-[760px]:py-[64px]">
      <div className="mx-auto w-[min(1152px,calc(100%-48px))] grid grid-cols-2 items-start gap-[70px] max-[950px]:grid-cols-1 max-[950px]:gap-[45px]">
        <Reveal>
          <h2 className="text-[46px] font-extrabold leading-[1.15] tracking-[-.03em] max-[760px]:text-[34px]">
            Let's build something<br /><span className="text-gradient-hero">amazing together</span>
          </h2>
          <p className="mt-5 max-w-[440px] text-[14px] leading-[1.85] text-[#9ca3af]">
            Have a project in mind, a question, or just want to say hello? Tell me what you're working on. I'd love to hear from you.
          </p>
          <div className="mt-9 space-y-5">
            <div className="flex items-start gap-4">
              <span className="grid shrink-0 place-items-center size-[44px] rounded-xl border border-[#6366f14d] bg-[#6366f11a] text-[#818cf8]"><MapPin size={18} /></span>
              <div>
                <span className="text-[14px] text-[#c9c9d6]">{links.location}</span>
                <a href="https://www.google.com/maps/search/?api=1&query=Pune,+Maharashtra,+India" target="_blank" rel="noopener noreferrer" className="mt-1 block text-[12px] font-medium text-[#818cf8] underline decoration-[#818cf866] underline-offset-4 transition-colors hover:text-[#a5b4fc]">View location on Google Maps</a>
              </div>
            </div>
            <External href={links.email} className="flex items-center gap-4 group">
              <span className="grid shrink-0 place-items-center size-[44px] rounded-xl border border-[#6366f14d] bg-[#6366f11a] text-[#818cf8] transition-transform duration-300 group-hover:scale-110"><Mail size={18} /></span>
              <span className="text-[14px] text-[#c9c9d6] [overflow-wrap:anywhere] transition-colors group-hover:text-white">{links.emailText}</span>
            </External>
          </div>
          <div className="mt-9 overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="Map of Pune, Maharashtra, India"
              src="https://www.google.com/maps?q=Pune,+Maharashtra,+India&output=embed"
              className="h-[220px] w-full border-0 grayscale-[.2]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
        <Reveal delay={.12}>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 max-[760px]:p-6">
            <span className="inline-flex size-14 items-center justify-center rounded-2xl border border-[#6366f14d] bg-[#6366f11a] text-[#a5b4fc]"><MessageCircle size={26} /></span>
            <h3 className="mt-6 text-[26px] font-bold text-white">Let's talk on WhatsApp</h3>
            <p className="mt-4 text-[14px] leading-[1.85] text-[#9ca3af]">Share your name, what you want to build and any links or ideas. You can write and send your message directly in WhatsApp.</p>
            <a href={whatsappContactUrl} target="_blank" rel="noopener noreferrer" className="mt-7 flex w-full items-center justify-center gap-2.5 rounded-xl bg-[linear-gradient(115deg,#6366f1,#a855f7)] py-4 text-[15px] font-semibold text-white transition-transform hover:-translate-y-1">Continue on WhatsApp <ArrowUpRight size={17} /></a>
            <p className="mt-4 text-center text-[11px] leading-5 text-[#9ca3af]">Opens WhatsApp with a starter message. Nothing is sent until you press Send there.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
