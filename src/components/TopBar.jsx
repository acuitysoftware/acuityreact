import React from "react";
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";

export default function TopBar({ company }) {
  return (
    <div className="bg-primary text-white text-xs py-2 px-4 flex flex-wrap justify-between items-center gap-2 font-body">
      <div className="flex gap-4 flex-wrap">
        <span className="flex items-center gap-1"><FiMail /> {company.email}</span>
        <span className="flex items-center gap-1"><FiPhone /> {company.phone}</span>
        <span className="flex items-center gap-1"><FiMapPin /> {company.address}</span>
      </div>
      <div className="flex gap-3 text-sm">
        <a href={company.facebook}  className="hover:text-secondary transition-colors"><FiFacebook /></a>
        <a href={company.instagram} className="hover:text-secondary transition-colors"><FiInstagram /></a>
        <a href={company.linkedin}  className="hover:text-secondary transition-colors"><FiLinkedin /></a>
      </div>
    </div>
  );
}
