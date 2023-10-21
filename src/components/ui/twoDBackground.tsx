import React from "react";
import { useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from 'three';



function MyTwoCanvas() {

  const img = "https://images.unsplash.com/photo-1515825838458-f2a94b20105a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2l0eSxuaWdodHx8fHx8fDE2OTc4Njc1MjQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080";
  
  // const colorMap: THREE.Texture = useLoader(, img);

  return (
    <>
      <Canvas>
        <pointLight position={[10, 10, 10]} />
        <mesh>
          <sphereGeometry />
          <meshStandardMaterial color="hotpink" />
          <meshBasicMaterial attach={"material"}/>
        </mesh>
      </Canvas>
    </>
  );
}

export default MyTwoCanvas;
