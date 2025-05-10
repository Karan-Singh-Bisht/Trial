import React from "react";

const Page7 = () => {
  return (
    <div className="w-full flex flex-col gap-10 bg-black text-white md:gap-14 items-center p-4 md:p-6">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-[8vw] md:text-[4vw] lg:text-[3.5vw] font-tiltWarp">
          Join the Team
        </h1>
        <p className="text-[4vw] md:text-[2vw] lg:text-[1.7vw] font-raleWay">
          where your creativity meets reality
        </p>
        <button className="w-40 sm:w-[50%] md:w-[30%] lg:w-[25%] p-2 text-sm md:text-base text-white bg-[#1C274C] rounded-2xl flex items-center justify-center">
          Apply Now
        </button>
      </div>

      <img
        src="/image/8_1.png"
        alt="Join the Team"
        className="w-[80%] sm:w-[60%] md:w-[50%] object-cover"
      />
    </div>
  );
};

export default Page7;
