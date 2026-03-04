import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Text, Environment } from "@react-three/drei";

function TeamMember(props) {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh position={props.position}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={props.color} />
      </mesh>
    </Float>
  );
}

function Leader() {
  return (
    <Float speed={3} rotationIntensity={2} floatIntensity={3}>
      <mesh position={[0, 1.5, 0]}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial color="orange" />
      </mesh>
      <Text position={[0, 2.8, 0]} fontSize={0.4} color="white" anchorX="center">
        Leader
      </Text>
    </Float>
  );
}

export default function LeadingChangeScene({ goBack }) {
  return (
    <>
      
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <Leader />

        <TeamMember position={[-2, 0, 0]} color="skyblue" />
        <TeamMember position={[2, 0, 0]} color="lightgreen" />
        <TeamMember position={[0, 0, -2]} color="pink" />

        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} onClick={goBack}>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="#222" />
          
        </mesh>

        
        <Environment preset="city" />
      
    </>
  );
}
