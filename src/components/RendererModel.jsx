import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { Suspense } from "react";

const RendererModel = ({ children, className }) => {
  return (
    <Canvas className={clsx("w-screen -z-10 h-screen relative", className)}>
      <Suspense fallback={null}>{children}</Suspense>
      <Environment preset="dawn" />
    </Canvas>
  );
};

export default RendererModel;
