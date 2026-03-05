import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Text, Environment } from "@react-three/drei";
import { ManagerAvatar } from "../components/ManagerAvatar";
import { useState, useEffect, useRef } from "react";
import { TraineeAvatar } from "../components/TraineeAvatar";
import "../styles/LeadingChange.css"

function SceneDirector({
  script,
  setCurrentManagerAnimation,
  setCurrentTraineeAnimation,
  setManagerThought,
  setTraineeThought
}) {
  const startTime = useRef(0);
  const stepIndex = useRef(0);

  useEffect(() => {
    startTime.current = performance.now();
  }, []);

  useFrame(() => {
    const elapsed = (performance.now() - startTime.current) / 1000;
    const step = script[stepIndex.current];

    if (!step) return;

    if (elapsed >= step.time) {

      if (step.manager) {
        setCurrentManagerAnimation(step.manager);
      }

      if (step.trainee) {
        setCurrentTraineeAnimation(step.trainee);
      }

      if (step.managerThought !== undefined) {
        setManagerThought(step.managerThought);
      }

      if (step.traineeThought !== undefined) {
        setTraineeThought(step.traineeThought);
      }

      stepIndex.current++;
    }
  });

  return null;
}

function ThoughtCloud({ position, message }) {
  if (!message) return null;

  return (
    <Float speed={2} floatIntensity={1}>
      <group position={position}>
        <mesh position={[2, 1, -0.2]}>
          <planeGeometry args={[6, 2]} />
          <meshStandardMaterial color="white" />
        </mesh>

        <Text
          position={[2, 1, 0]}
          fontSize={0.35}
          color="black"
          anchorX="center"
          anchorY="middle"
          maxWidth={5}
        >
          {message}
        </Text>
      </group>
    </Float>
  );
}


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

  const [currentManagerAnimation, setCurrentManagerAnimation] = useState("Idle");
  const [currentTraineeAnimation, setCurrentTraineeAnimation] = useState("Idle");

  const [managerThought, setManagerThought] = useState("");
  const [traineeThought, setTraineeThought] = useState("");


  const script = [
    { time: 0, manager: "Presenting", managerThought: "We must implement this new policy immediately." },

    { time: 4, manager: "Idle", managerThought: "" },

    { time: 5, trainee: "LookingAround", traineeThought: "This change feels risky..." },

    { time: 7, trainee: "Idle", traineeThought: "" },

    { time: 8, manager: "SayingNo", managerThought: "Resistance won't help." },

    { time: 10, manager: "Idle", managerThought: "" },

    { time: 11, trainee: "SayingNo", traineeThought: "I guess my concerns don't matter..." },

    { time: 14, trainee: "Idle", traineeThought: "" }
  ];



  return (


    <div className="canvas-container">

      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={2} />

        <SceneDirector
          script={script}
          setCurrentManagerAnimation={setCurrentManagerAnimation}
          setCurrentTraineeAnimation={setCurrentTraineeAnimation}
          setManagerThought={setManagerThought}
          setTraineeThought={setTraineeThought}
        />

        <ManagerAvatar position={[0, -10, -5]} currentAnimation={currentManagerAnimation} />

        <TraineeAvatar position={[9, -10, -3]} rotation={[0, -45.25, 0]} currentAnimation={currentTraineeAnimation} />

        <TeamMember position={[-2, -3, 0]} color="skyblue" onClick={() => setCurrentManagerAnimation("TalkingOpenHands")} />

        <ThoughtCloud
          position={[1.5, 2, -5]}
          message={managerThought}
        />


        <ThoughtCloud
          position={[9, 2.5, -4]}
          message={traineeThought}
        />





      </Canvas>

    </div>





  );
}
