import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Plus, Filter, Download } from "lucide-react";

export default function DriversPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Driver Qualification Files</h1>
            <p className="text-muted-foreground">
              Manage driver records, qualifications, and compliance documentation
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Add Driver
            </Button>
          </div>
        </div>

        {/* Filters and Search */}
        <Card>
          <CardContent className="p-6">
            <div className="flex gap-4 items-center">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search drivers..."
                    className="pl-10"
                  />
                </div>
              </div>
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Driver Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Sarah Johnson", status: "Active", dqfStatus: "Complete", nextReview: "Mar 15, 2024" },
            { name: "Mike Chen", status: "Active", dqfStatus: "Pending", nextReview: "Jan 20, 2024" },
            { name: "Lisa Rodriguez", status: "Active", dqfStatus: "Incomplete", nextReview: "Jan 25, 2024" },
            { name: "James Wilson", status: "Inactive", dqfStatus: "Complete", nextReview: "Apr 10, 2024" },
            { name: "Anna Davis", status: "Active", dqfStatus: "Pending", nextReview: "Feb 08, 2024" },
            { name: "Tom Brown", status: "Active", dqfStatus: "Complete", nextReview: "May 22, 2024" },
          ].map((driver, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{driver.name}</CardTitle>
                  <Badge variant={driver.status === "Active" ? "success" : "outline"}>
                    {driver.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">DQF Status:</span>
                  <Badge 
                    variant={
                      driver.dqfStatus === "Complete" ? "success" : 
                      driver.dqfStatus === "Pending" ? "warning" : 
                      "error"
                    }
                  >
                    {driver.dqfStatus}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Next Review:</span>
                  <span className="text-sm font-medium">{driver.nextReview}</span>
                </div>
                <div className="pt-2">
                  <Button variant="outline" size="sm" className="w-full">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}