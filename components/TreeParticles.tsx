"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function TreeParticles({ count = 2000, isMobile = false }) {
  const points = useRef<THREE.Points>(null!);

  // Create particles
  const particles = useMemo(() => {
    const temp = [];
    // We want the particles to follow a path:
    // 1. Start at bottom (Roots) - Wide spread, gold/amber
    // 2. Converge at center (Loki) - Tight, bright gold
    // 3. Flare out at top (Canopy) - Wide spread, emerald/green

    for (let i = 0; i < count; i++) {
      const t = Math.random(); // Position along the path (0 to 1)
      const angle = Math.random() * Math.PI * 2;

      // Calculate "Hourglass" radius based on 't' (vertical position)
      // t=0 (bottom), t=0.5 (center), t=1 (top)
      // We want wide at 0, narrow at 0.5, wide at 1

      // Map t to y-coordinate (-5 to 5)
      const y = t * 14 - 7;

      // Radius function: |y|^power gives us the curve
      // Add some noise to make it organic
      const radiusBase = Math.pow(Math.abs(y), 1.8) * 0.4;
      const radiusNoise = Math.random() * 0.5;
      const radius = radiusBase + radiusNoise + 0.2; // +0.2 to avoid 0 width at center

      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;

      // Speed factor for animation
      const speed = Math.random() * 0.01 + 0.005;

      temp.push({ t, angle, speed, x, y, z, initialRadius: radius });
    }
    return temp;
  }, [count]);

  // Buffers for Three.js
  const positions = useMemo(() => new Float32Array(count * 3), [count]);
  const colors = useMemo(() => new Float32Array(count * 3), [count]);
  const sizes = useMemo(() => new Float32Array(count), [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    for (let i = 0; i < count; i++) {
      const particle = particles[i];

      // Update position along the stream (t)
      particle.t += particle.speed;
      if (particle.t > 1) particle.t = 0; // Wrap around

      // Recalculate 3D position based on new 't'
      const y = particle.t * 14 - 7; // -7 to 7 vertical range

      // Dynamic hourglass shape
      // Add a slight "breathing" effect with sin(time)
      const breath = 1 + Math.sin(time * 0.5) * 0.05;
      const radiusBase = Math.pow(Math.abs(y * 0.8), 2) * 0.3; // Tighter waist
      const radius =
        (radiusBase + 0.1) * breath + Math.sin(particle.angle * 3 + time) * 0.1;

      // Spin the tree slowly
      const spin = time * 0.1;
      const angle = particle.angle + spin;

      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;

      // Update position buffer
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Update color buffer based on height (y)
      // Bottom (-7) -> Gold (#F59E0B)
      // Middle (0) -> Bright Gold/White (#FEF3C7)
      // Top (7) -> Emerald (#10B981)

      const color = new THREE.Color();

      if (y < -2) {
        // Roots (Gold/Amber)
        color.setHSL(0.1, 0.9, 0.5); // Orange-Gold
      } else if (y < 2) {
        // Core (Bright Gold)
        color.setHSL(0.12, 1.0, 0.7);
      } else {
        // Canopy (Emerald/Cyan)
        // Transition from Gold to Green
        const hue = 0.12 + ((y - 2) / 5) * 0.35; // Shift to 0.47 (Cyan/Green)
        color.setHSL(hue, 0.8, 0.5);
      }

      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      // Update sizes - sparkle effect
      sizes[i] = (Math.sin(time * 3 + i) * 0.5 + 1) * (isMobile ? 0.8 : 0.5);
    }

    // Notify Three.js that buffers need update
    if (points.current) {
      points.current.geometry.attributes.position.needsUpdate = true;
      points.current.geometry.attributes.color.needsUpdate = true;
      points.current.geometry.attributes.size.needsUpdate = true;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
       args={[positions, 3]}
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}        />
      </bufferGeometry>
      <pointsMaterial
        vertexColors
        size={0.15}
        sizeAttenuation={true}
        transparent={true}
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
