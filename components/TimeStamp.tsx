"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";

const TimeStamp = () => {
  const [timeRange, setTimeRange] = useState("1W");

  return (
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
  );
};

export default TimeStamp;
