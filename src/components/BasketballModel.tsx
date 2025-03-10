import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export function BasketballModel(props) {
  const { nodes, materials } = useGLTF("/models/sci-fi_basketball.glb");

  useEffect(() => {
    if (materials["Sci-Fi_Basketball"]) {
      materials["Sci-Fi_Basketball"].emissive.set("purple");
      materials["Sci-Fi_Basketball"].emissiveIntensity = 80;
    }
  }, [materials]);

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Sci-Fi_Basketball_Sci-Fi_Basketball_0"].geometry}
          material={materials["Sci-Fi_Basketball"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/sci-fi_basketball.glb");
