import { Header } from "../components/Header";
import { FinancialOverviewCards } from "../components/FinancialOverviewCards";
import { QuickActions } from "../components/QuickActions";
import { AIInsights } from "../components/AIInsights";
import { InteractiveCharts } from "../components/InteractiveCharts";
import { CryptoStockWidgets } from "../components/CryptoStockWidgets";
import { WalletCard } from "../components/WalletCard";
import { TransactionsTable } from "../components/TransactionsTable";

export function Dashboard() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="p-8 space-y-8">
        {/* Financial Overview */}
        <FinancialOverviewCards />

        {/* Quick Actions */}
        <QuickActions />

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* AI Insights - Takes 1 column */}
          <div className="lg:col-span-1">
            <AIInsights />
          </div>

          {/* Wallet Card - Takes 2 columns */}
          <div className="lg:col-span-2">
            <WalletCard />
          </div>
        </div>

        {/* Interactive Charts */}
        <InteractiveCharts />

        {/* Crypto & Stock Widgets */}
        <CryptoStockWidgets />

        {/* Transactions Table */}
        <TransactionsTable />
      </main>
    </div>
  );
}
