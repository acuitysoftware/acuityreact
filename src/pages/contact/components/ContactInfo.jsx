import React from "react";

export default function ContactInfo({ company }) {
  return (
    <div className="grid sm:grid-cols-2 gap-6 mb-10 text-sm text-body/70 font-body">
      <div className="flex items-center gap-2">ðŸ“ž {company.phone}</div>
      <div className="flex items-center gap-2">âœ‰ {company.email}</div>
      <div className="flex items-center gap-2">ðŸ“ {company.address}</div>
    </div>
  );
}
