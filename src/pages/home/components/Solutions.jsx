import React, { useEffect, useState } from "react";
import Eyebrow from "./Eyebrow";
import { getSolutionsList } from "../../../api/home/home";

// ─── Section data (edit here to update the Solutions section) ─────────────────
const SOLUTIONS_DATA = {
  eyebrow: "OUR SOLUTIONS",
  title: "Our Solutions",
  viewAllLink: "/services",
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function Solutions() {
  const { eyebrow, title, viewAllLink } = SOLUTIONS_DATA;
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadSolutions() {
      try {
        const response = await getSolutionsList();
        const solutions = Array.isArray(response)
          ? response
          : Array.isArray(response?.data)
            ? response.data
            : Array.isArray(response?.data?.data)
              ? response.data.data
              : null;

        if (!solutions) {
          throw new Error("Unexpected solutions response");
        }

        if (isMounted) {
          setItems(solutions);
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

    loadSolutions();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="w-full bg-surface px-4 sm:px-6 lg:px-10 py-8 font-body">
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
            Explore All Solutions →
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {items.map((solution, i) => (
            <div
              key={solution.id ?? solution.image_path ?? i}
              className="overflow-hidden rounded-xl border border-primary/10 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-secondary/40 group"
            >
              <img src={solution.image_path} alt={solution.title ?? ""} className="h-36 2xl:h-44 3xl:h-64 w-full object-cover" />
              <div className="p-4 2xl:p-5 3xl:p-8">
                <h3 className="font-heading font-semibold text-base 2xl:text-lg 3xl:text-2xl text-primary group-hover:text-secondary transition-colors leading-snug mb-1">
                  {solution.title}
                </h3>
                <p className="text-sm 2xl:text-base 3xl:text-xl text-body/60 leading-relaxed mb-2">{solution.short_description}</p>
                <a href={viewAllLink} className="text-sm font-semibold text-accent cursor-pointer hover:underline block">
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>

        {!loading && !loadError && items.length === 0 && (
          <p className="mt-4 text-center text-sm text-body/60">No solutions to display.</p>
        )}
        {loadError && (
          <p role="alert" className="mt-4 text-center text-sm text-body/60">
            Unable to load solutions.
          </p>
        )}

        <div className="mt-5 text-center sm:hidden">
          <a href={viewAllLink} className="text-sm font-semibold text-accent hover:underline">Explore All Solutions →</a>
        </div>
      </div>
    </section>
  );
}
