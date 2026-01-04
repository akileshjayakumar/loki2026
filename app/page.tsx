"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import YggdrasilTree from "@/components/YggdrasilTree";
import TemporalLexicon from "@/components/TemporalLexicon";
import LokiJourney from "@/components/LokiJourney";
import TVADatabase from "@/components/TVADatabase";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="relative min-h-screen overflow-x-hidden film-grain">
      {/* Subtle orange glow at top */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-tva-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        <Header />

        {/* Hero Section */}
        <section id="timeline" className="min-h-screen flex items-center justify-center px-4 pt-24 pb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full max-w-6xl"
          >
            {/* TVA Logo/Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex justify-center mb-8"
            >
              <div className="px-6 py-2 border-2 border-tva-orange-600 bg-tva-darker/80">
                <span className="font-mono text-tva-orange-500 text-sm tracking-[0.3em] uppercase">
                  Time Variance Authority
                </span>
              </div>
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-center mb-6"
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-display text-tva-orange-500 tracking-wider mb-4">
                THE YGGDRASIL ARCHIVE
              </h1>
              <div className="tva-divider max-w-md mx-auto mb-6" />
              <p className="text-lg md:text-xl text-tva-cream-200 font-mono uppercase tracking-[0.2em]">
                Mapping the MCU Multiverse
              </p>
            </motion.div>

            {/* Tree Visualisation */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <YggdrasilTree />
            </motion.div>

            {/* Intro Text */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-center mt-12 max-w-3xl mx-auto"
            >
              <p className="text-tva-cream-200/80 leading-relaxed text-lg">
                The Sacred Timeline is not a single thread, but a{" "}
                <span className="text-tva-orange-400">bundle of infinite possibilities</span>,
                woven together by the God of Stories. What once was mechanically controlled by the
                Temporal Loom now grows organically through the power of Yggdrasil.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Temporal Lexicon Section */}
        <section id="lexicon" className="py-24 px-4 border-t border-tva-brown">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="text-center mb-12">
                <p className="text-tva-orange-600 font-mono text-sm tracking-[0.3em] uppercase mb-3">
                  Section 01
                </p>
                <h2 className="text-5xl md:text-6xl font-display text-tva-cream-100 tracking-wide mb-4">
                  TEMPORAL LEXICON
                </h2>
                <p className="text-tva-cream-300/60 font-mono uppercase tracking-wider text-sm">
                  Clarifying the Mechanics of Time
                </p>
              </div>
              <TemporalLexicon />
            </motion.div>
          </div>
        </section>

        {/* Loki's Journey Section */}
        <section id="journey" className="py-24 px-4 bg-gradient-to-b from-tva-black via-tva-darker to-tva-black border-t border-tva-brown">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="text-center mb-12">
                <p className="text-tva-olive-500 font-mono text-sm tracking-[0.3em] uppercase mb-3">
                  Section 02
                </p>
                <h2 className="text-5xl md:text-6xl font-display text-tva-cream-100 tracking-wide mb-4">
                  LOKI&apos;S JOURNEY
                </h2>
                <p className="text-tva-cream-300/60 font-mono uppercase tracking-wider text-sm">
                  From Variant to God of Stories
                </p>
              </div>
              <LokiJourney />
            </motion.div>
          </div>
        </section>

        {/* TVA Database Section */}
        <section id="database" className="py-24 px-4 border-t border-tva-brown">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="text-center mb-12">
                <p className="text-tva-amber-500 font-mono text-sm tracking-[0.3em] uppercase mb-3">
                  Section 03
                </p>
                <h2 className="text-5xl md:text-6xl font-display text-tva-cream-100 tracking-wide mb-4">
                  PERSONNEL DATABASE
                </h2>
                <p className="text-tva-cream-300/60 font-mono uppercase tracking-wider text-sm">
                  Access Authorised Records
                </p>
              </div>
              <TVADatabase />
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
