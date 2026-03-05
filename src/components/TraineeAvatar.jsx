import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function TraineeAvatar({currentAnimation, ...props}) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('models/Avatar/trainee.glb')
  const { actions } = useAnimations(animations, group)
   console.log('Trainee actions:', actions) 
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
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.0600}>
          <skinnedMesh
            name="Blazer"
            geometry={nodes.Blazer.geometry}
            material={materials['outfit.001']}
            skeleton={nodes.Blazer.skeleton}
          />
          <skinnedMesh
            name="Body"
            geometry={nodes.Body.geometry}
            material={materials['Body.005']}
            skeleton={nodes.Body.skeleton}
          />
          <group name="Eye_Left">
            <skinnedMesh
              name="Eye_Left005"
              geometry={nodes.Eye_Left005.geometry}
              material={materials['ojo.005']}
              skeleton={nodes.Eye_Left005.skeleton}
            />
            <skinnedMesh
              name="Eye_Left005_1"
              geometry={nodes.Eye_Left005_1.geometry}
              material={materials['brillo_ojo.005']}
              skeleton={nodes.Eye_Left005_1.skeleton}
            />
          </group>
          <group name="Eye_Right">
            <skinnedMesh
              name="Eye_Right005"
              geometry={nodes.Eye_Right005.geometry}
              material={materials['ojo.005']}
              skeleton={nodes.Eye_Right005.skeleton}
            />
            <skinnedMesh
              name="Eye_Right005_1"
              geometry={nodes.Eye_Right005_1.geometry}
              material={materials['brillo_ojo.005']}
              skeleton={nodes.Eye_Right005_1.skeleton}
            />
          </group>
          <skinnedMesh
            name="Hair_Hair001_(merged)baked"
            geometry={nodes['Hair_Hair001_(merged)baked'].geometry}
            material={materials['Hair.005']}
            skeleton={nodes['Hair_Hair001_(merged)baked'].skeleton}
          />
          <group name="Head007">
            <skinnedMesh
              name="Head012"
              geometry={nodes.Head012.geometry}
              material={materials['Body.005']}
              skeleton={nodes.Head012.skeleton}
              morphTargetDictionary={nodes.Head012.morphTargetDictionary}
              morphTargetInfluences={nodes.Head012.morphTargetInfluences}
            />
            <skinnedMesh
              name="Head012_1"
              geometry={nodes.Head012_1.geometry}
              material={materials['Lips.005']}
              skeleton={nodes.Head012_1.skeleton}
              morphTargetDictionary={nodes.Head012_1.morphTargetDictionary}
              morphTargetInfluences={nodes.Head012_1.morphTargetInfluences}
            />
            <skinnedMesh
              name="Head012_2"
              geometry={nodes.Head012_2.geometry}
              material={materials['Others.005']}
              skeleton={nodes.Head012_2.skeleton}
              morphTargetDictionary={nodes.Head012_2.morphTargetDictionary}
              morphTargetInfluences={nodes.Head012_2.morphTargetInfluences}
            />
            <skinnedMesh
              name="Head012_3"
              geometry={nodes.Head012_3.geometry}
              material={materials['cejas.005']}
              skeleton={nodes.Head012_3.skeleton}
              morphTargetDictionary={nodes.Head012_3.morphTargetDictionary}
              morphTargetInfluences={nodes.Head012_3.morphTargetInfluences}
            />
            <skinnedMesh
              name="Head012_4"
              geometry={nodes.Head012_4.geometry}
              material={materials['pestanas.005']}
              skeleton={nodes.Head012_4.skeleton}
              morphTargetDictionary={nodes.Head012_4.morphTargetDictionary}
              morphTargetInfluences={nodes.Head012_4.morphTargetInfluences}
            />
          </group>
          <skinnedMesh
            name="pants"
            geometry={nodes.pants.geometry}
            material={materials['pants.005']}
            skeleton={nodes.pants.skeleton}
          />
          <skinnedMesh
            name="Pants"
            geometry={nodes.Pants.geometry}
            material={materials['outfit.001']}
            skeleton={nodes.Pants.skeleton}
          />
          <group name="Shirt">
            <skinnedMesh
              name="Mesh012"
              geometry={nodes.Mesh012.geometry}
              material={materials['Shirt.005']}
              skeleton={nodes.Mesh012.skeleton}
            />
            <skinnedMesh
              name="Mesh012_1"
              geometry={nodes.Mesh012_1.geometry}
              material={materials['Neck_shirt.005']}
              skeleton={nodes.Mesh012_1.skeleton}
            />
          </group>
          <skinnedMesh
            name="Shoe_Left"
            geometry={nodes.Shoe_Left.geometry}
            material={materials['outfit.001']}
            skeleton={nodes.Shoe_Left.skeleton}
          />
          <skinnedMesh
            name="Shoe_Right"
            geometry={nodes.Shoe_Right.geometry}
            material={materials['outfit.001']}
            skeleton={nodes.Shoe_Right.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('models/Avatar/trainee.glb')