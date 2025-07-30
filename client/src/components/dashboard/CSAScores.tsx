import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CSAMetric {
  label: string;
  current: number;
  change: number;
  trend: "up" | "down" | "neutral";
}

const csaMetrics: CSAMetric[] = [
  { label: "Vehicle OOS Rate", current: 12.5, change: -2.1, trend: "down" },
  { label: "Driver OOS Rate", current: 8.3, change: 0.7, trend: "up" },
  { label: "Hazmat OOS Rate", current: 3.2, change: 0.0, trend: "neutral" },
];

export function CSAScores() {
  const getTrendColor = (trend: "up" | "down" | "neutral") => {
    switch (trend) {
      case "up": return "text-error";
      case "down": return "text-success";
      default: return "text-muted-foreground";
    }
  };

  const getTrendIcon = (trend: "up" | "down" | "neutral") => {
    switch (trend) {
      case "up": return TrendingUp;
      case "down": return TrendingDown;
      default: return Minus;
    }
  };

  const formatChange = (change: number) => {
    if (change === 0) return "No change";
    return `${change > 0 ? "+" : ""}${change.toFixed(1)}%`;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          CSA Scores
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          AS OF: {new Date().toLocaleDateString('en-US', { 
            month: 'long', 
            day: 'numeric', 
            year: 'numeric' 
          })}
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {csaMetrics.map((metric, index) => {
          const TrendIcon = getTrendIcon(metric.trend);
          return (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-start">
                <span className="text-sm font-medium">{metric.label}</span>
                <div className="text-right">
                  <span className="text-lg font-bold">{metric.current}%</span>
                  <div className={cn(
                    "flex items-center gap-1 text-xs font-medium",
                    getTrendColor(metric.trend)
                  )}>
                    <TrendIcon className="h-3 w-3" />
                    {formatChange(metric.change)}
                  </div>
                </div>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className={cn(
                    "h-2 rounded-full transition-all",
                    metric.current > 15 ? "bg-error" :
                    metric.current > 10 ? "bg-warning" :
                    "bg-success"
                  )}
                  style={{ width: `${Math.min(metric.current * 2, 100)}%` }}
                />
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}