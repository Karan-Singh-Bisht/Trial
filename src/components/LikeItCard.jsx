import React from "react";

const LikeItCard = ({ image, title, paragraph }) => {
  return (
    <div className="w-[22%] h-[31vw] bg-[#D9D9D9] flex flex-col gap-8 rounded-[2vw] p-4">
      <div className="relative w-full flex items-center">
        {/* Base Image (round background image) */}
        <img
          className="rounded-full w-[50%]"
          src="/image/4_1.png"
          alt="checked box"
        />

        {/* Overlayed Image */}
        <img
          className="absolute w-[30%] left-1/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          src={image}
          alt="logo"
        />
      </div>

      <h1 className="text-[2.5vw] leading-tight font-bold">{title}</h1>
      <p className="font-semibold opacity-50 text-xl">{paragraph}</p>
    </div>
  );
};

export default LikeItCard;
