import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, FileEdit, AlertTriangle } from "lucide-react";

interface ComplianceRecord {
  id: string;
  driverName: string;
  type: "DQF" | "Drug Test" | "MVR" | "Medical";
  status: "pending" | "complete" | "overdue" | "expiring";
  dueDate: string;
  priority: "high" | "medium" | "low";
}

const mockData: ComplianceRecord[] = [
  {
    id: "1",
    driverName: "Sarah Johnson",
    type: "DQF",
    status: "overdue",
    dueDate: "2024-01-10",
    priority: "high"
  },
  {
    id: "2", 
    driverName: "Mike Chen",
    type: "Drug Test",
    status: "pending",
    dueDate: "2024-01-20",
    priority: "medium"
  },
  {
    id: "3",
    driverName: "Lisa Rodriguez",
    type: "Medical",
    status: "expiring",
    dueDate: "2024-01-25",
    priority: "high"
  },
  {
    id: "4",
    driverName: "James Wilson", 
    type: "MVR",
    status: "complete",
    dueDate: "2024-01-15",
    priority: "low"
  }
];

export function ComplianceTable() {
  const getStatusBadge = (status: ComplianceRecord["status"]) => {
    switch (status) {
      case "complete":
        return <Badge variant="success">Complete</Badge>;
      case "pending":
        return <Badge variant="warning">Pending</Badge>;
      case "overdue":
        return <Badge variant="error">Overdue</Badge>;
      case "expiring":
        return <Badge variant="warning">Expiring</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getPriorityIcon = (priority: ComplianceRecord["priority"]) => {
    if (priority === "high") {
      return <AlertTriangle className="h-4 w-4 text-error" />;
    }
    return null;
  };

  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-border">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left text-sm font-medium">Driver</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Type</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Status</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Due Date</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Priority</th>
                <th className="px-4 py-3 text-right text-sm font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockData.map((record, index) => (
                <tr 
                  key={record.id}
                  className={`border-b border-border last:border-0 hover:bg-muted/25 ${
                    index % 2 === 0 ? "bg-background" : "bg-muted/10"
                  }`}
                >
                  <td className="px-4 py-3">
                    <div className="font-medium">{record.driverName}</div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm">{record.type}</span>
                  </td>
                  <td className="px-4 py-3">
                    {getStatusBadge(record.status)}
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm">{record.dueDate}</span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      {getPriorityIcon(record.priority)}
                      <span className="text-sm capitalize">{record.priority}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <FileEdit className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}