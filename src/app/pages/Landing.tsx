"use client";

import { motion } from "motion/react";
import {
  Sparkles,
  TrendingUp,
  Brain,
  Wallet,
  BarChart3,
  Shield,
  Zap,
  ArrowRight,
  Check,
  Star,
  Twitter,
  Linkedin,
  Github,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { AreaChart, Area, ResponsiveContainer, LineChart, Line } from "recharts";

// Mock data for charts
const sparklineData = Array.from({ length: 20 }, (_, i) => ({
  value: Math.sin(i * 0.5) * 30 + 50 + Math.random() * 10,
}));

const cryptoData = [
  { name: "BTC", price: "$64,235", change: "+5.2%", positive: true },
  { name: "ETH", price: "$3,421", change: "+3.8%", positive: true },
  { name: "AAPL", price: "$178.45", change: "-1.2%", positive: false },
  { name: "TSLA", price: "$245.67", change: "+7.4%", positive: true },
];

const features = [
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Get personalized predictions and smart recommendations based on your spending patterns.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Track expenses, investments, and budgets with beautiful real-time visualizations.",
  },
  {
    icon: TrendingUp,
    title: "Crypto & Stock Monitoring",
    description: "Monitor your portfolio with live price updates and market trends in one place.",
  },
  {
    icon: Wallet,
    title: "Smart Budgeting",
    description: "AI-driven budget suggestions that adapt to your lifestyle and financial goals.",
  },
  {
    icon: Shield,
    title: "Bank-Level Security",
    description: "Military-grade encryption and multi-factor authentication to protect your data.",
  },
  {
    icon: Zap,
    title: "Instant Sync",
    description: "Real-time updates across all your devices with seamless cloud synchronization.",
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Designer",
    content: "This is hands down the best finance app I've used. The AI insights actually helped me save $800 last month!",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Entrepreneur",
    content: "The interface is stunning and the features are powerful. It's like having a financial advisor in my pocket.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Software Engineer",
    content: "Finally, a finance app that doesn't feel overwhelming. Clean, intuitive, and incredibly smart.",
    rating: 5,
  },
];

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started",
    features: [
      "Up to 3 connected accounts",
      "Basic expense tracking",
      "Monthly reports",
      "Mobile app access",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$12",
    period: "per month",
    description: "For power users and professionals",
    features: [
      "Unlimited connected accounts",
      "AI-powered insights & predictions",
      "Real-time crypto & stock tracking",
      "Advanced analytics & reports",
      "Priority customer support",
      "Custom budget categories",
    ],
    highlighted: true,
  },
  {
    name: "Business",
    price: "$29",
    period: "per month",
    description: "For teams and businesses",
    features: [
      "Everything in Pro",
      "Team collaboration tools",
      "Advanced API access",
      "Dedicated account manager",
      "Custom integrations",
      "White-label options",
    ],
    highlighted: false,
  },
];

const companies = [
  { name: "Stripe", width: "w-24" },
  { name: "Visa", width: "w-20" },
  { name: "PayPal", width: "w-24" },
  { name: "Mastercard", width: "w-28" },
  { name: "Square", width: "w-22" },
];

