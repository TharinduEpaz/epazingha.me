import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { RingLoader } from "react-spinners";
import { Experience } from "./components/Experience";
import Interface from "./components/Interface";
import Navbar from "./components/Navbar";
import { ScrollManager } from "./components/ScrollManager";

function App() {
  const [section, setSection] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <RingLoader color="blue" size={100} />
          <p className="text-2xl font-bold ml-4">Loading 3D experience...</p>
        </div>
      )}
      <Navbar section={section} setSection={setSection} />
      <Canvas
        shadows
        camera={{ position: [0, 0, 5], fov: 30 }}
        onCreated={() => setIsLoading(false)}
      >
        <color attach="background" args={["#ececec"]} />

        <ScrollControls pages={4} damping={0.3}>
          <ScrollManager section={section} setSection={setSection} />
          <Scroll>
            <Experience section={section} setSection={setSection} />
          </Scroll>

          <Scroll html>
            <Interface section={section} setSection={setSection} />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
}

export default App;
