'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export function Logo({ footer = false }) {
  return (
    <Link href="/" className={`flex items-center ${footer ? 'gap-[11px]' : 'gap-[13px]'}`}>
      <span
        aria-label="TK"
        className={`inline-flex items-center relative leading-none tracking-[-.15em] font-display font-extrabold shrink-0 text-[#eae6fa] isolate after:content-[''] after:absolute after:size-[28px] after:rounded-full after:blur-[12px] after:bg-[#6366f166] after:-z-10 after:right-[2px] after:bottom-[-3px] ${footer ? 'text-[41px] w-auto max-[760px]:text-[38px]' : 'text-[38px] w-[63px] max-[760px]:text-[31px] max-[760px]:w-[51px]'}`}
      >
        <b className="font-extrabold z-[1] [text-shadow:0_2px_12px_#c7d2fe2e]">T</b>
        <span className={`inline-block -scale-x-100 tracking-[-.15em] bg-[linear-gradient(145deg,#6366f1,#a855f7)] bg-clip-text text-transparent ml-[-1px] ${footer ? 'text-[41px] max-[760px]:text-[38px]' : 'text-[38px] max-[760px]:text-[31px]'}`}>K</span>
      </span>
      <span className={`tracking-[.13em] font-[650] leading-[1.6] ${footer ? 'text-[9px] max-[760px]:text-[9px]' : 'text-[10px] max-[760px]:text-[8px] max-[350px]:text-[7px]'}`}>
        {footer ? 'TASALIMKAUSAR SHAIKH' : 'TASALIMKAUSAR'}
        <small className={`block font-normal tracking-[.22em] text-[#6b7280] ${footer ? 'text-[5px] max-[760px]:text-[5px]' : 'text-[6px] max-[760px]:text-[5px]'}`}>SOFTWARE DEVELOPER</small>
      </span>
    </Link>
  );
}

const NAV = ['Home', 'About', 'Services', 'Projects', 'Testimonials', 'Pricing', 'Contact'];
const hrefFor = item => item === 'Home' ? '/' : `/${item.toLowerCase()}`;

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#000012e6] backdrop-blur-xl">
      <nav className="mx-auto w-[min(1152px,calc(100%-48px))] h-[72px] flex items-center justify-between gap-[25px]" aria-label="Main navigation">
        <span onClick={() => setOpen(false)}><Logo /></span>
        <button
          className="hidden max-[760px]:grid place-items-center size-[42px] border border-[#6366f14d] rounded-[9px] bg-[#6366f11a] text-[#c7d2fe] [&_svg]:w-[19px]"
          aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="navigation-links"
          onClick={() => setOpen(!open)}
        >{open ? <X /> : <Menu />}</button>
        <div
          id="navigation-links"
          className={`flex items-center gap-[6px] text-[14px] text-[#b6b4c6] max-[760px]:absolute max-[760px]:top-[78px] max-[760px]:left-[20px] max-[760px]:right-[20px] max-[760px]:flex-col max-[760px]:items-stretch max-[760px]:gap-0 max-[760px]:bg-[#0a0a20f5] max-[760px]:border max-[760px]:border-[#6366f14d] max-[760px]:backdrop-blur-xl max-[760px]:p-[13px] max-[760px]:rounded-[14px] max-[760px]:shadow-[0_20px_60px_#0009] ${open ? 'max-[760px]:flex' : 'max-[760px]:hidden'}`}
        >
          {NAV.map(item => {
            const href = hrefFor(item);
            const isActive = pathname === href;
            return (
              <Link
                key={item} href={href} onClick={() => setOpen(false)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative px-[13px] py-2 rounded-full transition-[color,background] duration-200 hover:text-white max-[760px]:rounded-[10px] max-[760px]:px-4 max-[760px]:py-[15px] ${isActive ? 'text-white bg-[#6366f12e] after:content-[\'\'] after:absolute after:left-[13px] after:right-[13px] after:bottom-[1px] after:h-[2px] after:rounded-full after:bg-[linear-gradient(90deg,#6366f1,#a855f7)] max-[760px]:after:hidden' : ''}`}
              >{item}</Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
