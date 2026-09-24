import React from "react";

export default function ContactPage({ company }) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6 text-[#0e1b3d]">Contact Us</h1>
      <div className="grid sm:grid-cols-2 gap-6 mb-10 text-sm text-slate-600">
        <div>📞 {company.phone}</div>
        <div>✉ {company.email}</div>
        <div>📍 {company.address}</div>
      </div>
      <form className="grid gap-3 max-w-md">
        <input className="border rounded px-3 py-2 text-sm" placeholder="Your Name" />
        <input className="border rounded px-3 py-2 text-sm" placeholder="Your Email" />
        <input className="border rounded px-3 py-2 text-sm" placeholder="Your Phone" />
        <textarea className="border rounded px-3 py-2 text-sm" rows={4} placeholder="Project Details" />
        <button type="button" className="px-6 py-3 rounded-full font-semibold text-white bg-orange-500 w-fit">
          Send Message
        </button>
      </form>
    </div>
  );
}
