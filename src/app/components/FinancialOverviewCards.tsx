import { motion } from "motion/react";
import { TrendingUp, TrendingDown, Wallet, DollarSign, PiggyBank, Target } from "lucide-react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const sparklineData = [
  { value: 30 },
  { value: 40 },
  { value: 35 },
  { value: 50 },
  { value: 49 },
  { value: 60 },
  { value: 70 },
  { value: 65 },
  { value: 75 },
  { value: 80 },
];

const cards = [
  {
    title: "Total Balance",
    amount: "$124,563.00",
    change: "+12.5%",
    isPositive: true,
    icon: Wallet,
    gradient: "gradient-primary",
    glow: "glow-primary",
    color: "#00D9FF",
    data: sparklineData,
  },
  {
    title: "Income",
    amount: "$45,231.89",
    change: "+20.1%",
    isPositive: true,
    icon: DollarSign,
    gradient: "gradient-success",
    glow: "glow-success",
    color: "#10B981",
    data: sparklineData.map(d => ({ value: d.value + 10 })),
  },
  {
    title: "Expenses",
    amount: "$12,426.35",
    change: "-8.3%",
    isPositive: false,
    icon: TrendingDown,
    gradient: "bg-gradient-to-br from-red-500 to-red-700",
    glow: "glow-danger",
    color: "#EF4444",
    data: sparklineData.map(d => ({ value: d.value - 10 })),
  },
  {
    title: "Savings",
    amount: "$32,806.65",
    change: "+18.2%",
    isPositive: true,
    icon: PiggyBank,
    gradient: "gradient-purple",
    glow: "glow-purple",
    color: "#A855F7",
    data: sparklineData.map(d => ({ value: d.value + 5 })),
  },
];

export function FinancialOverviewCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          className="glass-panel rounded-[20px] p-6 hover:glow-primary transition-all duration-300 cursor-pointer group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -4 }}
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm text-gray-400 mb-2">{card.title}</p>
              <h3 className="text-2xl font-bold text-white mb-1">{card.amount}</h3>
              <div className="flex items-center gap-1">
                {card.isPositive ? (
                  <TrendingUp className="w-4 h-4 text-[#10B981]" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-[#EF4444]" />
                )}
                <span
                  className={`text-sm ${
                    card.isPositive ? "text-[#10B981]" : "text-[#EF4444]"
                  }`}
                >
                  {card.change}
                </span>
                <span className="text-xs text-gray-500 ml-1">vs last month</span>
              </div>
            </div>
            <div className={`w-12 h-12 rounded-[14px] ${card.gradient} ${card.glow} flex items-center justify-center`}>
              <card.icon className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Sparkline */}
          <div className="h-16 -mx-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={card.data}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke={card.color}
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
