import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface KPICardProps {
  title: string;
  value: string | number;
  change?: string;
  trend?: "up" | "down" | "neutral";
  icon: LucideIcon;
  variant?: "default" | "warning" | "error" | "success";
  className?: string;
}

export function KPICard({ 
  title, 
  value, 
  change, 
  trend = "neutral", 
  icon: Icon, 
  variant = "default",
  className 
}: KPICardProps) {
  const getTrendColor = () => {
    switch (trend) {
      case "up": return "text-success";
      case "down": return "text-error";
      default: return "text-muted-foreground";
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "warning": return "border-warning/20 bg-warning/5";
      case "error": return "border-error/20 bg-error/5";
      case "success": return "border-success/20 bg-success/5";
      default: return "";
    }
  };

  return (
    <Card className={cn("transition-all hover:shadow-md", getVariantStyles(), className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-bold">{value}</span>
              {change && (
                <span className={cn("text-sm font-medium", getTrendColor())}>
                  {change}
                </span>
              )}
            </div>
          </div>
          <div className={cn(
            "h-12 w-12 rounded-lg flex items-center justify-center",
            variant === "warning" ? "bg-warning/10 text-warning" :
            variant === "error" ? "bg-error/10 text-error" :
            variant === "success" ? "bg-success/10 text-success" :
            "bg-primary/10 text-primary"
          )}>
            <Icon className="h-6 w-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}