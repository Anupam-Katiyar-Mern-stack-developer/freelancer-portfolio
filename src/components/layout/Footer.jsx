import { motion } from "motion/react";

import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import {
  FiArrowUpRight,
  FiMail,
} from "react-icons/fi";

import useSiteData from "../../hooks/useSiteData";

const Footer = () => {
  const { siteData } = useSiteData();

  if (!siteData) return null;

  const {
    settings,
    socialLinks,
    contact,
    footer,
  } = siteData;

  if (!footer) return null;

  return (
    <footer className="relative overflow-hidden bg-slate-950 px-5 pb-8 pt-20 text-white sm:px-8 lg:px-10">

      {/* glow */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[400px] w-[400px] rounded-full bg-blue-600/20 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-violet-600/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">


        {/* Main Footer */}
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white font-['Space_Grotesk'] text-sm font-bold text-slate-950">
                {settings.developerName
                  ?.split(" ")
                  .map((word) => word[0])
                  .slice(0, 2)
                  .join("")}
              </div>

              <div>
                <p className="font-['Space_Grotesk'] font-bold">
                  {settings.developerName}
                </p>

                <p className="mt-1 font-[Manrope] text-xs text-slate-500">
                  {settings.professionalTitle}
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-md font-[Manrope] text-sm leading-7 text-slate-400">
              Building modern, scalable and user-focused web products with clean architecture and strong backend systems.
            </p>

            {/* Social */}
            <div className="mt-6 flex gap-2">

              <a
                href={socialLinks?.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition hover:border-blue-400/40 hover:bg-blue-500 hover:text-white"
              >
                <FaLinkedinIn />
              </a>

              <a
                href={socialLinks?.github}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition hover:bg-white hover:text-slate-950"
              >
                <FaGithub />
              </a>

              <a
                href={socialLinks?.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition hover:border-pink-400/40 hover:bg-pink-500 hover:text-white"
              >
                <FaInstagram />
              </a>

            </div>
          </div>


          {/* Links */}
          <div>
            <p className="font-[Manrope] text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
              Quick Links
            </p>

            <div className="mt-5 space-y-3">
              {footer.quickLinks?.map((item) => (
                <a
                  key={item.label}
                  href={item.path}
                  className="block font-[Manrope] text-sm text-slate-400 transition hover:translate-x-1 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>


          {/* Contact */}
          <div>
            <p className="font-[Manrope] text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
              Contact
            </p>

            <a
              href={`mailto:${contact?.email}`}
              className="mt-5 flex items-center gap-3 font-[Manrope] text-sm text-slate-400 transition hover:text-blue-400"
            >
              <FiMail />

              {contact?.email}
            </a>

            <p className="mt-4 font-[Manrope] text-sm text-slate-500">
              {contact?.location}
            </p>
          </div>

        </div>


        {/* Bottom */}
        <div className="flex flex-col gap-4 py-7 sm:flex-row sm:items-center sm:justify-between">

          <p className="font-[Manrope] text-xs text-slate-500">
            {footer.copyright}
          </p>

          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="
              group
              flex
              w-fit
              items-center
              gap-2
              font-[Manrope]
              text-xs
              font-bold
              text-slate-400
              transition

              hover:text-white
            "
          >
            Back to top

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 transition group-hover:-translate-y-1 group-hover:border-blue-400 group-hover:bg-blue-500">
              ↑
            </span>
          </button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;