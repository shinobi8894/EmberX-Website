"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Megaphone, BarChart3, Settings, User, LogOut } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function BrandSidebar({ brandName = "Starbucks" }: { brandName?: string }) {
  const pathname = usePathname();
  const nav = [
    { href: "/brand", label: "Dashboard", icon: LayoutDashboard },
    { href: "/brand/analytics", label: "Analytics", icon: BarChart3 },
    { href: "/brand/settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="w-64 bg-card border-r border-border flex flex-col">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">E</span>
          </div>
          <div className="flex-1">
            <h1 className="font-bold text-lg text-foreground">EmberX</h1>
            <p className="text-sm text-muted-foreground">Brand Console</p>
          </div>
          <ThemeToggle />
        </div>
      </div>
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {nav.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  active
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1">
            <p className="font-medium text-foreground">{brandName}</p>
            <p className="text-xs text-muted-foreground">Brand Manager</p>
          </div>
          <button className="p-1 rounded hover:bg-accent">
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
