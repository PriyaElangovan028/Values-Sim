import { useGLTF, Cloud } from "@react-three/drei"
import { useRef, useMemo } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import * as THREE from "three"

// Preload model
useGLTF.preload("/models/pillar/stone_pillar.glb")

function Pillar({ position }) {
    const ref = useRef()
    const { scene } = useGLTF("/models/pillar/stone_pillar.glb")

    // Clone so each pillar is independent
    const cloned = useMemo(() => scene.clone(), [scene])

    useFrame((state) => {
        if (ref.current) {
            ref.current.position.y =
                position[1] + Math.sin(state.clock.elapsedTime) * 0.40
        }
    })

    return (
        <primitive
            ref={ref}
            object={cloned}
            position={position}
            scale={0.025}
            rotation={[0, 0, 0]} // upright
        />
    )
}

export default function Scene() {
    const { scene } = useThree()



    const radius = 12

    const pillars = Array.from({ length: 5 }).map((_, i) => {
        return [i * 6 - 12, 0, 11] // 👈 move toward camera
    })

    return (
        <>
            {/* Lighting */}
            <ambientLight intensity={0.8} />
            <directionalLight position={[10, 15, 10]} intensity={1.5} />

            <Environment
                files="/textures/mountains-with-windmills-blue-sky.jpg"
                background={true} />

            {/* Clouds (Higher in sky) */}
            <Cloud position={[0, 10, -20]} speed={0.2} opacity={0.4} />
            <Cloud position={[20, 8, 10]} speed={0.25} opacity={0.4} />
            <Cloud position={[-25, 7, -15]} speed={0.3} opacity={0.5} />

            {/* Pillars */}
            {pillars.map((pos, i) => (
                <Pillar key={i} position={pos} />
            ))}
        </>
    )
}