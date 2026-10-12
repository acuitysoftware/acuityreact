import React, { useEffect, useState } from "react";
import IndustriesList from "./components/IndustriesList";
import { getIndustriesList } from "../../api/home/home";

export default function IndustriesPage() {
  const [industries, setIndustries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadIndustries() {
      try {
        const response = await getIndustriesList();
        const items = Array.isArray(response)
          ? response
          : Array.isArray(response?.data)
            ? response.data
            : Array.isArray(response?.data?.data)
              ? response.data.data
              : null;

        if (!items) {
          throw new Error("Unexpected industries response");
        }

        if (isMounted) {
          setIndustries(items);
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
    <div className="max-w-7xl mx-auto px-4 py-16 font-body">
      <h1 className="text-3xl font-heading font-bold mb-8 text-primary">Industries We Serve</h1>
      <IndustriesList industries={industries.map((industry) => industry.title).filter(Boolean)} />
      {!loading && !loadError && industries.length === 0 && (
        <p className="mt-4 text-center text-sm text-body/60">No industries to display.</p>
      )}
      {loadError && (
        <p role="alert" className="mt-4 text-center text-sm text-body/60">
          Unable to load industries.
        </p>
      )}
    </div>
  );
}
