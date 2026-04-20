import { motion } from "motion/react";
import { Brain, TrendingUp, AlertCircle, Target, Sparkles } from "lucide-react";

const insights = [
  {
    icon: AlertCircle,
    title: "Spending Alert",
    message: "You are spending 20% more on food this month",
    type: "warning",
    color: "#EF4444",
  },
  {
    icon: Target,
    title: "Savings Goal",
    message: "Your savings goal will be reached in 3 months",
    type: "success",
    color: "#10B981",
  },
  {
    icon: TrendingUp,
    title: "Investment Opportunity",
    message: "Tech stocks are trending up. Consider diversifying",
    type: "info",
    color: "#00D9FF",
  },
  {
    icon: Sparkles,
    title: "Smart Prediction",
    message: "Expected income increase of 15% next quarter",
    type: "success",
    color: "#A855F7",
  },
];

export function AIInsights() {
  return (
    <motion.div
      className="glass-panel rounded-[20px] p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-[14px] gradient-purple glow-purple flex items-center justify-center">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">AI-Powered Insights</h3>
            <p className="text-sm text-gray-400">Smart financial analysis</p>
          </div>
        </div>
        <motion.button
          className="px-4 py-2 rounded-[12px] glass-panel text-sm text-[#00D9FF] hover:glow-primary transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View All
        </motion.button>
      </div>

      <div className="space-y-4">
        {insights.map((insight, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-4 p-4 rounded-[16px] neumorphic-card hover:glass-panel transition-all duration-300 cursor-pointer group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            whileHover={{ x: 4 }}
          >
            <div
              className="w-10 h-10 rounded-[12px] flex items-center justify-center flex-shrink-0"
              style={{
                background: `linear-gradient(135deg, ${insight.color}20, ${insight.color}10)`,
                border: `1px solid ${insight.color}30`,
              }}
            >
              <insight.icon className="w-5 h-5" style={{ color: insight.color }} />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-white mb-1">{insight.title}</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{insight.message}</p>
            </div>
            <motion.div
              className="w-2 h-2 rounded-full"
              style={{ background: insight.color }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            />
          </motion.div>
        ))}
      </div>

      {/* AI Assistant Visual */}
      <motion.div
        className="mt-6 p-4 rounded-[16px] glass-panel border border-[#A855F7]/30"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-12 h-12 rounded-full gradient-purple glow-purple flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <motion.div
              className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#10B981] border-2 border-[#0B0F1A]"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <div className="flex-1">
            <p className="text-sm text-white font-medium">AI Assistant Active</p>
            <p className="text-xs text-gray-400">Analyzing your spending patterns...</p>
          </div>
          <motion.div
            className="flex gap-1"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D9FF]"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D9FF]"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D9FF]"></span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
