import { useGLTF, Instances, Instance, Environment, Cloud, useTexture } from "@react-three/drei"
import { useMemo } from "react"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import MythicalPortal from "./components/MythicalPortal"

// Preload
useGLTF.preload("/models/pillar/stone_pillar.glb")


function PortalPillars() {
    const { nodes, materials } = useGLTF("/models/pillar/stone_pillar.glb")

    const ringRef = useRef()
    const iconRef = useRef()

    const iconTextures = useTexture([
        "/icons/icon1.png",
        "/icons/icon2.png",
        "/icons/icon3.png",
        "/icons/icon4.png",
        "/icons/icon5.png",
    ])

    const positions = [
        [-11, -2, 11],
        [-6, -2, 11],
        [0, -2, 11],
        [6, -2, 11],
        [11, -2, 11],
    ]

    const portalActions = [
        () => console.log("Portal 1"),
        () => console.log("Portal 2"),
        () => console.log("Portal 3"),
        () => console.log("Portal 4"),
        () => console.log("Portal 5"),
    ]
    useFrame((state) => {
        const t = state.clock.elapsedTime

        // Light CPU animation
        ringRef.current.rotation.y += 0.01

        iconRef.current.children.forEach((child, i) => {
            child.position.y = 8 + Math.sin(t + i) * 0.15
        })
    })

    return (
        <>
            {/* PILLARS - single draw call */}
            <Instances
                geometry={nodes.Pillar_low_Material_0.geometry}
                material={materials.Material}
                limit={5}
            >
                {positions.map((pos, i) => (
                    <Instance
                        key={i}
                        position={pos}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={2.5}
                    />
                ))}
            </Instances>

            <group ref={ringRef}>
                {positions.map((pos, i) => (
                    <MythicalPortal
                        key={i}
                        position={[pos[0] + 0.1, 8, pos[2]]}
                        onClick={portalActions[i]}
                    />
                ))}
            </group>

            {/* ICONS - flat planes */}
            <group ref={iconRef}>
                {positions.map((pos, i) => (
                    <mesh
                        key={i}
                        position={[pos[0], 7, pos[2] + 0.1]}
                    >
                        <planeGeometry args={[1.2, 1.2]} />
                        <meshBasicMaterial
                            map={iconTextures[i]}
                            transparent
                        />
                    </mesh>
                ))}
            </group>
        </>
    )
}

export default function Scene() {
    return (
        <>
            <ambientLight intensity={0.8} />
            <directionalLight position={[10, 15, 10]} intensity={1.5} />

            <Environment
                files="/textures/sky.jpg"
                background
            />

            <Cloud position={[0, 10, -20]} speed={0} opacity={0.4} />
            <Cloud position={[20, 8, 10]} speed={0} opacity={0.4} />
            <Cloud position={[-25, 7, -15]} speed={0} opacity={0.5} />

            <PortalPillars />
        </>
    )
}