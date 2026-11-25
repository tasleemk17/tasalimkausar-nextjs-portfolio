"use client";
import React from "react";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { External, GithubIcon, InstagramIcon } from "./shared";
import { Logo } from "./Header";
import { links } from "./data";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#02021a] pt-[70px] max-[760px]:pt-[52px]">
      <div className="mx-auto w-[min(1152px,calc(100%-48px))]">
        <div className="grid grid-cols-[1.25fr_.6fr_1fr] gap-[70px] pb-[56px] max-[950px]:grid-cols-1 max-[950px]:gap-[42px] max-[950px]:pb-[42px]">
          <div>
            <Logo footer />
            <p className="mt-6 max-w-[340px] text-[13px] leading-[1.9] text-[#9ca3af]">
              I'm a software developer focused on building modern, fast and
              responsive websites and connected full-stack applications.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#22c55e55] bg-[#052e16] px-4 py-2 text-[11px] font-medium text-[#4ade80]">
              <i className="size-[6px] rounded-full bg-[#22c55e] animate-status-pulse motion-reduce:animate-none" />{" "}
              Available for Work
            </span>
          </div>
          <nav aria-label="Footer navigation">
            <h3
              className="text-[19px] font-medium text-[#a5b4fc]"
              style={{ fontFamily: "'DM Sans', Arial, sans-serif" }}
            >
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3.5 max-[950px]:grid max-[950px]:grid-cols-2 max-[950px]:gap-x-6 max-[950px]:space-y-0 max-[950px]:gap-y-0 max-[950px]:mt-4">
              {[
                "Home",
                "About",
                "Services",
                "Projects",
                "Testimonials",
                "Pricing",
                "Contact",
              ].map((x) => (
                <li key={x}>
                  <Link
                    href={x === "Home" ? "/" : `/${x.toLowerCase()}`}
                    className="text-[14px] text-[#b6b4c6] transition-colors duration-200 hover:text-white max-[950px]:flex max-[950px]:min-h-[38px] max-[950px]:items-center"
                  >
                    {x}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h3
              className="text-[19px] font-medium text-[#a5b4fc]"
              style={{ fontFamily: "'DM Sans', Arial, sans-serif" }}
            >
              Let's Connect
            </h3>
            <div className="mt-5 space-y-4">
              <External
                href={links.email}
                className="flex items-center gap-3.5 group"
              >
                <span className="grid shrink-0 place-items-center size-[38px] rounded-lg border border-[#6366f14d] bg-[#6366f11a] text-[#818cf8] transition-transform duration-300 group-hover:scale-110">
                  <Mail size={15} />
                </span>
                <span className="text-[13px] text-[#b6b4c6] [overflow-wrap:anywhere] transition-colors group-hover:text-white">
                  {links.emailText}
                </span>
              </External>
              <div className="flex items-center gap-3.5">
                <span className="grid shrink-0 place-items-center size-[38px] rounded-lg border border-[#6366f14d] bg-[#6366f11a] text-[#818cf8]">
                  <MapPin size={15} />
                </span>
                <span className="text-[13px] text-[#b6b4c6]">
                  {links.location}
                </span>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <External
                href={links.linkedin}
                label="Visit LinkedIn"
                className="grid place-items-center size-[40px] rounded-lg border border-white/10 bg-white/5 text-[#b6b4c6] transition-[background,transform,color] duration-300 hover:-translate-y-[3px] hover:bg-[#6366f133] hover:text-white"
              >
                <span
                  style={{ fontFamily: "Arial, sans-serif" }}
                  className="text-[16px] font-bold"
                >
                  in
                </span>
              </External>
              <External
                href={links.github}
                label="Visit GitHub"
                className="grid place-items-center size-[40px] rounded-lg border border-white/10 bg-white/5 text-[#b6b4c6] transition-[background,transform,color] duration-300 hover:-translate-y-[3px] hover:bg-[#6366f133] hover:text-white"
              >
                <GithubIcon size={17} />
              </External>
              <External
                href={links.instagram}
                label="Visit Instagram"
                className="grid place-items-center size-[40px] rounded-lg border border-white/10 bg-white/5 text-[#b6b4c6] transition-[background,transform,color] duration-300 hover:-translate-y-[3px] hover:bg-[#6366f133] hover:text-white"
              >
                <InstagramIcon size={17} />
              </External>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-5 border-t border-white/5 py-6 max-[760px]:flex-col max-[760px]:items-start max-[760px]:gap-2.5">
          <p className="text-[12px] text-[#6b7280]">
            © {new Date().getFullYear()}{" "}
            <span className="text-[#a5b4fc]">Tasalimkausar Shaikh.</span> All
            rights reserved.
          </p>
          <p className="text-[12px] text-[#6b7280]">
            Designed &amp; developed with{" "}
            <span className="text-[#a5b4fc]">care</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
