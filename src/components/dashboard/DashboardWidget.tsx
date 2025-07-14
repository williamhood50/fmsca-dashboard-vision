import { ReactNode } from "react";
import { MoreHorizontal, Info, Minimize2, Maximize2 } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface DashboardWidgetProps {
  title: string;
  children: ReactNode;
  className?: string;
  actions?: {
    label: string;
    onClick: () => void;
  }[];
  expanded?: boolean;
  onToggleExpand?: () => void;
}

export function DashboardWidget({ 
  title, 
  children, 
  className, 
  actions = [],
  expanded = false,
  onToggleExpand 
}: DashboardWidgetProps) {
  return (
    <Card className={cn("transition-all", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex items-center gap-2">
          {onToggleExpand && (
            <Button variant="ghost" size="icon" onClick={onToggleExpand}>
              {expanded ? (
                <Minimize2 className="h-4 w-4" />
              ) : (
                <Maximize2 className="h-4 w-4" />
              )}
            </Button>
          )}
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Info className="mr-2 h-4 w-4" />
                Widget Info
              </DropdownMenuItem>
              {actions.map((action, index) => (
                <DropdownMenuItem key={index} onClick={action.onClick}>
                  {action.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}