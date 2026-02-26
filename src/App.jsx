import * as THREE from "three"
import { Canvas } from "@react-three/fiber"
import Scene from "./Scene"

export default function App() {
  return (
    <Canvas
      style={{ width: "100vw", height: "100vh" }}
      camera={{ position: [0, 10, 25], fov: 50 }}
      onCreated={({ scene }) => {
        scene.background = new THREE.Color("#87CEEB") // Sky blue
      }}
    >
      <Scene />
    </Canvas>
  )
}