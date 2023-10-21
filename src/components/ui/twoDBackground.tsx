import React from "react";
import { Canvas } from "@react-three/fiber";

function MyTwoCanvas() {
  return (
    <>
      <Canvas>
        <pointLight position={[10, 10, 10]} />
        <mesh>
          <sphereGeometry />
          <meshStandardMaterial color="hotpink" />
          <meshBasicMaterial attach={"material"} />
        </mesh>
      </Canvas>
    </>
  );
}

export default MyTwoCanvas;
