import React, { useEffect, useState } from "react";

const Xr1 = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loader once iframe is loaded
    const iframe = document.getElementById("game-frame");
    if (iframe) {
      iframe.onload = () => setIsLoading(false);
    }
  }, []);

  return (
    <div
      style={{
        margin: 0,
        height: "100vh",
        backgroundColor: "black",
        overflow: "hidden",
      }}
    >
      {isLoading && (
        <div
          style={{
            position: "absolute",
            top: 20,
            left: 20,
            color: "white",
            fontFamily: "sans-serif",
            zIndex: 999,
          }}
        >
          Loading Galactic Legacy...
        </div>
      )}
      <iframe
        id="game-frame"
        src="https://html-classic.itch.zone/html/13308271/WebGL/index.html"
        allowFullScreen
        title="Galactic Legacy"
        style={{
          border: "none",
          width: "100vw",
          height: "100vh",
        }}
      ></iframe>
    </div>
  );
};

export default Xr1;
