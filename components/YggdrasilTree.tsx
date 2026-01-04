"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { TreeParticles } from "./TreeParticles";

export default function YggdrasilTree() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Text content
  const descriptions = [
    {
      id: "roots",
      label: "The Dying Loom",
      description:
        "From the ruins of the Temporal Loom, Loki gathered the dying timelines.",
      color: "#FBBF24",
    },
    {
      id: "trunk",
      label: "The Pivot Point",
      description:
        "Loki himself, taking the burden of infinite time, rewriting the equation from mechanical to organic.",
      color: "#F97316",
    },
    {
      id: "canopy",
      label: "Yggdrasil Reborn",
      description:
        "An infinitely growing multiverse, safe and free, thriving in the emerald glow of the God of Stories.",
      color: "#34D399",
    },
  ];

  if (isMobile) {
    return (
      <div className="tva-panel">
        <div className="space-y-4">
          {descriptions.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.2, duration: 0.4 }}
              className="border-l-2 pl-4 py-2"
              style={{ borderColor: item.color }}
            >
              <h3
                className="font-mono text-sm font-semibold mb-1 uppercase tracking-wide"
                style={{ color: item.color }}
              >
                {item.label}
              </h3>
              <p className="text-xs text-tva-cream-200/70 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full flex justify-center">
      <div className="tva-panel w-full max-w-4xl relative overflow-hidden bg-tva-black/40 backdrop-blur-sm border-tva-green-900/30">
        <div style={{ width: "100%", height: "500px", maxHeight: "70vh" }}>
          <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
            {/* Lighting */}
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#fbbf24" />

            {/* The 3D Particle Tree */}
            <TreeParticles count={isMobile ? 1200 : 2500} isMobile={isMobile} />

            {/* Camera Controls - Optional, maybe auto-rotate lightly? */}
            {/* <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} /> */}
          </Canvas>
        </div>

        {/* Interactive Overlay Tooltip - Kept as HTML */}
        <div className="absolute top-10 right-10 pointer-events-none text-right">
          {/* Logic for hover would need to be passed up from Canvas or simulated */}
          {/* For 3D, we can't easily use the previous HTML hover zones. 
                Instead, we'll keep the Legend as the interaction point for descriptions. */}
          {hoveredNode && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-tva-darker/90 p-4 border border-tva-green-500 backdrop-blur-md max-w-xs inline-block text-left"
            >
              <h4 className="text-tva-green-400 font-mono text-sm uppercase mb-1">
                {descriptions.find((d) => d.id === hoveredNode)?.label}
              </h4>
              <p className="text-xs text-tva-cream-200/80">
                {descriptions.find((d) => d.id === hoveredNode)?.description}
              </p>
            </motion.div>
          )}
        </div>

        {/* Legend - Updated for S2 */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-8 text-xs pointer-events-none">
          <div
            className="flex flex-col items-center gap-1 group cursor-help pointer-events-auto"
            onMouseEnter={() => setHoveredNode("roots")}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#FBBF24] to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
            <span className="text-tva-gold-400 font-mono uppercase tracking-widest opacity-60">
              The Loom
            </span>
          </div>
          <div
            className="flex flex-col items-center gap-1 group cursor-help pointer-events-auto"
            onMouseEnter={() => setHoveredNode("trunk")}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <div className="w-4 h-4 rounded-full border border-[#F97316] bg-[#F97316]/20 flex items-center justify-center scale-75 group-hover:scale-100 transition-transform">
              <span className="text-[8px] text-[#F97316]">L</span>
            </div>
            <span className="text-tva-orange-400 font-mono uppercase tracking-widest opacity-60">
              Loki
            </span>
          </div>
          <div
            className="flex flex-col items-center gap-1 group cursor-help pointer-events-auto"
            onMouseEnter={() => setHoveredNode("canopy")}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#34D399] to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
            <span className="text-tva-green-400 font-mono uppercase tracking-widest opacity-60">
              Yggdrasil
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
