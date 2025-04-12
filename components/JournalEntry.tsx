"use client";
import { addJournal } from "@/actions/addJournal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useJournalContext } from "@/context/ContextProvider";
import { JournalEntrySchema } from "@/schemas/index";
import { Calendar } from "lucide-react";
import { ChangeEventHandler, useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { SubTitle } from "./ui-components";

export function JournalEntry() {
  const [entryType, setEntryType] = useState("new");

  return (
    <div className="space-y-4">
      <header className="animate-slide-in">
        <h1 className="text-3xl font-bold tracking-tight">Trade Journal</h1>
        <SubTitle>Record and review your trading activity</SubTitle>
      </header>

      <div className="flex justify-end mb-2 animate-fade-in">
        <div className="flex items-center gap-3">
          <Button
            variant={entryType === "new" ? "default" : "outline"}
            onClick={() => setEntryType("new")}
          >
            New Entry
          </Button>
          <Button
            variant={entryType === "history" ? "default" : "outline"}
            onClick={() => setEntryType("history")}
          >
            History
          </Button>
        </div>
      </div>

      {entryType === "new" ? <NewEntryForm /> : <JournalHistory />}
    </div>
  );
}
function NewEntryForm() {
  const [formData, setFormData] = useState<z.infer<typeof JournalEntrySchema>>({
    symbol: "",
    type: "buy",
    date: new Date().toISOString().split("T")[0],
    quantity: "",
    price: "",
    takeProfit: "",
    stopLoss: "",
    tradeRationale: "",
    notes: "",
    emotions: [] as string[],
  });

  const [isLoading, setIsLoading] = useState(false);
  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleEmotionClick = (emotion: string) => {
    setFormData((prevData) => {
      if (prevData.emotions.includes(emotion)) {
        return {
          ...prevData,
          emotions: prevData.emotions.filter((e) => e !== emotion),
        };
      } else {
        return {
          ...prevData,
          emotions: [...prevData.emotions, emotion],
        };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      console.log(new Date(formData.date));
      if (
        !formData.date ||
        !formData.symbol ||
        !formData.type ||
        !formData.tradeRationale ||
        !formData.notes ||
        !formData.quantity ||
        !formData.price ||
        !formData.takeProfit ||
        !formData.stopLoss
      ) {
        toast.error("Please fill in all fields.");
        return;
      }

      await addJournal(formData);
      setFormData({
        symbol: "",
        type: "buy",
        date: new Date().toISOString().split("T")[0],
        quantity: "",
        price: "",
        takeProfit: "",
        stopLoss: "",
        tradeRationale: "",
        notes: "",
        emotions: [] as string[],
      });
      setIsLoading(false);
    } catch (error) {
      console.log("Error adding journal entry:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="animate-fade-in">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="symbol">Symbol</Label>
                <Input
                  id="symbol"
                  placeholder="e.g. AAPL"
                  value={formData.symbol}
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="type">Trade Type</Label>
                  <Select
                    onValueChange={(value) =>
                      setFormData((prev) => ({
                        ...prev,
                        type: value as "buy" | "sell",
                      }))
                    }
                  >
                    <SelectTrigger value={formData.type}>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="buy">Buy</SelectItem>
                      <SelectItem value="sell">Sell</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="date">Date</Label>
                  <div className="relative">
                    <Input
                      id="date"
                      type="date"
                      value={String(formData.date)}
                      onChange={handleChange}
                    />
                    <div className="absolute right-3 top-2.5 pointer-events-none text-muted-foreground">
                      <Calendar size={16} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input
                    id="quantity"
                    type="number"
                    placeholder="0"
                    value={formData.quantity}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <Label htmlFor="price">Price</Label>
                  <Input
                    id="price"
                    type="number"
                    placeholder="0.00"
                    value={formData.price}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="takeProfit">Take Profit/Loss</Label>
                  <Input
                    id="takeProfit"
                    type="number"
                    placeholder="0.00"
                    value={formData.takeProfit}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <Label htmlFor="stopLoss">Stop Loss</Label>
                  <Input
                    id="stopLoss"
                    type="number"
                    placeholder="0.00"
                    value={formData.stopLoss}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="tradeRationale">Trade Reason</Label>
                <Input
                  onChange={(value) =>
                    setFormData((prev) => ({ ...prev, tradeRationale: value.target.value }))
                  }
                />
              </div>

              <div>
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  placeholder="Enter your thoughts about this trade..."
                  className="min-h-[180px] resize-none"
                  value={formData.notes}
                  onChange={handleChange}
                />
              </div>

              <div>
                <Label>Emotions</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {[
                    "Confident",
                    "Nervous",
                    "Excited",
                    "Hesitant",
                    "Calm",
                    "FOMO",
                  ].map((emotion) => (
                    <Button
                      type="button"
                      key={emotion}
                      variant={
                        formData.emotions.includes(emotion)
                          ? "default"
                          : "outline"
                      }
                      size="sm"
                      className="rounded-full"
                      onClick={() => handleEmotionClick(emotion)}
                    >
                      {emotion}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t flex justify-end gap-3">
            <Button disabled={isLoading} variant="outline">
              Cancel
            </Button>
            <Button disabled={isLoading} type="submit">
              Save Entry
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

function JournalHistory() {
  const { journal } = useJournalContext();
  return (
    <div className="space-y-4 animate-fade-in">
      {journal.length > 1 ? (
        journal.map((entry) => (
          <Card key={entry.id} className="hover-scale overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="p-4 md:p-5 flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="font-medium">
                        {entry.symbolName} ({entry.tradeType})
                      </div>
                      {/* <ProfitLossBadge value={entry.pnl} /> */}
                    </div>
                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{entry.date.toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="text-sm text-muted-foreground mb-3">
                    {entry.quantity} shares @ ₹{entry.price.toFixed(2)}
                  </div>

                  <div className="text-sm">{entry.notes}</div>
                </div>

                <div className="md:w-[100px] md:border-l flex md:flex-col md:items-center md:justify-center p-3 gap-2 bg-secondary/50 flex-row">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start"
                  >
                    View
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start"
                  >
                    Edit
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))
      ) : (
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-center">
            No Journal Entries Found
          </h1>
          <SubTitle className="text-center">
            Start recording your trades today!
          </SubTitle>
        </div>
      )}
    </div>
  );
}
