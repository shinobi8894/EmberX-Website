import { BrandSidebar } from "@/components/brand/brand-sidebar";

export default function BrandLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen bg-background flex">
      <BrandSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        {children}
      </div>
    </div>
  );
}
