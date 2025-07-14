import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, AlertTriangle } from "lucide-react";

interface TimelineEvent {
  id: string;
  title: string;
  type: "dqf" | "test" | "medical" | "training";
  date: string;
  status: "upcoming" | "due" | "overdue";
  priority: "high" | "medium" | "low";
}

const timelineData: TimelineEvent[] = [
  {
    id: "1",
    title: "Random Drug Test - Pool Selection",
    type: "test",
    date: "Jan 15, 2024",
    status: "upcoming",
    priority: "medium"
  },
  {
    id: "2",
    title: "DQF Review - Sarah Johnson",
    type: "dqf", 
    date: "Jan 18, 2024",
    status: "due",
    priority: "high"
  },
  {
    id: "3",
    title: "Medical Certificate Renewal - Mike Chen",
    type: "medical",
    date: "Jan 20, 2024", 
    status: "upcoming",
    priority: "medium"
  },
  {
    id: "4",
    title: "Safety Training Completion Deadline",
    type: "training",
    date: "Jan 22, 2024",
    status: "overdue",
    priority: "high"
  }
];

export function Timeline() {
  const getStatusColor = (status: TimelineEvent["status"]) => {
    switch (status) {
      case "upcoming": return "border-l-primary";
      case "due": return "border-l-warning";
      case "overdue": return "border-l-error";
      default: return "border-l-muted";
    }
  };

  const getStatusBadge = (status: TimelineEvent["status"]) => {
    switch (status) {
      case "upcoming":
        return <Badge variant="default">Upcoming</Badge>;
      case "due":
        return <Badge variant="warning">Due</Badge>;
      case "overdue":
        return <Badge variant="error">Overdue</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getTypeIcon = (type: TimelineEvent["type"]) => {
    switch (type) {
      case "test":
        return "🧪";
      case "dqf":
        return "📋";
      case "medical":
        return "🏥";
      case "training":
        return "🎓";
      default:
        return "📅";
    }
  };

  return (
    <div className="space-y-4">
      {timelineData.map((event) => (
        <Card key={event.id} className={`border-l-4 ${getStatusColor(event.status)}`}>
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <div className="text-lg">{getTypeIcon(event.type)}</div>
                <div className="flex-1">
                  <h4 className="font-medium mb-1">{event.title}</h4>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                    {event.priority === "high" && (
                      <AlertTriangle className="h-4 w-4 text-error ml-2" />
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {getStatusBadge(event.status)}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}