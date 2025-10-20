import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

const Earth = () => {
    const earthRef = useRef();

    useFrame(() => {
        earthRef.current.rotation.y += 0.005;
    });

    const texture = new THREE.TextureLoader().load("/earth_texture.jpg");

    return (
        <mesh ref={earthRef}>
            {/* <sphereGeometry args={[2, 64, 64]} /> */}
            <meshStandardMaterial
                map={texture}
                metalness={0.4}
                roughness={0.8}
            />
        </mesh>
    );
};

const EarthScene = () => {
    return (
        <div className="w-full h-screen bg-black">
            <Canvas camera={{ position: [0, 0, 6] }}>
                {/* Lighting */}
                <ambientLight intensity={1.8} />
                <directionalLight position={[5, 3, 5]} intensity={2} />
                <directionalLight position={[-5, -3, -5]} intensity={0.5} />

                {/* Earth */}
                <Earth />

                {/* Stars */}
                <Stars radius={30} depth={50} count={5000} factor={4} saturation={0} fade />

                {/* Controls */}
                <OrbitControls enableZoom={false} />
            </Canvas>
        </div>
    );
};

export default EarthScene;
