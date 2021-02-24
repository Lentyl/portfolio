import React from "react";
import * as CANNON from "cannon";
import { useLoader } from "react-three-fiber";
import { TextureLoader } from "three";
import { useCannon } from "./useCannon";

import cube1TextureURL from "../../../img/small-cubes/css-logo.jpg";
import cube2TextureURL from "../../../img/small-cubes/firebase-logo.jpg";
import cube3TextureURL from "../../../img/small-cubes/typeScript.jpg";
import cube4TextureURL from "../../../img/small-cubes/mdb-logo.png";
import cube5TextureURL from "../../../img/small-cubes/html-logo.jpg";
import cube6TextureURL from "../../../img/small-cubes/node-logo.jpg";
import cube7TextureURL from "../../../img/small-cubes/react-native.jpg";
import cube8TextureURL from "../../../img/small-cubes/redux-logo.jpg";
import cube9TextureURL from "../../../img/small-cubes/sass.jpg";

const Box = ({ position, images }) => {
  const cannonRef = useCannon({ mass: 100000 }, (body) => {
    body.addShape(new CANNON.Box(new CANNON.Vec3(2, 2, 2)));
    body.position.set(...position);
  });

  const cubeImg = useLoader(TextureLoader, [
    cube1TextureURL,
    cube2TextureURL,
    cube3TextureURL,
    cube4TextureURL,
    cube5TextureURL,
    cube6TextureURL,
  ]);
  const cubeImg2 = useLoader(TextureLoader, [
    cube7TextureURL,
    cube6TextureURL,
    cube5TextureURL,
    cube4TextureURL,
    cube9TextureURL,
    cube8TextureURL,
  ]);

  const cubeImg3 = useLoader(TextureLoader, [
    cube7TextureURL,
    cube8TextureURL,
    cube5TextureURL,
    cube6TextureURL,
    cube2TextureURL,
    cube9TextureURL,
  ]);

  let materials = null;

  if (images === 1) {
    materials = cubeImg.map((img) => (
      <meshPhysicalMaterial attachArray="material" key={img.id} map={img} />
    ));
  } else if (images === 2) {
    materials = cubeImg2.map((img) => (
      <meshPhysicalMaterial attachArray="material" key={img.id} map={img} />
    ));
  } else if (images === 3) {
    materials = cubeImg3.map((img) => (
      <meshPhysicalMaterial attachArray="material" key={img.id} map={img} />
    ));
  }

  return (
    <mesh ref={cannonRef} castShadow receiveShadow>
      <boxGeometry attach="geometry" args={[4, 4, 4]} />
      {materials}
    </mesh>
  );
};

export default Box;
