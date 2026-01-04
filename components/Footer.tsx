"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-tva-brown bg-tva-darker">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* About section */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-tva-orange-400 font-display text-xl tracking-wide mb-3">
              ABOUT THIS ARCHIVE
            </h3>
            <p className="text-tva-cream-200/60 text-sm leading-relaxed">
              An educational fan project exploring the complex temporal
              mechanics of Marvel&apos;s Loki series. This archive clarifies the
              differences between timelines, dimensions, and realities whilst
              celebrating the journey of the God of Stories.
            </p>
          </motion.div>

          {/* Resources section */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-tva-cream-100 font-display text-xl tracking-wide mb-3">
              RESOURCES
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://marvelcinematicuniverse.fandom.com/wiki/Loki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-tva-cream-200/60 hover:text-tva-orange-400 transition-colors duration-200 text-sm"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>MCU Wiki - Loki Series</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.disneyplus.com/series/loki/6pARMvILBGzF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-tva-cream-200/60 hover:text-tva-orange-400 transition-colors duration-200 text-sm"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>Watch Loki on Disney+</span>
                </a>
              </li>
              <li>
                <a
                  href="https://marvel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-tva-cream-200/60 hover:text-tva-orange-400 transition-colors duration-200 text-sm"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>Marvel.com</span>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-tva-cream-200/40 font-mono">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-2">
                made by <span className="text-base">👨‍💻</span>{" "}
                <a
                  href="https://akileshjayakumar.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-tva-orange-400 transition-colors underline decoration-tva-cream-200/40 hover:decoration-tva-orange-400 underline-offset-4"
                >
                  akileshjayakumar.com
                </a>
              </span>
              <span className="opacity-30">|</span>
              <a
                href="https://x.com/sentrytaost"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-tva-orange-400 transition-colors"
                aria-label="Twitter / X"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-3.5 h-3.5"
                >
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
                <span>@sentrytoast</span>
              </a>
            </div>
          </div>

          <div className="text-tva-orange-600/60 font-mono italic">
            &quot;For All Time. Always.&quot;
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-6 text-center text-[10px] text-tva-cream-200/30">
          <p>
            This is an unofficial fan-made educational project. Marvel, Loki,
            the TVA, and all related characters and concepts are property of
            Marvel Studios and The Walt Disney Company. This site is not
            affiliated with or endorsed by Marvel or Disney.
          </p>
        </div>
      </div>
    </footer>
  );
}
