import React, { useEffect, useState } from "react";
import Eyebrow from "./Eyebrow";
import { getClientsList } from "../../../api/home/home.js";

const EYEBROW = "TRUSTED BY BUSINESSES WORLDWIDE";
const TITLE = "Our Recent Clients";
const VIEW_ALL_LINK = "/portfolio";

// ─── Single logo card ─────────────────────────────────────────────────────────
function ClientCard({ imagePath }) {
  return (
    <div className="flex items-center justify-center bg-white border border-primary/10 rounded-xl shadow-sm hover:shadow-md hover:border-secondary/40 transition-all p-3 md:p-4 hover:-translate-y-1 cursor-default group aspect-square w-full">
      {/* Updated image classes to fill up to 80% of the square card nicely */}
      <img
        src={imagePath}
        alt="Client logo"
        className="max-w-[80%] max-h-[80%] w-auto h-auto object-contain transition-transform group-hover:scale-105"
      />
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function Clients() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadClients() {
      try {
        const response = await getClientsList();
        const items = Array.isArray(response)
          ? response
          : Array.isArray(response?.data)
            ? response.data
            : Array.isArray(response?.data?.data)
              ? response.data.data
              : null;

        if (!items) {
          throw new Error("Unexpected clients response");
        }

        if (isMounted) {
          setClients(items);
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

    loadClients();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="w-full bg-surface px-4 sm:px-6 lg:px-10 py-8 font-body">
      <div className="w-full">
        <div className="flex items-end justify-between mb-6">
          <div>
            <Eyebrow>{EYEBROW}</Eyebrow>
            <h2 className="text-2xl sm:text-3xl md:text-4xl 3xl:text-5xl font-heading font-bold text-primary">
              {TITLE}
            </h2>
          </div>
          <a href={VIEW_ALL_LINK} className="hidden sm:inline-flex items-center gap-1 text-base 3xl:text-xl font-semibold text-accent hover:underline whitespace-nowrap">
            View All Clients →
          </a>
        </div>

        {/* Grid: 2 cols on mobile, 4 on tablet, 6 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 md:gap-4">
          {clients.map((client, index) => (
            <ClientCard
              key={client.id ?? client.image_path ?? index}
              imagePath={client.image_path}
            />
          ))}
        </div>

        {!loading && !loadError && clients.length === 0 && (
          <p className="mt-4 text-center text-sm text-body/60">No clients to display.</p>
        )}
        {loadError && (
          <p role="alert" className="mt-4 text-center text-sm text-body/60">
            Unable to load clients.
          </p>
        )}

        <div className="mt-6 text-center sm:hidden">
          <a href={VIEW_ALL_LINK} className="text-sm font-semibold text-accent hover:underline">View All Clients →</a>
        </div>
      </div>
    </section>
  );
}