export function Landing({ onNavigateToDashboard }: { onNavigateToDashboard?: () => void }) {
  const handleNavigate = () => {
    if (onNavigateToDashboard) {
      onNavigateToDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white overflow-x-hidden">
      {/* Animated background gradient */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 w-1/2 h-1/2 bg-emerald-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 border-b border-white/10 bg-[#0B0F1A]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold">FinanceAI</span>
            </motion.div>

            <motion.div
              className="hidden md:flex items-center gap-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
                Pricing
              </a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
                Testimonials
              </a>
              <Link
                href="/auth/signin"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/dashboard"
                className="px-6 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
              >
                Get Started
              </Link>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">Powered by Advanced AI</span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Smart Finance.{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                  Powered by AI.
                </span>
              </h1>

              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Track, analyze, and grow your money with next-gen insights. Experience the future of
                personal finance management.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/dashboard">
                  <motion.button
                    className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 font-semibold overflow-hidden shadow-2xl shadow-blue-500/30"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="relative flex items-center gap-2">
                      Get Started
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.button>
                </Link>

                <Link href="/dashboard">
                  <motion.button
                    className="px-8 py-4 rounded-2xl border border-white/20 font-semibold backdrop-blur-sm hover:bg-white/5 transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Live Demo
                  </motion.button>
                </Link>
              </div>

              <motion.div
                className="mt-12 flex items-center gap-6 text-sm text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-400" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-400" />
                  <span>Free forever plan</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Dashboard Preview Mockup */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-3xl" />

                {/* Main dashboard card */}
                <div className="relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 shadow-2xl">
                  {/* Mini header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-400">Total Balance</p>
                        <h3 className="text-3xl font-bold mt-1">$124,543.67</h3>
                      </div>
                      <div className="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-400 text-sm">
                        +12.5%
                      </div>
                    </div>

                    {/* Mini chart */}
                    <div className="h-24 -mx-2">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={sparklineData}>
                          <defs>
                            <linearGradient id="heroGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.3} />
                              <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
                            </linearGradient>
                          </defs>
                          <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#3b82f6"
                            strokeWidth={2}
                            fill="url(#heroGradient)"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>

                    {/* Mini cards */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <p className="text-xs text-gray-400">Income</p>
                        <p className="text-lg font-bold mt-1">$8,420</p>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <p className="text-xs text-gray-400">Expenses</p>
                        <p className="text-lg font-bold mt-1">$3,240</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating cards */}
                <motion.div
                  className="absolute -right-8 top-12 w-48 p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">AI Insight</p>
                      <p className="text-sm font-semibold">Save $340</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -left-8 bottom-12 w-44 p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl"
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-400">BTC</p>
                      <p className="text-sm font-semibold">$64,235</p>
                    </div>
                    <span className="text-xs text-emerald-400">+5.2%</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="relative z-10 py-12 px-4 sm:px-6 lg:px-8 border-y border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.p
            className="text-center text-gray-400 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Trusted by 100,000+ users worldwide
          </motion.p>

          <div className="flex flex-wrap items-center justify-center gap-12 opacity-50">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                className={`${company.width} h-8 rounded-lg bg-white/10`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything you need to{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                master your money
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Powerful features designed to give you complete control over your financial future.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300" />

                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7 text-blue-400" />
                  </div>

                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Insights Highlight */}
      <section className="relative z-10 py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <Brain className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-400">AI-Powered Intelligence</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Predictions that{" "}
                <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  actually work
                </span>
              </h2>

              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Our AI analyzes your spending patterns, income trends, and financial goals to provide
                personalized insights that help you make smarter decisions.
              </p>

              <ul className="space-y-4">
                {[
                  "Smart spending predictions based on your habits",
                  "Automated savings recommendations",
                  "Bill payment reminders and optimization",
                  "Investment opportunity alerts",
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-emerald-400" />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <Brain className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">AI Prediction</p>
                    <p className="font-semibold">Next Month Forecast</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <h3 className="text-3xl font-bold">$4,230</h3>
                    <span className="text-sm text-emerald-400">-15% vs last month</span>
                  </div>
                  <p className="text-sm text-gray-400">Predicted spending for next month</p>
                </div>

                {/* Chart */}
                <div className="h-48 mb-6">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={sparklineData}>
                      <defs>
                        <linearGradient id="aiGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.5} />
                          <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0.5} />
                        </linearGradient>
                      </defs>
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="url(#aiGradient)"
                        strokeWidth={3}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                {/* Insights */}
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                      <p className="text-sm font-semibold text-emerald-400">Savings Opportunity</p>
                    </div>
                    <p className="text-sm text-gray-300">
                      You could save $340 by reducing dining expenses by 20%
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <div className="flex items-center gap-2 mb-1">
                      <Sparkles className="w-4 h-4 text-blue-400" />
                      <p className="text-sm font-semibold text-blue-400">Smart Tip</p>
                    </div>
                    <p className="text-sm text-gray-300">
                      Your utility bills are 15% higher than average. Consider switching providers.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Crypto & Stock Section */}
      <section className="relative z-10 py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Track your{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                entire portfolio
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Real-time cryptocurrency and stock market tracking with beautiful visualizations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cryptoData.map((asset, index) => (
              <motion.div
                key={asset.name}
                className="group relative p-6 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <span className="text-lg font-bold">{asset.name}</span>
                  </div>
                  <span
                    className={`text-sm font-semibold ${
                      asset.positive ? "text-emerald-400" : "text-red-400"
                    }`}
                  >
                    {asset.change}
                  </span>
                </div>

                <p className="text-2xl font-bold mb-4">{asset.price}</p>

                {/* Mini chart */}
                <div className="h-16 -mx-2">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={sparklineData.slice(0, 15)}>
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke={asset.positive ? "#10b981" : "#ef4444"}
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative z-10 py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Loved by{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                thousands
              </span>
            </h2>
            <p className="text-xl text-gray-400">See what our users have to say about FinanceAI</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{testimonial.content}</p>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600" />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative z-10 py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Simple,{" "}
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                transparent pricing
              </span>
            </h2>
            <p className="text-xl text-gray-400">Choose the plan that's right for you</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`relative p-8 rounded-3xl backdrop-blur-sm border transition-all ${
                  plan.highlighted
                    ? "bg-gradient-to-b from-blue-500/10 to-purple-500/10 border-blue-500/50 shadow-2xl shadow-blue-500/20 scale-105"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-gray-400">/ {plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-emerald-400" />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/dashboard">
                  <motion.button
                    className={`w-full py-4 rounded-2xl font-semibold transition-all ${
                      plan.highlighted
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg shadow-blue-500/30"
                        : "bg-white/10 hover:bg-white/20 border border-white/20"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="relative p-16 rounded-3xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-emerald-500/10 backdrop-blur-xl border border-white/10 overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            {/* Glow effects */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />

            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Take control of your{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                  financial future today
                </span>
              </h2>

              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Join thousands of users who are already managing their finances smarter with AI-powered
                insights.
              </p>

              <Link href="/dashboard">
                <motion.button
                  className="group relative px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 font-bold text-lg overflow-hidden shadow-2xl shadow-blue-500/30"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative flex items-center gap-2">
                    Get Started Free
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </Link>

              <p className="text-sm text-gray-400 mt-4">No credit card required • Free forever plan</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-[#0B0F1A]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-xl font-bold">FinanceAI</span>
              </div>
              <p className="text-sm text-gray-400">
                Smart finance management powered by artificial intelligence.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <Link href="/dashboard" className="hover:text-white transition-colors">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              © 2026 FinanceAI. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}