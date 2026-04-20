import { motion } from "motion/react";
import { 
  ShoppingBag, 
  Coffee, 
  Car, 
  Home, 
  Smartphone, 
  Plane,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

const transactions = [
  {
    id: 1,
    category: "Shopping",
    merchant: "Apple Store",
    date: "Apr 15, 2026",
    amount: -1299.00,
    status: "completed",
    icon: ShoppingBag,
    color: "#A855F7",
  },
  {
    id: 2,
    category: "Food & Dining",
    merchant: "Starbucks Coffee",
    date: "Apr 15, 2026",
    amount: -12.50,
    status: "completed",
    icon: Coffee,
    color: "#10B981",
  },
  {
    id: 3,
    category: "Transport",
    merchant: "Uber Ride",
    date: "Apr 14, 2026",
    amount: -24.80,
    status: "completed",
    icon: Car,
    color: "#00D9FF",
  },
  {
    id: 4,
    category: "Income",
    merchant: "Salary Deposit",
    date: "Apr 13, 2026",
    amount: 5400.00,
    status: "completed",
    icon: TrendingUp,
    color: "#10B981",
  },
  {
    id: 5,
    category: "Bills",
    merchant: "Electric Company",
    date: "Apr 12, 2026",
    amount: -156.25,
    status: "pending",
    icon: Home,
    color: "#EF4444",
  },
  {
    id: 6,
    category: "Shopping",
    merchant: "Amazon",
    date: "Apr 11, 2026",
    amount: -89.99,
    status: "completed",
    icon: ShoppingBag,
    color: "#A855F7",
  },
  {
    id: 7,
    category: "Subscription",
    merchant: "Netflix",
    date: "Apr 10, 2026",
    amount: -15.99,
    status: "completed",
    icon: Smartphone,
    color: "#EF4444",
  },
  {
    id: 8,
    category: "Travel",
    merchant: "Delta Airlines",
    date: "Apr 9, 2026",
    amount: -456.00,
    status: "pending",
    icon: Plane,
    color: "#00D9FF",
  },
];

const statusColors = {
  completed: { bg: "bg-[#10B981]/20", text: "text-[#10B981]", label: "Completed" },
  pending: { bg: "bg-[#F59E0B]/20", text: "text-[#F59E0B]", label: "Pending" },
  failed: { bg: "bg-[#EF4444]/20", text: "text-[#EF4444]", label: "Failed" },
};

export function TransactionsTable() {
  return (
    <motion.div
      className="glass-panel rounded-[20px] p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-white mb-1">Recent Transactions</h3>
          <p className="text-sm text-gray-400">Your latest financial activity</p>
        </div>
        <motion.button
          className="px-4 py-2 rounded-[12px] glass-panel text-sm text-[#00D9FF] hover:glow-primary transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View All
        </motion.button>
      </div>

      <div className="space-y-3">
        {transactions.map((transaction, index) => (
          <motion.div
            key={transaction.id}
            className="flex items-center justify-between p-4 rounded-[16px] neumorphic-card hover:glass-panel transition-all duration-300 cursor-pointer group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.1 + index * 0.05 }}
            whileHover={{ x: 4 }}
          >
            {/* Left Section */}
            <div className="flex items-center gap-4 flex-1">
              <div
                className="w-12 h-12 rounded-[14px] flex items-center justify-center flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${transaction.color}20, ${transaction.color}10)`,
                  border: `1px solid ${transaction.color}30`,
                }}
              >
                <transaction.icon className="w-5 h-5" style={{ color: transaction.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-sm font-semibold text-white truncate">
                    {transaction.merchant}
                  </p>
                  {transaction.amount > 0 ? (
                    <ArrowDownRight className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                  ) : (
                    <ArrowUpRight className="w-4 h-4 text-[#EF4444] flex-shrink-0" />
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-xs text-gray-400">{transaction.category}</p>
                  <span className="text-gray-600">•</span>
                  <p className="text-xs text-gray-500">{transaction.date}</p>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p
                  className={`text-sm font-semibold ${
                    transaction.amount > 0 ? "text-[#10B981]" : "text-white"
                  }`}
                >
                  {transaction.amount > 0 ? "+" : ""}$
                  {Math.abs(transaction.amount).toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
                <div className="flex justify-end mt-1">
                  <span
                    className={`px-2 py-1 rounded-[6px] text-xs font-medium ${
                      statusColors[transaction.status as keyof typeof statusColors].bg
                    } ${statusColors[transaction.status as keyof typeof statusColors].text}`}
                  >
                    {statusColors[transaction.status as keyof typeof statusColors].label}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Show More Button */}
      <motion.button
        className="w-full mt-4 py-3 rounded-[14px] glass-panel text-sm text-gray-400 hover:text-[#00D9FF] hover:glow-primary transition-all"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        Load More Transactions
      </motion.button>
    </motion.div>
  );
}
