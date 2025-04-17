import React from "react";
import { Link } from "react-router-dom";
import ResponsiveComponent from "../ResponsiveComponent";
import { motion } from "framer-motion";

// Helper to get icon image
const getIcon = (icon) => {
  const imgProps = {
    alt: icon,
    className: "w-24 h-24 object-contain object-center",
    strokeWidth: 1.5,
    src: `/HomePage/${
      {
        home: "1_1.png",
        about: "1_2.png",
        projects: "1_3.png",
        contact: "1_4.png",
        github: "1_5.png",
        linkedin: "1_6.png",
        twitter: "1_7.png",
        resume: "1_8.png",
      }[icon] || "1_1.png"
    }`,
  };

  return <img loading="lazy" fetchPriority="high" {...imgProps} />;
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

const NavLink = motion.create(Link);

// NavButton component
const NavButton = ({ x, y, label, link, icon, newTab }) => {
  return (
    <ResponsiveComponent>
      {({ size }) => {
        return size && size >= 480 ? (
          <div
            className="absolute cursor-pointer z-50"
            style={{ transform: `translate(${x},${y})` }}
          >
            <NavLink
              variants={item}
              to={link}
              target={newTab ? "_blank" : "_self"}
              className="text-foreground rounded-full flex items-center hover:shadow-glass-sm shadow-glass-inset justify-center bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px]"
              aria-label={label}
              name={label}
            >
              <span
                className="relative rounded-full group-hover:pause hover:text-accent
         animate-spin-reverse w-24 backdrop-blur-sm h-24 p-1"
              >
                {getIcon(icon)}
                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full"></span>
                <span className="absolute text-white hidden text-lg peer-hover:block px-4 py-2 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground font-semibold rounded-md shadow-lg whitespace-nowrap">
                  {label}
                </span>
              </span>
            </NavLink>
          </div>
        ) : (
          <div className="w-fit cursor-pointer z-50">
            <NavLink
              variants={item}
              to={link}
              target={newTab ? "_blank" : "_self"}
              className="text-foreground rounded-full flex items-center hover:shadow-glass-sm shadow-glass-inset justify-center bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px]"
              aria-label={label}
              name={label}
            >
              <span
                className="relative xs:w-14 xs:h-14 w-14 h-14 flex items-center justify-center rounded-full hover:text-accent
              md:w-24 backdrop-blur-sm md:h-24 p-2.5 xs:p-1"
              >
                {getIcon(icon)}
                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full"></span>
                <span className="absolute text-white hidden text-lg peer-hover:block px-4 py-2 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground font-semibold rounded-md shadow-lg whitespace-nowrap">
                  {label}
                </span>
              </span>
            </NavLink>
          </div>
        );
      }}
    </ResponsiveComponent>
  );
};

export default NavButton;
