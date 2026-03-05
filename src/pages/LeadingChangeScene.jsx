import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Text, Environment } from "@react-three/drei";
import { ManagerAvatar } from "../components/ManagerAvatar";
import { useState } from "react";

function TeamMember(props) {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh position={props.position} onClick={props.onClick}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={props.color} />
      </mesh>
    </Float>
  );
}



export default function LeadingChangeScene({ goBack }) {

  const [allAnimation, setAllAnimation] = useState([
    "Armature.003|mixamo.com|Layer0",
    "DeterminedNod",
    "Explaining",
    "Idle",
    "Idle2",
    "Presenting",
    "Sad",
    "SayingNo",
    "TalkingOpenHands",
    "ThoughtfulHeadNod",
    "Victory",
    "VictoryIdle"
  ]);
  
  const [currentAnimation, setCurrentAnimation] = useState("Idle");
  return (
    <>
      
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <ManagerAvatar position={[0, 0, 0]} currentAnimation={currentAnimation} />

        <TeamMember position={[-2, 0, 0]} color="skyblue" onClick={() => setCurrentAnimation("TalkingOpenHands")}/>
        <TeamMember position={[2, 0, 0]} color="lightgreen" />
        <TeamMember position={[0, 0, -2]} color="pink" />

        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} >
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="#222" />
          
        </mesh>

        
        <Environment preset="city" />
      
    </>
  );
}
