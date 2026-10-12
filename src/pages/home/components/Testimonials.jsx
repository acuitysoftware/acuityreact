import React, { useEffect, useState } from "react";
import Eyebrow from "./Eyebrow";
import { MdFormatQuote, MdChevronLeft, MdChevronRight } from "react-icons/md";
import { getTestimonialsList } from "../../../api/home/home";

// ─── Section data (edit here to update the Testimonials section) ─────────────
const TESTIMONIALS_DATA = {
  eyebrow: "CLIENT REVIEWS",
  title: "What Our Clients Say",
};

const getName = (item) => item.name ?? item.client_name ?? item.title ?? "";
const getRole = (item) => item.designation ?? item.role ?? item.position ?? "";
const getQuote = (item) => item.description ?? item.quote ?? item.review ?? item.message ?? item.short_description ?? "";
const getAvatar = (item) => item.avatar ?? getName(item).split(/\s+/).map((part) => part[0]).join("").slice(0, 2);

// ─── Star renderer ────────────────────────────────────────────────────────────
function Stars({ count }) {
  return (
    <div className="flex gap-0.5 3xl:gap-2 mb-3 3xl:mb-10">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="#FCAE01" className="w-4 h-4 lg:w-5 lg:h-5 2xl:w-6 2xl:h-6 3xl:w-8 3xl:h-8">
          <path d="M10 1l2.39 5.26L18 7.27l-4 3.89.94 5.5L10 13.77l-4.94 2.89.94-5.5-4-3.89 5.61-.01z" />
        </svg>
      ))}
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function Testimonials() {
  const { eyebrow, title } = TESTIMONIALS_DATA;
  const [active, setActive] = useState(0);

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadTestimonialsList() {
      try {
        const response = await getTestimonialsList();
        const payload = response?.data?.data ?? response?.data ?? response;
        const testimonials = Array.isArray(payload)
          ? payload
          : payload && typeof payload === "object" && (payload.id || payload.name)
            ? [payload]
            : null;

        if (!testimonials) {
          throw new Error("Unexpected testimonials response");
        }

        if (isMounted) {
          setItems(testimonials);
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

    loadTestimonialsList();
    return () => {
      isMounted = false;
    };
  }, []);

  const prev = () => setActive((p) => (p === 0 ? items.length - 1 : p - 1));
  const next = () => setActive((p) => (p === items.length - 1 ? 0 : p + 1));

  return (
    <section className="w-full text-white px-4 sm:px-6 lg:px-10 py-8 lg:py-10 bg-body font-body relative overflow-hidden">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, #01A9FB 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 w-full">
        {/* Header */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">
              {title}
            </h2>
          </div>
          {/* Navigation arrows */}
          <div className="flex gap-2">
            <button
              onClick={prev}
              disabled={items.length < 2}
              aria-label="Previous"
              className="w-9 h-9 rounded-full border border-white/20 bg-white/10 flex items-center justify-center hover:bg-secondary/30 transition-colors"
            >
              <MdChevronLeft className="text-xl text-white" />
            </button>
            <button
              onClick={next}
              disabled={items.length < 2}
              aria-label="Next"
              className="w-9 h-9 rounded-full border border-white/20 bg-white/10 flex items-center justify-center hover:bg-secondary/30 transition-colors"
            >
              <MdChevronRight className="text-xl text-white" />
            </button>
          </div>
        </div>

        {/* Cards — all three visible on desktop, single carousel on mobile */}
        <div className="hidden md:grid md:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <div
              key={item.id ?? i}
              className={`flex flex-col bg-white text-body rounded-2xl p-6 2xl:p-8 3xl:p-12 min-h-[240px] 2xl:min-h-[280px] 3xl:min-h-[420px] shadow-sm hover:shadow-lg transition-all relative ${i === active ? "ring-2 ring-secondary ring-offset-2 ring-offset-primary" : ""
                }`}
            >
              <p className="text-sm 2xl:text-base 3xl:text-2xl text-body/75 leading-relaxed italic mb-5 3xl:mb-10">"{getQuote(item)}"</p>
              <Stars count={Number(item.rating) || 5} />
              <div className="flex items-center gap-3 mt-auto">
                {item.image_path ? (
                  <img src={item.image_path} alt={getName(item)} className="w-10 h-10 2xl:w-12 2xl:h-12 rounded-full object-cover shrink-0" />
                ) : (
                  <div className="w-10 h-10 2xl:w-12 2xl:h-12 rounded-full bg-secondary flex items-center justify-center text-white font-heading font-bold text-sm 2xl:text-base shrink-0">
                    {getAvatar(item)}
                  </div>
                )}
                <div>
                  <div className="font-heading font-semibold text-sm 2xl:text-base 3xl:text-2xl text-primary">{getName(item)}</div>
                  <div className="text-[11px] 2xl:text-xs 3xl:text-lg text-body/50">{getRole(item)}</div>
                </div>
                <MdFormatQuote className="text-4xl text-secondary/20 absolute bottom-4 right-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile single card */}
        <div className="md:hidden">
          {items.length > 0 && (() => {
            const item = items[active];
            return (
              <div className="bg-white text-body rounded-2xl p-6 shadow relative">
                <MdFormatQuote className="text-4xl text-secondary/20 absolute top-4 right-4" />
                <p className="text-sm text-body/75 leading-relaxed italic mb-5">"{getQuote(item)}"</p>
                <Stars count={Number(item.rating) || 5} />
                <div className="flex items-center gap-3">
                  {item.image_path ? (
                    <img src={item.image_path} alt={getName(item)} className="w-10 h-10 rounded-full object-cover shrink-0" />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white font-heading font-bold text-sm shrink-0">
                      {getAvatar(item)}
                    </div>
                  )}
                  <div>
                    <div className="font-heading font-semibold text-sm text-primary">{getName(item)}</div>
                    <div className="text-[11px] text-body/50">{getRole(item)}</div>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-5">
            {items.map((item, i) => (
              <button
                key={item.id ?? i}
                onClick={() => setActive(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === active ? "bg-secondary" : "bg-white/30"
                  }`}
              />
            ))}
          </div>
        </div>

        {!loading && !loadError && items.length === 0 && (
          <p className="mt-4 text-center text-sm text-white/70">No testimonials to display.</p>
        )}
        {loadError && (
          <p role="alert" className="mt-4 text-center text-sm text-white/70">
            Unable to load testimonials.
          </p>
        )}
      </div>
    </section>
  );
}
