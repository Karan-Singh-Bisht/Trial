import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";

const Support = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col px-4">
      {/* HEADER */}
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

      <nav className="flex w-full my-8 justify-around border-b border-gray-700">
        <NavLink
          end
          to=""
          className={({ isActive }) =>
            isActive
              ? "pb-2 border-b-2 border-white text-white text-[2.5vw]"
              : "pb-2 text-gray-400 hover:text-white text-[2.5vw]"
          }
        >
          Privacy Policy
        </NavLink>

        <NavLink
          to="terms"
          className={({ isActive }) =>
            isActive
              ? "pb-2 border-b-2 border-white text-white text-[2.5vw]"
              : "pb-2 text-gray-400 hover:text-white text-[2.5vw]"
          }
        >
          Terms &amp; Conditions
        </NavLink>

        {/* <NavLink
          to="refundPolicy"
          className={({ isActive }) =>
            isActive
              ? "pb-2 border-b-2 border-white text-white text-[2.5vw]"
              : "pb-2 text-gray-400 hover:text-white text-[2.5vw]"
          }
        >
          Refund Policy
        </NavLink> */}
      </nav>

      <div className="flex-grow overflow-y-auto">
        <Outlet />
      </div>

      <div className="py-4 text-center text-xs text-gray-500">
        © 2025 HarSar Studios Pvt. Ltd. All rights reserved
      </div>
    </div>
  );
};

export default Support;
