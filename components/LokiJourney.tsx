"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Crown, ScrollText, Clock, Zap, Infinity } from "lucide-react";

interface JourneyStage {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  description: string;
  details: string[];
  colour: string;
}

export default function LokiJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState<string>("variant");

  const stages: JourneyStage[] = [
    {
      id: "variant",
      title: "Variant L1130",
      subtitle: "The Fugitive",
      icon: <Crown className="w-6 h-6" />,
      description:
        "After the Avengers' time heist creates a branch, Loki escapes with the Tesseract - only to be captured by the Time Variance Authority moments later.",
      details: [
        "Designation: Variant L1130, captured in the Gobi Desert",
        "Crime: Deviation from the Sacred Timeline",
        "Status: Scheduled for pruning and reset",
        "Key moment: Witnesses the TVA's power over the Infinity Stones",
      ],
      colour: "#F97316",
    },
    {
      id: "analyst",
      title: "TVA Analyst",
      subtitle: "Learning the Mechanics of Time",
      icon: <Clock className="w-6 h-6" />,
      description:
        "Recruited by Agent Mobius, Loki becomes an unlikely ally to the TVA, hunting a dangerous variant of himself whilst uncovering the truth about the organisation.",
      details: [
        "Partners with Mobius M. Mobius to track Sylvie (The Variant)",
        "Discovers the TVA's workers are all mind-wiped variants",
        "Learns the Sacred Timeline is artificially maintained",
        "Falls for Sylvie, creating an unprecedented Nexus Event on Lamentis-1",
        "Key revelation: The Time Keepers are fake; someone else controls everything",
      ],
      colour: "#FBBF24",
    },
    {
      id: "seeker",
      title: "The Seeker",
      subtitle: "Confronting He Who Remains",
      icon: <Zap className="w-6 h-6" />,
      description:
        "Loki and Sylvie reach the Citadel at the End of Time, where He Who Remains offers them a choice: take his place or unleash infinite Kang variants upon the multiverse.",
      details: [
        "Meets He Who Remains, the Kang variant who won the Multiversal War",
        "Learns the Sacred Timeline prevents other Kangs from rising",
        "Loki wants to find another way; Sylvie wants revenge",
        "Sylvie kills He Who Remains, unleashing the multiverse",
        "Loki is thrown into an alternate TVA where Kang statues replace the Time Keepers",
      ],
      colour: "#84CC16",
    },
    {
      id: "god-of-stories",
      title: "The God of Stories",
      subtitle: "The Final Sacrifice",
      icon: <ScrollText className="w-6 h-6" />,
      description:
        "Facing the collapse of all timelines, Loki makes the ultimate choice: to become the living anchor of the multiverse, holding infinite realities together for eternity.",
      details: [
        "The Temporal Loom, designed to fail, begins destroying all branched timelines",
        "Loki learns time-slipping and masters temporal manipulation",
        "Realises He Who Remains engineered everything as a failsafe",
        "Faces the choice: let everyone die or sacrifice his freedom forever",
        "Destroys the Loom and takes the timelines into his own hands",
        "Becomes the living heart of Yggdrasil, holding infinite realities together",
        "New title: Not the God of Mischief, but the God of Stories",
      ],
      colour: "#65A30D",
    },
    {
      id: "paradox",
      title: "The Bootstrap Paradox",
      subtitle: "Breaking the Loop",
      icon: <Infinity className="w-6 h-6" />,
      description:
        "He Who Remains orchestrated a perfect causal loop through Victor Timely - a loop that Loki ultimately shattered by choosing a third path.",
      details: [
        "Victor Timely (young Kang variant) receives a TVA handbook in 1868",
        "The handbook came from Ravonna Renslayer, who got it from Miss Minutes",
        "Miss Minutes received it from He Who Remains in the far future",
        "But He Who Remains IS Victor Timely - creating a perfect bootstrap paradox",
        "This loop ensured the Loom would always exist and always fail",
        "Loki broke the loop by destroying the Loom entirely",
        "Result: Free will restored; the multiverse grows naturally through Yggdrasil",
      ],
      colour: "#EA580C",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const { top, height } = container.getBoundingClientRect();
      const scrollProgress = (-top / (height - window.innerHeight)) * 100;

      if (scrollProgress < 20) setActiveStage("variant");
      else if (scrollProgress < 40) setActiveStage("analyst");
      else if (scrollProgress < 60) setActiveStage("seeker");
      else if (scrollProgress < 80) setActiveStage("god-of-stories");
      else setActiveStage("paradox");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative py-12">
      {/* Vertical glowing timeline line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-tva-orange-500/50 to-transparent transform md:-translate-x-1/2 blur-[1px]" />
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-tva-orange-400 to-transparent transform md:-translate-x-1/2" />

      {/* Journey stages */}
      <div className="space-y-24">
        {stages.map((stage, index) => {
          const isActive = activeStage === stage.id;
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative flex items-center ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              } flex-col group`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center">
                {/* Outer Glow Ring */}
                <motion.div
                  animate={{
                    scale: isActive ? 1.5 : 1,
                    opacity: isActive ? 0.5 : 0.2,
                  }}
                  className="absolute w-8 h-8 rounded-full blur-md"
                  style={{ backgroundColor: stage.colour }}
                />
                {/* Core Dot */}
                <motion.div
                  animate={{ scale: isActive ? 1.2 : 1 }}
                  className="relative w-4 h-4 rounded-full border-2 border-tva-black shadow-xl"
                  style={{ backgroundColor: stage.colour }}
                />
              </div>

              {/* Content card */}
              <div
                className={`ml-16 md:ml-0 md:w-[45%] ${
                  isLeft
                    ? "md:mr-auto md:pr-12 md:text-right"
                    : "md:ml-auto md:pl-12 md:text-left"
                }`}
              >
                <div
                  className={`relative transition-all duration-500 hover:scale-[1.02] ${
                    isActive
                      ? "opacity-100"
                      : "opacity-70 group-hover:opacity-100"
                  }`}
                >
                  {/* Card Background & Border */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-white/0 blur-sm -z-10" />
                  <div
                    className={`relative overflow-hidden rounded-xl border bg-tva-black/80 backdrop-blur-xl p-6 md:p-8 transition-colors duration-500`}
                    style={{
                      borderColor: isActive ? stage.colour : "#44403C", // stone-700
                      boxShadow: isActive
                        ? `0 0 30px -5px ${stage.colour}40`
                        : "none",
                    }}
                  >
                    {/* Connecting Line to Center (Desktop only) */}
                    <div
                      className={`hidden md:block absolute top-1/2 w-12 h-px bg-gradient-to-r from-transparent to-current opacity-50 ${
                        isLeft
                          ? "-right-12 left-auto bg-gradient-to-l"
                          : "-left-12 bg-gradient-to-r"
                      }`}
                      style={{ color: stage.colour }}
                    />

                    {/* Content Header */}
                    <div
                      className={`flex flex-col gap-2 mb-4 ${
                        isLeft ? "md:items-end" : "md:items-start"
                      }`}
                    >
                      <div
                        className="inline-flex items-center justify-center p-3 rounded-lg bg-white/5 mb-2 backdrop-blur-sm"
                        style={{ color: stage.colour }}
                      >
                        {stage.icon}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-display uppercase tracking-widest text-tva-cream-100">
                        {stage.title}
                      </h3>
                      <span
                        className="text-xs font-mono uppercase tracking-[0.2em] px-2 py-1 rounded bg-white/5"
                        style={{ color: stage.colour }}
                      >
                        {stage.subtitle}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-tva-cream-200/70 text-sm leading-relaxed mb-6 font-light">
                      {stage.description}
                    </p>

                    {/* Details */}
                    <div
                      className={`space-y-2 ${
                        isLeft
                          ? "md:items-end flex flex-col"
                          : "md:items-start flex flex-col"
                      }`}
                    >
                      {stage.details.map((detail, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 text-xs text-tva-cream-200/50 hover:text-tva-cream-100 transition-colors"
                        >
                          {isLeft && (
                            <span
                              className="hidden md:block w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: stage.colour }}
                            />
                          )}
                          <span>{detail}</span>
                          {(!isLeft || true) && (
                            <span
                              className={`md:hidden w-1.5 h-1.5 rounded-full`}
                              style={{ backgroundColor: stage.colour }}
                            />
                          )}
                          {!isLeft && (
                            <span
                              className="hidden md:block w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: stage.colour }}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Final message */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-32 text-center max-w-4xl mx-auto px-4"
      >
        <div className="relative p-10 md:p-14 overflow-hidden rounded-2xl border border-tva-orange-500/30 bg-tva-darker/50 backdrop-blur-xl">
          <div className="absolute inset-0 bg-gradient-to-b from-tva-orange-500/5 to-transparent pointer-events-none" />

          <Crown className="w-12 h-12 text-tva-orange-500 mx-auto mb-6 opacity-80" />

          <h3 className="text-2xl md:text-4xl font-display text-tva-cream-100 tracking-widest leading-tight mb-6">
            &quot;I KNOW WHAT I WANT. I KNOW WHAT KIND OF GOD I NEED TO
            BE.&quot;
          </h3>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-tva-orange-500 to-transparent mx-auto mb-6" />

          <p className="text-tva-cream-200/60 font-mono text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Loki&apos;s journey transformed him from a selfish trickster seeking
            a throne to a selfless guardian holding infinite timelines together.
            He sits alone at the centre of existence, for all time. Always.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
