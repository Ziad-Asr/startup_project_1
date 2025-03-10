import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export function BasketballPlayerJumpingModel(props) {
  const { nodes, materials } = useGLTF("/models/maniqui_basket_ia_tripo.glb");

  useEffect(() => {
    if (materials["tripo_material_3abb5d84-ce2f-473d-9c0e-0c43843a3fb0"]) {
      materials[
        "tripo_material_3abb5d84-ce2f-473d-9c0e-0c43843a3fb0"
      ].color.set("#a600ff");
    }
  }, [materials]);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={
          materials["tripo_material_3abb5d84-ce2f-473d-9c0e-0c43843a3fb0"]
        }
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={
          materials["tripo_material_3abb5d84-ce2f-473d-9c0e-0c43843a3fb0"]
        }
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={
          materials["tripo_material_3abb5d84-ce2f-473d-9c0e-0c43843a3fb0"]
        }
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11.geometry}
        material={materials.None}
        position={[0.093, 0.368, 0.214]}
        rotation={[0.019, 0.74, -0.049]}
        scale={0.046}
      />
    </group>
  );
}

useGLTF.preload("/models/maniqui_basket_ia_tripo.glb");
