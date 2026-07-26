import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

function SpaceBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="space"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -10,
        },

        background: {
          color: {
            value: "#020617",
          },
        },

        fpsLimit: 60,

        particles: {
          number: {
            value: 220,
          },

          color: {
            value: ["#ffffff", "#38bdf8", "#93c5fd"],
          },

          shape: {
            type: "circle",
          },

          opacity: {
            value: {
              min: 0.2,
              max: 1,
            },
            animation: {
              enable: true,
              speed: 0.5,
            },
          },

          size: {
            value: {
              min: 1,
              max: 3,
            },
          },

          move: {
            enable: true,
            speed: 0.15,
          },

          twinkle: {
            particles: {
              enable: true,
              frequency: 0.02,
              opacity: 1,
            },
          },
        },
      }}
    />
  );
}

export default SpaceBackground;