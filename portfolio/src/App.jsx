import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Html, Scroll, ScrollControls } from "@react-three/drei";
import Interface from "./components/Interface";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { ScrollManager } from "./components/ScrollManager";


function App() {
  const [section, setSection] = useState(0);
  
  return (
    <>
    <Navbar section={section} setSection={setSection}/>
    <Canvas shadows camera={{ position: [0, 0, 5], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      
      
      <ScrollControls pages={4} damping={0.3}>
      <ScrollManager section={section} setSection={setSection} />
      <Scroll>
      <Experience section={section} setSection={setSection} />
      
      </Scroll>
     
      <Scroll html>
      
      <Interface section={section} setSection={setSection}/>
      </Scroll>
      </ScrollControls>
    </Canvas>
    </>
  );
}

export default App;
