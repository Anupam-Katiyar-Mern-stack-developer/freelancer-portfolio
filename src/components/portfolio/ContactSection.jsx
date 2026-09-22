import { motion } from "motion/react";

import {
  FiArrowUpRight,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
} from "react-icons/fi";

import useContactForm from "../../hooks/useContactForm";
import useSiteData from "../../hooks/useSiteData";

import SectionTitle from "../common/SectionTitle";

const ContactSection = () => {
  const { siteData } = useSiteData();

  const {
    formData,
    handleChange,
    handleSubmit,
  } = useContactForm();

  const contact = siteData?.contact;

  if (!contact) {
    return null;
  }

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-[#F8FAFC]
        px-5
        py-20

        sm:px-8
        sm:py-24

        lg:px-10
        lg:py-32
      "
    >
      {/* Background effects */}

      <div className="pointer-events-none absolute -left-40 top-24 h-[420px] w-[420px] rounded-full bg-blue-200/40 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-violet-200/40 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">

        <SectionTitle
          eyebrow={contact.eyebrow}
          title={contact.heading}
          highlight={contact.highlight}
          description={contact.description}
        />

        <div className="mt-14 grid gap-7 lg:grid-cols-[0.75fr_1.25fr]">

          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.65,
            }}
            className="
              relative
              overflow-hidden
              rounded-[32px]
              bg-slate-950
              p-7
              text-white
              shadow-[0_30px_100px_rgba(15,23,42,0.20)]

              sm:p-9
            "
          >
            {/* glow */}

            <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-blue-500/30 blur-[90px]" />

            <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-violet-500/20 blur-[90px]" />

            <div className="relative">

              <span
                className="
                  inline-flex
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-4
                  py-2
                  font-[Manrope]
                  text-xs
                  font-bold
                  text-blue-300
                  backdrop-blur-md
                "
              >
                Available for new opportunities
              </span>

              <h3
                className="
                  mt-7
                  font-['Space_Grotesk']
                  text-3xl
                  font-bold
                  leading-tight
                  tracking-[-0.04em]

                  sm:text-4xl
                "
              >
                Let's create something
                <span className="block text-blue-400">
                  worth talking about.
                </span>
              </h3>

              <p
                className="
                  mt-5
                  max-w-md
                  font-[Manrope]
                  text-sm
                  leading-7
                  text-slate-400
                "
              >
                Whether you need a full-stack product, backend API or modern
                business website, share your idea and let's discuss the right
                solution.
              </p>

              {/* Contact details */}

              <div className="mt-10 space-y-4">

                <a
                  href={`mailto:${contact.email}`}
                  className="
                    group
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    p-4
                    transition

                    hover:border-blue-400/30
                    hover:bg-white/[0.07]
                  "
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-blue-300">
                    <FiMail />
                  </span>

                  <div className="min-w-0 flex-1">
                    <p className="font-[Manrope] text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                      Email
                    </p>

                    <p className="mt-1 truncate font-[Manrope] text-sm font-semibold text-white">
                      {contact.email}
                    </p>
                  </div>

                  <FiArrowUpRight className="text-slate-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-300" />
                </a>

                <a
                  href={`tel:${contact.phone}`}
                  className="
                    group
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    p-4
                    transition

                    hover:border-blue-400/30
                    hover:bg-white/[0.07]
                  "
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-blue-300">
                    <FiPhone />
                  </span>

                  <div className="flex-1">
                    <p className="font-[Manrope] text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                      Phone
                    </p>

                    <p className="mt-1 font-[Manrope] text-sm font-semibold text-white">
                      {contact.phone}
                    </p>
                  </div>

                  <FiArrowUpRight className="text-slate-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-300" />
                </a>

                <div
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    p-4
                  "
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-blue-300">
                    <FiMapPin />
                  </span>

                  <div>
                    <p className="font-[Manrope] text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                      Location
                    </p>

                    <p className="mt-1 font-[Manrope] text-sm font-semibold text-white">
                      {contact.location}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>


          {/* FORM */}

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.65,
            }}
            className="
              rounded-[32px]
              border
              border-slate-200
              bg-white
              p-6
              shadow-[0_25px_80px_rgba(15,23,42,0.06)]

              sm:p-8
              lg:p-10
            "
          >
            <form
              onSubmit={handleSubmit}
              className="grid gap-5 sm:grid-cols-2"
            >

              {/* Name */}

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block font-[Manrope] text-xs font-bold text-slate-700"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-slate-200
                    bg-slate-50
                    px-4
                    py-3.5
                    font-[Manrope]
                    text-sm
                    text-slate-900
                    outline-none
                    transition

                    placeholder:text-slate-400

                    focus:border-blue-400
                    focus:bg-white
                    focus:ring-4
                    focus:ring-blue-100
                  "
                />
              </div>

              {/* Email */}

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-[Manrope] text-xs font-bold text-slate-700"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-slate-200
                    bg-slate-50
                    px-4
                    py-3.5
                    font-[Manrope]
                    text-sm
                    outline-none
                    transition

                    focus:border-blue-400
                    focus:bg-white
                    focus:ring-4
                    focus:ring-blue-100
                  "
                />
              </div>

              {/* Company */}

              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block font-[Manrope] text-xs font-bold text-slate-700"
                >
                  Company
                  <span className="ml-1 font-medium text-slate-400">
                    (optional)
                  </span>
                </label>

                <input
                  id="company"
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company name"
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-slate-200
                    bg-slate-50
                    px-4
                    py-3.5
                    font-[Manrope]
                    text-sm
                    outline-none
                    transition

                    focus:border-blue-400
                    focus:bg-white
                    focus:ring-4
                    focus:ring-blue-100
                  "
                />
              </div>

              {/* Service */}

              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block font-[Manrope] text-xs font-bold text-slate-700"
                >
                  Service Required
                </label>

                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-slate-200
                    bg-slate-50
                    px-4
                    py-3.5
                    font-[Manrope]
                    text-sm
                    text-slate-600
                    outline-none
                    transition

                    focus:border-blue-400
                    focus:bg-white
                    focus:ring-4
                    focus:ring-blue-100
                  "
                >
                  <option value="">
                    Select service
                  </option>

                  {contact.services?.map((service) => (
                    <option
                      key={service}
                      value={service}
                    >
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Budget */}

              <div className="sm:col-span-2">
                <label
                  htmlFor="budget"
                  className="mb-2 block font-[Manrope] text-xs font-bold text-slate-700"
                >
                  Estimated Budget
                </label>

                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-slate-200
                    bg-slate-50
                    px-4
                    py-3.5
                    font-[Manrope]
                    text-sm
                    text-slate-600
                    outline-none
                    transition

                    focus:border-blue-400
                    focus:bg-white
                    focus:ring-4
                    focus:ring-blue-100
                  "
                >
                  <option value="">
                    Select budget
                  </option>

                  {contact.budgets?.map((budget) => (
                    <option
                      key={budget}
                      value={budget}
                    >
                      {budget}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2 block font-[Manrope] text-xs font-bold text-slate-700"
                >
                  Tell me about your project
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Tell me what you're planning to build, your goals and any important requirements..."
                  className="
                    w-full
                    resize-none
                    rounded-2xl
                    border
                    border-slate-200
                    bg-slate-50
                    px-4
                    py-4
                    font-[Manrope]
                    text-sm
                    leading-7
                    outline-none
                    transition

                    focus:border-blue-400
                    focus:bg-white
                    focus:ring-4
                    focus:ring-blue-100
                  "
                />
              </div>

              {/* Submit */}

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="
                    group
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-2xl
                    bg-slate-950
                    px-6
                    py-4
                    font-[Manrope]
                    text-sm
                    font-bold
                    text-white
                    shadow-xl
                    shadow-slate-950/10
                    transition
                    duration-300

                    hover:-translate-y-1
                    hover:bg-blue-600
                    hover:shadow-blue-500/20

                    sm:w-auto
                    sm:px-8
                  "
                >
                  Send Project Request

                  <FiSend className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;