"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Megaphone, BarChart3, Settings, User, LogOut } from "lucide-react";

export function BrandSidebar({ brandName = "Starbucks" }: { brandName?: string }) {
  const pathname = usePathname();
  const nav = [
    { href: "/brand", label: "Dashboard", icon: LayoutDashboard },
    { href: "/brand/analytics", label: "Analytics", icon: BarChart3 },
    { href: "/brand/settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#FF6900] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">E</span>
          </div>
          <div>
            <h1 className="font-bold text-lg text-gray-900 dark:text-white">EmberX</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Brand Console</p>
          </div>
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
                    ? "bg-[#FF6900] text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1">
            <p className="font-medium text-gray-900 dark:text-white">{brandName}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Brand Manager</p>
          </div>
          <button className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600">
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
