import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function ManagerAvatar({currentAnimation, ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/Avatar/teacher.glb')
  const { actions } = useAnimations(animations, group)
  console.log('actions:', actions)

  useEffect(() => {
  const action = actions[currentAnimation]

  if (action) {
    action.reset().fadeIn(0.5).play()
    console.log(`Animation '${currentAnimation}' started playing.`)
  }

  return () => {
    if (action) {
      action.fadeOut(0.5)
    }
  }
}, [currentAnimation, actions])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature001" rotation={[Math.PI / 2, 0, 0]} scale={1}>
          <group name="Clothes001">
            <skinnedMesh
              name="Mesh028"
              geometry={nodes.Mesh028.geometry}
              material={materials['Cloth.001']}
              skeleton={nodes.Mesh028.skeleton}
            />
            <skinnedMesh
              name="Mesh028_1"
              geometry={nodes.Mesh028_1.geometry}
              material={materials['asWhite.001']}
              skeleton={nodes.Mesh028_1.skeleton}
            />
            <skinnedMesh
              name="Mesh028_2"
              geometry={nodes.Mesh028_2.geometry}
              material={materials['Default_Material.001']}
              skeleton={nodes.Mesh028_2.skeleton}
            />
          </group>
          <skinnedMesh
            name="Eye_L001"
            geometry={nodes.Eye_L001.geometry}
            material={materials['Body.001']}
            skeleton={nodes.Eye_L001.skeleton}
          />
          <skinnedMesh
            name="Eye_R001"
            geometry={nodes.Eye_R001.geometry}
            material={materials['Body.001']}
            skeleton={nodes.Eye_R001.skeleton}
          />
          <skinnedMesh
            name="eyebrow_L001"
            geometry={nodes.eyebrow_L001.geometry}
            material={materials['lambsss.001']}
            skeleton={nodes.eyebrow_L001.skeleton}
          />
          <skinnedMesh
            name="eyebrow_R001"
            geometry={nodes.eyebrow_R001.geometry}
            material={materials['lambsss.001']}
            skeleton={nodes.eyebrow_R001.skeleton}
          />
          <skinnedMesh
            name="eyeLashes_L001"
            geometry={nodes.eyeLashes_L001.geometry}
            material={materials['Body.001']}
            skeleton={nodes.eyeLashes_L001.skeleton}
          />
          <skinnedMesh
            name="eyeLashes_R001"
            geometry={nodes.eyeLashes_R001.geometry}
            material={materials['Body.001']}
            skeleton={nodes.eyeLashes_R001.skeleton}
          />
          <skinnedMesh
            name="Face001"
            geometry={nodes.Face001.geometry}
            material={materials['Body.001']}
            skeleton={nodes.Face001.skeleton}
          />
          <skinnedMesh
            name="Foot001"
            geometry={nodes.Foot001.geometry}
            material={materials.Body}
            skeleton={nodes.Foot001.skeleton}
          />
          <group name="glasses001">
            <skinnedMesh
              name="Mesh024"
              geometry={nodes.Mesh024.geometry}
              material={materials['phong10.001']}
              skeleton={nodes.Mesh024.skeleton}
            />
            <skinnedMesh
              name="Mesh024_1"
              geometry={nodes.Mesh024_1.geometry}
              material={materials['Frame.001']}
              skeleton={nodes.Mesh024_1.skeleton}
            />
          </group>
          <skinnedMesh
            name="Hand001"
            geometry={nodes.Hand001.geometry}
            material={materials.Body}
            skeleton={nodes.Hand001.skeleton}
          />
          <skinnedMesh
            name="lower_teeth001"
            geometry={nodes.lower_teeth001.geometry}
            material={materials['Body.001']}
            skeleton={nodes.lower_teeth001.skeleton}
          />
          <skinnedMesh
            name="Short001"
            geometry={nodes.Short001.geometry}
            material={materials['Cloth.001']}
            skeleton={nodes.Short001.skeleton}
          />
          <skinnedMesh
            name="Shose001"
            geometry={nodes.Shose001.geometry}
            material={materials['Cloth.001']}
            skeleton={nodes.Shose001.skeleton}
          />
          <skinnedMesh
            name="Side2001"
            geometry={nodes.Side2001.geometry}
            material={materials['Hair2.001']}
            skeleton={nodes.Side2001.skeleton}
          />
          <skinnedMesh
            name="Tongue001"
            geometry={nodes.Tongue001.geometry}
            material={materials['Body.001']}
            skeleton={nodes.Tongue001.skeleton}
          />
          <skinnedMesh
            name="upper_teeth001"
            geometry={nodes.upper_teeth001.geometry}
            material={materials['Body.001']}
            skeleton={nodes.upper_teeth001.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/Avatar/teacher.glb')



