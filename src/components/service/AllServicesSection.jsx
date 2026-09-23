import useSiteData from "../../hooks/useSiteData";

import ServiceCard from "../service/ServiceCard";

const AllServicesSection = () => {
  const { siteData } = useSiteData();

  const services = siteData?.services;

  if (!services?.items?.length) {
    return null;
  }

  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28">

      <div className="mx-auto max-w-7xl">

        <div className="max-w-2xl">
          <p className="font-[Manrope] text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Development Services
          </p>

          <h2 className="mt-3 font-['Space_Grotesk'] text-4xl font-bold tracking-[-0.04em] text-slate-950">
            Choose the support your product needs.
          </h2>

          <p className="mt-4 font-[Manrope] text-sm leading-7 text-slate-500">
            Services can cover a complete product or a specific part of your
            existing application.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">

          {services.items.map((service, index) => (
            <ServiceCard
              key={service.slug}
              service={service}
              detailed
              index={index}
            />
          ))}

        </div>
      </div>
    </section>
  );
};

export default AllServicesSection;