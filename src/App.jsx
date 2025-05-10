import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home/Home";
import Community from "./page/Community/Community";
import Xr1 from "./page/XRperience/Xr1";
import XRpressoCard from "./page/XRperience/XRpressoCard";
import XRPresso from "./page/XRperience/XRpresso";
const Connect = React.lazy(() => import("./page/Connect/Connect"));
const Media = React.lazy(() => import("./page/Media/Media"));
const Support = React.lazy(() => import("./page/Support/Support"));
const PrivacyPolicy = React.lazy(() => import("./page/Support/PrivacyPolicy"));
const RefundPolicy = React.lazy(() => import("./page/Support/RefundPolicy"));
const TandC = React.lazy(() => import("./page/Support/TandC"));
const Store = React.lazy(() => import("./page/Store/Store"));
const About = React.lazy(() => import("./page/About/About"));
const XRperience = React.lazy(() => import("./page/XRperience/Service"));

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
      <Route
        path="/connect"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Connect />
          </Suspense>
        }
      />
      <Route
        path="/store"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Store />
          </Suspense>
        }
      />
      <Route
        path="/noticeBoard"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Media />
          </Suspense>
        }
      />
      <Route path="/support" element={<Support />}>
        <Route index element={<PrivacyPolicy />} />
        <Route path="terms" element={<TandC />} />
        <Route path="refundPolicy" element={<RefundPolicy />} />
      </Route>
      <Route
        path="/xrperience"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <XRperience />
          </Suspense>
        }
      />
      <Route
        path="/xrperience/1"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Xr1 />
          </Suspense>
        }
      />
      <Route
        path="/xrperience/XRpresso"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <XRPresso />
          </Suspense>
        }
      />
      <Route
        path="/community"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Community />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default App;
