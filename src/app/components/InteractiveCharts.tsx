import { motion } from "motion/react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

const spendingData = [
  { month: "Jan", spending: 4000, income: 6000 },
  { month: "Feb", spending: 3000, income: 5500 },
  { month: "Mar", spending: 5000, income: 7000 },
  { month: "Apr", spending: 4500, income: 6500 },
  { month: "May", spending: 3500, income: 8000 },
  { month: "Jun", spending: 6000, income: 9000 },
];

const monthlyComparison = [
  { category: "Food", amount: 2400 },
  { category: "Transport", amount: 1398 },
  { category: "Shopping", amount: 3800 },
  { category: "Bills", amount: 2800 },
  { category: "Entertainment", amount: 1800 },
];

const expenseCategories = [
  { name: "Food & Dining", value: 30, color: "#00D9FF" },
  { name: "Shopping", value: 25, color: "#10B981" },
  { name: "Transport", value: 15, color: "#A855F7" },
  { name: "Bills", value: 20, color: "#EF4444" },
  { name: "Others", value: 10, color: "#F59E0B" },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-panel rounded-[12px] p-3 border border-white/20">
        <p className="text-sm text-white font-medium mb-1">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-xs" style={{ color: entry.color }}>
            {entry.name}: ${entry.value.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export function InteractiveCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Spending Over Time */}
      <motion.div
        className="glass-panel rounded-[20px] p-6"
        style={{ minHeight: '350px' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-1">Spending Over Time</h3>
          <p className="text-sm text-gray-400">Last 6 months comparison</p>
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={spendingData}>
            <defs>
              <linearGradient id="colorSpending" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#EF4444" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="month" stroke="#6B7280" />
            <YAxis stroke="#6B7280" />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="spending"
              stroke="#EF4444"
              strokeWidth={2}
              fill="url(#colorSpending)"
            />
            <Area
              type="monotone"
              dataKey="income"
              stroke="#10B981"
              strokeWidth={2}
              fill="url(#colorIncome)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Monthly Comparison */}
      <motion.div
        className="glass-panel rounded-[20px] p-6"
        style={{ minHeight: '350px' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-1">Category Breakdown</h3>
          <p className="text-sm text-gray-400">Current month expenses</p>
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={monthlyComparison}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="category" stroke="#6B7280" />
            <YAxis stroke="#6B7280" />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="amount" fill="#00D9FF" radius={[8, 8, 0, 0]}>
              {monthlyComparison.map((entry, index) => (
                <Cell
                  key={`bar-cell-${index}`}
                  fill={expenseCategories[index]?.color || "#00D9FF"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Expense Categories Pie Chart */}
      <motion.div
        className="glass-panel rounded-[20px] p-6 lg:col-span-2"
        style={{ minHeight: '400px' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-1">Expense Distribution</h3>
          <p className="text-sm text-gray-400">Percentage breakdown by category</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <ResponsiveContainer width="100%" height={300} className="max-w-md">
            <PieChart>
              <Pie
                data={expenseCategories}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={120}
                paddingAngle={5}
                dataKey="value"
              >
                {expenseCategories.map((entry, index) => (
                  <Cell key={`pie-cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
          
          <div className="flex-1 space-y-3">
            {expenseCategories.map((category, index) => (
              <motion.div
                key={`category-${index}-${category.name}`}
                className="flex items-center justify-between p-3 rounded-[12px] neumorphic-card"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ background: category.color, boxShadow: `0 0 10px ${category.color}60` }}
                  />
                  <span className="text-sm text-white">{category.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-400">{category.value}%</span>
                  <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: category.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${category.value}%` }}
                      transition={{ duration: 1, delay: 1 + index * 0.1 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
