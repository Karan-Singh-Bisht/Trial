import React from "react";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center text-center px-4 py-6 text-sm text-gray-600 font-raleWay">
      {/* Contact Info */}
      <div className="flex flex-wrap justify-center items-center gap-6 mb-4">
        <div className="flex items-center gap-2">
          <MdLocationOn className="text-lg" />
          <span>Hyderabad, Telangana 500080</span>
        </div>
        <div className="flex items-center gap-2">
          <MdPhone className="text-lg" />
          <span>9100000010</span>
        </div>
        <div className="flex items-center gap-2">
          <MdEmail className="text-lg" />
          <span>care@studios.harsar.in</span>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-xs">
        © 2025 <span className="font-medium">HarSar Studios</span>. All rights
        reserved
      </p>
    </footer>
  );
};

export default Footer;
