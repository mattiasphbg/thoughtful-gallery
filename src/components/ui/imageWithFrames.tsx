import * as THREE from "three";
import { useRef, useEffect, useState, RefObject } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
    useCursor,
    MeshReflectorMaterial,
    Image,
    Text,
    Environment,
} from "@react-three/drei";
import { useRouter } from "next/router";

import * as React from "react";
import { Group } from "three";

import { useRoute, useLocation } from "wouter";
import { easing } from "maath";
import getUuid from "uuid-by-string";

const GOLDENRATIO = 1.61803398875;

export interface ImageProps {
    url?: string;
}

interface ImageWithFramesProps {
    images: ImageProps[];
}

function ImageWithFrames({ images }: ImageWithFramesProps) {
    const filteredImages = images.filter(
        (image) => image.url !== undefined,
    ) as { url: string }[];
    return (
        <>
            <Canvas dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 2, 15] }}>
                <color attach={"background"} args={["#191920"]} />
                <fog attach={"fog"} args={["#191920", 0, 15]} />
                <group position={[0, -0.5, 0]}>
                    <Frames images={filteredImages} />
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

interface FramesProps {
    images: { url: string }[];
    q?: THREE.Quaternion;
    p?: THREE.Vector3;
}

function Frames({
    images,
    q = new THREE.Quaternion(),
    p = new THREE.Vector3(),
}: FramesProps) {
    const ref: RefObject<Group> = useRef<Group>(new Group());
    const clicked = useRef<THREE.Object3D>();
    const [, params] = useRoute("/item/:id");
    const [, setLocation] = useLocation();

    useEffect(() => {
        const itemId = params?.id ?? "";
        clicked.current = ref.current!.getObjectByName(itemId);
        if (clicked.current) {
            clicked.current.parent!.updateWorldMatrix(true, true);
            clicked.current.parent!.localToWorld(
                p.set(0, GOLDENRATIO / 2, 1.25),
            );
            clicked.current.parent!.getWorldQuaternion(q);
        } else {
            p.set(0, 0, 5.5);
            q.identity();
        }
    });

    useFrame((state, dt) => {
        easing.damp3(state.camera.position, p, 0.4, dt);
        easing.dampQ(state.camera.quaternion, q, 0.4, dt);
    });

    return (
        <group
            ref={ref}
            onClick={(e) => (
                e.stopPropagation(),
                setLocation(
                    clicked.current === e.object
                        ? "/"
                        : "/item/" + e.object.name,
                )
            )}
            onPointerMissed={() => setLocation("/")}
        >
            {images.map(
                (props, index) => <Frame key={index} {...props} /> /* prettier-ignore */,
            )}
        </group>
    );
}

interface FrameProps {
    url: string;
    c?: THREE.Color;
    // id?: string;
}

interface CustomMaterialColor extends THREE.Material {
    color?: THREE.Color;
}

class CustomMaterial extends THREE.MeshStandardMaterial {
    zoom?: number;

    constructor(parameters?: THREE.MeshStandardMaterialParameters) {
        super(parameters);
    }
}

function Frame({ url, c = new THREE.Color(), ...props }: FrameProps) {
    const router = useRouter();
    const image = useRef<THREE.Mesh<THREE.BufferGeometry, CustomMaterial>>(
        null!,
    );

    const frame = useRef<THREE.Mesh<THREE.BufferGeometry, CustomMaterial>>(
        null!,
    );
    const [, params] = useRoute("/item/:id");
    const [hovered, setHovered] = useState(false);
    const [rnd] = useState(() => Math.random());
    const name = getUuid(url);
    const isActive = params?.id === name;
    useCursor(hovered);

    const handleMeshClick = () => {
        try {
            router
                .push(`/adventure/${name}`)
                .catch((r) => console.error("", r));
        } catch (error) {}
    };

    useFrame((state, dt) => {
        if (image.current) {
            image.current.material.zoom =
                2 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 2;
        }

        easing.damp3(
            image.current.scale,
            [
                0.85 * (!isActive && hovered ? 0.85 : 1),
                0.9 * (!isActive && hovered ? 0.905 : 1),
                1,
            ],
            0.1,
            dt,
        );
        easing.dampC(
            frame.current.material.color,
            hovered ? "orange" : "white",
            0.1,
            dt,
        );
    });

    const [isHovered, setIsHovered] = useState(false);

    const handlePointerOver = () => {
        setIsHovered(true);
    };

    const handlePointerOut = () => {
        setIsHovered(false);
    };

    const fontSize = isHovered ? 0.055 : 0.025;

    return (
        <group {...props}>
            <mesh
                name={name}
                onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
                onPointerOut={() => setHovered(false)}
                scale={[1, GOLDENRATIO, 0.05]}
                position={[0, GOLDENRATIO / 2, 0]}
            >
                <boxGeometry />
                <meshStandardMaterial
                    color="#151515"
                    metalness={0.5}
                    roughness={0.5}
                    envMapIntensity={2}
                />
                <mesh
                    ref={frame}
                    raycast={() => null}
                    scale={[0.9, 0.93, 0.9]}
                    position={[0, 0, 0.2]}
                >
                    <boxGeometry />
                    <meshBasicMaterial toneMapped={false} fog={false} />
                </mesh>
                <Image
                    raycast={() => null}
                    ref={image}
                    position={[0, 0, 0.7]}
                    url={url}
                />
            </mesh>

            <Text
                maxWidth={0.1}
                anchorX="left"
                anchorY="top"
                position={[0.55, GOLDENRATIO, 0]}
                onClick={() => handleMeshClick()}
                onPointerOver={handlePointerOver}
                onPointerOut={handlePointerOut}
                fontSize={fontSize}
            >
                {name.split("-").join(" ")}
            </Text>
        </group>
    );
}

export default ImageWithFrames;
