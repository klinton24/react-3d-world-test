import React from "react";
import { Canvas }  from "react-three-fiber";
import { OrbitalControls } from "drei";

function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  );
}
export default function App() {
  return (
    <Canvas>
      <OrbitalControls />
      <ambientLight intensity={0.5} />
      <Box />
    </Canvas>
  );
}