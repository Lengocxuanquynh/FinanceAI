 "use client";

import { motion } from "motion/react";
import { 
  LayoutDashboard, 
  TrendingUp, 
  Wallet, 
  Bitcoin, 
  BarChart3, 
  Settings 
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: TrendingUp, label: "Analytics", path: "/dashboard/analytics" },
  { icon: Wallet, label: "Wallets", path: "/dashboard/wallets" },
  { icon: Bitcoin, label: "Crypto", path: "/dashboard/crypto" },
  { icon: BarChart3, label: "Stocks", path: "/dashboard/stocks" },
  { icon: Settings, label: "Settings", path: "/dashboard/settings" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen fixed left-0 top-0 glass-panel border-r border-white/10 z-50">
      <div className="p-6">
        {/* Logo */}
        <motion.div 
          className="flex items-center gap-3 mb-12"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-10 h-10 rounded-[14px] gradient-primary glow-primary flex items-center justify-center">
            <Wallet className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-semibold text-white">FinanceAI</span>
        </motion.div>

        {/* Navigation */}
        <nav className="space-y-2">
          {navItems.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-[14px] transition-all duration-300 group ${
                  pathname === item.path
                    ? "glass-panel glow-primary text-[#00D9FF]"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <>
                  <item.icon className={`w-5 h-5 ${pathname === item.path ? "text-[#00D9FF]" : ""}`} />
                  <span>{item.label}</span>
                  {pathname === item.path && (
                    <motion.div
                      className="ml-auto w-1.5 h-1.5 rounded-full bg-[#00D9FF] glow-primary"
                      layoutId="activeIndicator"
                    />
                  )}
                </>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Bottom Card */}
        <motion.div
          className="absolute bottom-6 left-6 right-6 glass-panel rounded-[20px] p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full gradient-purple glow-purple flex items-center justify-center">
              <span className="text-xs">✨</span>
            </div>
            <div className="flex-1">
              <p className="text-sm text-white font-medium">AI Insights</p>
              <p className="text-xs text-gray-400">Pro Plan Active</p>
            </div>
          </div>
        </motion.div>
      </div>
    </aside>
  );
}