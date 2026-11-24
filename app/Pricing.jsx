'use client';
import React from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Reveal } from './shared';
import { pricing } from './data';

export default function Pricing() {
  return (
    <section id="pricing" className="border-t border-white/5 bg-white/[0.02] py-[90px] max-[760px]:py-[64px]">
      <div className="mx-auto w-[min(1152px,calc(100%-48px))]">
        <Reveal className="text-center">
          <p className="text-[12px] font-semibold tracking-[.25em] text-[#a5b4fc]">PRICING PLANS</p>
          <h2 className="mt-3 text-[46px] font-extrabold leading-[1.15] tracking-[-.03em] text-gradient-hero max-[760px]:text-[34px]">Choose Your Package</h2>
          <p className="mx-auto mt-4 max-w-[520px] text-[14px] leading-[1.8] text-[#9ca3af]">
            Every project is different. Final scope is decided together after understanding what you need.
          </p>
        </Reveal>
        <div className="mt-[50px] grid grid-cols-3 items-stretch gap-7 max-[950px]:grid-cols-1 max-[950px]:max-w-[480px] max-[950px]:mx-auto">
          {pricing.map((plan, i) => (
            <Reveal key={plan.name} delay={i * .09} className="h-full">
              <div className={`relative flex h-full flex-col rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-1.5 ${plan.featured ? 'bg-[linear-gradient(160deg,#6366f1,#a855f7)] shadow-[0_20px_60px_#6366f145]' : 'border border-white/10 bg-white/5'}`}>
                <span className={`absolute right-6 top-6 rounded-full px-3 py-1 text-[10px] font-semibold ${plan.featured ? 'bg-white/20 text-white' : 'border border-[#6366f14d] bg-[#6366f11a] text-[#a5b4fc]'}`}>{plan.tag}</span>
                <h3 className="text-[22px] font-bold text-white">{plan.name}</h3>
                <p className={`mt-2 text-[26px] font-extrabold ${plan.featured ? 'text-white' : 'text-gradient-hero'}`}>{plan.price}</p>
                <p className={`mt-5 text-[10px] font-medium tracking-[.18em] ${plan.featured ? 'text-white/70' : 'text-[#6b7280]'}`}>EXAMPLE SCOPE</p>
                <ul className="mt-2.5 space-y-3.5">
                  {plan.features.map(f => (
                    <li key={f} className={`flex items-center gap-2.5 text-[13px] ${plan.featured ? 'text-white/90' : 'text-[#c9c9d6]'}`}>
                      <CheckCircle2 size={16} className={plan.featured ? 'text-white' : 'text-[#22c55e]'} /> {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`mt-8 inline-flex items-center justify-center gap-2 rounded-xl py-3.5 text-[14px] font-semibold transition-transform duration-300 hover:-translate-y-[2px] ${plan.featured ? 'bg-white text-[#5b21b6]' : 'bg-[#6366f1] text-white hover:bg-[#5457e8]'}`}>
                  Get Started <ArrowUpRight size={15} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={.2} className="mt-7 text-center">
          <p className="text-[12px] text-[#6b7280]">Package inclusions shown are an example scope. Delivery timelines are shared after discussing your project.</p>
        </Reveal>
      </div>
    </section>
  );
}
