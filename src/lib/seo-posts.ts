export type SeoPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  keywords: string[];
};

export const seoSeedPosts: SeoPost[] = [
  {
    slug: "ai-budgeting-for-beginners",
    title: "AI Budgeting For Beginners: 7 Steps To Keep More Cash",
    excerpt:
      "A practical framework to use AI-driven budgeting workflows and reduce overspending in under 30 days.",
    content:
      "This guide explains how to set spending categories, automate budget alerts, and track savings opportunities using intelligent rules.",
    publishedAt: "2026-04-20",
    keywords: ["ai budgeting", "personal finance dashboard", "monthly budget plan"],
  },
  {
    slug: "how-to-track-crypto-and-stocks-in-one-dashboard",
    title: "How To Track Crypto And Stocks In One Dashboard",
    excerpt:
      "Build a single source of truth for your portfolio, from crypto volatility to blue-chip stock allocation.",
    content:
      "Learn position sizing, risk score modeling, and rebalance timing when managing mixed-asset portfolios.",
    publishedAt: "2026-04-20",
    keywords: ["track crypto", "stock dashboard", "portfolio monitoring"],
  },
  {
    slug: "reduce-monthly-expenses-with-spending-signals",
    title: "Reduce Monthly Expenses With Spending Signals",
    excerpt:
      "Turn transaction data into clear action points and cut recurring costs with confidence.",
    content:
      "We cover anomaly detection, subscription audits, and weekly optimization loops to lower monthly burn.",
    publishedAt: "2026-04-20",
    keywords: ["reduce expenses", "spending analysis", "money saving tips"],
  },
];
