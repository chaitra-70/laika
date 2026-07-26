import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

import "./SpaceJourney.css";

function StarField() {
  const stars = useRef();

  useFrame((_, delta) => {
    if (stars.current) {
      stars.current.rotation.y += delta * 0.01;
    }
  });

  return (
    <Stars
      ref={stars}
      radius={180}
      depth={80}
      count={7000}
      factor={6}
      saturation={0}
      fade
      speed={1}
    />
  );
}

function Background() {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <StarField />
    </Canvas>
  );
}

export default function SpaceJourney() {
  const navigate = useNavigate();

  return (
    <div className="landing">

      <div className="stars">
        <Background />
      </div>

      <div className="overlay" />

      <motion.div
        className="content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >

        <motion.p
          className="tag"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          SPACE INTELLIGENCE PLATFORM
        </motion.p>

        <motion.h1
          className="title"
          initial={{ letterSpacing: "30px", opacity: 0 }}
          animate={{ letterSpacing: "10px", opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          LAIKA
        </motion.h1>

        <motion.p
          className="description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          A unified platform for exploring real-time space data,
           launches, astronomy imagery and
          asteroid monitoring
        </motion.p>

        <motion.button
          className="launch-btn"
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.96,
          }}
          onClick={() => navigate("/dashboard")}
        >
          less gooo
        </motion.button>

      </motion.div>

      <motion.div
        className="scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 2 }}
      >
        
      </motion.div>

    </div>
  );
}