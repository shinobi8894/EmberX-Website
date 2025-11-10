import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Legend } from 'recharts';
import { Card } from '@/components/ui/card';
import { Clock, MapPin, DollarSign } from 'lucide-react';
import { CollectionDataPoint, CampaignPerformance, LocationData } from '../../constants/types';

interface CollectionChartProps {
  data: CollectionDataPoint[];
}

export function CollectionChart({ data }: CollectionChartProps) {
  return (
    <Card className="p-6 bg-card border-border">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-foreground mb-1">Collections Over Time</h3>
        <p className="text-sm text-muted-foreground">Track your campaign performance</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-border" vertical={false} />
          <XAxis 
            dataKey="date" 
            className="text-muted-foreground"
            style={{ fontSize: '12px' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis 
            className="text-muted-foreground"
            style={{ fontSize: '12px' }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="collections" 
            stroke="#FF6900" 
            strokeWidth={3}
            dot={{ fill: '#FF6900', r: 4 }}
            activeDot={{ r: 6 }}
            name="Collections"
          />
          <Line 
            type="monotone" 
            dataKey="views" 
            stroke="#000000" 
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={{ fill: '#000000', r: 3 }}
            name="Views"
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}

interface PerformanceChartProps {
  data: CampaignPerformance[];
}

export function PerformanceChart({ data }: PerformanceChartProps) {
  return (
    <Card className="p-6 bg-card border-border">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-foreground mb-1">Campaign Performance</h3>
        <p className="text-sm text-muted-foreground">Compare campaign results</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-border" vertical={false} />
          <XAxis 
            dataKey="name" 
            className="text-muted-foreground"
            style={{ fontSize: '12px' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis 
            className="text-muted-foreground"
            style={{ fontSize: '12px' }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}
          />
          <Bar 
            dataKey="collections" 
            fill="#FF6900"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}

interface LocationChartProps {
  data: LocationData[];
  colors: string[];
}

export function LocationChart({ data, colors }: LocationChartProps) {
  return (
    <Card className="p-6 bg-card border-border">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-foreground mb-1">Location Distribution</h3>
        <p className="text-sm text-muted-foreground">Where your users are collecting</p>
      </div>
      <div className="flex items-center justify-between">
        <ResponsiveContainer width="50%" height={250}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="flex-1 space-y-4">
          {data.map((location, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: colors[index % colors.length] }}
                />
                <span className="text-sm font-medium text-foreground">{location.name}</span>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-foreground">{location.value}</p>
                <p className="text-xs text-muted-foreground">{location.percentage}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export function KeyInsightsCard() {
  return (
    <Card className="p-6 bg-card border-border">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-foreground mb-1">Key Insights</h3>
        <p className="text-sm text-muted-foreground">Important metrics to watch</p>
      </div>
      <div className="space-y-6">
        <div className="p-4 bg-gradient-to-br from-[#FF6900]/10 to-[#FF8533]/10 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <Clock className="w-5 h-5 text-[#FF6900]" />
            <span className="text-sm font-medium text-muted-foreground">Best Performing Time</span>
          </div>
          <p className="text-2xl font-bold text-foreground mb-1">12:00 - 15:00</p>
          <p className="text-sm text-muted-foreground">234 collections during lunch hours</p>
        </div>

        <div className="p-4 bg-muted rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <MapPin className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">Top Location</span>
          </div>
          <p className="text-2xl font-bold text-foreground mb-1">Downtown</p>
          <p className="text-sm text-muted-foreground">35% of total collections</p>
        </div>

        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <DollarSign className="w-5 h-5 text-green-600 dark:text-green-400" />
            <span className="text-sm font-medium text-muted-foreground">Avg. Cost Per Collection</span>
          </div>
          <p className="text-2xl font-bold text-foreground mb-1">$4.01</p>
          <p className="text-sm text-green-600 dark:text-green-400">12% lower than target</p>
        </div>
      </div>
    </Card>
  );
}
