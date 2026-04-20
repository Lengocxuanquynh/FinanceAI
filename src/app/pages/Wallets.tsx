import { Header } from "../components/Header";
import { motion } from "motion/react";
import { Wallet } from "lucide-react";

export function Wallets() {
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
          <div className="w-20 h-20 mx-auto mb-6 rounded-[20px] gradient-success glow-success flex items-center justify-center">
            <Wallet className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">Wallets Page</h2>
          <p className="text-gray-400 max-w-md mx-auto">
            Manage all your wallets and payment methods in one place.
          </p>
        </motion.div>
      </main>
    </div>
  );
}
