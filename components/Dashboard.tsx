"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingDown, TrendingUp } from "lucide-react";
import { useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  InsightCard,
  MetricCard,
  ProfitLossBadge,
  SectionTitle,
  SubTitle,
} from "./ui-components";
import { useJournalContext } from "@/context/ContextProvider";

const performanceData = [
  { date: "Jan", value: 4000, pnl: 2400 },
  { date: "Feb", value: 3000, pnl: -1398 },
  { date: "Mar", value: 2000, pnl: 3800 },
  { date: "Apr", value: 2780, pnl: 3908 },
  { date: "May", value: 1890, pnl: 4800 },
  { date: "Jun", value: 2390, pnl: 3800 },
  { date: "Jul", value: 3490, pnl: 4300 },
];

const recentTrades = [
  { id: 1, symbol: "AAPL", type: "BUY", amount: "10", price: 182.63, pnl: 3.2 },
  {
    id: 2,
    symbol: "TSLA",
    type: "SELL",
    amount: "5",
    price: 241.17,
    pnl: -1.8,
  },
  { id: 3, symbol: "MSFT", type: "BUY", amount: "7", price: 413.64, pnl: 2.1 },
  { id: 4, symbol: "AMZN", type: "BUY", amount: "3", price: 178.75, pnl: 4.5 },
];

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
  const [timeRange, setTimeRange] = useState("1W");
  const { userJournalSummary } = useJournalContext();
  const totalPnL = userJournalSummary.profit + userJournalSummary.loss || 0;
  const winRate =
    userJournalSummary.noOfProfit > 0 && userJournalSummary.noofJournal > 0
      ? (userJournalSummary.noOfProfit / userJournalSummary.noofJournal) * 100
      : 0;
  const riskRewardRatio =
    userJournalSummary.noOfProfit > 0 && userJournalSummary.noOfLoss > 0
      ? userJournalSummary.noOfProfit / userJournalSummary.noOfLoss
      : 0;
  const riskRewardFormated = `1:${riskRewardRatio.toFixed(2)}`;

  return (
    <div className="space-y-8">
      <header className="mb-8 animate-slide-in">
        <h1 className="text-3xl font-bold tracking-tight">
          Candle AI Dashboard
        </h1>
        <SubTitle>Your trading performance at a glance</SubTitle>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <MetricCard
          label="Total P&L"
          value={`${totalPnL > 0 ? "+" : ""}$${totalPnL.toFixed(2)}`}
          change={{ value: 8.2, isPositive: true }}
          variant="profit"
          className="animate-fade-in"
        />
        <MetricCard
          label="Win Rate"
          value={`${winRate}%`}
          change={{ value: 4.5, isPositive: true }}
          className="animate-fade-in [animation-delay:100ms]"
        />
        <MetricCard
          label="Risk/Reward Ratio"
          value={`${riskRewardFormated}`}
          change={{ value: 0.2, isPositive: true }}
          className="animate-fade-in [animation-delay:200ms]"
        />
      </div>

      <section className="animate-fade-in [animation-delay:250ms]">
        <div className="flex items-center justify-between mb-4">
          <SectionTitle>Performance Trend</SectionTitle>
          <div className="flex items-center gap-2">
            {["1W", "1M", "3M", "YTD", "1Y"].map((range) => (
              <Button
                key={range}
                variant={timeRange === range ? "default" : "outline"}
                size="sm"
                onClick={() => setTimeRange(range)}
                className="text-xs px-3"
              >
                {range}
              </Button>
            ))}
          </div>
        </div>

        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={performanceData}
                  margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
                >
                  <defs>
                    <linearGradient id="colorPnl" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#007fff" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#007fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid vertical={false} stroke="hsl(var(--muted))" />
                  <XAxis dataKey="date" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#eef5fa",
                      borderColor: "#d4e1eb",
                      borderRadius: "var(--radius)",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="pnl"
                    stroke="#007fff"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorPnl)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <section className="md:col-span-2 space-y-4 animate-fade-in [animation-delay:300ms]">
          <SectionTitle>Recent Trades</SectionTitle>

          <div className="space-y-3">
            {recentTrades.map((trade) => (
              <Card key={trade.id} className="hover-scale">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "w-10 h-10 rounded-md flex items-center justify-center",
                          trade.type === "BUY"
                            ? "bg-primary/10"
                            : "bg-destructive/10"
                        )}
                      >
                        {trade.type === "BUY" ? (
                          <TrendingUp className="text-primary" size={18} />
                        ) : (
                          <TrendingDown
                            className="text-destructive"
                            size={18}
                          />
                        )}
                      </div>

                      <div>
                        <div className="font-medium">{trade.symbol}</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1">
                          <span>{trade.type}</span>
                          <span>•</span>
                          <span>{trade.amount} shares</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="font-medium">${trade.price}</div>
                      <ProfitLossBadge value={trade.pnl} size="sm" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

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

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
