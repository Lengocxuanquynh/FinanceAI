import { Header } from "../components/Header";
import { motion } from "motion/react";
import { Settings as SettingsIcon } from "lucide-react";

export function Settings() {
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
          <div className="w-20 h-20 mx-auto mb-6 rounded-[20px] bg-gradient-to-br from-gray-500 to-gray-700 shadow-gray-500/30 shadow-2xl flex items-center justify-center">
            <SettingsIcon className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">Settings Page</h2>
          <p className="text-gray-400 max-w-md mx-auto">
            Customize your preferences, security settings, and account information.
          </p>
        </motion.div>
      </main>
    </div>
  );
}
