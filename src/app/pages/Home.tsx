import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, LayoutDashboard, Home as HomeIcon } from "lucide-react";
import { useNavigate } from "react-router";
import { Landing } from "./Landing";

export function Home() {
  const navigate = useNavigate();

  const handleNavigateToDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#0B0F1A]">
      {/* Floating Navigation Toggle */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100]">
        <motion.div
          className="flex items-center gap-2 p-2 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button
            className="relative px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 text-white"
          >
            <motion.div
              className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600"
              layoutId="activeTab"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
            <HomeIcon className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Landing</span>
          </button>

          <button
            onClick={handleNavigateToDashboard}
            className="relative px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 text-gray-400 hover:text-white"
          >
            <LayoutDashboard className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Dashboard</span>
          </button>
        </motion.div>
      </div>

      {/* Landing Page Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <LandingWrapper onSwitchToDashboard={handleNavigateToDashboard} />
      </motion.div>
    </div>
  );
}

// Wrapper for Landing with modified CTAs
function LandingWrapper({ onSwitchToDashboard }: { onSwitchToDashboard: () => void }) {
  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white overflow-x-hidden">
      {/* Animated background gradient */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 w-1/2 h-1/2 bg-emerald-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Use the existing Landing component content */}
      <Landing onNavigateToDashboard={onSwitchToDashboard} />
    </div>
  );
}