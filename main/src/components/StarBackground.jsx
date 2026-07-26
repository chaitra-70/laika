import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
function StarBackground() {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        background: {
          color: "#030712",
        },
        particles: {
          number: {
            value: 180,
          },
          color: {
            value: "#ffffff",
          },
          size: {
            value: 2,
          },
          move: {
            enable: true,
            speed: 0.3,
          },
          links: {
            enable: false,
          },
        },
      }}
    />
  );
}
export default StarBackground;