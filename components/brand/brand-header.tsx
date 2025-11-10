"use client";
import { usePathname } from "next/navigation";
import { Bell, Search } from "lucide-react";
import { BRAND_NAV_ITEMS } from '../../constants';

export function BrandHeader() {
  const pathname = usePathname();
  const currentPage = BRAND_NAV_ITEMS.find(item => item.href === pathname);

  return (
    <div className="h-20 bg-card shadow-sm flex items-center justify-between px-8 border-b border-border">
      <div>
        <h2 className="text-2xl font-bold text-foreground">
          {currentPage?.label || "Dashboard"}
        </h2>
        <p className="text-sm text-muted-foreground">Manage your EmberX campaigns</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search..."
            className="w-80 h-11 pl-10 pr-4 bg-muted border-0 rounded-xl text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-[#FF6900] outline-none"
          />
        </div>
        <button className="relative w-11 h-11 flex items-center justify-center rounded-xl bg-muted hover:bg-accent transition-colors">
          <Bell className="w-5 h-5 text-muted-foreground" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-[#FF6900] rounded-full" />
        </button>
      </div>
    </div>
  );
}
