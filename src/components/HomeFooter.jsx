import React from "react";

const HomeFooter = () => {
  return (
    <div className="relative w-full z-50 bg-center text-white py-4 px-4">
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-4">
        {/* App Store Buttons */}
        <div className="flex items-center justify-between w-full px-4">
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              loading="lazy"
              src="/HomePage/GooglePlay.png"
              alt="Google Play"
              className="w-40 h-auto"
            />
          </a>
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              loading="lazy"
              src="/HomePage/AppStore.png"
              alt="App Store"
              className="w-40 h-auto"
            />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-center mt-4">
          © 2025 HarSar Studios. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default HomeFooter;
