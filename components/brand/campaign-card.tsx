import { 
  MapPin, 
  Calendar, 
  Eye, 
  Target, 
  TrendingUp, 
  DollarSign, 
  Play, 
  Pause, 
  MoreVertical 
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Campaign } from '../../constants/types';

interface CampaignCardProps {
  campaign: Campaign;
}

export function CampaignCard({ campaign }: CampaignCardProps) {
  return (
    <Card className="p-6 bg-card border-border hover:shadow-lg transition-all">
      {/* Campaign Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-start gap-4">
          <div className={`w-3 h-3 rounded-full mt-1.5 ${
            campaign.status === 'active' ? 'bg-[#FF6900]' : 'bg-gray-400'
          }`} />
          <div>
            <h4 className="text-xl font-bold text-foreground mb-2">{campaign.name}</h4>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{campaign.locations} locations</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>Ends {campaign.endDate}</span>
              </div>
              <Badge className={`${
                campaign.status === 'active' 
                  ? 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400' 
                  : 'bg-muted text-muted-foreground'
              } border-0`}>
                {campaign.status.toUpperCase()}
              </Badge>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {campaign.status === 'active' ? (
            <Button variant="outline" size="sm" className="border-border">
              <Pause className="w-4 h-4 mr-2" />
              Pause
            </Button>
          ) : (
            <Button size="sm" className="bg-[#FF6900] hover:bg-[#E55A00] text-white">
              <Play className="w-4 h-4 mr-2" />
              Resume
            </Button>
          )}
          <Button variant="ghost" size="sm">
            <MoreVertical className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Campaign Stats - Table Style */}
      <div className="border border-border rounded-lg overflow-hidden">
        <div className="grid grid-cols-5 divide-x divide-border">
          {/* Views */}
          <div className="p-6 bg-muted/50">
            <div className="flex items-center gap-2 mb-3">
              <Eye className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Views</span>
            </div>
            <p className="text-2xl font-bold text-foreground">{campaign.views.toLocaleString()}</p>
          </div>

          {/* Collected */}
          <div className="p-6 bg-muted/50">
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Collected</span>
            </div>
            <p className="text-2xl font-bold text-foreground">{campaign.collected}</p>
          </div>

          {/* Conversion */}
          <div className="p-6 bg-muted/50">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Conversion</span>
            </div>
            <p className="text-2xl font-bold text-foreground">{campaign.conversionRate}%</p>
          </div>

          {/* Spent */}
          <div className="p-6 bg-muted/50">
            <div className="flex items-center gap-2 mb-3">
              <DollarSign className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Spent</span>
            </div>
            <p className="text-2xl font-bold text-foreground">${campaign.spent.toLocaleString()}</p>
          </div>

          {/* Budget */}
          <div className="p-6 bg-muted/50">
            <div className="flex items-center gap-2 mb-3">
              <DollarSign className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Budget</span>
            </div>
            <p className="text-2xl font-bold text-foreground">${campaign.budget.toLocaleString()}</p>
            <div className="mt-3 w-full h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#FF6900] to-[#FF8533] rounded-full transition-all" 
                style={{ width: `${(campaign.spent / campaign.budget) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
