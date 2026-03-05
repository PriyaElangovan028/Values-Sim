import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Text, Environment } from "@react-three/drei";
import { ManagerAvatar } from "../components/ManagerAvatar";
import { useState } from "react";
import { TraineeAvatar } from "../components/TraineeAvatar";
import "../styles/LeadingChange.css"



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

  const [allManagerAnimation, setAllManagerAnimation] = useState([
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

  const [allTraineeAnimation, setAllTraineeAnimation] = useState([
    "Idle",
    "LookingAround",
    "Presenting",
    "SayingNo",
    "TalkingOneHand",
    "ThoughtfulHeadNod"
  ]);

  const [currentTraineeAnimation, setCurrentTraineeAnimation] = useState("Idle");

  const [currentManagerAnimation, setCurrentManagerAnimation] = useState("Idle");
  return (


    <div className="canvas-container">

      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <ManagerAvatar position={[0, -10, -5]} currentAnimation={currentManagerAnimation} />

        <TraineeAvatar position={[9, -10, -3]} rotation = {[0, -45.25, 0]} currentAnimation={currentTraineeAnimation} />

        <TeamMember position={[-2, -3, 0]} color="skyblue" onClick={() => setCurrentManagerAnimation("TalkingOpenHands")} />
       

       




      </Canvas>

    </div>





  );
}
