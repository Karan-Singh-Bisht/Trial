import React from "react";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Media = () => {
  const navigate = useNavigate();

  // Dummy data for the three cards
  const cards = [1, 2, 3];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
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
          className="absolute left-1/2 transform -translate-x-1/2 w-8 mt-12 sm:w-[7vw] h-auto object-contain z-0"
        />
      </div>

      {/* MAIN */}
      <div className="flex-grow px-4 py-8 max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-center">
          Media &amp; Press
        </h1>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((_, i) => (
            <div
              key={i}
              className="bg-[#111111] rounded-lg overflow-hidden shadow-lg"
            >
              {/* Card header */}
              <div className="p-4 border-b border-gray-700">
                <p className="text-gray-300 leading-relaxed">
                  Full NameFull NameFull NameFull Name
                  <br />
                  Full NameFull NameFull NameFull Name
                </p>
              </div>
              {/* Image placeholder */}
              <div className="h-64 bg-gray-800" />
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div className="py-4 text-center text-xs text-gray-500">
        © 2025 HarSar Studios Pvt. Ltd. All rights reserved
      </div>
    </div>
  );
};

export default Media;
