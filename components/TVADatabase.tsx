"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, FileText, ChevronRight, Monitor } from "lucide-react";

interface PersonnelFile {
  id: string;
  name: string;
  designation: string;
  status: string;
  background: string;
  role: string;
  keyMoments: string[];
  classification: "Analyst" | "Hunter" | "Variant" | "Judge";
}

export default function TVADatabase() {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [isBooting, setIsBooting] = useState(true);

  const personnelFiles: PersonnelFile[] = [
    {
      id: "mobius",
      name: "Mobius M. Mobius",
      designation: "Senior Analyst, Temporal Analysis Division",
      status: "Active - Multiverse Operations",
      classification: "Analyst",
      background:
        "Formerly Don, a single father and jet ski salesman in Ohio. Memory wiped and conscripted by the TVA. One of the organisation's most experienced analysts with centuries of service.",
      role: "Mobius serves as the TVA's foremost expert on timeline analysis and variant behaviour. His unorthodox methods and belief in second chances led him to recruit Loki, fundamentally changing the fate of the multiverse.",
      keyMoments: [
        "Recruited Variant L1130 (Loki) to hunt Sylvie, the rogue variant",
        "Discovered the truth about the TVA: all workers are mind-wiped variants",
        "Regained memories of his former life and family on the Sacred Timeline",
        "Chose to remain with the TVA under new management to protect the multiverse",
        "Now works to monitor the 31st century for emerging Kang variants",
        "Personal passion: Still dreams of owning a jet ski someday",
      ],
    },
    {
      id: "b15",
      name: "B-15 (Verity Willis)",
      designation: "Hunter, Promoted to Judge",
      status: "Active - TVA Leadership",
      classification: "Judge",
      background:
        "Formerly Verity Willis, a woman living her life on the Sacred Timeline before being conscripted by the TVA. Rose through the ranks as one of the TVA's most skilled hunters.",
      role: "B-15 leads the reformed TVA with a focus on protection rather than pruning. She advocates for the freedom of timelines whilst preparing for threats from Kang variants.",
      keyMoments: [
        "Led the initial capture of Variant L1130 (Loki) in the Gobi Desert",
        "First TVA hunter to regain her memories, catalysing the rebellion",
        "Helped expose Ravonna Renslayer's deception and allegiance to He Who Remains",
        "Promoted to Judge after the TVA's reformation",
        "Oversees the new mandate: monitor threats, not control timelines",
        "Works closely with Mobius and OB to rebuild the TVA's mission",
      ],
    },
    {
      id: "sylvie",
      name: "Sylvie Laufeydottir",
      designation: "Variant L1190 / The Variant",
      status: "At Large - Earth-??? Timeline",
      classification: "Variant",
      background:
        "A Loki variant who was pruned as a child for the crime of playing as a hero instead of a villain. Escaped the TVA and spent centuries on the run, hiding in apocalypses where the timeline was about to end.",
      role: "Sylvie's quest for vengeance against the TVA led to the death of He Who Remains and the unleashing of the multiverse. Now living a quiet life on a branched timeline, working at a McDonald's.",
      keyMoments: [
        "Pruned as a child; self-taught enchantment as her unique Loki power",
        "Spent centuries hunting the Time Keepers, not knowing they were fake",
        "Partnered with Loki on Lamentis-1, creating an unprecedented Nexus Event",
        "Killed He Who Remains at the Citadel, unleashing infinite Kang variants",
        "Rejected the burden of ruling time, choosing freedom instead",
        "Currently living on a branched timeline, finally experiencing a normal life",
        "Complex relationship with Loki: ally, friend, maybe something more",
      ],
    },
    {
      id: "ravonna",
      name: "Ravonna Renslayer",
      designation: "Former Judge, Temporal Court",
      status: "Status Unknown - Searching for Free Will",
      classification: "Judge",
      background:
        "A high-ranking TVA Judge and former partner to Mobius. Ravonna's true past remains largely unknown to her, but she was a trusted confidante of He Who Remains.",
      role: "Ravonna believed in the TVA's mission absolutely - until she learned she'd been lied to her entire existence. Now searches for answers about free will and her own identity.",
      keyMoments: [
        "Presided over countless variant trials, sentencing them to pruning",
        "Close working relationship with Mobius; romantic tension implied",
        "Discovered she had a deeper connection to He Who Remains than she knew",
        "Learned her memories were wiped like everyone else",
        "Partnered with Miss Minutes in a failed coup attempt",
        "Received Victor Timely's handbook from Miss Minutes - part of the bootstrap paradox",
        "Departed the TVA through a Timedoor, destination unknown",
        "Searching for 'free will' and the truth about her past",
      ],
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsBooting(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const getClassificationColour = (classification: string) => {
    switch (classification) {
      case "Analyst":
        return "text-tva-amber-400 border-tva-amber-500";
      case "Hunter":
        return "text-tva-olive-400 border-tva-olive-500";
      case "Variant":
        return "text-tva-orange-400 border-tva-orange-500";
      case "Judge":
        return "text-tva-cream-200 border-tva-cream-300";
      default:
        return "text-tva-cream-300 border-tva-brown";
    }
  };

  const selectedFileData = personnelFiles.find((f) => f.id === selectedFile);

  return (
    <div className="tva-terminal overflow-hidden">
      {/* Scan line effect */}
      <div className="scan-line" />

      {/* Boot sequence */}
      <AnimatePresence>
        {isBooting && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-tva-black z-50 flex items-center justify-center p-8"
          >
            <div className="font-mono text-tva-orange-500 space-y-2 text-sm">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                [TVA PERSONNEL DATABASE v7.4.2]
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-tva-orange-600"
              >
                Initialising temporal protocols...
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="text-tva-orange-600"
              >
                Loading encrypted files...
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
              >
                Access granted. Welcome, Analyst.
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="relative z-20 bg-tva-darker border-b border-tva-orange-800 p-4">
        <div className="flex items-center gap-3">
          <Monitor className="w-5 h-5 text-tva-orange-500" />
          <div>
            <h3 className="text-tva-orange-400 font-mono text-sm uppercase tracking-wider">
              TVA Personnel Database
            </h3>
            <p className="text-tva-cream-200/40 font-mono text-xs">
              Classification: Analyst | Authorised Personnel Only
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 grid md:grid-cols-5 min-h-[500px]">
        {/* File list sidebar */}
        <div className="md:col-span-2 border-r border-tva-brown bg-tva-darker/50 p-4">
          <div className="mb-4 flex items-center gap-2 text-tva-amber-500 font-mono text-xs uppercase tracking-wider">
            <FileText className="w-4 h-4" />
            <span>Personnel Files ({personnelFiles.length})</span>
          </div>

          <div className="space-y-2">
            {personnelFiles.map((file) => (
              <motion.button
                key={file.id}
                onClick={() => setSelectedFile(file.id)}
                className={`w-full text-left p-3 border transition-all duration-200 ${
                  selectedFile === file.id
                    ? "bg-tva-orange-900/30 border-tva-orange-600 text-tva-orange-400"
                    : "bg-tva-darker/50 border-tva-brown text-tva-cream-200/70 hover:border-tva-orange-800"
                }`}
                whileHover={{ x: 2 }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <User className="w-3 h-3" />
                  <span className="font-mono text-xs font-semibold">
                    {file.name}
                  </span>
                </div>
                <p className="text-[10px] font-mono opacity-60">
                  {file.designation}
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <span
                    className={`text-[10px] font-mono uppercase px-1.5 py-0.5 border ${getClassificationColour(
                      file.classification
                    )}`}
                  >
                    {file.classification}
                  </span>
                  {selectedFile === file.id && (
                    <ChevronRight className="w-3 h-3 ml-auto" />
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* File content area */}
        <div className="md:col-span-3 p-5 bg-tva-black/30 overflow-y-auto max-h-[500px] scrollbar-hide">
          <AnimatePresence mode="wait">
            {selectedFileData ? (
              <motion.div
                key={selectedFileData.id}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.2 }}
                className="font-mono text-sm"
              >
                {/* File header */}
                <div className="mb-5 pb-4 border-b border-tva-brown">
                  <h2 className="text-2xl font-display text-tva-orange-400 tracking-wide mb-1">
                    {selectedFileData.name.toUpperCase()}
                  </h2>
                  <p className="text-tva-amber-500 text-xs mb-2">
                    {selectedFileData.designation}
                  </p>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span
                      className={`px-2 py-0.5 text-[10px] uppercase border ${getClassificationColour(
                        selectedFileData.classification
                      )}`}
                    >
                      {selectedFileData.classification}
                    </span>
                    <span className="text-tva-cream-200/40 text-[10px]">
                      Status: {selectedFileData.status}
                    </span>
                  </div>
                </div>

                {/* Background */}
                <div className="mb-5">
                  <h4 className="text-tva-amber-500 text-xs uppercase tracking-wider mb-2">
                    [Background]
                  </h4>
                  <p className="text-tva-cream-200/70 text-xs leading-relaxed">
                    {selectedFileData.background}
                  </p>
                </div>

                {/* Role */}
                <div className="mb-5">
                  <h4 className="text-tva-amber-500 text-xs uppercase tracking-wider mb-2">
                    [Current Role]
                  </h4>
                  <p className="text-tva-cream-200/70 text-xs leading-relaxed">
                    {selectedFileData.role}
                  </p>
                </div>

                {/* Key moments */}
                <div>
                  <h4 className="text-tva-amber-500 text-xs uppercase tracking-wider mb-2">
                    [Key Operational Moments]
                  </h4>
                  <div className="space-y-2">
                    {selectedFileData.keyMoments.map((moment, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex gap-2 text-xs"
                      >
                        <span className="text-tva-orange-500">&gt;</span>
                        <span className="text-tva-cream-200/60">{moment}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* File footer */}
                <div className="mt-6 pt-3 border-t border-tva-brown text-[10px] text-tva-cream-200/30">
                  <p>Last Updated: [REDACTED]</p>
                  <p className="mt-1">Classification: For All Time. Always.</p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-full flex items-center justify-center text-center"
              >
                <div className="text-tva-cream-200/30 font-mono">
                  <Monitor className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p className="text-sm mb-1">No File Selected</p>
                  <p className="text-xs opacity-60">
                    Select a personnel file to view details
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Footer bar */}
      <div className="relative z-20 bg-tva-darker border-t border-tva-orange-800 px-4 py-2 font-mono text-[10px] text-tva-orange-600/60 flex justify-between items-center">
        <span>TVA Database Terminal v7.4.2</span>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-tva-olive-500 animate-glow-pulse" />
          <span>ONLINE</span>
        </div>
      </div>
    </div>
  );
}
