import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from "recharts";

const data = [
  { month: "Jan", completed: 85, pending: 12, overdue: 3 },
  { month: "Feb", completed: 92, pending: 6, overdue: 2 },
  { month: "Mar", completed: 78, pending: 18, overdue: 4 },
  { month: "Apr", completed: 88, pending: 10, overdue: 2 },
  { month: "May", completed: 95, pending: 4, overdue: 1 },
  { month: "Jun", completed: 89, pending: 8, overdue: 3 },
];

export function ComplianceChart() {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis 
            dataKey="month" 
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis 
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <Legend />
          <Bar 
            dataKey="completed" 
            stackId="a" 
            fill="hsl(var(--success))" 
            name="Completed"
            radius={[0, 0, 4, 4]}
          />
          <Bar 
            dataKey="pending" 
            stackId="a" 
            fill="hsl(var(--warning))" 
            name="Pending"
          />
          <Bar 
            dataKey="overdue" 
            stackId="a" 
            fill="hsl(var(--error))" 
            name="Overdue"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}