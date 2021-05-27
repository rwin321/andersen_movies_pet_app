import React from "react";
import Particles from "react-particles-js";

const ShowParticles = () => {
  return (
    <Particles
      className="particles"
      params={{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900,
            },
          },
          shape: {
            type: "circle",
            stroke: {
              width: 6,
              color: "#000",
            },
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
          opacity: {
            value: 0.5,
            anim: {
              enable: true,
            },
          },
          size: {
            value: 7,
            random: true,
            anim: {
              enable: true,
              speed: 3,
            },
          },
          line_linked: {
            enable: false,
          },
        },
      }}
    />
  );
};

export default ShowParticles;
