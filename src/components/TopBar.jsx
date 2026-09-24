import React from "react";
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";

export default function TopBar({ company }) {
  return (
    <div className="bg-[#0e1b3d] text-white text-xs py-2 px-4 flex flex-wrap justify-between items-center gap-2">
      <div className="flex gap-4 flex-wrap">
        <span className="flex items-center gap-1"><FiMail /> {company.email}</span>
        <span className="flex items-center gap-1"><FiPhone /> {company.phone}</span>
        <span className="flex items-center gap-1"><FiMapPin /> {company.address}</span>
      </div>
      <div className="flex gap-3 text-sm">
        <a href={company.facebook} className="hover:text-orange-400"><FiFacebook /></a>
        <a href={company.instagram} className="hover:text-orange-400"><FiInstagram /></a>
        <a href={company.linkedin} className="hover:text-orange-400"><FiLinkedin /></a>
      </div>
    </div>
  );
}
