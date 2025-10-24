"use client";
import { useState } from "react";
import { 
  BarChart3,
  TrendingUp,
  Users,
  MapPin,
  Calendar,
  DollarSign,
  Target,
  Clock
} from "lucide-react";
import { ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Area, BarChart, Bar, PieChart, Pie, Cell } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface BrandAnalyticsProps {
  brandName: string;
}

function BrandAnalytics({ brandName }: BrandAnalyticsProps) {
  const [timeRange, setTimeRange] = useState("7d");

  const collectionData = [
    { date: "2024-11-01", collections: 45, cost: 450 },
    { date: "2024-11-02", collections: 67, cost: 670 },
    { date: "2024-11-03", collections: 89, cost: 890 },
    { date: "2024-11-04", collections: 52, cost: 520 },
    { date: "2024-11-05", collections: 78, cost: 780 },
    { date: "2024-11-06", collections: 95, cost: 950 },
    { date: "2024-11-07", collections: 123, cost: 1230 },
  ];

  const campaignPerformance = [
    { name: "Holiday Rewards", collections: 847, spent: 3200, efficiency: 3.77 },
    { name: "New Customer Bonus", collections: 423, spent: 1800, efficiency: 4.26 },
    { name: "Weekend Special", collections: 89, spent: 450, efficiency: 5.06 },
  ];

  const locationData = [
    { name: "Downtown Store", collections: 234, percentage: 35 },
    { name: "Mall Location", collections: 187, percentage: 28 },
    { name: "Airport Branch", collections: 145, percentage: 22 },
    { name: "Suburban Store", collections: 98, percentage: 15 },
  ];

  const timeDistribution = [
    { hour: "6-9", collections: 45 },
    { hour: "9-12", collections: 123 },
    { hour: "12-15", collections: 234 },
    { hour: "15-18", collections: 187 },
    { hour: "18-21", collections: 156 },
    { hour: "21-24", collections: 67 },
  ];

  const COLORS = ["#FF6900", "#FFA500", "#FFB84D", "#FFC266", "#FFD699"];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Analytics Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Detailed insights into your {brandName} campaigns</p>
        </div>
        <div className="flex items-center gap-4">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 3 months</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">Export Data</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Collections</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,359</div>
            <p className="text-xs text-muted-foreground"><span className="text-green-600">+12.5%</span> from last period</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Cost per Collection</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$4.12</div>
            <p className="text-xs text-muted-foreground"><span className="text-red-600">+5.2%</span> from last period</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Locations</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">25</div>
            <p className="text-xs text-muted-foreground">Across all campaigns</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">67.8%</div>
            <p className="text-xs text-muted-foreground"><span className="text-green-600">+3.1%</span> from last period</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><TrendingUp className="w-5 h-5" /> Collections Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={collectionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" tickFormatter={(v) => new Date(v).toLocaleDateString("en-US", { month: "short", day: "numeric" })} />
                <YAxis />
                <Tooltip labelFormatter={(v) => new Date(v).toLocaleDateString()} formatter={(val, name) => [val as any, name === "collections" ? "Collections" : "Cost ($)"]} />
                <Area type="monotone" dataKey="collections" stroke="#FF6900" fill="#FF6900" fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><BarChart3 className="w-5 h-5" /> Campaign Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={campaignPerformance}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tickFormatter={(v) => (v as string).split(" ")[0]} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="collections" fill="#FF6900" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><MapPin className="w-5 h-5" /> Top Performing Locations</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={locationData} cx="50%" cy="50%" labelLine={false} label={({ name, percentage }) => `${name} (${percentage}%)`} outerRadius={80} dataKey="collections">
                  {locationData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Clock className="w-5 h-5" /> Collection Times</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={timeDistribution}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="hour" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="collections" fill="#FF6900" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Campaign Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Campaign</th>
                  <th className="text-left p-2">Collections</th>
                  <th className="text-left p-2">Spent</th>
                  <th className="text-left p-2">Cost per Collection</th>
                  <th className="text-left p-2">Efficiency</th>
                </tr>
              </thead>
              <tbody>
                {campaignPerformance.map((c, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2 font-medium">{c.name}</td>
                    <td className="p-2">{c.collections}</td>
                    <td className="p-2">${c.spent.toLocaleString()}</td>
                    <td className="p-2">${c.efficiency.toFixed(2)}</td>
                    <td className="p-2">
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div className="bg-[#FF6900] h-2 rounded-full" style={{ width: `${Math.min(100, (c.collections / 1000) * 100)}%` }} />
                        </div>
                        <span className="text-sm text-gray-600">{Math.round((c.collections / 1000) * 100)}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function AnalyticsPage() {
  return (
    <div className="flex-1 overflow-auto">
      <BrandAnalytics brandName="Starbucks" />
    </div>
  );
}
