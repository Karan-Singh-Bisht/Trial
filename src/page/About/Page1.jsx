import React from "react";
import { IoChevronBack } from "react-icons/io5";
import Card from "../../components/Card";
import { useNavigate } from "react-router-dom";

const Page1 = () => {
  const navigate = useNavigate();

  return (
    <div
      className="w-full bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to top right, rgba(236, 208, 255, 0.8), rgba(255, 192, 203, 0.6), rgba(255, 228, 225, 0.7)), url('/image/1_1.png')`,
        backgroundBlendMode: "overlay",
      }}
    >
      {/* navbar */}
      <div className="w-full h-[12vh] relative flex px-6 sm:px-10 md:px-14 pb-4">
        {/* Back Button */}
        <div className="w-16 sm:w-[7vw] h-full md:w-[6vw] md:h-[6vw] rounded-b-full flex items-center justify-center bg-white z-10">
          <IoChevronBack
            onClick={() => navigate("/")}
            className="text-xl hover:cursor-pointer sm:text-[2vw]"
          />
        </div>

        {/* Centered Logo */}
        <img
          src="/image/1_5.png"
          alt="logo"
          className="absolute left-1/2 transform -translate-x-1/2 w-16 sm:w-[7vw] h-full object-contain z-0"
        />
      </div>

      {/* content */}
      <main className="w-full flex flex-col items-center justify-center gap-6 md:gap-12 px-4 sm:px-0">
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <img
            src="/image/1_2.png"
            alt="content"
            className="w-40 md:h-[6vw] h-[15vw] sm:w-[24vw] object-cover"
          />
          <h1 className="text-[8vw] sm:text-[4vw] font-semibold text-white text-center sm:text-left">
            <span className="md:text-[4vw] hidden sm:inline">:</span> The
            Chronoverse
          </h1>
        </div>

        <p className="md:text-[4vw] text-3xl sm:text-[4vw] text-white font-bold text-center">
          A Journey Through Time and Beyond
        </p>

        <div className="flex gap-4 sm:gap-[2vw] mt-4 mb-8">
          <div className="bg-gray-200 w-32 sm:w-[18vw] h-10 sm:h-[6vw] rounded-3xl"></div>
          <div className="bg-gray-200 w-32 sm:w-[18vw] h-10 sm:h-[6vw] rounded-3xl"></div>
        </div>
        <img
          src="/image/1_3.png"
          alt="content"
          className="w-[100vw] md:w-[80vw]"
        />
        <div className="flex flex-col md:flex-row w-full px-[4vw] py-[2vw]">
          {/* Heading section */}
          <div className="md:w-[35%] w-full mb-6 md:mb-0">
            <h1 className="text-white leading-tight text-[6vw] font-bold">
              A Universe of Six Core Realms
            </h1>
          </div>

          {/* Cards container */}
          <div className="w-full md:w-[65%] flex flex-wrap gap-6 justify-center">
            <div className="w-full md:w-[48%]">
              <Card
                title={"Life"}
                subHeading={"Live, Learn & Evolve"}
                l1={"Experience birth, growth, and rebirth across Yugas."}
                l2={"Choices define your karma and future existence."}
                image={"/image/1_4.png"}
              />
            </div>
            <div className="w-full md:w-[48%]">
              <Card
                title={"Life"}
                subHeading={"Live, Learn & Evolve"}
                l1={"Experience birth, growth, and rebirth across Yugas."}
                l2={"Choices define your karma and future existence."}
                image={"/image/1_4.png"}
              />
            </div>
            <div className="w-full md:w-[48%]">
              <Card
                title={"Life"}
                subHeading={"Live, Learn & Evolve"}
                l1={"Experience birth, growth, and rebirth across Yugas."}
                l2={"Choices define your karma and future existence."}
                image={"/image/1_4.png"}
              />
            </div>
            <div className="w-full md:w-[48%]">
              <Card
                title={"Life"}
                subHeading={"Live, Learn & Evolve"}
                l1={"Experience birth, growth, and rebirth across Yugas."}
                l2={"Choices define your karma and future existence."}
                image={"/image/1_4.png"}
              />
            </div>
            <div className="w-full md:w-[48%]">
              <Card
                title={"Life"}
                subHeading={"Live, Learn & Evolve"}
                l1={"Experience birth, growth, and rebirth across Yugas."}
                l2={"Choices define your karma and future existence."}
                image={"/image/1_4.png"}
              />
            </div>
            <div className="w-full md:w-[48%]">
              <Card
                title={"Life"}
                subHeading={"Live, Learn & Evolve"}
                l1={"Experience birth, growth, and rebirth across Yugas."}
                l2={"Choices define your karma and future existence."}
                image={"/image/1_4.png"}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page1;
