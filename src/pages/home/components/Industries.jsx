import React, { useEffect, useState } from "react";
import Eyebrow from "./Eyebrow";
import { getIndustriesList } from "../../../api/home/home";

// ─── Section data (edit here to update the Industries section) ────────────────
const INDUSTRIES_DATA = {
  eyebrow: "INDUSTRIES",
  title: "Industries We Serve",
  viewAllLink: "/industries",
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function Industries() {
  const { eyebrow, title, viewAllLink } = INDUSTRIES_DATA;

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadIndustries() {
      try {
        const response = await getIndustriesList();
        const industries = Array.isArray(response)
          ? response
          : Array.isArray(response?.data)
            ? response.data
            : Array.isArray(response?.data?.data)
              ? response.data.data
              : null;

        if (!industries) {
          throw new Error("Unexpected industries response");
        }

        if (isMounted) {
          setItems(industries);
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

    loadIndustries();
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
          <a
            href={viewAllLink}
            className="hidden sm:inline-flex items-center gap-1 text-base font-semibold text-accent hover:underline whitespace-nowrap"
          >
            View All Industries →
          </a>
        </div>

        {/* Grid — 2 cols mobile, 4 cols tablet+, 4 cols desktop */}
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
          {items.map((industry, i) => (
            <div
              key={industry.id ?? industry.image_path ?? i}
              className="overflow-hidden rounded-2xl border border-primary/10 bg-white text-center shadow-sm hover:border-secondary/50 hover:shadow-lg hover:-translate-y-1 transition-all group cursor-default"
            >
              <img
                src={industry.image_path}
                alt={industry.name ?? ""}
                className="h-32 2xl:h-40 3xl:h-64 w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="px-3 py-3 2xl:px-4 2xl:py-4 3xl:px-7 3xl:py-7 text-sm 2xl:text-base 3xl:text-2xl font-semibold text-primary group-hover:text-secondary transition-colors leading-snug">
                {industry.name}
              </div>
            </div>
          ))}
        </div>

        {!loading && !loadError && items.length === 0 && (
          <p className="mt-4 text-center text-sm text-body/60">No industries to display.</p>
        )}
        {loadError && (
          <p role="alert" className="mt-4 text-center text-sm text-body/60">
            Unable to load industries.
          </p>
        )}

        {/* Mobile link */}
        <div className="mt-5 text-center sm:hidden">
          <a href={viewAllLink} className="text-sm font-semibold text-accent hover:underline">
            View All Industries →
          </a>
        </div>
      </div>
    </section>
  );
}
