import { Link } from "react-router";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight,
  FaArrowUp,
} from "react-icons/fa";

import Container from "../common/Container";

import {
  footerProjects,
  footerLinks,
  contactInfo,
} from "./footer.data";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#230713] text-white">

      {/* Background Gradient Layers */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#230713] via-[#4b0b2a] to-[#761345]" />

      <div className="pointer-events-none absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-pink-500/20 blur-[140px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full bg-fuchsia-500/15 blur-[150px]" />

      <div className="pointer-events-none absolute left-[45%] top-[35%] h-64 w-64 rounded-full bg-rose-400/10 blur-[100px]" />

      <Container className="relative z-10">

        {/* =========================
            PREMIUM FOOTER INTRO
        ========================== */}
        <div className="border-b border-white/10 py-14 sm:py-16 lg:py-20">

          <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">

            <div className="max-w-3xl">

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-pink-300/20 bg-white/[0.06] px-4 py-2 backdrop-blur-md">

                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>

                <span className="text-xs font-semibold text-pink-100">
                  Available for freelance projects
                </span>

              </div>

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-pink-300">
                Full Stack Developer
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-black leading-[1.15] tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">

                Turning ideas into

                <span className="mx-2 bg-gradient-to-r from-pink-300 via-rose-300 to-fuchsia-300 bg-clip-text text-transparent">
                  fast, scalable
                </span>

                and meaningful digital products.

              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-pink-100/60 sm:text-base">
                I design and develop modern web applications with a focus on
                clean user experiences, scalable backend architecture and
                real-world business requirements.
              </p>

            </div>

            <div className="lg:pb-2">

              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-3.5 text-sm font-bold text-[#4b0b2a] shadow-[0_18px_50px_rgba(0,0,0,.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-pink-50"
              >
                Let's Build Together

                <FaArrowRight
                  size={12}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

            </div>

          </div>

        </div>

        {/* =========================
             FOOTER CONTENT
        ========================== */}
        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10 lg:py-16">

          {/* Brand */}
          <div className="lg:col-span-3">

            <Link
              to="/"
              className="inline-block text-3xl font-black tracking-[-0.06em] text-white"
            >
              ANUPAM
              <span className="text-pink-400">.</span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-pink-100/55">
              Building modern web experiences with React, Node.js and
              PostgreSQL.
            </p>

            {/* Social */}
            <div className="mt-7 flex gap-2.5">

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-pink-100/70 transition-all duration-300 hover:-translate-y-1 hover:border-pink-400/40 hover:bg-pink-500 hover:text-white"
              >
                <FaLinkedinIn size={16} />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-pink-100/70 transition-all duration-300 hover:-translate-y-1 hover:border-pink-400/40 hover:bg-pink-500 hover:text-white"
              >
                <FaGithub size={17} />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-pink-100/70 transition-all duration-300 hover:-translate-y-1 hover:border-pink-400/40 hover:bg-pink-500 hover:text-white"
              >
                <FaInstagram size={17} />
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">

            <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-pink-300">
              Quick Links
            </h3>

            <div className="mt-6 flex flex-col gap-3">

              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="group flex w-fit items-center gap-2 text-sm text-pink-100/55 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  <span className="h-1 w-1 rounded-full bg-pink-400 opacity-60 transition group-hover:opacity-100" />

                  {link.label}
                </Link>
              ))}

            </div>

          </div>

          {/* Projects */}
          <div className="lg:col-span-3">

            <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-pink-300">
              Selected Projects
            </h3>

            <div className="mt-6 flex flex-col gap-4">

              {footerProjects.map((project) => (
                <Link
                  key={project.slug}
                  to={`/projects/${project.slug}`}
                  className="group flex w-fit items-center gap-2 text-sm font-medium text-pink-100/65 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  {project.name}

                  <FaArrowRight
                    size={9}
                    className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                  />
                </Link>
              ))}

            </div>

            <Link
              to="/projects"
              className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-pink-300 transition hover:text-white"
            >
              Explore all work

              <FaArrowRight size={9} />
            </Link>

          </div>

          {/* Contact */}
          <div className="lg:col-span-4">

            <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-pink-300">
              Contact Information
            </h3>

            <div className="mt-6 space-y-4">

              {/* Email */}
              <a
                href={`mailto:${contactInfo.email}`}
                className="group flex items-start gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4 transition-all duration-300 hover:border-pink-400/25 hover:bg-white/[0.07]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pink-500/10 text-pink-300">
                  <FaEnvelope size={15} />
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-wider text-pink-100/35">
                    Email
                  </p>

                  <p className="mt-1 break-all text-sm font-medium text-pink-50 transition group-hover:text-white">
                    {contactInfo.email}
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${contactInfo.phone}`}
                className="group flex items-start gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4 transition-all duration-300 hover:border-pink-400/25 hover:bg-white/[0.07]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pink-500/10 text-pink-300">
                  <FaPhoneAlt size={14} />
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-wider text-pink-100/35">
                    Phone
                  </p>

                  <p className="mt-1 text-sm font-medium text-pink-50">
                    {contactInfo.phone}
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pink-500/10 text-pink-300">
                  <FaMapMarkerAlt size={14} />
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-wider text-pink-100/35">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-medium leading-6 text-pink-50">
                    {contactInfo.location}
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* =========================
              BOTTOM BAR
        ========================== */}
        <div className="border-t border-white/10">

          <div className="flex flex-col items-center justify-between gap-5 py-6 sm:flex-row">

            <p className="text-center text-xs text-pink-100/40 sm:text-left">
              © 2026 Anupam. Designed & developed with attention to detail.
            </p>

            <div className="flex items-center gap-5">

              <Link
                to="/privacy-policy"
                className="text-xs text-pink-100/40 transition hover:text-white"
              >
                Privacy
              </Link>

              <Link
                to="/terms"
                className="text-xs text-pink-100/40 transition hover:text-white"
              >
                Terms
              </Link>

              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Back to top"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-pink-300 transition-all duration-300 hover:-translate-y-1 hover:bg-pink-500 hover:text-white"
              >
                <FaArrowUp size={10} />
              </button>

            </div>

          </div>

        </div>

      </Container>
    </footer>
  );
};

export default Footer;