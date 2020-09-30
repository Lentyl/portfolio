import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import * as THREE from "three";
import Box from "./Box";

import Plane from "./Plane";
import { Provider } from "./useCannon";

const CanvasAnimation = () => {
  return (
    <Canvas
      camera={{ position: [5, -6, 50] }}
      className="blocksCanvas"
      onCreated={({ gl }) => {
        gl.shadowMap.enabled = true;
        gl.shadowMap.type = THREE.PCFSoftShadowMap;
      }}
    >
      <ambientLight intensity={0.5} />
      <spotLight
        intensity={0.4}
        position={[-40, -10, 60]}
        angle={0.4}
        penumbra={1}
        castShadow
      />
      <Suspense fallback={null}>
        <Provider>
          <Box position={[-5, 15, 2]} images={3} />
          <Box position={[-20, 5, 40]} images={3} />
          <Box position={[-15, 5, 60]} images={2} />
          <Box position={[-10, 5, 90]} images={3} />
          <Box position={[-5, 5, 120]} images={2} />
          <Box position={[0, 5, 140]} images={1} />
          <Box position={[5, 5, 160]} images={1} />
          <Box position={[10, 3, 60]} images={3} />
          <Box position={[-10, 14, 100]} images={2} />
          <Box position={[-9, 14, 120]} images={2} />
          <Box position={[-11, 14, 160]} images={1} />
          <Box position={[-9, 15, 200]} images={3} />
          <Box position={[0, -6, 300]} images={2} />
          <Box position={[0, -6, 420]} images={3} />
          <Box position={[0, -6, 560]} images={2} />
          <Box position={[0, -6, 600]} images={1} />
          <Box position={[-1, 6, 1000]} images={2} />
          <Box position={[-10, 3, 1600]} images={2} />
          <Plane position={[0, 0, 0]} />
        </Provider>
      </Suspense>
    </Canvas>
  );
};

export default CanvasAnimation;
