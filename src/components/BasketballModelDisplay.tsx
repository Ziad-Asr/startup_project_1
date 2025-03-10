import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { BasketballModel } from "./BasketballModel";

export function BasketballModelDisplay() {
  return (
    <div className="h-[500px] w-full">
      <Canvas shadows camera={{ position: [4, 2, 5], fov: 50 }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.00001}>
            <BasketballModel />
          </Stage>
          <OrbitControls enableZoom={true} autoRotate />
        </Suspense>
      </Canvas>
    </div>
  );
}
