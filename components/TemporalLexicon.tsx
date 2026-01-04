"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, FileText, ChevronDown } from "lucide-react";

interface LexiconEntry {
  id: string;
  term: string;
  category: "Temporal" | "Spatial" | "Cosmic";
  definition: string;
  comparison?: string;
}

export default function TemporalLexicon() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [expandedEntry, setExpandedEntry] = useState<string | null>(null);

  const lexiconData: LexiconEntry[] = [
    {
      id: "timeline",
      term: "Timeline",
      category: "Temporal",
      definition:
        "A sequence of events occurring in chronological order within a single reality. The Sacred Timeline is actually a bundle of countless individual timelines flowing together.",
      comparison:
        "Think of it as a river with many streams flowing together, not a single thread.",
    },
    {
      id: "dimension",
      term: "Dimension",
      category: "Spatial",
      definition:
        "A plane of existence with its own physical laws and properties. Examples include the Dark Dimension, the Mirror Dimension, or the Quantum Realm.",
      comparison:
        "Dimensions are different 'spaces' within the same reality, like rooms in a house.",
    },
    {
      id: "reality",
      term: "Reality / Universe",
      category: "Spatial",
      definition:
        "A complete cosmos with its own timeline, dimensions, and physical laws. Earth-199999 (MCU) and Earth-838 (Illuminati universe) are separate realities.",
      comparison:
        "Each reality is like a separate house, containing multiple rooms (dimensions) and a history (timeline).",
    },
    {
      id: "nexus-event",
      term: "Nexus Event",
      category: "Temporal",
      definition:
        "A deviation in the timeline that, if left unchecked, could create a branched reality. Previously pruned by the TVA, now allowed to grow naturally.",
      comparison:
        "Under He Who Remains, these were threats. Under Loki's watch, they're natural growth.",
    },
    {
      id: "absolute-point",
      term: "Absolute Point",
      category: "Temporal",
      definition:
        "An immutable event that must occur in every timeline variant. Attempting to change it causes temporal instability and potentially destroys that reality.",
      comparison:
        "Unlike Nexus Events (which can be changed), Absolute Points are fundamental to reality's structure.",
    },
    {
      id: "branched-timeline",
      term: "Branched Timeline",
      category: "Temporal",
      definition:
        "A timeline that has diverged from the Sacred Timeline due to a Nexus Event. These branches are now protected and allowed to flourish under the new TVA.",
      comparison:
        "Previously pruned immediately; now they're free to grow like branches on Yggdrasil.",
    },
    {
      id: "sacred-timeline",
      term: "Sacred Timeline",
      category: "Temporal",
      definition:
        "The designation for the timeline(s) maintained by the TVA. Actually a bundle of infinite threads, not a single line. Encompasses Earth-199999/616 and approved branches.",
      comparison:
        "Not 'sacred' by divine right, but by TVA designation. It's infinite timelines flowing in harmony.",
    },
    {
      id: "temporal-loom",
      term: "Temporal Loom",
      category: "Cosmic",
      definition:
        "The mechanical system created by He Who Remains to weave all timelines into the Sacred Timeline, preventing multiverse chaos through controlled pruning.",
      comparison:
        "A machine that enforces order. Destroyed in Season 2 when Loki chose organic growth over mechanical control.",
    },
    {
      id: "yggdrasil",
      term: "Yggdrasil",
      category: "Cosmic",
      definition:
        "The World Tree of Norse mythology, reborn through Loki's sacrifice. Represents the natural, organic growth of infinite timelines, replacing the Temporal Loom's mechanical control.",
      comparison:
        "Where the Loom controlled, Yggdrasil nurtures. Loki became the living heart of the multiverse.",
    },
    {
      id: "he-who-remains",
      term: "He Who Remains",
      category: "Temporal",
      definition:
        "The Kang variant who won the multiversal war and created the TVA. Maintained a false history and controlled timeline flow until his death at Sylvie's hands.",
      comparison:
        "A dictator who chose order over freedom. His death unleashed both possibility and danger.",
    },
    {
      id: "kang-variants",
      term: "Kang Variants",
      category: "Temporal",
      definition:
        "Infinite versions of Nathaniel Richards across timelines. The TVA's new mission focuses on monitoring the 31st century, when Kangs emerge and threaten multiversal war.",
      comparison:
        "The reason He Who Remains pruned timelines: to prevent his own variants from rising to power.",
    },
    {
      id: "bootstrap-paradox",
      term: "Bootstrap Paradox",
      category: "Temporal",
      definition:
        "A causal loop where an effect becomes its own cause. Victor Timely's TVA handbook created a loop: He Who Remains gave it to Miss Minutes, who gave it to Ravonna, who gave it to Victor.",
      comparison:
        "Loki broke this loop by destroying the Loom, freeing the multiverse from predetermined fate.",
    },
  ];

  const categories = ["All", "Temporal", "Spatial", "Cosmic"];

  const filteredData = lexiconData.filter((entry) => {
    const matchesSearch =
      entry.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.definition.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || entry.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColour = (category: string) => {
    switch (category) {
      case "Temporal":
        return "text-tva-orange-400 border-tva-orange-600 bg-tva-orange-900/20";
      case "Spatial":
        return "text-tva-amber-400 border-tva-amber-500 bg-tva-amber-500/10";
      case "Cosmic":
        return "text-tva-olive-400 border-tva-olive-600 bg-tva-olive-800/20";
      default:
        return "text-tva-cream-300 border-tva-brown";
    }
  };

  return (
    <div className="tva-terminal p-6">
      {/* Scan line effect */}
      <div className="scan-line" />

      {/* Search and Filter Bar */}
      <div className="relative z-20 mb-8 space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-tva-orange-600" />
          <input
            type="text"
            placeholder="Search temporal concepts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="tva-input pl-12"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-wider
                       transition-all duration-200 border ${
                         selectedCategory === category
                           ? "bg-tva-orange-900/40 border-tva-orange-500 text-tva-orange-400"
                           : "bg-tva-darker border-tva-brown text-tva-cream-200/60 hover:border-tva-orange-700 hover:text-tva-cream-200"
                       }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="relative z-20 mb-4 text-xs font-mono text-tva-orange-600 uppercase tracking-wide">
        Displaying {filteredData.length} of {lexiconData.length} records
      </div>

      {/* Lexicon Entries */}
      <div className="relative z-20 space-y-3">
        <AnimatePresence mode="popLayout">
          {filteredData.map((entry, index) => (
            <motion.div
              key={entry.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, delay: index * 0.03 }}
              className="bg-tva-darker/80 border border-tva-brown overflow-hidden
                       hover:border-tva-orange-700 transition-all duration-200"
            >
              <button
                onClick={() =>
                  setExpandedEntry(expandedEntry === entry.id ? null : entry.id)
                }
                className="w-full px-5 py-4 text-left flex items-start justify-between gap-4
                         hover:bg-tva-dark/50 transition-colors duration-150"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <FileText className="w-4 h-4 text-tva-orange-500 flex-shrink-0" />
                    <h3 className="text-lg font-display text-tva-cream-100 tracking-wide">
                      {entry.term.toUpperCase()}
                    </h3>
                    <span
                      className={`px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider
                                border ${getCategoryColour(entry.category)}`}
                    >
                      {entry.category}
                    </span>
                  </div>
                  <p className="text-tva-cream-200/70 text-sm leading-relaxed">
                    {entry.definition}
                  </p>
                </div>
                <motion.div
                  animate={{ rotate: expandedEntry === entry.id ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-tva-orange-600 mt-1 flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>

              <AnimatePresence>
                {expandedEntry === entry.id && entry.comparison && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 py-4 bg-tva-dark/50 border-t border-tva-brown">
                      <h4 className="text-tva-amber-500 font-mono text-xs uppercase tracking-wider mb-2">
                        Key Distinction:
                      </h4>
                      <p className="text-tva-cream-200/80 text-sm leading-relaxed italic">
                        &quot;{entry.comparison}&quot;
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredData.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative z-20 text-center py-12"
        >
          <p className="text-tva-cream-200/50 font-mono text-sm">
            No records found matching your query.
          </p>
        </motion.div>
      )}
    </div>
  );
}
