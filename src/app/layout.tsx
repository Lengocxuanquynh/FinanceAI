import type { Metadata } from "next";
import "@/styles/index.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://financeai.example.com"),
  title: {
    default: "FinanceAI - Premium Finance Dashboard",
    template: "%s | FinanceAI",
  },
  description:
    "Track spending, crypto, stocks, and optimize personal finance with AI-powered insights.",
  openGraph: {
    title: "FinanceAI - Premium Finance Dashboard",
    description:
      "Track spending, crypto, stocks, and optimize personal finance with AI-powered insights.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
