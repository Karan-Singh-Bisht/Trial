import React from "react";
import RendererModel from "../../components/RendererModel";
import Navigation from "../../components/navigation/Navigation";
import HomeFooter from "../../components/HomeFooter";

const Wizard = React.lazy(() => import("../../components/models/Wizard"));

const Home = () => {
  return (
    <main className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute top-0 left-4 sm:left-6 md:left-10 ml-4 rounded-b-full flex items-center justify-center w-[16vw] sm:w-[10vw] md:w-[6vw] h-[16vw] sm:h-[10vw] md:h-[6vw] bg-white shadow-md z-50">
        <a
          target="_blank"
          href="https://harsar.in"
          className="hover:cursor-pointer"
        >
          <img
            src="/HomePage/Logo.png"
            alt="logo"
            className="w-[10vw] sm:w-[6vw] md:w-[4vw] h-[10vw] sm:h-[6vw] md:h-[4vw] rounded-full object-cover"
          />
        </a>
      </div>

      <img
        fetchPriority="high"
        src="/background/home-Background.webp"
        alt="background"
        className="absolute inset-0 -z-50 w-full h-full object-cover object-center opacity-100 blur-sm brightness-70"
      />
      <div className="relative w-full h-full">
        <Navigation />
        <RendererModel>
          <Wizard />
        </RendererModel>
      </div>
      <HomeFooter />
    </main>
  );
};

export default Home;
