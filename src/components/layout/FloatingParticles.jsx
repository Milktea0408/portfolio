import { useMemo } from "react";

const PARTICLE_COUNT = 72;

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function FloatingParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: PARTICLE_COUNT }, (_, index) => ({
        id: index,
        left: randomBetween(0, 100),
        top: randomBetween(0, 100),
        size: randomBetween(1.2, 3.8),
        opacity: randomBetween(0.14, 0.48),
        duration: randomBetween(16, 34),
        delay: randomBetween(-34, 0),
        driftX1: randomBetween(-80, 80),
        driftY1: randomBetween(-90, 90),
        driftX2: randomBetween(-120, 120),
        driftY2: randomBetween(-120, 120),
        driftX3: randomBetween(-70, 70),
        driftY3: randomBetween(-100, 100),
      })),
    [],
  );

  return (
    <div className="floating-particles" aria-hidden="true">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="floating-particle"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
            "--drift-x-1": `${particle.driftX1}px`,
            "--drift-y-1": `${particle.driftY1}px`,
            "--drift-x-2": `${particle.driftX2}px`,
            "--drift-y-2": `${particle.driftY2}px`,
            "--drift-x-3": `${particle.driftX3}px`,
            "--drift-y-3": `${particle.driftY3}px`,
          }}
        />
      ))}
    </div>
  );
}

export default FloatingParticles;
