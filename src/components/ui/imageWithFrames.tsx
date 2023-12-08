import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
    useCursor,
    MeshReflectorMaterial,
    Image,
    Text,
    Environment,
} from "@react-three/drei";
import { useRoute, useLocation } from "wouter";
import { easing } from "maath";
import getUuid from "uuid-by-string";

const GOLDENRATIO = 1.61803398875;

function ImageWithFrames({}) {
    return (
        <>
            <Canvas dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 2, 15] }}>
                <color attach={"background"} args={["#191920"]} />
                <fog attach={"fog"} args={["#191920", 0, 15]} />
                <group position={[0, -0.5, 0]}>
                    <mesh rotation={[-Math.PI / 2, 0, 0]}>
                        <planeGeometry args={[50, 50]} />
                        <MeshReflectorMaterial
                            blur={[300, 100]}
                            resolution={2048}
                            mixBlur={1}
                            mixStrength={80}
                            roughness={1}
                            depthScale={1.2}
                            minDepthThreshold={0.4}
                            maxDepthThreshold={1.4}
                            color="#050505"
                            metalness={0.5}
                            mirror={0}
                        />
                    </mesh>
                </group>
                <Environment preset={"city"} />
            </Canvas>
        </>
    );
}

export default ImageWithFrames;
