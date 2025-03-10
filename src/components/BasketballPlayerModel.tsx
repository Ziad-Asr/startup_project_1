import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export function BasketballPlayerModel(props) {
  const { nodes, materials } = useGLTF(
    "/models/basket_mannequin_2_tripo (1).glb"
  );

  useEffect(() => {
    if (materials["material_1"]) {
      materials["material_1"].color.set("#CC73F8");
    }

    if (materials["material"]) {
      materials["material"].color.set("#fff");
    }
  }, [materials]);

  return (
    <group {...props} dispose={null}>
      <group
        position={[0.193, 0.013, 0.256]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.512}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials["material_1"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials["material_1"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials["material_1"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials["material"]}
        position={[0.12, 0.024, 0.285]}
        rotation={[-2.99, 1.233, -Math.PI]}
        scale={0.021}
      />
    </group>
  );
}

useGLTF.preload("/models/basket_mannequin_2_tripo (1).glb");
