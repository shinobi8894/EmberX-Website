import { LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface FeatureCardProps {
  number?: string;
  icon: LucideIcon;
  title: string;
  description: string;
  color?: string;
}

export function FeatureCard({ number, icon: Icon, title, description, color }: FeatureCardProps) {
  return (
    <Card className="p-8 bg-card border-border hover:shadow-lg transition-all group">
      {number && (
        <div className="text-5xl font-bold text-muted-foreground/20 mb-4 group-hover:text-[#FF6900]/20 transition-colors">
          {number}
        </div>
      )}
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
        color ? `bg-gradient-to-br ${color}` : 'bg-gradient-to-br from-[#FF6900] to-[#FF8533]'
      }`}>
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </Card>
  );
}
