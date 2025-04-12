import { Button } from "@/components/ui/button";
import DashChart from "./DashChart";
import DashPerformanceTrend from "./DashPerformanceTrend";
import DashRecentTrades from "./DashRecentTrades";
import { InsightCard, SectionTitle, SubTitle } from "./ui-components";

// const recentTrades = [
//   { id: 1, symbol: "AAPL", type: "BUY", amount: "10", price: 182.63, pnl: 3.2 },
//   {
//     id: 2,
//     symbol: "TSLA",
//     type: "SELL",
//     amount: "5",
//     price: 241.17,
//     pnl: -1.8,
//   },
//   { id: 3, symbol: "MSFT", type: "BUY", amount: "7", price: 413.64, pnl: 2.1 },
//   { id: 4, symbol: "AMZN", type: "BUY", amount: "3", price: 178.75, pnl: 4.5 },
// ];

const insights = [
  {
    id: 1,
    title: "Favorable market conditions",
    description:
      "Current volatility suggests favorable conditions for your swing trading strategy.",
    type: "tip",
  },
  {
    id: 2,
    title: "Risk exposure alert",
    description:
      "Your tech sector exposure is 35% above your defined threshold. Consider rebalancing.",
    type: "warning",
  },
  {
    id: 3,
    title: "Pattern detected",
    description:
      "You tend to exit profitable trades too early. Consider adjusting your take profit levels.",
    type: "pattern",
  },
];

export function Dashboard() {
  return (
    <div className="space-y-8">
      <header className="mb-8 animate-slide-in">
        <h1 className="text-3xl font-bold tracking-tight">
          Candle AI Dashboard
        </h1>
        <SubTitle>Your trading performance at a glance</SubTitle>
      </header>
      <DashPerformanceTrend/>
      <section className="animate-fade-in [animation-delay:250ms]">
        <div className="flex items-center justify-between mb-4">
          <SectionTitle>Performance Trend</SectionTitle>
          {/* <TimeStamp /> */}
        </div>
        <DashChart />
      </section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <section className="md:col-span-2 space-y-4 animate-fade-in [animation-delay:300ms]">
          <SectionTitle>Recent Trades</SectionTitle>
          <DashRecentTrades />
          <div className="flex justify-center mt-4">
            <Button variant="outline" className="w-full">
              View All Trades
            </Button>
          </div>
        </section>

        <section className="space-y-4 animate-fade-in [animation-delay:350ms]">
          <SectionTitle>AI Insights</SectionTitle>

          <div className="space-y-3">
            {insights.map((insight) => (
              <InsightCard
                key={insight.id}
                title={insight.title}
                description={insight.description}
                type={insight.type as "tip" | "warning" | "pattern"}
              />
            ))}
          </div>

          <Button variant="outline" className="w-full">
            Get More Insights
          </Button>
        </section>
      </div>
    </div>
  );
}
