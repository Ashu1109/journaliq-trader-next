import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InsightCard } from "./ui-components";

export function AIInsights() {
  const [, setActiveTab] = useState("patterns");

  const insights = {
    patterns: [
      {
        id: 1,
        title: "Morning momentum trading pattern",
        description:
          "You have a 76% win rate when trading momentum in the first hour of market open.",
        type: "pattern",
      },
      {
        id: 2,
        title: "Weekly profit trend",
        description:
          "Your most profitable trades occur on Tuesdays and Wednesdays, with a 23% higher success rate.",
        type: "pattern",
      },
      {
        id: 3,
        title: "Position sizing correlation",
        description:
          "Smaller positions (under 5% of portfolio) have yielded 3.2x better risk-adjusted returns.",
        type: "pattern",
      },
    ],
    recommendations: [
      {
        id: 1,
        title: "Adjust stop loss strategy",
        description:
          "Consider using ATR-based stops rather than fixed percentages based on your recent trades.",
        type: "tip",
      },
      {
        id: 2,
        title: "Reduce tech sector exposure",
        description:
          "Your portfolio has 42% tech exposure, which exceeds your diversification targets by 17%.",
        type: "warning",
      },
      {
        id: 3,
        title: "Optimize trading hours",
        description:
          "Trades placed between 10:30-11:30 AM have shown 31% higher profitability in your history.",
        type: "tip",
      },
    ],
    weaknesses: [
      {
        id: 1,
        title: "Early profit-taking",
        description:
          "You exit profitable trades 40% earlier than optimal based on subsequent price movement.",
        type: "warning",
      },
      {
        id: 2,
        title: "Market condition awareness",
        description:
          "Your strategy underperforms by 28% during high-VIX environments. Consider adjusting approach.",
        type: "warning",
      },
      {
        id: 3,
        title: "Overtrading pattern",
        description:
          "Trade frequency increases 3x after losses, leading to a 52% higher likelihood of consecutive losses.",
        type: "warning",
      },
    ],
  };

  return (
    <Card className="animate-fade-in">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-medium tracking-tight">
          AI Trading Insights
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs
          defaultValue="patterns"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="patterns">Patterns</TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
            <TabsTrigger value="weaknesses">Improvement Areas</TabsTrigger>
          </TabsList>

          <TabsContent value="patterns" className="space-y-4 mt-2">
            {insights.patterns.map((insight) => (
              <InsightCard
                key={insight.id}
                title={insight.title}
                description={insight.description}
                type={insight.type as "tip" | "warning" | "pattern"}
              />
            ))}
          </TabsContent>

          <TabsContent value="recommendations" className="space-y-4 mt-2">
            {insights.recommendations.map((insight) => (
              <InsightCard
                key={insight.id}
                title={insight.title}
                description={insight.description}
                type={insight.type as "tip" | "warning" | "pattern"}
              />
            ))}
          </TabsContent>

          <TabsContent value="weaknesses" className="space-y-4 mt-2">
            {insights.weaknesses.map((insight) => (
              <InsightCard
                key={insight.id}
                title={insight.title}
                description={insight.description}
                type={insight.type as "tip" | "warning" | "pattern"}
              />
            ))}
          </TabsContent>
        </Tabs>

        <div className="flex justify-center mt-6">
          <Button variant="outline">Generate New Insights</Button>
        </div>
      </CardContent>
    </Card>
  );
}
