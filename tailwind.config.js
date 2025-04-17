/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        madimi: ['"Madimi One"', "cursive"],
        tiltWarp: ["Tilt Warp"],
        raleWay: ["Raleway"],
      },
      boxShadow: {
        "glass-inset": "inset 0 17px 5px -9px rgba(254,254,91,0.05)",
        "glass-sm": "5px 5px 20px 0px rgba(254,254,91,0.3)",
      },
      keyframes: {
        "spin-reverse": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
      },
      animation: {
        "spin-slow": "spin 40s linear infinite",
        "spin-reverse": "spin-reverse 40s linear infinite",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
