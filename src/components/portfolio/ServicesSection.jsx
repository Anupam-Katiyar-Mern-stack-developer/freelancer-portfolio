import { motion } from "motion/react";
import { Link } from "react-router";
import {
  FiArrowRight,
  FiArrowUpRight,
} from "react-icons/fi";

import useSiteData from "../../hooks/useSiteData";
import ServiceCard from "../service/ServiceCard";

const ServicesSection = () => {
  const { siteData } = useSiteData();

  const services = siteData?.services;

  if (!services?.items?.length) {
    return null;
  }

  // Home page par sirf 3 services
  const previewServices = services.items.slice(0, 3);

  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        bg-white
        px-5
        py-20

        sm:px-8

        lg:px-10
        lg:py-28
      "
    >
      {/* Background decoration */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-[420px]
          w-[420px]
          rounded-full
          bg-blue-100/50
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-[380px]
          w-[380px]
          rounded-full
          bg-violet-100/50
          blur-[140px]
        "
      />

      <div className="relative mx-auto max-w-7xl">

        {/* ============================= */}
        {/* SECTION HEADING */}
        {/* ============================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mx-auto
            max-w-3xl
            text-center
          "
        >
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
            {services.eyebrow}
          </p>

          <h2
            className="
              mt-3
              font-['Space_Grotesk']
              text-3xl
              font-bold
              leading-tight
              tracking-[-0.045em]
              text-slate-950

              sm:text-4xl
              lg:text-5xl
            "
          >
            {services.heading}

            {services.highlight && (
              <span className="block text-blue-600">
                {services.highlight}
              </span>
            )}
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              font-[Manrope]
              text-sm
              leading-7
              text-slate-500

              sm:text-base
            "
          >
            {services.description}
          </p>
        </motion.div>


        {/* ============================= */}
        {/* SERVICES GRID */}
        {/* ============================= */}

        <div
          className="
            mt-12
            grid
            gap-6

            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {previewServices.map((service, index) => (
            <ServiceCard
              key={service.slug}
              service={service}
              index={index}
              compact
            />
          ))}
        </div>


        {/* ============================= */}
        {/* ALL SERVICES BUTTON */}
        {/* ============================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: 0.15,
          }}
          className="
            mt-12
            flex
            justify-center
          "
        >
          <Link
            to="/service"
            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-2xl
              bg-slate-950
              px-6
              py-4
              font-[Manrope]
              text-sm
              font-bold
              text-white
              transition
              duration-300

              hover:-translate-y-1
              hover:bg-blue-600
              hover:shadow-[0_18px_40px_rgba(37,99,235,0.20)]
            "
          >
            View All Services

            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                bg-white/10
                transition
                duration-300

                group-hover:bg-white/20
              "
            >
              <FiArrowUpRight
                className="
                  transition
                  duration-300

                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesSection;