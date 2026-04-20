import { Header } from "../components/Header";
import { motion } from "motion/react";
import { Bitcoin } from "lucide-react";

export function Crypto() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="p-8">
        <motion.div
          className="glass-panel rounded-[20px] p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-[20px] bg-gradient-to-br from-orange-500 to-orange-700 shadow-orange-500/30 shadow-2xl flex items-center justify-center">
            <Bitcoin className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">Cryptocurrency Page</h2>
          <p className="text-gray-400 max-w-md mx-auto">
            Track and manage your cryptocurrency portfolio with real-time prices and charts.
          </p>
        </motion.div>
      </main>
    </div>
  );
}
