import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const Home = React.lazy(() => import("./page/Home/Home"));
const About = React.lazy(() => import("./page/About/About"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  );
};

export default App;
