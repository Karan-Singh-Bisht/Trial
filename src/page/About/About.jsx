import React from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./page4";
import Page5 from "./Page5";
import Page6 from "./Page6";
import Page7 from "./Page7";
import Page8 from "./Page8";
import HorizontalScrollCarousel from "./HorizontalScrollCarousel";

const About = () => {
  return (
    <div>
      <Page1 />
      <HorizontalScrollCarousel />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
      <Page8 />
    </div>
  );
};

export default About;
