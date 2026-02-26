import { useGLTF } from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

export default function PillarModel({ position }) {
  const ref = useRef()
  const { scene } = useGLTF("/models/pillar/stone_pillar.glb")

  scene.traverse((child) => {
  if (child.isMesh) {
    child.castShadow = true
    child.receiveShadow = true
    child.material.roughness = 0.8
    child.material.metalness = 0.1
  }
})
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <primitive
      object={scene}
      ref={ref}
      position={position}
      scale={3}
    />
  )
}