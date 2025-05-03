import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = () => {
  const earthModel = useGLTF("/planet/scene.gltf");

  if (!earthModel?.scene) {
    console.error("❌ Earth model failed to load or is invalid.");
    return null;
  }

  return (
    <primitive
      object={earthModel.scene}
      scale={2}
      position={[0, 0, 0]}
    />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="always"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 50,
        near: 0.1,
        far: 200,
        position: [-2, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

useGLTF.preload("/planet/scene.gltf"); // ✅ safe preload

export default EarthCanvas;
