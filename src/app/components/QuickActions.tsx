import { motion } from "motion/react";
import { Send, UserPlus, Plus, ArrowDownToLine, Repeat, QrCode } from "lucide-react";

const actions = [
  {
    icon: Send,
    label: "Send Money",
    description: "Transfer funds",
    gradient: "gradient-primary",
    glow: "glow-primary",
  },
  {
    icon: UserPlus,
    label: "Request",
    description: "Request payment",
    gradient: "gradient-success",
    glow: "glow-success",
  },
  {
    icon: Plus,
    label: "Add Funds",
    description: "Deposit money",
    gradient: "gradient-purple",
    glow: "glow-purple",
  },
  {
    icon: Repeat,
    label: "Exchange",
    description: "Currency swap",
    gradient: "bg-gradient-to-br from-orange-500 to-orange-700",
    glow: "shadow-orange-500/30",
  },
  {
    icon: QrCode,
    label: "QR Pay",
    description: "Scan to pay",
    gradient: "bg-gradient-to-br from-pink-500 to-pink-700",
    glow: "shadow-pink-500/30",
  },
  {
    icon: ArrowDownToLine,
    label: "Withdraw",
    description: "Cash out",
    gradient: "bg-gradient-to-br from-indigo-500 to-indigo-700",
    glow: "shadow-indigo-500/30",
  },
];

export function QuickActions() {
  return (
    <motion.div
      className="glass-panel rounded-[20px] p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white mb-1">Quick Actions</h3>
        <p className="text-sm text-gray-400">Fast access to common tasks</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {actions.map((action, index) => (
          <motion.button
            key={action.label}
            className="group"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex flex-col items-center gap-3 p-4 rounded-[16px] neumorphic-card hover:glass-panel transition-all duration-300">
              <div
                className={`w-14 h-14 rounded-[14px] ${action.gradient} ${action.glow} flex items-center justify-center transition-all duration-300 group-hover:shadow-2xl`}
              >
                <action.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-white mb-0.5">{action.label}</p>
                <p className="text-xs text-gray-400">{action.description}</p>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
