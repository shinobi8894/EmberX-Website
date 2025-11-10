import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string | number;
  change: string;
  icon: LucideIcon;
  color: string;
}

export function StatCard({ label, value, change, icon: Icon, color }: StatCardProps) {
  return (
    <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-4">
        <div className={`w-14 h-14 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center shadow-sm flex-shrink-0`}>
          <Icon className="w-7 h-7 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm text-muted-foreground mb-1">{label}</p>
          <p className="text-2xl font-bold text-foreground truncate">{value}</p>
          <Badge variant="secondary" className="bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 border-0 mt-1">
            {change}
          </Badge>
        </div>
      </div>
    </Card>
  );
}
