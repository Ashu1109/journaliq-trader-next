import { getJournal } from "@/actions/getJournal";
import { cn } from "@/lib/utils";
import { TrendingDown, TrendingUp } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const DashRecentTrades = async () => {
  const { message: recentTrades } = await getJournal();
  return (
    <div className="space-y-3">
      {recentTrades.map((trade) => (
        <Card key={trade.id} className="hover-scale">
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "w-10 h-10 rounded-md flex items-center justify-center",
                    trade.tradeType === "buy"
                      ? "bg-primary/10"
                      : "bg-destructive/10"
                  )}
                >
                  {trade.tradeType === "buy" ? (
                    <TrendingUp className="text-primary" size={18} />
                  ) : (
                    <TrendingDown className="text-destructive" size={18} />
                  )}
                </div>

                <div>
                  <div className="font-medium">{trade.symbolName}</div>
                  <div className="text-xs text-muted-foreground flex items-center gap-1">
                    <span>{trade.tradeType}</span>
                    <span>•</span>
                    <span>{trade.quantity} shares</span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="font-medium">{trade.takeProfit<0?`-₹${Math.abs(trade.takeProfit)}`:`₹${trade.takeProfit}`}</div>
                {/* <ProfitLossBadge
                  value={(trade.takeProfit/trade.stopLoss)*100}
                  size="sm"
                /> */}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DashRecentTrades;
