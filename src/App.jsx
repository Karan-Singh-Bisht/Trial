import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home/Home";
const About = React.lazy(() => import("./page/About/About"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/about"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default App;
