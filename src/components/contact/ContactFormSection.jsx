import {
  FiCheckCircle,
  FiSend,
} from "react-icons/fi";

import useSiteData from "../../hooks/useSiteData";
import useContactForm from "../../hooks/useContactForm";

const ContactFormSection = () => {
  const { siteData } = useSiteData();

  const {
    formData,
    loading,
    success,
    handleChange,
    handleSubmit,
  } = useContactForm();

  const form =
    siteData?.contactPage?.form;

  if (!form) {
    return null;
  }

  const getField = (name) =>
    form.fields?.find(
      (field) => field.name === name
    );

  const nameField = getField("name");
  const emailField = getField("email");
  const serviceField = getField("service");
  const budgetField = getField("budget");
  const messageField = getField("message");

  const inputClass = `
    w-full
    rounded-xl
    border
    border-slate-200
    bg-slate-50
    px-4
    py-3
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
  `;

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F8FAFC]
        px-5
        py-20

        sm:px-8

        lg:px-10
        lg:py-28
      "
    >
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-violet-200/30 blur-[140px]" />

      <div
        className="
          relative
          mx-auto
          grid
          max-w-7xl
          overflow-hidden
          rounded-[32px]
          border
          border-slate-200
          bg-white
          shadow-[0_25px_80px_rgba(15,23,42,0.06)]

          lg:grid-cols-[0.9fr_1.1fr]
        "
      >

        {/* ====================== */}
        {/* LEFT FORM */}
        {/* ====================== */}

        <div className="p-6 sm:p-8 lg:p-10">

          <p
            className="
              font-[Manrope]
              text-[11px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-blue-600
            "
          >
            {form.eyebrow}
          </p>

          <h2
            className="
              mt-3
              font-['Space_Grotesk']
              text-3xl
              font-bold
              tracking-[-0.04em]
              text-slate-950
            "
          >
            {form.heading}
          </h2>

          <p
            className="
              mt-3
              max-w-lg
              font-[Manrope]
              text-sm
              leading-7
              text-slate-500
            "
          >
            {form.description}
          </p>


          {success && (
            <div className="mt-5 flex gap-3 rounded-xl border border-emerald-100 bg-emerald-50 p-3">

              <FiCheckCircle className="mt-0.5 shrink-0 text-emerald-600" />

              <p className="font-[Manrope] text-xs font-semibold text-emerald-700">
                Project request sent successfully.
              </p>

            </div>
          )}


          <form
            onSubmit={handleSubmit}
            className="mt-7 grid gap-4 sm:grid-cols-2"
          >

            {/* NAME */}
            {nameField && (
              <div>

                <label
                  htmlFor={nameField.name}
                  className="mb-2 block font-[Manrope] text-xs font-bold text-slate-700"
                >
                  {nameField.label}
                </label>

                <input
                  id={nameField.name}
                  name={nameField.name}
                  type={nameField.type}
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
                </label>

                <input
                  id={emailField.name}
                  name={emailField.name}
                  type={emailField.type}
                  value={formData[emailField.name] || ""}
                  onChange={handleChange}
                  placeholder={emailField.placeholder}
                  required={emailField.required}
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
              <div>

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
                </label>

                <textarea
                  id={messageField.name}
                  name={messageField.name}
                  value={formData[messageField.name] || ""}
                  onChange={handleChange}
                  placeholder={messageField.placeholder}
                  required={messageField.required}
                  rows="4"
                  className={`${inputClass} resize-none leading-6`}
                />

              </div>
            )}


            <div className="sm:col-span-2">

              <button
                type="submit"
                disabled={loading}
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-slate-950
                  px-5
                  py-3
                  font-[Manrope]
                  text-sm
                  font-bold
                  text-white
                  transition

                  hover:-translate-y-0.5
                  hover:bg-blue-600

                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >
                {loading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />

                    Sending...
                  </>
                ) : (
                  <>
                    {form.submitText}

                    <FiSend className="transition group-hover:translate-x-1" />
                  </>
                )}
              </button>

            </div>

          </form>

        </div>


        {/* ====================== */}
        {/* RIGHT IMAGE */}
        {/* ====================== */}

        <div className="relative min-h-[350px] overflow-hidden bg-slate-100 lg:min-h-full">

          <img
            src={form.image}
            alt="Let's discuss your project"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />

          <div className="absolute bottom-6 left-6 right-6">

            <div
              className="
                max-w-sm
                rounded-2xl
                border
                border-white/20
                bg-white/10
                p-4
                backdrop-blur-xl
              "
            >
              <p className="font-['Space_Grotesk'] text-lg font-bold text-white">
                Have an idea?
              </p>

              <p className="mt-1 font-[Manrope] text-xs leading-5 text-white/70">
                Share the basics. We can discuss the remaining details together.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactFormSection;