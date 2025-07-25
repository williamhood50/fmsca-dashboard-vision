import { 
  FileText, 
  TestTube, 
  Shield, 
  AlertTriangle, 
  TrendingUp,
  Users,
  Calendar,
  Plus
} from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { KPICard } from "@/components/dashboard/KPICard";
import { DashboardWidget } from "@/components/dashboard/DashboardWidget";
import { ComplianceTable } from "@/components/dashboard/ComplianceTable";
import { Timeline } from "@/components/dashboard/Timeline";
import { CSAScores } from "@/components/dashboard/CSAScores";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">FMCSA Compliance Dashboard</h1>
            <p className="text-muted-foreground">
              Monitor driver qualifications, testing schedules, and compliance status
            </p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Add Widget
          </Button>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard
            title="DQFs Pending"
            value={12}
            change="+2 this week"
            trend="up"
            icon={FileText}
            variant="warning"
          />
          <KPICard
            title="Tests Due This Week"
            value={8}
            change="-3 from last week"
            trend="down"
            icon={TestTube}
            variant="success"
          />
          <KPICard
            title="Compliance Rate"
            value="94.2%"
            change="+1.2%"
            trend="up"
            icon={Shield}
            variant="success"
          />
          <KPICard
            title="Critical Alerts"
            value={3}
            change="Same as yesterday"
            trend="neutral"
            icon={AlertTriangle}
            variant="error"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Outstanding Items & Driver Stats */}
          <div className="lg:col-span-2 space-y-6">
            <DashboardWidget title="Outstanding Items">
              <ComplianceTable />
            </DashboardWidget>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Driver Statistics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Total Drivers</span>
                  <span className="font-semibold">145</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Active Drivers</span>
                  <span className="font-semibold">138</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">New This Month</span>
                  <span className="font-semibold">7</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Requiring Action</span>
                  <span className="font-semibold text-warning">12</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Timeline & CSA Scores */}
          <div className="space-y-6">
            <DashboardWidget title="Upcoming Events">
              <Timeline />
            </DashboardWidget>

            <CSAScores />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
