import React from "react";

export default function TopBar({ company }) {
  return (
    <div className="bg-[#0e1b3d] text-white text-xs py-2 px-4 flex flex-wrap justify-between items-center gap-2">
      <div className="flex gap-4 flex-wrap">
        <span>✉ {company.email}</span>
        <span>📞 {company.phone}</span>
        <span>📍 {company.address}</span>
      </div>
      <div className="flex gap-3">
        <a href={company.facebook} className="hover:text-orange-400">FB</a>
        <a href={company.instagram} className="hover:text-orange-400">IG</a>
        <a href={company.linkedin} className="hover:text-orange-400">LI</a>
      </div>
    </div>
  );
}
