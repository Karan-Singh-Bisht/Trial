import React from "react";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Service = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background */}
      <img
        loading="lazy"
        src="/XRperiencePage/service.jpeg"
        alt="Universe background"
        className="absolute inset-0 -z-50 w-full h-full object-cover"
      />

      {/* Page Content */}
      <div className="relative flex flex-col min-h-screen">
        {/* HEADER */}
        <div className="w-full flex justify-between items-center h-[10vw] relative">
          <div className="w-16 sm:w-[7vw] h-full ml-14 md:w-[6vw] md:h-[6vw] absolute top-0 rounded-b-full flex items-center justify-center bg-white z-10">
            <IoChevronBack
              onClick={() => navigate("/")}
              className="text-xl hover:cursor-pointer text-black sm:text-[2vw]"
            />
          </div>

          <img
            src="/image/1_5.png"
            alt="logo"
            className="absolute left-1/2 transform -translate-x-1/2 w-8 sm:w-[7vw] h-auto object-contain z-0"
          />
        </div>

        {/* Hero Content */}
        <div className="flex-grow flex flex-col items-center justify-center text-center px-4 space-y-4">
          <h2 className="text-lg sm:text-xl md:text-2xl text-white">
            Build your universe with us
          </h2>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-white">
            vishvaam:
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-white">
            A Journey Through Time and Beyond
          </p>
        </div>

        {/* Footer */}
        <div className="py-4 text-center text-xs text-gray-400">
          © 2025 HarSar Studios Pvt. Ltd. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Service;
