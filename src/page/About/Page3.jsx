import React from "react";
import LikeItCard from "../../components/LikeItCard";

const Page3 = () => {
  return (
    <div className="flex flex-col w-full h-screen overflow-hidden bg-white">
      {/* Heading */}
      <h1 className="font-extrabold text-[5vw] ml-20 px-2 py-12 mb-[3vw] leading-tight text-gray-900">
        Why you <br /> like it
      </h1>

      {/* Cards Grid */}
      <div className="w-full flex gap-4 justify-around flex-wrap items-stretch px-4">
        <LikeItCard
          title={"Woven from the Yugas"}
          paragraph={
            "Experience life across Krita, Treta, Dvapara & Kali Yugas. Time shapes your choices, your karma, and the universe around you."
          }
          image={"/image/4_2.png"}
        />
        <LikeItCard
          title={"Built for True Ownership"}
          paragraph={
            "Your progress, artifacts, and legacy are uniquely yours. No resets, just your evolving story carried across lifetimes."
          }
          image={"/image/4_3.png"}
        />
        <LikeItCard
          title={"Adaptive Gameplay"}
          paragraph={
            "Choices shape outcomes. The game responds to your morals, strategies, and alliances, delivering a tailored journey."
          }
          image={"/image/4_4.png"}
        />
        <LikeItCard
          title={"Cross-Reality, Multi-Device"}
          paragraph={
            "Seamless transitions between mobile, PC, and VR. Carry your world across platforms, connected through time."
          }
          image={"/image/4_5.png"}
        />
      </div>

      {/* Optional Decorative Spacer */}
      <div className="mt-8"></div>
    </div>
  );
};

export default Page3;
