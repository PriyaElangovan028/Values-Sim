import { useTexture } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"

export default function MythicalPortal({ position, onClick }) {
  const ref = useRef()
  const matRef = useRef()

  const texture = useTexture("/textures/blue_portal.png")
  texture.colorSpace = THREE.SRGBColorSpace
  texture.flipY = true

  return (
    <mesh
      ref={ref}
      position={position}
      onClick={(e) => {
        e.stopPropagation()
        onClick?.()
        console.log("Portal clicked at", position)
      }}
      onPointerOver={() => {
        document.body.style.cursor = "pointer"
        matRef.current.color.set("#66e0ff")
      }}
      onPointerOut={() => {
        document.body.style.cursor = "default"
        matRef.current.color.set("#3aa7ff")
      }}
    >
      <planeGeometry args={[3.2, 3.2]} />
      <meshBasicMaterial
        ref={matRef}
        map={texture}
        color="#3aa7ff"
        transparent
        depthWrite={false}
        opacity={0.95}
      />
    </mesh>
  )
}