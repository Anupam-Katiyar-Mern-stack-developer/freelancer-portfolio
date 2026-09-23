import {
  FiArrowUpRight,
  FiCheckCircle,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
} from "react-icons/fi";

import useSiteData from "../../hooks/useSiteData";
import useContactForm from "../../hooks/useContactForm";

const ContactSection = ({ page = false }) => {
  const { siteData } = useSiteData();

  const {
    formData,
    loading,
    success,
    handleChange,
    handleSubmit,
  } = useContactForm();

  const contact = siteData?.contact;

  if (!contact) {
    return null;
  }

  const getField = (name) =>
    contact.fields?.find(
      (field) => field.name === name
    );

  const nameField = getField("name");
  const emailField = getField("email");
  const companyField = getField("company");
  const serviceField = getField("service");
  const budgetField = getField("budget");
  const messageField = getField("message");

  const inputClass = `
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
    duration-300

    placeholder:text-slate-400

    hover:border-slate-300

    focus:border-blue-400
    focus:bg-white
    focus:ring-4
    focus:ring-blue-100
  `;

  return (
    <section
      id="contact"
      className={`
        relative
        overflow-hidden
        bg-[#F8FAFC]
        px-5
        pb-20

        sm:px-8

        lg:px-10
        lg:pb-28

        ${
          page
            ? "pt-36 lg:pt-40"
            : "pt-20 lg:pt-28"
        }
      `}
    >
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-blue-200/40 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-violet-200/30 blur-[140px]" />


      <div className="relative mx-auto max-w-7xl">

        {/* SECTION HEADING */}

        <div className="mx-auto mb-12 max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 font-[Manrope] text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            {contact.eyebrow}
          </span>

          <h2 className="mt-5 font-['Space_Grotesk'] text-4xl font-bold leading-tight tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-6xl">
            {contact.heading}

            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              {contact.highlight}
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl font-[Manrope] text-sm leading-7 text-slate-500 sm:text-base">
            {contact.description}
          </p>

        </div>


        {/* CONTACT GRID */}

        <div className="grid gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">

          {/* =========================== */}
          {/* LEFT */}
          {/* =========================== */}

          <div className="relative overflow-hidden rounded-[32px] bg-slate-950 p-7 text-white sm:p-9 lg:p-10">

            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-[100px]" />

            <div className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-violet-500/20 blur-[110px]" />

            <div className="relative flex h-full flex-col">

              <div>

                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 font-[Manrope] text-xs font-bold text-emerald-300">

                  <span className="relative flex h-2 w-2">

                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />

                    <span className="relative h-2 w-2 rounded-full bg-emerald-400" />

                  </span>

                  {contact.availability}

                </span>


                <h3 className="mt-7 max-w-md font-['Space_Grotesk'] text-3xl font-bold leading-tight tracking-[-0.04em] sm:text-4xl">
                  {contact.panelTitle}
                </h3>


                <p className="mt-4 max-w-md font-[Manrope] text-sm leading-7 text-slate-400">
                  {contact.panelDescription}
                </p>

              </div>


              {/* CONTACT DETAILS */}

              <div className="mt-10 space-y-3">

                {/* EMAIL */}

                <a
                  href={`mailto:${contact.email}`}
                  className="group flex items-center gap-4 rounded-[20px] border border-white/10 bg-white/[0.05] p-4 transition duration-300 hover:bg-white/[0.08]"
                >

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-blue-300">
                    <FiMail />
                  </div>


                  <div className="min-w-0 flex-1">

                    <p className="font-[Manrope] text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
                      Email
                    </p>

                    <p className="mt-1 truncate font-[Manrope] text-sm font-semibold text-white">
                      {contact.email}
                    </p>

                  </div>


                  <FiArrowUpRight className="shrink-0 text-lg text-white/20 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-300" />

                </a>


                {/* PHONE */}

                <a
                  href={`tel:${contact.phone}`}
                  className="group flex items-center gap-4 rounded-[20px] border border-white/10 bg-white/[0.05] p-4 transition duration-300 hover:bg-white/[0.08]"
                >

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-blue-300">
                    <FiPhone />
                  </div>


                  <div className="min-w-0 flex-1">

                    <p className="font-[Manrope] text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
                      Phone
                    </p>

                    <p className="mt-1 font-[Manrope] text-sm font-semibold text-white">
                      {contact.phone}
                    </p>

                  </div>


                  <FiArrowUpRight className="shrink-0 text-lg text-white/20 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-300" />

                </a>


                {/* LOCATION */}

                <div className="flex items-center gap-4 rounded-[20px] border border-white/10 bg-white/[0.05] p-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-blue-300">
                    <FiMapPin />
                  </div>

                  <div>

                    <p className="font-[Manrope] text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
                      Location
                    </p>

                    <p className="mt-1 font-[Manrope] text-sm font-semibold text-white">
                      {contact.location}
                    </p>

                  </div>

                </div>

              </div>


              <div className="mt-auto pt-10">

                <div className="border-t border-white/10 pt-6">

                  <p className="font-[Manrope] text-xs leading-6 text-slate-500">
                    {contact.bottomText}
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* =========================== */}
          {/* RIGHT FORM */}
          {/* =========================== */}

          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.06)] sm:p-8 lg:p-10">

            <p className="font-[Manrope] text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              {contact.formEyebrow}
            </p>


            <h3 className="mt-3 font-['Space_Grotesk'] text-3xl font-bold tracking-[-0.04em] text-slate-950 sm:text-4xl">
              {contact.formHeading}
            </h3>


            <p className="mt-3 max-w-xl font-[Manrope] text-sm leading-7 text-slate-500">
              {contact.formDescription}
            </p>


            {/* SUCCESS */}

            {success && (
              <div className="mt-6 flex gap-3 rounded-2xl border border-emerald-100 bg-emerald-50 p-4">

                <FiCheckCircle className="mt-0.5 shrink-0 text-emerald-600" />

                <div>

                  <p className="font-[Manrope] text-sm font-bold text-emerald-800">
                    {contact.success?.title}
                  </p>

                  <p className="mt-1 font-[Manrope] text-xs text-emerald-600">
                    {contact.success?.description}
                  </p>

                </div>

              </div>
            )}


            <form
              onSubmit={handleSubmit}
              className="mt-8 grid gap-5 sm:grid-cols-2"
            >

              {/* NAME */}

              {nameField && (
                <div>

                  <label
                    htmlFor={nameField.name}
                    className="mb-2 block font-[Manrope] text-xs font-bold text-slate-700"
                  >
                    {nameField.label}

                    {nameField.required && (
                      <span className="ml-1 text-red-500">
                        *
                      </span>
                    )}

                  </label>

                  <input
                    id={nameField.name}
                    type={nameField.type}
                    name={nameField.name}
                    value={formData[nameField.name] || ""}
                    onChange={handleChange}
                    placeholder={nameField.placeholder}
                    required={nameField.required}
                    className={inputClass}
                  />

                </div>
              )}


              {/* EMAIL */}

              {emailField && (
                <div>

                  <label
                    htmlFor={emailField.name}
                    className="mb-2 block font-[Manrope] text-xs font-bold text-slate-700"
                  >
                    {emailField.label}

                    {emailField.required && (
                      <span className="ml-1 text-red-500">
                        *
                      </span>
                    )}

                  </label>

                  <input
                    id={emailField.name}
                    type={emailField.type}
                    name={emailField.name}
                    value={formData[emailField.name] || ""}
                    onChange={handleChange}
                    placeholder={emailField.placeholder}
                    required={emailField.required}
                    className={inputClass}
                  />

                </div>
              )}


              {/* COMPANY */}

              {companyField && (
                <div>

                  <label
                    htmlFor={companyField.name}
                    className="mb-2 block font-[Manrope] text-xs font-bold text-slate-700"
                  >
                    {companyField.label}
                  </label>

                  <input
                    id={companyField.name}
                    type={companyField.type}
                    name={companyField.name}
                    value={formData[companyField.name] || ""}
                    onChange={handleChange}
                    placeholder={companyField.placeholder}
                    required={companyField.required}
                    className={inputClass}
                  />

                </div>
              )}


              {/* SERVICE */}

              {serviceField && (
                <div>

                  <label
                    htmlFor={serviceField.name}
                    className="mb-2 block font-[Manrope] text-xs font-bold text-slate-700"
                  >
                    {serviceField.label}

                    {serviceField.required && (
                      <span className="ml-1 text-red-500">
                        *
                      </span>
                    )}

                  </label>

                  <select
                    id={serviceField.name}
                    name={serviceField.name}
                    value={formData[serviceField.name] || ""}
                    onChange={handleChange}
                    required={serviceField.required}
                    className={inputClass}
                  >

                    <option value="">
                      {serviceField.placeholder}
                    </option>

                    {serviceField.options?.map(
                      (option) => (
                        <option
                          key={option}
                          value={option}
                        >
                          {option}
                        </option>
                      )
                    )}

                  </select>

                </div>
              )}


              {/* BUDGET */}

              {budgetField && (
                <div className="sm:col-span-2">

                  <label
                    htmlFor={budgetField.name}
                    className="mb-2 block font-[Manrope] text-xs font-bold text-slate-700"
                  >
                    {budgetField.label}
                  </label>

                  <select
                    id={budgetField.name}
                    name={budgetField.name}
                    value={formData[budgetField.name] || ""}
                    onChange={handleChange}
                    required={budgetField.required}
                    className={inputClass}
                  >

                    <option value="">
                      {budgetField.placeholder}
                    </option>

                    {budgetField.options?.map(
                      (option) => (
                        <option
                          key={option}
                          value={option}
                        >
                          {option}
                        </option>
                      )
                    )}

                  </select>

                </div>
              )}


              {/* MESSAGE */}

              {messageField && (
                <div className="sm:col-span-2">

                  <label
                    htmlFor={messageField.name}
                    className="mb-2 block font-[Manrope] text-xs font-bold text-slate-700"
                  >
                    {messageField.label}

                    {messageField.required && (
                      <span className="ml-1 text-red-500">
                        *
                      </span>
                    )}

                  </label>

                  <textarea
                    id={messageField.name}
                    name={messageField.name}
                    value={formData[messageField.name] || ""}
                    onChange={handleChange}
                    placeholder={messageField.placeholder}
                    required={messageField.required}
                    rows="6"
                    className={`${inputClass} resize-none leading-7`}
                  />

                </div>
              )}


              {/* BUTTON */}

              <div className="sm:col-span-2">

                <button
                  type="submit"
                  disabled={loading}
                  className="
                    group
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-2xl
                    bg-slate-950
                    px-7
                    py-4
                    font-[Manrope]
                    text-sm
                    font-bold
                    text-white
                    transition
                    duration-300

                    hover:-translate-y-1
                    hover:bg-blue-600

                    disabled:cursor-not-allowed
                    disabled:opacity-60

                    sm:w-auto
                  "
                >

                  {loading ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />

                      Sending...
                    </>
                  ) : (
                    <>
                      {contact.submitText}

                      <FiSend className="transition group-hover:translate-x-1" />
                    </>
                  )}

                </button>

              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;