import React from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export const SectionTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h2 className={cn("text-xl font-medium tracking-tight mb-4", className)}>
    {children}
  </h2>
);

export const SubTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("text-sm text-muted-foreground mb-6", className)}>
    {children}
  </div>
);

const metricCardVariants = cva(
  "glass-card rounded-xl p-4 flex flex-col gap-1 animate-fade-in",
  {
    variants: {
      variant: {
        default: "border-muted",
        profit: "border-l-4 border-l-[#16a249]",
        loss: "border-l-4 border-l-[hsl(var(--loss))]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export const MetricCard = ({
  label,
  value,
  change,
  variant = "default",
  className,
}: {
  label: string;
  value: string | number;
  change?: { value: number; isPositive: boolean };
  variant?: "default" | "profit" | "loss";
  className?: string;
}) => {
  return (
    <div className={cn(metricCardVariants({ variant }), className)}>
      <p className="text-xs font-medium text-muted-foreground">{label}</p>
      <p className="text-2xl font-semibold">{value}</p>
      {change && (
        <p
          className={cn(
            "text-xs",
            change.isPositive ? "text-[#16a249]" : "loss-text"
          )}
        >
          {change.isPositive ? "+" : ""}
          {change.value}%
        </p>
      )}
    </div>
  );
};

export const EmptyState = ({
  title,
  description,
  action,
}: {
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}) => (
  <div className="flex flex-col items-center justify-center py-12 px-4 text-center animate-fade-in">
    <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-6">
      <span className="text-2xl">📊</span>
    </div>
    <h3 className="text-lg font-medium mb-2">{title}</h3>
    <p className="text-muted-foreground mb-6 max-w-md">{description}</p>
    {action && (
      <Button onClick={action.onClick} className="animate-scale-in">
        {action.label}
      </Button>
    )}
  </div>
);

export const ProfitLossBadge = ({
  value,
  size = "default",
}: {
  value: number;
  size?: "sm" | "default";
}) => {
  const isProfit = value >= 0;
  const textClass = isProfit ? "text-[#16a249]" : "loss-text";
  const formattedValue = `${isProfit ? "+" : ""}${value.toFixed(2)}%`;

  return (
    <Badge
      variant="outline"
      className={cn(
        "font-medium",
        size === "sm" ? "text-xs px-2 py-0" : "px-2.5 py-0.5",
        isProfit ? "border-[#16a249]" : "border-[hsl(var(--loss))]"
      )}
    >
      <span className={textClass}>{formattedValue}</span>
    </Badge>
  );
};

export const InsightCard = ({
  title,
  description,
  type,
  className,
}: {
  title: string;
  description: string;
  type: "tip" | "warning" | "pattern";
  className?: string;
}) => {
  const icons = {
    tip: "💡",
    warning: "⚠️",
    pattern: "🔄",
  };

  return (
    <Card className={cn("p-4 hover-scale", className)}>
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
          <span>{icons[type]}</span>
        </div>
        <div>
          <h4 className="font-medium mb-1">{title}</h4>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </Card>
  );
};
