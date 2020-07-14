import React from "react";
import * as CANNON from "cannon";

import { useCannon } from "./useCannon";

const Plane = ({ position }) => {
  const { planeRef } = useCannon({ bodyProps: { mass: 0 } }, (body) => {
    body.addShape(new CANNON.Plane(1, 1, 1));
    body.position.set(...position);
  });

  return (
    <mesh
      ref={planeRef}
      receiveShadow
      onClick={() => {
        console.log("click");
      }}
    >
      <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
      <meshPhongMaterial attach="material" color="#26262a" />
    </mesh>
  );
};

export default Plane;
