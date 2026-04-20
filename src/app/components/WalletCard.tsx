import { motion } from "motion/react";
import { CreditCard, Eye, EyeOff, Copy, MoreVertical } from "lucide-react";
import { useState } from "react";

export function WalletCard() {
  const [showCardNumber, setShowCardNumber] = useState(false);

  return (
    <motion.div
      className="glass-panel rounded-[20px] p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.9 }}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-[14px] gradient-primary glow-primary flex items-center justify-center">
            <CreditCard className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">My Cards</h3>
            <p className="text-sm text-gray-400">Manage your cards</p>
          </div>
        </div>
        <motion.button
          className="px-4 py-2 rounded-[12px] gradient-primary glow-primary text-sm text-white hover:scale-105 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          + Add Card
        </motion.button>
      </div>

      {/* Premium Card */}
      <div className="relative">
        <motion.div
          className="relative h-52 rounded-[24px] overflow-hidden cursor-pointer group"
          initial={{ rotateY: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Card Background with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00D9FF] via-[#0099CC] to-[#006B8F]">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-black rounded-full blur-3xl"></div>
            </div>
          </div>

          {/* Glass Effect Overlay */}
          <div className="absolute inset-0 backdrop-blur-sm bg-white/5"></div>

          {/* Card Content */}
          <div className="relative h-full p-6 flex flex-col justify-between">
            {/* Card Header */}
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-white/70 mb-1">Premium Card</p>
                <p className="text-sm text-white font-medium">FinanceAI Pro</p>
              </div>
              <div className="flex items-center gap-2">
                <motion.button
                  className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowCardNumber(!showCardNumber)}
                >
                  {showCardNumber ? (
                    <EyeOff className="w-4 h-4 text-white" />
                  ) : (
                    <Eye className="w-4 h-4 text-white" />
                  )}
                </motion.button>
                <motion.button
                  className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <MoreVertical className="w-4 h-4 text-white" />
                </motion.button>
              </div>
            </div>

            {/* Card Number */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                {showCardNumber ? (
                  <p className="text-lg text-white font-mono tracking-wider">
                    4532 8901 2345 6789
                  </p>
                ) : (
                  <div className="flex items-center gap-2">
                    <span className="text-lg text-white">••••</span>
                    <span className="text-lg text-white">••••</span>
                    <span className="text-lg text-white">••••</span>
                    <span className="text-lg text-white font-mono">6789</span>
                  </div>
                )}
                <motion.button
                  className="w-6 h-6 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Copy className="w-3 h-3 text-white" />
                </motion.button>
              </div>

              {/* Card Footer */}
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-xs text-white/70 mb-1">Cardholder</p>
                  <p className="text-sm text-white font-medium">JOHN DOE</p>
                </div>
                <div>
                  <p className="text-xs text-white/70 mb-1">Expires</p>
                  <p className="text-sm text-white font-medium">12/28</p>
                </div>
                <div className="flex gap-1">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm"></div>
                  <div className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-sm -ml-3"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card Balance */}
        <motion.div
          className="mt-6 p-4 rounded-[16px] neumorphic-card"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400 mb-1">Available Balance</p>
              <p className="text-2xl font-bold text-white">$24,563.00</p>
            </div>
            <div className="flex gap-2">
              <motion.button
                className="px-4 py-2 rounded-[12px] glass-panel text-sm text-[#00D9FF] hover:glow-primary transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Deposit
              </motion.button>
              <motion.button
                className="px-4 py-2 rounded-[12px] glass-panel text-sm text-white hover:glow-primary transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Withdraw
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
