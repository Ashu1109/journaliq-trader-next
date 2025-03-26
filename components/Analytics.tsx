import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { SubTitle } from "./ui-components";

// Sample data for analytics
const performanceData = [
  { month: "Jan", profit: 4000, loss: 1500 },
  { month: "Feb", profit: 3000, loss: 3500 },
  { month: "Mar", profit: 5000, loss: 2000 },
  { month: "Apr", profit: 7000, loss: 1000 },
  { month: "May", profit: 4500, loss: 2500 },
  { month: "Jun", profit: 6000, loss: 1200 },
];

const winLossData = [
  { name: "Winning Trades", value: 68, color: "#16a249" },
  { name: "Losing Trades", value: 32, color: "#DF2026" },
];

const strategyData = [
  { name: "Momentum", win: 35, loss: 12 },
  { name: "Swing", win: 22, loss: 8 },
  { name: "Breakout", win: 18, loss: 15 },
  { name: "Reversal", win: 12, loss: 10 },
  { name: "Scalping", win: 8, loss: 5 },
];

const timeData = [
  { time: "9:30", profit: 2800 },
  { time: "10:30", profit: 3200 },
  { time: "11:30", profit: 1800 },
  { time: "12:30", profit: 1200 },
  { time: "13:30", profit: 1600 },
  { time: "14:30", profit: 2200 },
  { time: "15:30", profit: 3600 },
];

export function Analytics() {
  const [timeRange, setTimeRange] = useState("3M");

  return (
    <div className="space-y-8">
      <header className="animate-slide-in">
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <SubTitle>Analyze your trading performance in depth</SubTitle>
      </header>

      <div className="flex justify-end mb-4 animate-fade-in">
        <div className="flex items-center gap-2">
          {["1M", "3M", "6M", "YTD", "1Y", "All"].map((range) => (
            <Button
              key={range}
              variant={timeRange === range ? "default" : "outline"}
              size="sm"
              onClick={() => setTimeRange(range)}
            >
              {range}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="animate-fade-in">
          <CardHeader className="pb-2">
            <CardTitle>Profit/Loss by Month</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={performanceData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="profit"
                    name="Profit"
                    fill="#16a249"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    dataKey="loss"
                    name="Loss"
                    fill="#DF2026"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="animate-fade-in [animation-delay:100ms]">
          <CardHeader className="pb-2">
            <CardTitle>Win/#DF2026 Ratio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={winLossData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
                    fill="#8884d8"
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, percent }) =>
                      `${name} ${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {winLossData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="animate-fade-in [animation-delay:150ms]">
          <CardHeader className="pb-2">
            <CardTitle>Strategy Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={strategyData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  layout="vertical"
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    horizontal={true}
                    vertical={false}
                  />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="win"
                    name="Wins"
                    fill="#16a249"
                    radius={[0, 4, 4, 0]}
                  />
                  <Bar
                    dataKey="loss"
                    name="Losses"
                    fill="#DF2026"
                    radius={[0, 4, 4, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="animate-fade-in [animation-delay:200ms]">
          <CardHeader className="pb-2">
            <CardTitle>Profit by Time of Day</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={timeData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="profit"
                    stroke="#007fff"
                    strokeWidth={2}
                    dot={{ strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, strokeWidth: 0 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="animate-fade-in [animation-delay:250ms]">
        <CardHeader className="pb-2">
          <CardTitle>Trade Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="metrics">
            <TabsList className="grid w-full grid-cols-4 mb-6">
              <TabsTrigger value="metrics">Key Metrics</TabsTrigger>
              <TabsTrigger value="patterns">Trading Patterns</TabsTrigger>
              <TabsTrigger value="duration">Holding Periods</TabsTrigger>
              <TabsTrigger value="symbols">Symbol Performance</TabsTrigger>
            </TabsList>

            <TabsContent value="metrics" className="space-y-4 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <MetricBox
                  title="Average Profit"
                  value="$324.58"
                  subtitle="per winning trade"
                  isPositive={true}
                />
                <MetricBox
                  title="Average Loss"
                  value="$156.23"
                  subtitle="per losing trade"
                  isPositive={false}
                />
                <MetricBox
                  title="Profit Factor"
                  value="2.08"
                  subtitle="ratio of gross profit to gross loss"
                  isPositive={true}
                />
                <MetricBox
                  title="Expectancy"
                  value="$174.22"
                  subtitle="expected profit per trade"
                  isPositive={true}
                />
                <MetricBox
                  title="Recovery Factor"
                  value="3.2"
                  subtitle="net profit relative to max drawdown"
                  isPositive={true}
                />
                <MetricBox
                  title="Sharpe Ratio"
                  value="1.68"
                  subtitle="risk-adjusted performance"
                  isPositive={true}
                />
              </div>
            </TabsContent>

            <TabsContent value="patterns">
              <div className="h-96 flex items-center justify-center text-muted-foreground">
                Select a time range to view detailed pattern analysis
              </div>
            </TabsContent>

            <TabsContent value="duration">
              <div className="h-96 flex items-center justify-center text-muted-foreground">
                Select a time range to view holding period analysis
              </div>
            </TabsContent>

            <TabsContent value="symbols">
              <div className="h-96 flex items-center justify-center text-muted-foreground">
                Select a time range to view symbol performance
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}

function MetricBox({
  title,
  value,
  subtitle,
  isPositive,
}: {
  title: string;
  value: string;
  subtitle: string;
  isPositive: boolean;
}) {
  return (
    <div className="border rounded-lg p-4">
      <h3 className="text-sm font-medium text-muted-foreground mb-1">
        {title}
      </h3>
      <p
        className={cn(
          "text-2xl font-semibold",
          isPositive ? "text-[#16a249]" : "text-[#DF2026]"
        )}
      >
        {value}
      </p>
      <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
    </div>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
