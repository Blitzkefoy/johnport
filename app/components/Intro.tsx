"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Intro() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Hide intro after 3.5 seconds
    const timer = setTimeout(() => {
      setShowIntro(false);
      // Restore scrolling after exit animation completes (0.8s)
      setTimeout(() => {
        document.body.style.overflow = "";
      }, 800);
    }, 3500);

    // Prevent scrolling while intro is playing
    document.body.style.overflow = "hidden";

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100vh" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <div className="flex gap-4 overflow-hidden justify-center items-end">
              <motion.h1 
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="text-4xl md:text-7xl font-bold text-white tracking-tight uppercase"
              >
                John Rey
              </motion.h1>
            </div>
            
            <div className="flex gap-4 overflow-hidden justify-center mt-2">
              <motion.h2
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="text-3xl md:text-5xl font-light text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 tracking-widest uppercase"
              >
                Maños
              </motion.h2>
            </div>

            <motion.div 
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              transition={{ delay: 1.2, duration: 1, ease: "easeInOut" }}
              className="h-[2px] bg-gradient-to-r from-indigo-500/0 via-indigo-500 to-purple-500/0 mt-8 mx-auto"
            />
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="text-slate-500 mt-6 tracking-[0.3em] text-sm uppercase"
            >
              Loading Experience
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
