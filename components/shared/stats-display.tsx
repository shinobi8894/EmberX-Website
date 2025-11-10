interface StatsDisplayProps {
  stats: Array<{
    value: string;
    label: string;
    description?: string;
  }>;
  variant?: 'horizontal' | 'grid';
  className?: string;
}

export function StatsDisplay({ stats, variant = 'horizontal', className = '' }: StatsDisplayProps) {
  const containerClass = variant === 'grid' 
    ? `grid grid-cols-2 md:grid-cols-${stats.length > 3 ? '4' : stats.length} gap-8`
    : 'flex justify-center gap-12 flex-wrap';

  return (
    <div className={`${containerClass} ${className}`}>
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-[#FF6900] mb-2">
            {stat.value}
          </div>
          <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wider font-medium">
            {stat.label}
          </div>
          {stat.description && (
            <div className="text-xs text-muted-foreground/70 mt-1">
              {stat.description}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
