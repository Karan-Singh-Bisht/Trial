import React from "react";

const Page4 = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-black px-4">
      <div className="bg-[#ffecec] rounded-[3vw] w-full flex flex-col items-center justify-center text-center py-12 px-6 gap-8">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-[2.5vw] font-extrabold">
          Chronoverse: The Ultimate <br />
          Time-Travel Experience
        </h1>

        {/* Subheading */}
        <p className="text-sm sm:text-base lg:text-lg font-medium text-gray-700 max-w-2xl">
          This game isn’t just played—it’s experienced. <br />A revolution in
          gaming, storytelling, and digital culture.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <button className="bg-gray-300 hover:bg-gray-400 transition-all w-32 sm:w-40 h-10 rounded-full font-semibold text-sm">
            Learn More
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 transition-all w-32 sm:w-40 h-10 rounded-full font-semibold text-sm">
            Join Now
          </button>
        </div>

        {/* Images */}
        <div className="flex flex-wrap justify-center items-center gap-10 mt-10">
          <img
            src="/image/5_1.png"
            alt="PC Device"
            className="w-32 sm:w-40 md:w-[25vw] transition-transform hover:scale-105"
          />
          <img
            src="/image/5_2.png"
            alt="Mobile Device"
            className="w-32 sm:w-40 md:w-[25vw] transition-transform hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Page4;
