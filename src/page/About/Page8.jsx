import React from "react";
import Footer from "../../components/Footer";

const Page8 = () => {
  return (
    <div className="flex flex-col gap-6 items-center px-4 py-8 text-center">
      <h1 className="font-tiltWarp text-[6vw] md:text-[4vw]">
        Access the Power of Ultimate
      </h1>

      <img
        className="w-[90%] md:w-[60%] h-[40vw] md:h-[20vw] object-cover rounded-3xl"
        src="/image/9_1.png"
        alt="Main Visual"
      />

      <div className="flex flex-col items-center gap-4">
        <h3 className="text-lg md:text-xl font-medium">Download Now</h3>

        {/* Store Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <img
            src="/image/9_2.png"
            className="w-12 md:w-12 border-2 rounded-xl"
            alt="Google Play"
          />
          <img
            src="/image/9_3.png"
            className="w-12 md:w-12"
            alt="Apple Store"
          />
        </div>

        <h4 className="text-sm md:text-base mt-2">
          By <span className="font-bold">HarSar</span>
        </h4>
        <Footer />
      </div>
    </div>
  );
};

export default Page8;
