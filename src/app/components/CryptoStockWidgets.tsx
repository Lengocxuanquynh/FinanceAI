import { motion } from "motion/react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const cryptoAssets = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    price: "$64,523.45",
    change: "+5.2%",
    isPositive: true,
    icon: "₿",
    color: "#F7931A",
    data: [
      { value: 50 },
      { value: 52 },
      { value: 48 },
      { value: 55 },
      { value: 60 },
      { value: 58 },
      { value: 65 },
      { value: 70 },
    ],
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    price: "$3,234.12",
    change: "+3.8%",
    isPositive: true,
    icon: "Ξ",
    color: "#627EEA",
    data: [
      { value: 40 },
      { value: 45 },
      { value: 42 },
      { value: 50 },
      { value: 55 },
      { value: 52 },
      { value: 58 },
      { value: 60 },
    ],
  },
  {
    symbol: "SOL",
    name: "Solana",
    price: "$142.67",
    change: "-2.1%",
    isPositive: false,
    icon: "◎",
    color: "#14F195",
    data: [
      { value: 60 },
      { value: 58 },
      { value: 62 },
      { value: 55 },
      { value: 50 },
      { value: 52 },
      { value: 48 },
      { value: 45 },
    ],
  },
  {
    symbol: "ADA",
    name: "Cardano",
    price: "$0.58",
    change: "+1.5%",
    isPositive: true,
    icon: "₳",
    color: "#0033AD",
    data: [
      { value: 35 },
      { value: 38 },
      { value: 40 },
      { value: 42 },
      { value: 45 },
      { value: 43 },
      { value: 48 },
      { value: 50 },
    ],
  },
];

const stockAssets = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    price: "$178.23",
    change: "+2.4%",
    isPositive: true,
    color: "#000000",
    data: [
      { value: 45 },
      { value: 48 },
      { value: 52 },
      { value: 50 },
      { value: 55 },
      { value: 58 },
      { value: 60 },
      { value: 62 },
    ],
  },
  {
    symbol: "TSLA",
    name: "Tesla Inc.",
    price: "$245.67",
    change: "+4.8%",
    isPositive: true,
    color: "#CC0000",
    data: [
      { value: 40 },
      { value: 45 },
      { value: 50 },
      { value: 55 },
      { value: 60 },
      { value: 58 },
      { value: 65 },
      { value: 68 },
    ],
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    price: "$142.34",
    change: "-1.2%",
    isPositive: false,
    color: "#4285F4",
    data: [
      { value: 55 },
      { value: 52 },
      { value: 50 },
      { value: 48 },
      { value: 45 },
      { value: 47 },
      { value: 44 },
      { value: 42 },
    ],
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corp.",
    price: "$412.89",
    change: "+3.1%",
    isPositive: true,
    color: "#00A4EF",
    data: [
      { value: 42 },
      { value: 45 },
      { value: 48 },
      { value: 52 },
      { value: 55 },
      { value: 58 },
      { value: 60 },
      { value: 63 },
    ],
  },
];

interface AssetCardProps {
  asset: typeof cryptoAssets[0] | typeof stockAssets[0];
  index: number;
  isCrypto?: boolean;
}

function AssetCard({ asset, index, isCrypto }: AssetCardProps) {
  return (
    <motion.div
      className="glass-panel rounded-[16px] p-4 hover:glow-primary transition-all duration-300 cursor-pointer group"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          {isCrypto && 'icon' in asset ? (
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
              style={{
                background: `linear-gradient(135deg, ${asset.color}, ${asset.color}80)`,
                boxShadow: `0 4px 12px ${asset.color}40`,
              }}
            >
              {asset.icon}
            </div>
          ) : (
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
              style={{
                background: `linear-gradient(135deg, ${asset.color}, ${asset.color}80)`,
                boxShadow: `0 4px 12px ${asset.color}40`,
              }}
            >
              {asset.symbol.slice(0, 2)}
            </div>
          )}
          <div>
            <p className="text-sm font-semibold text-white">{asset.symbol}</p>
            <p className="text-xs text-gray-400">{asset.name}</p>
          </div>
        </div>
        <div
          className={`px-2 py-1 rounded-[8px] text-xs font-medium ${
            asset.isPositive ? "bg-[#10B981]/20 text-[#10B981]" : "bg-[#EF4444]/20 text-[#EF4444]"
          }`}
        >
          {asset.change}
        </div>
      </div>

      <div className="mb-3">
        <p className="text-xl font-bold text-white">{asset.price}</p>
      </div>

      <div className="h-12 -mx-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={asset.data}>
            <Line
              type="monotone"
              dataKey="value"
              stroke={asset.isPositive ? "#10B981" : "#EF4444"}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export function CryptoStockWidgets() {
  return (
    <div className="space-y-6">
      {/* Crypto Assets */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">Cryptocurrency</h3>
            <p className="text-sm text-gray-400">Your crypto portfolio</p>
          </div>
          <motion.button
            className="px-4 py-2 rounded-[12px] glass-panel text-sm text-[#00D9FF] hover:glow-primary transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All
          </motion.button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cryptoAssets.map((asset, index) => (
            <AssetCard key={asset.symbol} asset={asset} index={index} isCrypto />
          ))}
        </div>
      </motion.div>

      {/* Stock Assets */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">Stocks</h3>
            <p className="text-sm text-gray-400">Your stock portfolio</p>
          </div>
          <motion.button
            className="px-4 py-2 rounded-[12px] glass-panel text-sm text-[#00D9FF] hover:glow-primary transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All
          </motion.button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stockAssets.map((asset, index) => (
            <AssetCard key={asset.symbol} asset={asset} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
