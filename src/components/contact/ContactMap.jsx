import { FiMapPin } from "react-icons/fi";

import useSiteData from "../../hooks/useSiteData";

const ContactMap = () => {
  const { siteData } = useSiteData();

  const cards =
    siteData?.contactPage?.contactCards || [];

  const location = cards.find(
    (card) => card.type === "location"
  );

  if (!location?.value) {
    return null;
  }

  const hasCoordinates =
    location.latitude !== null &&
    location.latitude !== undefined &&
    location.longitude !== null &&
    location.longitude !== undefined;

  const mapQuery = hasCoordinates
    ? `${location.latitude},${location.longitude}`
    : location.value;

  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    mapQuery
  )}&z=15&output=embed`;

  return (
    <section className="bg-white px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">

          <div>

            <p className="font-[Manrope] text-[11px] font-bold uppercase tracking-[0.18em] text-blue-600">
              Location
            </p>

            <h2 className="mt-2 font-['Space_Grotesk'] text-3xl font-bold tracking-[-0.04em] text-slate-950">
              Find me here.
            </h2>

          </div>

          <div className="flex items-center gap-2 font-[Manrope] text-sm font-semibold text-slate-500">

            <FiMapPin className="text-blue-600" />

            {location.value}

          </div>

        </div>


        {/* MAP */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[30px]
            border
            border-slate-200
            bg-slate-100
            p-2
            shadow-[0_20px_70px_rgba(15,23,42,0.06)]
          "
        >

          <iframe
            key={mapUrl}
            src={mapUrl}
            title={`Map location - ${location.value}`}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="
              h-[320px]
              w-full
              rounded-[24px]
              border-0

              sm:h-[400px]
              lg:h-[450px]
            "
          />

        </div>

      </div>

    </section>
  );
};

export default ContactMap;