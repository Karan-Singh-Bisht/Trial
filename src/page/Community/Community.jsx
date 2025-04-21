import React from "react";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Community = () => {
  const navigate = useNavigate();

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
      <h1 className="text-2xl my-8 sm:text-3xl md:text-4xl font-medium text-center">
        Community
      </h1>

      <div className="flex-grow w-full h-full flex items-center justify-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-center">
          Social Media
        </h1>
      </div>

      {/* FOOTER */}
      <div className="py-4 text-center text-xs text-gray-500">
        © 2025 HarSar Studios Pvt. Ltd. All rights reserved
      </div>
    </div>
  );
};

export default Community;
