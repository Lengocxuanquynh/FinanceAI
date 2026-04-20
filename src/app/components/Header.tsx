"use client";

import { motion } from "motion/react";
import { Search, Bell } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="h-20 glass-panel border-b border-white/10 sticky top-0 z-40">
      <div className="h-full px-8 flex items-center justify-between">
        {/* Toggle Navigation */}
        <motion.div
          className="flex items-center gap-2 p-1 rounded-2xl bg-white/5 border border-white/10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="px-6 py-2 rounded-xl text-gray-400 hover:text-white transition-colors font-semibold flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Landing
          </Link>
          <Link
            href="/dashboard"
            className="px-6 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            Dashboard
          </Link>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          className="flex-1 max-w-xl mx-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search transactions, stocks, crypto..."
              className="w-full pl-12 pr-4 py-3 rounded-[14px] glass-panel text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00D9FF]/50 transition-all"
            />
          </div>
        </motion.div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Notification */}
          <motion.button
            className="relative w-12 h-12 rounded-[14px] glass-panel flex items-center justify-center hover:glow-primary transition-all group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Bell className="w-5 h-5 text-gray-400 group-hover:text-[#00D9FF] transition-colors" />
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#EF4444] glow-danger"></span>
          </motion.button>

          {/* Profile */}
          <motion.button
            className="flex items-center gap-3 glass-panel rounded-[14px] px-4 py-2 hover:glow-primary transition-all group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-9 h-9 rounded-full gradient-primary glow-primary flex items-center justify-center">
              <span className="text-sm font-semibold text-white">JD</span>
            </div>
            <div className="text-left hidden lg:block">
              <p className="text-sm text-white font-medium">John Doe</p>
              <p className="text-xs text-gray-400">Premium</p>
            </div>
          </motion.button>
        </div>
      </div>
    </header>
  );
}
