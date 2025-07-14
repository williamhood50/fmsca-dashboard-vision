import { Search, Bell, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export function DashboardHeader() {
  return (
    <header className="bg-card border-b border-border px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search drivers, files, or records..."
              className="pl-10"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <Badge 
              variant="error" 
              className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs"
            >
              3
            </Badge>
          </Button>
          
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>

          <div className="flex items-center gap-3 pl-4 border-l border-border">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-primary-foreground">JD</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-muted-foreground">Safety Manager</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}