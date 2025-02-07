import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, SpotLight, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import PropTypes from "prop-types";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      {/* Optimized lighting for better mobile performance */}
      <ambientLight intensity={2.5} />
      <SpotLight
        position={[10, 50, 50]}
        angle={0.2}
        penumbra={1}
        intensity={isMobile ? 3 : 5} // Reduce light intensity on mobile
        castShadow
        shadow-mapSize-width={512} // Lower shadow resolution for performance
        shadow-mapSize-height={512}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.6 : 0.9} // Adjust size for mobile
        position={isMobile ? [0, -2.5, -2] : [1, -3, -1]}
        rotation={[-0.01, 0, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const updateSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [isMobile]);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{
        position: isMobile ? [5, 2, 5] : [21, 2, 2], // Adjust camera for mobile
        fov: isMobile ? 40 : 27, // Increase FOV slightly for mobile
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2.1}
          minPolarAngle={Math.PI / 2.3} // More restricted rotation on mobile
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;

Computers.propTypes = {
  isMobile: PropTypes.bool,
};
