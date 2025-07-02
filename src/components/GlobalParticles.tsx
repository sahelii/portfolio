"use client";

import { Particles } from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const particlesOptions = {
  background: { color: { value: "transparent" } },
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: { enable: true, mode: "push" },
      onHover: { enable: true, mode: "repulse" }
    },
    modes: {
      push: { quantity: 4 },
      repulse: { distance: 100, duration: 0.4 }
    },
    resize: true
  },
  particles: {
    color: { value: ["#7c3aed", "#06b6d4", "#ec4899"] },
    links: {
      color: "#7c3aed",
      distance: 150,
      enable: true,
      opacity: 0.4,
      width: 1
    },
    move: {
      direction: "none" as const,
      enable: true,
      outModes: { default: "bounce" as const },
      random: true,
      speed: 1,
      straight: false
    },
    number: {
      density: { enable: true, area: 800 },
      value: 50
    },
    opacity: {
      value: 0.5,
      animation: {
        enable: true,
        speed: 1,
        minimumValue: 0.1
      }
    },
    shape: {
      type: ["circle", "triangle", "square"]
    },
    size: {
      value: { min: 1, max: 3 },
      animation: {
        enable: true,
        speed: 2,
        minimumValue: 0.1
      }
    }
  },
  detectRetina: true
};

export default function GlobalParticles() {
  return (
    <Particles
      id="tsparticles-global"
      className="fixed inset-0 z-0"
      init={loadSlim}
      options={particlesOptions}
    />
  );
} 