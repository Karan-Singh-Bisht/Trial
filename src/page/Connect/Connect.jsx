import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Connect = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col px-4">
      {/* Header */}
      <div className="w-full flex justify-between items-center h-[10vw] relative">
        <div className="w-16 sm:w-[7vw] h-full ml-9 md:w-[6vw] md:h-[6vw] absolute top-0 rounded-b-full flex items-center justify-center bg-white z-10">
          <IoChevronBack
            onClick={() => navigate("/")}
            className="text-xl hover:cursor-pointer text-black sm:text-[2vw]"
          />
        </div>

        <img
          src="/image/1_5.png"
          alt="logo"
          className="absolute left-1/2 transform -translate-x-1/2 w-8 mt-12 sm:w-[7vw] h-auto object-contain z-0"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-10 items-center w-full max-w-5xl mx-auto mt-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-base text-center">
          Get in touch to know more!
        </h1>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <input
            type="text"
            placeholder="First Name"
            className="input-style p-4 rounded-xl border-2 border-gray-600 bg-transparent text-white font-semibold"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="input-style p-4 rounded-xl border-2 border-gray-600 bg-transparent text-white font-semibold"
          />
          <input
            type="text"
            placeholder="Company Name"
            className="input-style p-4 rounded-xl border-2 border-gray-600 bg-transparent text-white font-semibold"
          />
          <input
            type="text"
            placeholder="Company Website"
            className="input-style p-4 rounded-xl border-2 border-gray-600 bg-transparent text-white font-semibold"
          />
          <input
            type="email"
            placeholder="Company Email Address"
            className="input-style p-4 rounded-xl border-2 border-gray-600 bg-transparent text-white font-semibold"
          />
          <input
            type="text"
            placeholder="Mobile number"
            className="input-style p-4 rounded-xl border-2 border-gray-600 bg-transparent text-white font-semibold"
          />
          <input
            type="text"
            placeholder="We are a?"
            className="input-style p-4 rounded-xl border-2 border-gray-600 bg-transparent text-white font-semibold"
          />
          <div className="hidden md:block" />
          <textarea
            rows="4"
            placeholder="Message"
            className="input-style p-4 rounded-xl border-2 border-gray-600 bg-transparent text-white font-semibold md:col-span-2"
          />
        </form>
      </div>

      {/* Footer */}
      <div className="mt-auto pt-10 flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt /> Hyderabad, Telangana 500080
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt /> 9100000010
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope /> care@studios.harsar.in
          </div>
        </div>

        <p className="text-center text-xs text-gray-600 mt-4">
          © 2025 HarSar Studios Pvt. Ltd. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Connect;
