import React, { useEffect, useState } from "react";
import Eyebrow from "./Eyebrow";
import { MdArrowOutward } from "react-icons/md";
import { getServicesList } from "../../../api/home/home";

// ─── Section data (edit here to update the Services section) ─────────────────
const SERVICES_DATA = {
  eyebrow: "WHAT WE DO",
  title: "Our Services",
  subtitle: "End-to-end technology solutions to help your business grow in the digital world.",
  viewAllLink: "/services",
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function Services() {
  const { eyebrow, title, subtitle, viewAllLink } = SERVICES_DATA;
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadServices() {
      try {
        const response = await getServicesList();
        const services = Array.isArray(response)
          ? response
          : Array.isArray(response?.data)
            ? response.data
            : Array.isArray(response?.data?.data)
              ? response.data.data
              : null;

        if (!services) {
          throw new Error("Unexpected services response");
        }

        if (isMounted) {
          setItems(services);
        }
      } catch {
        if (isMounted) {
          setLoadError(true);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadServices();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-10 py-8 font-body">
      <div className="w-full">
        {/* Header row */}
        <div className="flex items-end justify-between mb-1">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary">
              {title}
            </h2>
          </div>
          <a href={viewAllLink} className="hidden sm:inline-flex items-center gap-1 text-base font-semibold text-accent hover:underline whitespace-nowrap">
            View All Services →
          </a>
        </div>
        <p className="text-body/60 text-base mb-6 max-w-2xl">{subtitle}</p>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {items.map((service, i) => (
            <div
              key={service.id ?? service.image_path ?? i}
              className="relative flex flex-col lg:flex-row gap-4 2xl:gap-5 3xl:gap-8 min-h-0 lg:min-h-[160px] 2xl:min-h-[190px] 3xl:min-h-[340px] h-full border border-primary/10 rounded-xl p-5 2xl:p-6 3xl:p-9 bg-white hover:shadow-lg hover:border-secondary/30 hover:-translate-y-1 transition-all group cursor-default shadow-md shadow-gray-500"
            >
              <div className="w-14 h-14 2xl:w-16 2xl:h-16 3xl:w-20 3xl:h-20 rounded-xl flex items-center justify-center shrink-0 self-start overflow-hidden">
                <img
                  src={service.image_path}
                  alt={service.title ?? ""}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Text container - flex-col with h-full to allow button to push to bottom */}
              <div className="flex flex-col flex-1 h-full">
                {/* Changed font-semibold to font-extrabold for thicker title */}
                <h3 className="font-heading font-extrabold mb-2 text-primary group-hover:text-secondary transition-colors text-base 2xl:text-lg 3xl:text-2xl leading-snug">
                  {service.title}
                </h3>
                <p className="line-clamp-3 3xl:line-clamp-5 pr-10 3xl:pr-14 pb-2 text-sm 2xl:text-base 3xl:text-2xl text-body/60 leading-relaxed">
                  {service.short_description}
                </p>
                <div className="absolute bottom-5 right-5 3xl:bottom-8 3xl:right-8 w-9 h-9 3xl:w-12 3xl:h-12 rounded-full bg-accent flex items-center justify-center text-white shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-45">
                  <MdArrowOutward className="text-xl 3xl:text-3xl" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {!loading && !loadError && items.length === 0 && (
          <p className="mt-4 text-center text-sm text-body/60">No services to display.</p>
        )}
        {loadError && (
          <p role="alert" className="mt-4 text-center text-sm text-body/60">
            Unable to load services.
          </p>
        )}

        <div className="mt-5 text-center sm:hidden">
          <a href={viewAllLink} className="text-sm font-semibold text-accent hover:underline">View All Services →</a>
        </div>
      </div>
    </section>
  );
}
