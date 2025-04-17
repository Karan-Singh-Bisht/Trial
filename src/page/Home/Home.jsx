import React from "react";
import RendererModel from "../../components/RendererModel";
import Navigation from "../../components/navigation/Navigation";

const Wizard = React.lazy(() => import("../../components/models/Wizard"));

const Home = () => {
  return (
    <main className="relative w-full h-screen flex justify-center items-center overflow-hidden">
      <img
        fetchPriority="high"
        src="/background/home-Background.png"
        alt="background"
        className="absolute inset-0 -z-50 w-full h-full object-cover object-center opacity-100 blur-sm brightness-70"
      />
      <div className="relative w-full h-full">
        <Navigation />
        <RendererModel>
          <Wizard />
        </RendererModel>
      </div>
    </main>
  );
};

export default Home;
