import React from "react";
import { GiOpenBook } from "react-icons/gi";
import { IoMdClock } from "react-icons/io";
import { GiCrossedSwords } from "react-icons/gi";
import { TiSpiral } from "react-icons/ti";
import { CiGlobe } from "react-icons/ci";

const Page2 = () => {
  return (
    <div className="flex flex-col items-center w-full p-4">
      <h1 className="font-extrabold text-3xl md:text-4xl lg:text-[5vw] text-center mb-10">
        Highlights of us
      </h1>

      {/* Row 1 */}
      <div className="flex flex-col lg:flex-row w-full gap-4 p-2">
        <div className="w-full lg:w-[35%] bg-[#E8FFED] px-6 pt-6 rounded-3xl flex flex-col items-center">
          <div className="flex flex-col gap-2 items-center">
            <h1 className="font-extrabold flex gap-2 text-2xl md:text-3xl text-center">
              <span>
                <GiOpenBook />
              </span>
              AI-Powered Storytelling
            </h1>
            <p className="opacity-60 text-base md:text-xl font-semibold text-center w-full md:w-[75%]">
              AI dynamically adapts quests, dialogue, and game outcomes based on
              your karma and choices.
            </p>
          </div>
          <img
            className="w-32 md:w-44 mt-4"
            src="/image/3_1.png"
            alt="AI-Powered Storytelling"
          />
        </div>
        <div className="w-full lg:w-[65%] bg-[#f5f3f3] rounded-3xl flex flex-col md:flex-row gap-4 px-4 pt-4 items-center">
          <img
            src="/image/3_2.png"
            className="object-cover w-64 md:w-72"
            alt="Time Travel"
          />
          <div className="flex flex-col gap-4 p-4 text-center md:text-left">
            <div className="flex gap-2 items-center">
              <span>
                <IoMdClock className="text-[2.5vw]" />
              </span>
              <h1 className="font-extrabold text-2xl md:text-3xl">
                Time-Travel <br /> Mechanics
              </h1>
            </div>
            <p className="font-semibold text-base md:text-xl opacity-50">
              Seamlessly transition between Krita, Treta, Dvapara, and Kali
              Yuga, unlocking different quests, characters, and environments.
            </p>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex flex-col lg:flex-row w-full gap-4 p-2">
        <div className="w-full lg:w-[55%] bg-[#FFEDED] p-6 rounded-3xl flex flex-col lg:flex-row items-center">
          <div className="flex flex-col p-2 text-center lg:text-left">
            <h1 className="text-2xl flex flex-col md:text-3xl leading-tight font-extrabold mb-2">
              <span className="gap-2 flex">
                <GiCrossedSwords className="w-10" />
                &nbsp;Multi-Role
              </span>{" "}
              Gameplay
            </h1>
            <p className="opacity-55 text-base md:text-xl font-semibold w-full lg:w-[80%]">
              Choose to be a sage, king, merchant, warrior, farmer, artist, or
              scientist with distinct abilities and responsibilities in every
              yuga.
            </p>
          </div>
          <img
            src="/image/3_3.png"
            className="object-cover w-[60vw] md:w-[30vw] lg:w-[16vw] mt-4 lg:mt-0 lg:ml-[4vw] rounded-3xl"
            alt="Multi Role"
          />
        </div>
        <div className="w-full lg:w-[45%] flex bg-[#E6F5FF] p-6 rounded-3xl flex-col lg:flex-row items-center">
          <div className="flex flex-col gap-4 text-center lg:text-left">
            <div className="flex">
              <TiSpiral className="text-[2.5vw] mr-2" />
              <h1 className="font-extrabold text-2xl md:text-3xl">
                Open-World <br /> Exploration
              </h1>
            </div>
            <p className="opacity-55 text-base md:text-xl font-semibold w-full lg:w-[90%]">
              Travel across vast landscapes, from sacred temples and celestial
              realms to cyberpunk cities and floating AI civilizations.
            </p>
          </div>
          <img
            src="/image/3_4.png"
            className="object-cover w-64 md:w-72 mt-4 lg:mt-0"
            alt="Open World"
          />
        </div>
      </div>

      {/* Row 3 */}
      <div className="flex flex-col lg:flex-row w-full gap-4 p-2">
        <div className="flex flex-col w-full lg:w-[25%] p-6 rounded-3xl gap-3 bg-[#F4F4F4] items-center">
          <div className="flex flex-col">
            <span className="flex">
              <CiGlobe className="text-[2vw] mr-1 mb-1" />
              <h1 className="font-extrabold text-xl md:text-2xl lg:text-[2vw] leading-tight text-center">
                Social
              </h1>
            </span>{" "}
            <h1 className="font-extrabold text-xl md:text-2xl lg:text-[2vw] leading-tight text-center">
              Experiences
            </h1>
          </div>
          <p className="opacity-55 text-base md:text-xl font-semibold text-center">
            Team up with players to battle demons, trade across Yugas, build
            civilizations, and create an evolving world shaped by the community.
          </p>
          <img
            src="/image/3_5.png"
            className="object-cover w-64 md:w-72"
            alt="Social Experience"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center w-full lg:w-[75%] bg-[#F4F4F4] p-6 rounded-3xl gap-4">
          <img
            src="/image/3_6.gif"
            className="object-cover w-[80%] md:w-[30%]"
            alt="Social GIF"
          />
          <div className="flex flex-col text-center md:text-left w-full md:w-[50%] leading-tight">
            <h1 className="font-extrabold text-xl md:text-2xl lg:text-[2.5vw] mb-2">
              <span className="flex gap-1">
                <CiGlobe className="text-[2vw]" />
                <h1 className="font-extrabold text-xl md:text-2xl lg:text-[2vw] leading-tight text-center">
                  Social
                </h1>
              </span>
            </h1>
            <h1 className="font-extrabold text-xl md:text-2xl lg:text-[2vw] leading-tight mb-2">
              Experiences
            </h1>
            <p className="opacity-55 text-base md:text-xl font-semibold">
              Team up with players to battle demons, trade across Yugas, build
              civilizations, and create an evolving world shaped by the
              community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
