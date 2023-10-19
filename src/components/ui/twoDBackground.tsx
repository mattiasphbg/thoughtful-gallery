import React from "react";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function MyTwoCanvas() {
  return (
    <>
      <Canvas>
        <pointLight position={[10, 10, 10]} />
        <mesh>
          <sphereGeometry />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      </Canvas>
    </>
  );
}

export default MyTwoCanvas;
