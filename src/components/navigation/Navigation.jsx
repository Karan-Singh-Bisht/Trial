import React from "react";
import { BtnList } from "../../data";
import NavButton from "./NavButton";
import useScreenSize from "../hooks/useScreenSize";
import ResponsiveComponent from "../ResponsiveComponent";
import { motion } from "framer-motion";

const container = {
  hidden: { scale: 0 },
  show: { scale: 1, transition: { staggerChildren: 0.2 } },
};

const Navigation = () => {
  const angleIncrement = 360 / BtnList.length;

  const size = useScreenSize();
  const isLarge = size >= 1024;
  const isMedium = size >= 768 && size < 1024;

  return (
    <div className="fixed h-screen w-full items-center justify-center flex">
      <ResponsiveComponent>
        {({ size }) => {
          return size && size >= 480 ? (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="flex items-center group justify-center relative animate-spin-slow hover:pause"
            >
              {BtnList.map((btn, index) => {
                const angleRad = (index * angleIncrement * Math.PI) / 180;
                const radius = isLarge
                  ? "calc(20vw - 1rem)"
                  : isMedium
                  ? "calc(30vw - 1rem)"
                  : "calc(40vw - 1rem)";
                const x = `calc(${radius} * ${Math.cos(angleRad)})`;
                const y = `calc(${radius} * ${Math.sin(angleRad)})`;
                return (
                  <NavButton
                    key={btn.label}
                    x={x}
                    y={y}
                    link={btn.link}
                    label={btn.label}
                    icon={btn.icon}
                    newTab={btn.newTab}
                  />
                );
              })}
            </motion.div>
          ) : (
            <>
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="w-full px-2.5 xs:w-max flex space-y-4 flex-col items-start xs:items-center group justify-center relative "
              >
                {BtnList.slice(0, BtnList.length / 2).map((btn, index) => {
                  return (
                    <NavButton
                      key={btn.label}
                      x={0}
                      y={0}
                      link={btn.link}
                      label={btn.label}
                      icon={btn.icon}
                      newTab={btn.newTab}
                    />
                  );
                })}
              </motion.div>
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="w-full px-2.5 xs:w-max flex space-y-4 flex-col items-end xs:items-center group justify-center relative "
              >
                {BtnList.slice(BtnList.length / 2, BtnList.length).map(
                  (btn, index) => {
                    return (
                      <NavButton
                        key={btn.label}
                        x={0}
                        y={0}
                        link={btn.link}
                        label={btn.label}
                        icon={btn.icon}
                        newTab={btn.newTab}
                      />
                    );
                  }
                )}
              </motion.div>
            </>
          );
        }}
      </ResponsiveComponent>
    </div>
  );
};

export default Navigation;
