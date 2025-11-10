"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, LogOut, ChevronDown } from 'lucide-react';
import { BRAND_NAV_ITEMS, SIDEBAR_STATS, BRAND_NAME } from '../../constants';

interface BrandSidebarProps {
  brandName?: string;
}

export function BrandSidebar({ brandName = BRAND_NAME }: BrandSidebarProps) {
  const pathname = usePathname();

  return (
    <div className="w-72 bg-card shadow-sm flex flex-col border-r border-border">
      {/* Logo Header */}
      <div className="h-20 flex items-center px-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[#FF6900] to-[#FF8533] rounded-lg flex items-center justify-center shadow-sm">
            <span className="text-white font-bold text-lg">E</span>
          </div>
          <div>
            <h1 className="font-bold text-lg text-foreground">EmberX</h1>
            <p className="text-xs text-muted-foreground">Brand Console</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4">
        <div className="space-y-1">
          {BRAND_NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive 
                    ? 'bg-[#FF6900] text-white shadow-lg shadow-[#FF6900]/25' 
                    : 'text-foreground hover:bg-accent'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Quick Stats */}
      <div className="px-4 pb-4">
        <div className="p-4 bg-muted rounded-xl">
          <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
            This Month
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Active Campaigns</span>
              <span className="text-lg font-bold text-foreground">{SIDEBAR_STATS.activeCampaigns}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Total Spend</span>
              <span className="text-lg font-bold text-[#FF6900]">${SIDEBAR_STATS.totalSpend.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Collections</span>
              <span className="text-lg font-bold text-foreground">{SIDEBAR_STATS.collections.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* User Section */}
      <div className="border-t border-border">
        <button className="w-full flex items-center gap-3 px-6 py-4 bg-card hover:bg-accent transition-colors">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1 min-w-0 text-left">
            <p className="font-medium text-foreground truncate">{brandName}</p>
            <p className="text-xs text-muted-foreground">Manager</p>
          </div>
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </button>
        <Link 
          href="/"
          className="w-full flex items-center gap-3 px-6 py-4 bg-card hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors text-red-600 dark:text-red-400 border-t border-border"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </Link>
      </div>
    </div>
  );
}
