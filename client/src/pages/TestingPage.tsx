import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, TestTube, Plus, FileText } from "lucide-react";

export default function TestingPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Drug & Alcohol Testing</h1>
            <p className="text-muted-foreground">
              Manage testing schedules, results, and compliance tracking
            </p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Schedule Test
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Tests This Month</p>
                  <p className="text-3xl font-bold">24</p>
                </div>
                <TestTube className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Scheduled</p>
                  <p className="text-3xl font-bold">8</p>
                </div>
                <Calendar className="h-8 w-8 text-warning" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Results Pending</p>
                  <p className="text-3xl font-bold">3</p>
                </div>
                <FileText className="h-8 w-8 text-error" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Compliance Rate</p>
                  <p className="text-3xl font-bold">98%</p>
                </div>
                <div className="h-8 w-8 rounded-full bg-success/10 flex items-center justify-center">
                  <span className="text-success font-bold">✓</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Tests */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Test Results</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { driver: "Sarah Johnson", type: "Random", date: "Jan 12, 2024", result: "Negative", status: "Complete" },
                { driver: "Mike Chen", type: "Pre-Employment", date: "Jan 10, 2024", result: "Negative", status: "Complete" },
                { driver: "Lisa Rodriguez", type: "Post-Accident", date: "Jan 08, 2024", result: "Pending", status: "In Progress" },
                { driver: "James Wilson", type: "Random", date: "Jan 05, 2024", result: "Negative", status: "Complete" },
              ].map((test, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <TestTube className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">{test.driver}</p>
                      <p className="text-sm text-muted-foreground">{test.type} • {test.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge 
                      variant={
                        test.result === "Negative" ? "success" : 
                        test.result === "Pending" ? "warning" : 
                        "error"
                      }
                    >
                      {test.result}
                    </Badge>
                    <Badge variant="outline">{test.status}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}