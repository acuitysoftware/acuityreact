import React from "react";

export default function ContactForm() {
  return (
    <form className="grid gap-3 max-w-md font-body">
      <input
        className="border border-primary/15 rounded-lg px-3 py-2 text-sm text-body bg-surface focus:outline-none focus:ring-2 focus:ring-secondary transition"
        placeholder="Your Name"
      />
      <input
        className="border border-primary/15 rounded-lg px-3 py-2 text-sm text-body bg-surface focus:outline-none focus:ring-2 focus:ring-secondary transition"
        placeholder="Your Email"
      />
      <input
        className="border border-primary/15 rounded-lg px-3 py-2 text-sm text-body bg-surface focus:outline-none focus:ring-2 focus:ring-secondary transition"
        placeholder="Your Phone"
      />
      <textarea
        className="border border-primary/15 rounded-lg px-3 py-2 text-sm text-body bg-surface focus:outline-none focus:ring-2 focus:ring-secondary transition"
        rows={4}
        placeholder="Project Details"
      />
      {/* CTA button â€” accent (#FD6301), Inter 600 */}
      <button
        type="button"
        className="px-6 py-3 rounded-full font-semibold text-white bg-accent hover:bg-accent/90 transition-colors w-fit shadow-md"
      >
        Send Message â†’
      </button>
    </form>
  );
}
