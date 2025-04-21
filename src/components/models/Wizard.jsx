import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Wizard(props) {
  const { nodes, materials } = useGLTF("/models/HarSar-transformed.glb");

  useFrame((state, delta, xFrame) => {
    modelRef.current.position.y =
      -1.5 + Math.sin(state.clock.elapsedTime) * 0.15;
  });

  const modelRef = useRef();

  return (
    <group
      {...props}
      dispose={null}
      position={[0, 1, 0]}
      scale={[1.5, 1.5, 1.5]}
      ref={modelRef}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
        position={[0, 0.7, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/HarSar-transformed.glb");
