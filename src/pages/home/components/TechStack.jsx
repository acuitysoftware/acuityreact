import React, { useEffect, useState } from "react";
import Eyebrow from "./Eyebrow";
import { getTechnologiesList } from "../../../api/home/home";

// --- Section data (edit here to update the TechStack section) ----------------
const TECHSTACK_DATA = {
  eyebrow: "OUR TECHNOLOGIES",
  title: "Technologies We Work With",
  viewAllLink: "/services",
};

// --- Component ----------------------------------------------------------------
export default function TechStack() {
  const { eyebrow, title, viewAllLink } = TECHSTACK_DATA;
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadTechstack() {
      try {
        const response = await getTechnologiesList();
        const technologies = Array.isArray(response)
          ? response
          : Array.isArray(response?.data)
            ? response.data
            : Array.isArray(response?.data?.data)
              ? response.data.data
              : null;

        if (!technologies) {
          throw new Error("Unexpected technologies response");
        }

        if (isMounted) {
          setItems(technologies);
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

    loadTechstack();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-10 py-8 font-body">
      <div className="w-full">
        {/* Header row */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary">
              {title}
            </h2>
          </div>
          <a href={viewAllLink} className="hidden sm:inline-flex items-center gap-1 text-base font-semibold text-accent hover:underline whitespace-nowrap">
            View All Technologies ?
          </a>
        </div>

        {/* Grid of tech logos */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {items.map((technology, i) => (
            <div
              key={technology.id ?? technology.image_path ?? i}
              className="flex min-h-[132px] 2xl:min-h-[160px] 3xl:min-h-[240px] flex-col items-center justify-center gap-2 2xl:gap-3 3xl:gap-5 rounded-xl border border-primary/10 bg-surface hover:border-secondary hover:shadow-md hover:bg-secondary/5 transition-all p-4 2xl:p-5 3xl:p-8 group cursor-default"
            >
              <img
                src={technology.image_path}
                alt={technology.title ?? ""}
                className="h-12 w-12 2xl:h-14 2xl:w-14 3xl:h-20 3xl:w-20 object-contain"
              />
            </div>
          ))}
        </div>

        {!loading && !loadError && items.length === 0 && (
          <p className="mt-4 text-center text-sm text-body/60">No technologies to display.</p>
        )}
        {loadError && (
          <p role="alert" className="mt-4 text-center text-sm text-body/60">
            Unable to load technologies.
          </p>
        )}

        <div className="mt-5 text-center sm:hidden">
          <a href={viewAllLink} className="text-sm font-semibold text-accent hover:underline">View All Technologies ?</a>
        </div>
      </div>
    </section>
  );
}
