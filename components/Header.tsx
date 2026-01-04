"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-tva-black/90 backdrop-blur-sm border-b border-tva-brown"
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="text-tva-orange-500"
          >
            <Clock className="w-6 h-6" />
          </motion.div>
          <div>
            <h1 className="text-lg font-display text-tva-orange-400 tracking-wider">
              YGGDRASIL ARCHIVE
            </h1>
            <p className="text-[10px] font-mono text-tva-cream-200/40 uppercase tracking-wider">
              TVA Temporal Database
            </p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {[
            { href: "#timeline", label: "Timeline" },
            { href: "#lexicon", label: "Lexicon" },
            { href: "#journey", label: "Journey" },
            { href: "#database", label: "Database" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-tva-cream-200/50 hover:text-tva-orange-400 transition-colors duration-200 font-mono text-xs uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden sm:block">
          <span className="text-[10px] font-mono text-tva-orange-600/60 uppercase tracking-wider">
            For All Time. Always.
          </span>
        </div>
      </div>
    </motion.header>
  );
}
